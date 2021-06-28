#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <imgui.h>
#include <iostream>

#include "systems/renderscenesystem.hpp"
#include "components/spritecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/scenecomponent.hpp"
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

const float RAY_LENGTH = 100.f;

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


RenderSceneSystem::RenderSceneSystem() : col_stream(getResourcePath("data.txt"),
                                                    std::ios_base::app)
{

}

RenderSceneSystem::~RenderSceneSystem()
{
    col_stream.flush();
    col_stream.close();
}

void RenderSceneSystem::drawSprites()
{
    using utils::data::mapBinaryTreeLeafs;
    using utils::data::mapBinaryTreeAtLevel;
    using utils::data::mapBinaryTree;

    auto program = SceneProgram::getInstance();
    auto camera = FpsCamera::getInstance();

    if (Config::getVal<bool>("CheckCollision"))
        drawLidarIntersect();

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
                            {posComp->x, posComp->y, posComp->z},
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
                                    coll::buildVerticesFromRect3D(
                                            *bound_rect),
                                    *sprite,
                                    {posComp->x, posComp->y, posComp->z},
                                    posComp->angle,
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


void RenderSceneSystem::drawLidarIntersect()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();

    auto camera = FpsCamera::getInstance();

    program->setInt("isPrimitive", true);
    program->updateInt("isPrimitive");
    const GLfloat radius = 100.f;
    glm::vec3 dir = camera->getDirection();
    const GLfloat length = RAY_LENGTH + 1000;
    dir *= length;

    GLfloat alpha = 0.f;
    GLfloat step = glm::pi<GLfloat>() / 1000.f;
    std::vector<glm::vec3> dots;
    glm::vec3 pos = camera->getPos() + dir;
    program->setVec3("primColor", {0.1, 0.1, 0.8});
    program->updateVec3("primColor");
    while (alpha <= 2 * glm::pi<GLfloat>()) {
        glm::vec3 up = glm::normalize(camera->getUp() + dir);

        glm::vec3 dir_on_plane = glm::normalize(
                glm::cross(up, glm::normalize(dir)));
        dir_on_plane = glm::rotate(dir_on_plane, alpha, glm::normalize(dir));

        glm::vec3 circle_pos = pos + dir_on_plane * radius;
        dots.emplace_back(circle_pos);
        alpha += step;
    }
    alpha = -glm::pi<GLfloat>() / 6.f;
    std::vector<glm::vec3> coll_dots;
    glm::vec3 pos_trans = camera->getPos();
    while (alpha <= glm::pi<GLfloat>() / 6.f) {
        dir = glm::normalize(
                glm::rotate(camera->getDirection(), alpha, camera->getUp()));

        for (const auto&[key, en]: m_ecsManager->getEntities()) {
            auto bvh_comp = en->getComponent<BVHComponent>();
            if (!bvh_comp)
                continue;
            auto pos_comp = en->getComponent<PositionComponent>();
            auto sprite_comp = en->getComponent<SpriteComponent>();

            auto coll = coll::BVHAABBTraversal(bvh_comp->vbh_tree, dir,
                                               pos_trans);

            if (coll.first) {
                Logger::info("collision occurred, pos: %1$.3f, %2$.3f, %3$.3f",
                             coll.second.x, coll.second.y, coll.second.z);

                col_stream << coll.second.x << ", "
                           << coll.second.y << ", " << coll.second.z << "\n";
                coll_dots.emplace_back(coll.second);
            }
        }

        dots.emplace_back(camera->getPos() + glm::normalize(dir) * length);
        alpha += step;
    }

    dots.emplace_back(pos);
    program->setInt("isPrimitive", true);
    program->updateInt("isPrimitive");
    render::drawDots(dots);

    program->setVec3("primColor", {0.1, 1.f, 0.1});
    program->updateVec3("primColor");
    render::drawDots(coll_dots);
}

void RenderSceneSystem::update_state(size_t delta)
{
    if (getGameState() == GameStates::PLAY)
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
}