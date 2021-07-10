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
#include "utils/collision.hpp"
#include "utils/logger.hpp"
#include "render/render.hpp"
#include "config.hpp"

using glm::mat4;
using glm::mat3;
using glm::vec4;
using glm::vec3;
using utils::log::Logger;
using utils::math::viewportToWorld;
using coll::BVHAABBTraversal;
using coll::AABBtoWorldSpace;
using utils::data::mapBinaryTree;

void KeyboardSystem::update_state(size_t delta)
{
    int screen_width = utils::getWindowWidth<int>(*Game::getWindow());
    int screen_height = utils::getWindowHeight<int>(*Game::getWindow());

    GLfloat x_offset = 0.f;
    GLfloat y_offset = 0.f;
    SDL_Event e;

    auto camera = FpsCamera::getInstance();
    auto program = SceneProgram::getInstance();
    bool stopped = getGameState() == GameStates::STOP;
    while (SDL_PollEvent(&e)) {
        program->useFramebufferProgram();
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

                if (m_dragEnabled) {
                    auto pos = m_draggedObj->getComponent<PositionComponent>();
                    vec2 mouse_pos = utils::getMousePos<GLfloat>();
                    vec2 viewport_size = Config::getVal<vec2>("ViewportSize");
                    vec2 viewport_pos = Config::getVal<vec2>("ViewportPos");
                    mouse_pos -= viewport_pos;

                    auto program = SceneProgram::getInstance();
                    program->useFramebufferProgram();
                    mat4 projection = program->getMat4("ProjectionMatrix");
                    mat4 view = program->getMat4("ViewMatrix");
                    GLfloat sens = Config::getVal<GLfloat>("MouseSens");

                    vec3 dir = viewportToWorld(mouse_pos * sens, viewport_size,
                                               projection, view);
                    Ray ray = {dir, camera->getPos()};
                    auto terrain_en = getEntitiesByTag<TerrainComponent>().begin()->second;
                    auto terrain = terrain_en->getComponent<TerrainComponent>()->terrain;
                    auto [col, pos_on_ter] = coll::rayTerrainIntersection(*terrain, ray, 0, 10000.f, 1000);

                    pos->pos = pos_on_ter;
                }
                break;
            case SDL_MOUSEBUTTONDOWN:
                if (e.button.button == SDL_BUTTON_MIDDLE && !stopped)
                    m_middlePressed = true;

                if (e.button.button == SDL_BUTTON_LEFT && !stopped) {
                    m_leftMousePressed = true;
                    if (getGameState() == GameStates::EDIT && !m_dragEnabled)
                        processMouseDrag();
                }

                break;
            case SDL_MOUSEBUTTONUP:
                if (e.button.button == SDL_BUTTON_MIDDLE && !stopped)
                    m_middlePressed = false;

                if (e.button.button == SDL_BUTTON_LEFT && !stopped)
                    m_leftMousePressed = false;

                if (e.button.button == SDL_BUTTON_LEFT && !stopped && m_draggedObj) {
                    m_draggedObj->getComponent<SelectableComponent>()->dragged = false;
                    m_dragEnabled = false;
                    auto bvh = m_draggedObj->getComponent<BVHComponent>();
                    if (bvh) { // Update aabb positions in world space
                        auto pos = m_draggedObj->getComponent<PositionComponent>();
                        auto sprite = m_draggedObj->getComponent<SpriteComponent>()->sprite;
                        mapBinaryTree(bvh->vbh_tree, [pos, sprite, this](auto rect)
                        {
                            *rect = coll::AABBTransform(*rect, pos->rot_axis,
                                                        0.f,
                                                        pos->pos - m_dragStartPos, *sprite);
                        });
                    }
                    m_draggedObj = nullptr;
                }
                break;
            case SDL_MOUSEWHEEL:
                if (!stopped) {
                    camera->processMouseScroll(e.wheel.y / 10.f);
                    program->setMat4(VIEW, camera->getView());
                }
                break;
            case SDL_WINDOWEVENT:
                if (e.window.event == SDL_WINDOWEVENT_RESIZED) {
                    glViewport(0.f, 0.f, screen_width, screen_height);
                }
                break;
            case SDL_KEYDOWN:
                if (!stopped) {
                    switch (e.key.keysym.sym)
                    {
                        case SDLK_w:
                            camera->processKeyboard(FORWARD, delta);
                            break;
                        case SDLK_s:
                            camera->processKeyboard(BACKWARD, delta);
                            break;
                        case SDLK_a:
                            camera->processKeyboard(LEFT, delta);
                            break;
                        case SDLK_d:
                            camera->processKeyboard(RIGHT, delta);
                            break;
                    }
                }
                break;
            default:
                break;
        }

        if (!stopped) {
            program->setMat4(VIEW, camera->getView());
        }
    }
}

void KeyboardSystem::processMouseDrag()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();
    mat4 projection = program->getMat4("ProjectionMatrix");
    mat4 view = program->getMat4("ViewMatrix");

    vec2 mouse_pos = utils::getMousePos<GLfloat>();
    vec2 viewport_pos = Config::getVal<vec2>("ViewportPos");
    vec2 viewport_size = Config::getVal<vec2>("ViewportSize");
    mouse_pos -= viewport_pos;

    glm::vec3 ray_world = viewportToWorld(mouse_pos, viewport_size, projection, view);

    auto camera = FpsCamera::getInstance();
    vec3 origin = camera->getPos();

    const auto& entities
            = getEntitiesByTags<SpriteComponent, BVHComponent, PositionComponent,
                    SelectableComponent>();
    for (const auto&[key, en]: entities) {
        auto bvh_comp = en->getComponent<BVHComponent>();
        auto sprite_comp = en->getComponent<SpriteComponent>();

        auto coll = BVHAABBTraversal(bvh_comp->vbh_tree, {ray_world, origin});

        if (coll.first) {
            m_dragEnabled = true;
            m_draggedObj = en;
            m_dragStartPos = en->getComponent<PositionComponent>()->pos;
            m_draggedObj->getComponent<SelectableComponent>()->dragged = true;
            Logger::info("collision occurred, pos: %1$.3f, %2$.3f, %3$.3f",
                         coll.second.x, coll.second.y, coll.second.z);
            break;
        }
    }
}

KeyboardSystem::KeyboardSystem() : m_middlePressed(false), m_dragEnabled(false),
                                   m_draggedObj(nullptr)
{

}
