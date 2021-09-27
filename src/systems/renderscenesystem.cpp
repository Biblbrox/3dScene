#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtx/rotate_vector.hpp>

#include "systems/renderscenesystem.hpp"
#include "components/spritecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "components/globallightcomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/skyboxcomponent.hpp"
#include "render/render.hpp"
#include "logger/logger.hpp"
#include "exceptions/glexception.hpp"
#include "sceneprogram.hpp"
#include "game.hpp"
#include "config.hpp"
#include "utils/math.hpp"
#include "view/fpscamera.hpp"
#include "utils/texture.hpp"
#include "utils/fs.hpp"

using logger::Logger;
using boost::format;
using logger::program_log_file_name;
using logger::Category;
using glm::mat3;
using glm::mat4;
using glm::vec3;
using glm::scale;
using math::operator/;
using utils::texture::genRbo;
using utils::texture::genTexture;
using utils::texture::cleanFBO;
using utils::texture::generateFBO;

GLuint skybox_angle = 0;
GLuint light_dir_angle = 0;

vec4 fog_color = {0.5444, 0.62, 0.62, 0.69};


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

    program->setInt(U_IS_PRIMITIVE, false);
    program->setFloat(U_ALPHA, 1.f);
    program->setVec4(U_FOG_COLOR, fog_color);

    bool lighting = Config::getVal<bool>("EnableLight");
    bool hasLightComp = !getEntitiesByTag<GlobalLightComponent>().empty();

    if (lighting && hasLightComp) {
        program->setVec3(U_VIEW_POS, camera->getPos());
        auto lightEn = getEntitiesByTag<GlobalLightComponent>().begin()->second;
        auto light = lightEn->getComponent<GlobalLightComponent>();
        program->setInt(U_LIGHTING, true);
        program->setVec3(U_DIR_LIGHT_DIRECTION, light->direction);
        program->setVec3(U_DIR_LIGHT_AMBIENT, light->ambient);
        program->setVec3(U_DIR_LIGHT_DIFFUSE, light->diffuse);
        program->setVec3(U_DIR_LIGHT_SPECULAR, light->specular);
    } else {
        program->setInt(U_LIGHTING, false);
    }

    if (!Config::getVal<bool>("DrawVertices"))
        return;

    const auto &sprites = getEntitiesByTags<PositionComponent, SpriteComponent>();
    for (const auto&[key, en]: sprites) {
        auto posComp = en->getComponent<PositionComponent>();
        auto sprite = en->getComponent<SpriteComponent>()->sprite;

        auto selComp = en->getComponent<SelectableComponent>();
        if (getGameState() == GameStates::EDIT && selComp && selComp->dragged) {
            glStencilFunc(GL_ALWAYS, 1, 0xFF); // all fragments should pass the stencil test
            glStencilMask(0xFF); // enable writing to the stencil buffer

            render::drawTexture(*program, *sprite, posComp->pos, posComp->angle,
                                posComp->rot_axis, lighting);

            glStencilFunc(GL_NOTEQUAL, 1, 0xFF);
            glStencilMask(0x00); // disable writing to the stencil buffer
            glDisable(GL_DEPTH_TEST);

            program->setInt(U_IS_PRIMITIVE, true);
            program->setVec3(U_PRIM_COLOR, {0.f, 0.f, 1.f});
            program->setFloat(U_ALPHA, 0.55f);

            render::drawTexture(*program, *sprite, posComp->pos, posComp->angle,
                                posComp->rot_axis, false, 1.1f);

            glStencilMask(0xFF);
            glStencilFunc(GL_ALWAYS, 1, 0xFF);
            glEnable(GL_DEPTH_TEST);
        } else {
            program->setInt(U_IS_PRIMITIVE, false);

            render::drawTexture(*program, *en->getComponent<SpriteComponent>()->sprite,
                                posComp->pos, posComp->angle, posComp->rot_axis, lighting);
        }
    }

    program->useFramebufferProgram();
    auto proj = program->getMat4(U_PROJECTION_MATRIX);
    mat4 old_view = program->getMat4(U_VIEW_MATRIX);
    auto view = program->getMat4(U_VIEW_MATRIX);
    GLfloat rot_angle = glm::radians((GLfloat) skybox_angle) / 100.f;
    view = glm::rotate(view, rot_angle, glm::vec3(0.f, 1.f, 0.f));
    skybox_angle += 1;

    auto skyboxEn = getEntitiesByTag<SkyboxComponent>().begin()->second;
    auto skybox = skyboxEn->getComponent<SkyboxComponent>();
    program->useSkyboxProgram();
    program->setMat4(U_PROJECTION_MATRIX, proj);
    program->setMat4(U_VIEW_MATRIX, mat4(mat3(view)));
    program->setVec4(U_FOG_COLOR, fog_color);
    render::drawSkybox(skybox->vao, skybox->skybox_id);
    program->setMat4(U_VIEW_MATRIX, old_view);

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

