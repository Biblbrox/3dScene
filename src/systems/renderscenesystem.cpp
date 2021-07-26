#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtx/rotate_vector.hpp>

#include "systems/renderscenesystem.hpp"
#include "components/spritecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/materialcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "components/lightcomponent.hpp"
#include "utils/bvh/aabb.hpp"
#include "render/render.hpp"
#include "utils/logger.hpp"
#include "exceptions/glexception.hpp"
#include "sceneprogram.hpp"
#include "game.hpp"
#include "config.hpp"
#include "utils/math.hpp"
#include "view/fpscamera.hpp"
#include "utils/collision.hpp"
#include "utils/texture.hpp"

using utils::log::Logger;
using boost::format;
using utils::log::program_log_file_name;
using utils::log::Category;
using glm::mat4;
using glm::vec3;
using glm::scale;
using math::operator/;
using utils::texture::genRbo;
using utils::texture::genTexture;


RenderSceneSystem::RenderSceneSystem()
{

}

RenderSceneSystem::~RenderSceneSystem()
{
}

void RenderSceneSystem::drawSprites()
{
    using utils::data::mapBinaryTreeLeafs;
    using utils::data::mapBinaryTreeAtLevel;
    using utils::data::mapBinaryTree;

    auto program = SceneProgram::getInstance();
    auto camera = FpsCamera::getInstance();

    program->useFramebufferProgram();
    program->setInt("isPrimitive", false);
    program->setFloat("alpha", 1.f);

    bool lighting = Config::getVal<bool>("EnableLight");

    if (lighting) {
        auto terrain = getEntitiesByTag<TerrainComponent>().begin()
                ->second->getComponent<TerrainComponent>()->terrain;
        GLfloat ter_half = terrain->getWorldWidth() / 2.f;

        program->setVec3("viewPos", camera->getPos());
        if (!getEntitiesByTag<LightComponent>().empty()) {
            auto lightEn = getEntitiesByTag<LightComponent>().begin()->second;
            auto light = lightEn->getComponent<LightComponent>();
            light->pos = Config::getVal<vec3>("LightPos");
            program->setInt("lighting", true);
            program->setVec3("light.direction", {-0.2f, -1.f, 0.3f});
            program->setVec3("light.ambient", light->ambient);
            program->setVec3("light.diffuse", light->diffuse);
            program->setVec3("light.specular", light->specular);

            auto lightSprite = lightEn->getComponent<SpriteComponent>();
            if (lightSprite) {
                auto sprite = lightSprite->sprite;
                program->setInt("isPrimitive", true);
                program->setFloat("alpha", 1.f);
                program->setVec3("primColor", {1.f, 1.f, 1.f});
                render::drawTexture(*program, *sprite, light->pos, 0, {0.f, 1.f, 0.f});
            }
        }
    } else {
        program->setInt("lighting", false);
    }

    if (!Config::getVal<bool>("DrawVertices"))
        return;

    const auto &sprites = getEntitiesByTags<PositionComponent, SpriteComponent>();
    for (const auto&[key, en]: sprites) {
        auto posComp = en->getComponent<PositionComponent>();
        auto sprite = en->getComponent<SpriteComponent>()->sprite;

        if (lighting) {
            auto material = en->getComponent<MaterialComponent>();
            if (material) {
//                program->setVec3("material.ambient", material->ambient);
//                program->setVec3("material.diffuse", material->diffuse);
//                program->setVec3("material.specular", material->specular);
                program->setFloat("material.shininess", material->shininess);
            } else {
//                program->setVec3("material.ambient", vec3(1.f, 0.5, 0.31f));
//                program->setVec3("material.diffuse", vec3(1.f, 0.5f, 0.31f));
//                program->setVec3("material.specular", vec3(0.5f, 0.5f, 0.5f));
                program->setFloat("material.shininess", 32.f);
            }
        }

        auto selComp = en->getComponent<SelectableComponent>();
        if (getGameState() == GameStates::EDIT && selComp && selComp->dragged) {
            glStencilFunc(GL_ALWAYS, 1, 0xFF); // all fragments should pass the stencil test
            glStencilMask(0xFF); // enable writing to the stencil buffer

            render::drawTexture(*program, *sprite, posComp->pos,
                                posComp->angle, posComp->rot_axis);

            glStencilFunc(GL_NOTEQUAL, 1, 0xFF);
            glStencilMask(0x00); // disable writing to the stencil buffer
            glDisable(GL_DEPTH_TEST);

            program->setInt("isPrimitive", true);
            program->setVec3("primColor", {0.f, 0.f, 1.f});
            program->setFloat("alpha", 0.55f);

            render::drawTexture(*program, *sprite, posComp->pos, posComp->angle,
                                posComp->rot_axis, 1.1f);

            glStencilMask(0xFF);
            glStencilFunc(GL_ALWAYS, 1, 0xFF);
            glEnable(GL_DEPTH_TEST);
        } else {
            program->setInt("isPrimitive", false);

            render::drawTexture(*program,
                                *en->getComponent<SpriteComponent>()->sprite,
                                posComp->pos,
                                posComp->angle,
                                posComp->rot_axis);
        }
    }

    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("\n\tRender while drawing sprites: %1%\n")
                           % glewGetErrorString(error)).str(),
                          program_log_file_name(), Category::INTERNAL_ERROR);
}

