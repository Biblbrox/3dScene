#include <imgui_impl_sdl.h>

#include "base.hpp"
#include "systems/keyboardsystem.hpp"
#include "game.hpp"
#include "sceneprogram.hpp"
#include "view/fpscamera.hpp"
#include "components/bvhcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/positioncomponent.hpp"
#include "components/terraincomponent.hpp"
#include "components/movablecomponent.hpp"
#include "utils/collision.hpp"
#include "utils/logger.hpp"
#include "utils/bvh/aabb.hpp"
#include "utils/bvh/obb.hpp"
#include "render/render.hpp"
#include "config.hpp"

using glm::mat4;
using glm::mat3;
using glm::vec4;
using glm::vec3;
using utils::log::Logger;
using math::viewportToWorld;
using utils::data::mapBinaryTree;

void KeyboardSystem::update_state(size_t delta)
{
    GLfloat x_offset = 0.f;
    GLfloat y_offset = 0.f;
    SDL_Event e;

    auto camera = FpsCamera::getInstance();
    auto program = SceneProgram::getInstance();
    bool stopped = getGameState() == GameStates::STOP;
    program->useFramebufferProgram();
    while (SDL_PollEvent(&e)) {
        ImGui_ImplSDL2_ProcessEvent(&e);
        switch (e.type) {
            case SDL_QUIT:
                setGameRunnable(false);
                break;
            case SDL_MOUSEMOTION:
                if (!stopped && m_middlePressed) {
                    x_offset = e.motion.xrel;
                    y_offset = e.motion.yrel;

                    camera->processMouseMovement(x_offset, -y_offset);
                }

                if (m_dragEnabled)
                    updateDraggedPos();
                break;
            case SDL_MOUSEBUTTONDOWN:
                if (e.button.button == SDL_BUTTON_MIDDLE && !stopped)
                    m_middlePressed = true;

                if (e.button.button == SDL_BUTTON_LEFT && !stopped) {
                    m_leftMousePressed = true;
                    if (getGameState() == GameStates::EDIT && !m_dragEnabled)
                        processMouseDrag();
                }

                if (e.button.button == SDL_BUTTON_RIGHT && !stopped)
                    processMouseSelect();

                break;
            case SDL_MOUSEBUTTONUP:
                if (e.button.button == SDL_BUTTON_MIDDLE && !stopped)
                    m_middlePressed = false;

                if (e.button.button == SDL_BUTTON_LEFT && !stopped)
                    m_leftMousePressed = false;

                if (e.button.button == SDL_BUTTON_LEFT && !stopped && m_draggedObj)
                    updateDraggedBVH();
                break;
            case SDL_MOUSEWHEEL:
                if (!stopped) {
                    GLfloat fr = 10.f;
                    camera->setMovSpeed(camera->getMovSpeed() + e.wheel.y / fr);
                    camera->processMouseScroll(e.wheel.y / fr);
                    program->setMat4(U_VIEW_MATRIX, camera->getView());
                }
                break;
            default:
                break;
        }
    }

    if (stopped)
        return;

    const Uint8 *state = SDL_GetKeyboardState(NULL);

    if (state[SDL_SCANCODE_W])
        camera->processKeyboard(Movement::FORWARD, delta);
    if (state[SDL_SCANCODE_S])
        camera->processKeyboard(Movement::BACKWARD, delta);
    if (state[SDL_SCANCODE_A])
        camera->processKeyboard(Movement::LEFT, delta);
    if (state[SDL_SCANCODE_D])
        camera->processKeyboard(Movement::RIGHT, delta);

    auto movEntities = getEntitiesByTag<MovableComponent>();
    std::shared_ptr<ecs::Entity> movEn;
    std::shared_ptr<MovableComponent> movComp = nullptr;
    if (!movEntities.empty()) {
        movEn = movEntities.begin()->second;
        movComp = movEn->getComponent<MovableComponent>();
    }

    if (movComp && movComp->controlled) {
        auto pos = movEn->getComponent<PositionComponent>();
        GLfloat speed = movComp->speed;
        bool need_update_bvh = false;
        if (state[SDL_SCANCODE_UP]) {
            pos->pos.z += speed;
            need_update_bvh = true;
        }
        if (state[SDL_SCANCODE_DOWN]) {
            pos->pos.z -= speed;
            need_update_bvh = true;
        }
        if (state[SDL_SCANCODE_LEFT]) {
            pos->pos.x += speed;
            need_update_bvh = true;
        }
        if (state[SDL_SCANCODE_RIGHT]) {
            pos->pos.x -= speed;
            need_update_bvh = true;
        }

        if (need_update_bvh)
            updateControlledBVH();

        auto terrain_en = getEntitiesByTag<TerrainComponent>().begin()->second;
        auto terrain = terrain_en->getComponent<TerrainComponent>()->terrain;

        pos->pos.y = terrain->getAltitude({pos->pos.x, pos->pos.z});
    }

    program->setMat4(U_VIEW_MATRIX, camera->getView());
}

