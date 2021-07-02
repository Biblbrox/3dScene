#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <imgui.h>

#include "systems/renderscenesystem.hpp"
#include "components/spritecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/terraincomponent.hpp"
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
using utils::math::operator/;
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
    program->updateInt("isPrimitive");
    program->setFloat("alpha", 1.f);
    program->updateFloat("alpha");
    const auto &sprites = getEntitiesByTag<SpriteComponent>();

    for (const auto&[key, en]: sprites) {
        auto posComp = en->getComponent<PositionComponent>();
        render::drawTexture(*program,
                            *en->getComponent<SpriteComponent>()->sprite,
                            posComp->pos,
                            posComp->angle,
                            posComp->rot_axis);
    }

    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("\n\tRender while drawing sprites: %1%\n")
                           % glewGetErrorString(error)).str(),
                          program_log_file_name(), Category::INTERNAL_ERROR);
}

void RenderSceneSystem::drawBoundingBoxes()
{
    using NodeDataPtr = std::shared_ptr<utils::RectPoints3D>;
    auto program = SceneProgram::getInstance();
    const auto &sprites = m_ecsManager->getEntities();
//    const auto &sprites = getEntitiesByTag<SpriteComponent>();

    program->setInt("isPrimitive", true);
    program->updateInt("isPrimitive");
    program->setFloat("alpha", 0.6f);
    program->updateFloat("alpha");

    for (const auto&[key, en]: sprites) {
        auto treeComp = en->getComponent<BVHComponent>();
        if (!treeComp)
            continue;

        auto posComp = en->getComponent<PositionComponent>();
        auto sprite = en->getComponent<SpriteComponent>()->sprite;
        auto points = coll::buildAABB(sprite->getVertices()[0]);

        auto draw_fun = [program, sprite, posComp](NodeDataPtr bound_rect) {
            program->setVec3("primColor", {0.8f, 0.1f, 0.1f});
            program->updateVec3("primColor");
            render::drawBoundingBox(*program,
                                    coll::buildVerticesFromRect3D(*bound_rect),
                                    *sprite, posComp->pos, posComp->angle,
                                    posComp->rot_axis);
        };

        if (Config::getVal<bool>("DrawLeafs")) {
            mapBinaryTreeLeafs(treeComp->vbh_tree_model, draw_fun);
        } else {
            mapBinaryTreeAtLevel(treeComp->vbh_tree_model, draw_fun,
                                 Config::getVal<int>("TreeLevelShow"));
        }
    }

    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException(
                (format("\n\tRender while drawing bounding boxes: %1%\n")
                 % glewGetErrorString(error)).str(),
                program_log_file_name(), Category::INTERNAL_ERROR);
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
    glClearColor(color.x, color.y, color.z, color.w);
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glEnable(GL_DEPTH_TEST);

    drawSprites();
    if (Config::getVal<bool>("DrawBoundingBoxes"))
        drawBoundingBoxes();

    drawTerrain();
}

void RenderSceneSystem::drawTerrain()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();
    program->setInt("isPrimitive", false);
    program->updateInt("isPrimitive");

    auto terrain_en = getEntitiesByTag<TerrainComponent>().begin()->second;
    auto terrain = terrain_en->getComponent<TerrainComponent>()->terrain;

    render::renderTerrain(*program, *terrain);
}