void RenderSceneSystem::drawBoundingBoxes()
{
//    using NodeDataPtr = std::shared_ptr<utils::RectPoints3D>;
//    auto program = SceneProgram::getInstance();
//    const auto &sprites = getEntitiesByTag<SpriteComponent>();
//
//    program->setInt("isPrimitive", true);
//    program->setFloat("alpha", 0.6f);
//    program->setVec3("primColor", {0.8f, 0.1f, 0.1f});
//
//    for (const auto&[key, en]: sprites) {
//        auto treeComp = en->getComponent<BVHComponent>();
//        auto lightComp = en->getComponent<LightComponent>();
//        if (lightComp) // Do not draw bb for light source
//            continue;
//
//        if (!treeComp)
//            continue;
//
//        auto posComp = en->getComponent<PositionComponent>();
//        auto sprite = en->getComponent<SpriteComponent>()->sprite;
//        auto points = buildAABB(sprite->getVertices()[0]);
//        auto tree = en->getComponent<BVHComponent>()->vbh_tree;
//
//        auto draw_fun = [program, sprite, posComp](NodeDataPtr bound_rect) {
//            auto vert_vec = coll::buildVerticesFromRect3D(*bound_rect);
//            render::drawTriangles(vert_vec);
//        };
//
//        if (Config::getVal<bool>("DrawLeafs")) {
//            mapBinaryTreeLeafs(treeComp->vbh_tree, draw_fun);
//        } else {
//            mapBinaryTreeAtLevel(treeComp->vbh_tree, draw_fun,
//                                 Config::getVal<int>("TreeLevelShow"));
//        }
//    }
//
//    if (GLenum error = glGetError(); error != GL_NO_ERROR)
//        throw GLException(
//                (format("\n\tRender while drawing bounding boxes: %1%\n")
//                 % glewGetErrorString(error)).str(),
//                program_log_file_name(), Category::INTERNAL_ERROR);
}

void RenderSceneSystem::update_state(size_t delta)
{
    auto game_state = getGameState();
    if (game_state == GameStates::PLAY || game_state == GameStates::EDIT)
        drawToFramebuffer();
}

void RenderSceneSystem::drawToFramebuffer()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();

    auto sceneEnt = getEntitiesByTag<SceneComponent>().begin()->second;
    auto sceneComp = sceneEnt->getComponent<SceneComponent>();

    // Render to texture
    if (sceneComp->isMsaa)
        glBindFramebuffer(GL_FRAMEBUFFER, sceneComp->sceneBufferMSAA);
    else
        glBindFramebuffer(GL_FRAMEBUFFER, sceneComp->sceneBuffer);

    glm::vec4 color = Config::getVal<glm::vec4>("BackgroundColor");
    glEnable(GL_DEPTH_TEST);
    glStencilFunc(GL_ALWAYS, 1, 0xFF); // all fragments should pass the stencil test
    glClearColor(color.x, color.y, color.z, color.w);
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT | GL_STENCIL_BUFFER_BIT);

    glStencilMask(0x00);
    drawTerrain();

    drawSprites();
    if (Config::getVal<bool>("DrawBoundingBoxes"))
        drawBoundingBoxes();
}

void RenderSceneSystem::drawTerrain()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();
    program->setInt("isPrimitive", false);

    auto terrain_en = getEntitiesByTag<TerrainComponent>().begin()->second;
    auto terrain = terrain_en->getComponent<TerrainComponent>()->terrain;

    render::renderTerrain(*program, *terrain);
}