void KeyboardSystem::processMouseDrag()
{
    vec2 mouse_pos = utils::getMousePos<GLfloat>();
    auto obj = findUnderPointer(mouse_pos);

    if (obj.first) {
        m_dragEnabled = true;
        m_draggedObj = obj.second;
        m_dragStartPos = m_draggedObj->getComponent<PositionComponent>()->pos;
        m_draggedObj->getComponent<SelectableComponent>()->dragged = true;
    }
}

void KeyboardSystem::processMouseSelect()
{
    vec2 mouse_pos = utils::getMousePos<GLfloat>();
    auto obj = findUnderPointer(mouse_pos);

    if (obj.first) {
        Config::getVal<bool>("IsSelected") = true;
        Config::getVal<int>("SelectedObj") = obj.second->getId();
        m_isSelected = true;
    } else {
        if (m_isSelected) {
            Config::getVal<bool>("IsSelected") = false;
            m_isSelected = false;
        }
    }
}

KeyboardSystem::KeyboardSystem() : m_middlePressed(false), m_dragEnabled(false),
                                   m_draggedObj(nullptr), m_isSelected(false)
{

}

std::pair<bool, std::shared_ptr<ecs::Entity>>
KeyboardSystem::findUnderPointer(const vec2 &pos)
{
    const auto &entities
            = getEntitiesByTags<SpriteComponent, BVHComponent, PositionComponent,
                    SelectableComponent>();

    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();
    mat4 projection = program->getMat4(U_PROJECTION_MATRIX);
    mat4 view = program->getMat4(U_VIEW_MATRIX);

    auto camera = FpsCamera::getInstance();
    vec3 origin = camera->getPos();

    vec2 viewport_pos = Config::getVal<vec2>("ViewportPos");
    vec2 viewport_size = Config::getVal<vec2>("ViewportSize");
    vec2 pointer_pos = pos - viewport_pos;

    glm::vec3 ray_world = viewportToWorld(pointer_pos, viewport_size,
                                          projection, view);

    for (const auto&[key, en]: entities) {
        const auto& bvh_comp = en->getComponent<BVHComponent>();
        if (!bvh_comp)
            continue;

        Ray ray;
        ray.origin = Vector3(origin.x, origin.y, origin.z);
        ray.direction = Vector3(ray_world.x, ray_world.y, ray_world.z);
        ray.tmin = 0;
        ray.tmax = 100000;

        auto triangles = bvh_comp->triangles;
        auto bvh = bvh_comp->bvh_tree;
        bvh::ClosestPrimitiveIntersector<Bvh, Triangle> primitive_intersector(
                *bvh, triangles->data());
        bvh::SingleRayTraverser<Bvh> traverser(*bvh);

        auto hit = traverser.traverse(ray, primitive_intersector);
        if (hit)
            return {true, en};
    }

    return {false, nullptr};
}

void KeyboardSystem::updateDraggedPos()
{
    auto program = SceneProgram::getInstance();
    auto camera = FpsCamera::getInstance();

    auto pos = m_draggedObj->getComponent<PositionComponent>();
    vec2 mouse_pos = utils::getMousePos<GLfloat>();
    vec2 viewport_size = Config::getVal<vec2>("ViewportSize");
    vec2 viewport_pos = Config::getVal<vec2>("ViewportPos");
    mouse_pos -= viewport_pos;

    program->useFramebufferProgram();
    mat4 projection = program->getMat4(U_PROJECTION_MATRIX);
    mat4 view = program->getMat4(U_VIEW_MATRIX);
    GLfloat sens = Config::getVal<GLfloat>("MouseSens");

    vec3 dir = viewportToWorld(mouse_pos * sens, viewport_size,
                               projection, view);
    Ray ray;
    ray.origin = Vector3(camera->getPos().x, camera->getPos().y,
                         camera->getPos().z);
    ray.direction = Vector3(dir.x, dir.y, dir.z);
    ray.tmin = 0;
    ray.tmax = 100000;
    auto terrain_en = getEntitiesByTag<TerrainComponent>().begin()->second;
    auto terrain = terrain_en->getComponent<TerrainComponent>()->terrain;
    auto[col, pos_on_ter] = coll::rayTerrainIntersection(
            *terrain, ray, 0, 10000.f, 1000);

    pos->pos = pos_on_ter;
}

void KeyboardSystem::updateDraggedBVH()
{
    m_draggedObj->getComponent<SelectableComponent>()->dragged = false;
    m_dragEnabled = false;

    coll::updateBVH(m_draggedObj);

    m_draggedObj = nullptr;
}

void KeyboardSystem::updateControlledBVH()
{
    auto movEntities = getEntitiesByTag<MovableComponent>();
    std::shared_ptr<ecs::Entity> movEn;
    if (!movEntities.empty()) {
        movEn = movEntities.begin()->second;
        coll::updateBVH(movEn);
    }
}