void RenderSceneSystem::renderScene()
{
    //        auto window_size = utils::getWindowSize<GLfloat>(*Game::getWindow());
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();
    vec2i size = Config::getVal<vec2i>("ViewportSize"); // TODO: change viewport size here
    vec2i sizei = {round(size.x), round(size.y)};
    glViewport(0, 0, sizei.x, sizei.y);
    //        glScissor(0, 0, size.x, size.y);
    auto scene_comp = getEntitiesByTag<SceneComponent>().begin()->second
            ->getComponent<SceneComponent>();

    if (scene_comp->dirty) {
        bool isMSAA = Config::getVal<bool>("MSAA");

        if (isMSAA) {
            cleanFBO(&scene_comp->texture, &scene_comp->sceneBuffer, &scene_comp->rbo, isMSAA,
                     &scene_comp->sceneBufferMSAA, &scene_comp->textureMSAA);
            generateFBO(true, sizei.x, sizei.y, &scene_comp->textureMSAA, &scene_comp->rbo,
                        &scene_comp->texture, &scene_comp->sceneBuffer,
                        &scene_comp->sceneBufferMSAA);
        } else {
            cleanFBO(&scene_comp->texture, &scene_comp->sceneBuffer, &scene_comp->rbo);
            generateFBO(false, sizei.x, sizei.y, &scene_comp->textureMSAA, &scene_comp->rbo,
                        &scene_comp->texture, &scene_comp->sceneBuffer);
        }

        scene_comp->dirty = false;
    }

    drawToFramebuffer();
    //        glViewport(0, 0, window_size.x, window_size.y);
    //        glScissor(0, 0, window_size.x, window_size.y);
}

void RenderSceneSystem::update_state(size_t delta)
{
    auto game_state = getGameState();
    if (game_state == GameStates::PLAY || game_state == GameStates::EDIT) {
        if (Config::getVal<bool>("MakeScreenshot"))
            makeScreenshot();

        renderScene();
    }
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
    glClearColor(color.x, color.y, color.z, 0.f);

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
    program->setInt(U_IS_PRIMITIVE, false);

    auto terrain_en = getEntitiesByTag<TerrainComponent>().begin()->second;
    auto terrain = terrain_en->getComponent<TerrainComponent>()->terrain;

    glCullFace(GL_FRONT); // TODO: fix invert face culling for terrain
    render::renderTerrain(*program, *terrain);
    glCullFace(GL_BACK);
}

void RenderSceneSystem::makeScreenshot()
{
    vec3 pos = getEntitiesByTag<LidarComponent>().begin()->second
            ->getComponent<PositionComponent>()->pos;
    auto lidar = getEntitiesByTag<LidarComponent>().begin()->second
            ->getComponent<LidarComponent>();
    auto camera = FpsCamera::getInstance();

    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();

    vec3 old_pos = camera->getPos();
    GLfloat old_pitch = camera->getPitch();
    GLfloat old_yaw = camera->getYaw();

    vec2i size = Config::getVal<vec2i>("ViewportSize");

    // Set camera position to lidar position
    camera->setPos(pos);
    camera->setPitch(lidar->pitch);
    camera->setYaw(lidar->yaw);
    mat4 view = camera->getView();
    program->setMat4(U_VIEW_MATRIX, view);
    glViewport(0, 0, size.x, size.y);
    renderScene();
    glFlush();
    SDL_GL_SwapWindow(Game::getWindow());
    utils::texture::saveScreen(getResourcePath("screenshot.bmp"), size.x, size.y);

    // Save projected coordinates
    program->useFramebufferProgram();
    std::ofstream f(getResourcePath("projected.txt"), std::ios::out | std::ios::trunc);
    glm::vec4 viewport = {0, 0, size};
    glm::mat4 perspective = program->getMat4(U_PROJECTION_MATRIX);
    for (const vec3& p: lidar->coll_points) {
        vec3 projected = glm::project(p, view, perspective, viewport);
        f << projected.x << " " << projected.y << "\n";
    }

    f.close();

    // Save calibration matrix
    glm::mat4 calMat = perspective * view;
    utils::fs::saveMatTxt(getResourcePath("cal_matrix.txt"), calMat, true);

    // Restore camera parameters
    camera->setPos(old_pos);
    camera->setPitch(old_pitch);
    camera->setYaw(old_yaw);
    program->setMat4(U_VIEW_MATRIX, camera->getView());
    Config::getVal<bool>("MakeScreenshot") = false;
}


