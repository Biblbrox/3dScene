#include <boost/format.hpp>
#include <crossguid/guid.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtx/rotate_vector.hpp>

#include "components/bvhcomponent.hpp"
#include "components/globallightcomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/positioncomponentinst.hpp"
#include "components/scenecomponent.hpp"
#include "components/screenshotcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/selectablecomponentinst.hpp"
#include "components/skyboxcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "config.hpp"
#include "cvutils/cvtools.hpp"
#include "cvutils/opencv.hpp"
#include "exceptions/glexception.hpp"
#include "game.hpp"
#include "logger/logger.hpp"
#include "render/render.hpp"
#include "sceneprogram.hpp"
#include "shadernames.hpp"
#include "systems/renderscenesystem.hpp"
#include "utils/fs.hpp"
#include "utils/math.hpp"
#include "utils/random.hpp"
#include "utils/texture.hpp"
#include "view/fpscamera.hpp"

using boost::format;
using glm::mat3;
using glm::mat4;
using glm::scale;
using glm::vec3;
using logger::Category;
using logger::Logger;
using logger::program_log_file_name;
using math::operator/;
using utils::texture::cleanFBO;
using utils::texture::generateFBO;
using utils::texture::genRbo;
using utils::texture::genTexture;

GLuint skybox_angle = 0;
GLuint light_dir_angle = 0;

vec4 fog_color = {0.5444, 0.62, 0.62, 0.69};

RenderSceneSystem::RenderSceneSystem()
{
}

RenderSceneSystem::~RenderSceneSystem()
{
}

void RenderSceneSystem::setupLighting()
{
    auto program = SceneProgram::getInstance();
    auto camera = FpsCamera::getInstance();

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
    }
    else {
        program->setInt(U_LIGHTING, false);
    }
}

void RenderSceneSystem::drawSkybox()
{
    auto program = SceneProgram::getInstance();

    program->useFramebufferProgram();
    auto proj = program->getMat4(U_PROJECTION_MATRIX);
    mat4 old_view = program->getMat4(U_VIEW_MATRIX);
    auto view = program->getMat4(U_VIEW_MATRIX);
    GLfloat rot_angle = glm::radians((GLfloat)skybox_angle) / 100.f;
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
}

// TODO: make this work
void RenderSceneSystem::fillInstanceAttributes()
{
    unsigned int buffer;
    glGenBuffers(1, &buffer);
    glBindBuffer(GL_ARRAY_BUFFER, buffer);
    // glBufferData(GL_ARRAY_BUFFER, )

    // for ()
}

void RenderSceneSystem::drawSpritesInstancing()
{
    auto program = SceneProgram::getInstance();
    auto camera = FpsCamera::getInstance();

    program->useFramebufferProgram();

    program->setInt(U_IS_PRIMITIVE, false);
    // Fog parameters
    program->setFloat(U_ALPHA, 1.f);
    program->setVec4(U_FOG_COLOR, fog_color);

    bool lighting = Config::getVal<bool>("EnableLight");
    setupLighting();

    if (!Config::getVal<bool>("DrawVertices"))
        return;

    fillInstanceAttributes();

    const auto &sprites =
        getEntitiesByTags<PositionComponentInst, SelectableComponentInst, SpriteComponent>()
            .begin()
            ->second;
    const auto &positions = sprites->getComponent<PositionComponentInst>();
    const auto &selectables = sprites->getComponent<SelectableComponentInst>();
    auto sel_it = selectables->selectable.begin();
    auto sprite_it = positions->position.begin();
    auto sprite = sprites->getComponent<SpriteComponent>();
    assert(selectables->selectable.size() == positions->position.size());
    for (; sprite_it != positions->position.end(); ++sprite_it, ++sel_it) {
        if (getGameState() == GameStates::EDIT && sel_it->dragged) {
            // Draw object
            glStencilFunc(GL_ALWAYS, 1, 0xFF); // all fragments should pass the stencil test
            glStencilMask(0xFF);               // enable writing to the stencil buffer

            render::drawTexture(*program, *sprite->sprite, sprite_it->pos, sprite_it->angle,
                                sprite_it->rot_axis, lighting);

            // Draw object border
            glStencilFunc(GL_NOTEQUAL, 1, 0xFF);
            glStencilMask(0x00); // disable writing to the stencil buffer
            glDisable(GL_DEPTH_TEST);

            program->setInt(U_IS_PRIMITIVE, true);
            program->setVec3(U_PRIM_COLOR, {0.f, 0.f, 1.f});
            program->setFloat(U_ALPHA, 0.55f);

            render::drawTexture(*program, *sprite->sprite, sprite_it->pos, sprite_it->angle,
                                sprite_it->rot_axis, false, 1.1f);

            glStencilMask(0xFF);
            glStencilFunc(GL_ALWAYS, 1, 0xFF);
            glEnable(GL_DEPTH_TEST);
        }
        else {
            program->setInt(U_IS_PRIMITIVE, false);

            render::drawTexture(*program, *sprite->sprite, sprite_it->pos, sprite_it->angle,
                                sprite_it->rot_axis, lighting);
        }
    }

    drawSkybox();

    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException(
            (format("\n\tRender while drawing sprites: %1%\n") % glewGetErrorString(error)).str(),
            program_log_file_name(), Category::INTERNAL_ERROR);
}

void RenderSceneSystem::drawSprites()
{
    auto program = SceneProgram::getInstance();
    auto camera = FpsCamera::getInstance();

    program->useFramebufferProgram();

    program->setInt(U_IS_PRIMITIVE, false);
    // Fog parameters
    program->setFloat(U_ALPHA, 1.f);
    program->setVec4(U_FOG_COLOR, fog_color);
    bool use_real_camera = Config::getVal<bool>("RealCameraIntrinsic");
    mat4 intrinsic_camera = Config::getVal<mat4>("RealCameraIntrinsicMat");
    mat4 projective = Config::getVal<mat4>("ProjectiveMat");
    program->setMat4(U_PROJECTION_MATRIX, use_real_camera ? intrinsic_camera : projective);

    bool lighting = Config::getVal<bool>("EnableLight");
    setupLighting();

    if (!Config::getVal<bool>("DrawVertices"))
        return;

    const auto &sprites = getEntitiesByTags<PositionComponent, SpriteComponent>();
    for (const auto &[key, en] : sprites) {
        auto posComp = en->getComponent<PositionComponent>();
        auto sprite = en->getComponent<SpriteComponent>()->sprite;

        auto selComp = en->getComponent<SelectableComponent>();
        if (getGameState() == GameStates::EDIT && selComp && selComp->dragged) {
            // Draw object
            glStencilFunc(GL_ALWAYS, 1, 0xFF); // all fragments should pass the stencil test
            glStencilMask(0xFF);               // enable writing to the stencil buffer

            render::drawTexture(*program, *sprite, posComp->pos, posComp->angle, posComp->rot_axis,
                                lighting);

            // Draw object border
            glStencilFunc(GL_NOTEQUAL, 1, 0xFF);
            glStencilMask(0x00); // disable writing to the stencil buffer
            glDisable(GL_DEPTH_TEST);

            program->setInt(U_IS_PRIMITIVE, true);
            program->setVec3(U_PRIM_COLOR, {0.f, 0.f, 1.f});
            program->setFloat(U_ALPHA, 0.55f);

            render::drawTexture(*program, *sprite, posComp->pos, posComp->angle, posComp->rot_axis,
                                false, 1.1f);

            glStencilMask(0xFF);
            glStencilFunc(GL_ALWAYS, 1, 0xFF);
            glEnable(GL_DEPTH_TEST);
        }
        else {
            program->setInt(U_IS_PRIMITIVE, false);

            render::drawTexture(*program, *en->getComponent<SpriteComponent>()->sprite,
                                posComp->pos, posComp->angle, posComp->rot_axis, lighting);
        }
    }

    drawSkybox();

    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException(
            (format("\n\tRender while drawing sprites: %1%\n") % glewGetErrorString(error)).str(),
            program_log_file_name(), Category::INTERNAL_ERROR);
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
    auto scene_comp =
        getEntitiesByTag<SceneComponent>().begin()->second->getComponent<SceneComponent>();

    if (scene_comp->dirty) {
        bool isMSAA = Config::getVal<bool>("MSAA");

        if (isMSAA) {
            cleanFBO(&scene_comp->texture, &scene_comp->sceneBuffer, &scene_comp->rbo, isMSAA,
                     &scene_comp->sceneBufferMSAA, &scene_comp->textureMSAA);
            generateFBO(true, sizei.x, sizei.y, &scene_comp->textureMSAA, &scene_comp->rbo,
                        &scene_comp->texture, &scene_comp->sceneBuffer,
                        &scene_comp->sceneBufferMSAA);
        }
        else {
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
    auto program = SceneProgram::getInstance();
    if (game_state == GameStates::PLAY || game_state == GameStates::EDIT) {
        auto screenshot_en = *getEntitiesByTag<ScreenshotComponent>().begin()->second;
        auto screenshot_comp = screenshot_en.getComponent<ScreenshotComponent>();
        if (screenshot_comp->makeScreenshot) {
            auto lidar_entities = getEntitiesByTag<LidarComponent>().begin()->second;
            auto lidar_comp = lidar_entities->getComponent<LidarComponent>();
            vec2i size = Config::getVal<vec2i>("ViewportSize");
            makeScreenshot(
                program->getMat4(U_PROJECTION_MATRIX),
                math::viewFromEuler(lidar_entities->getComponent<PositionComponent>()->pos,
                                    lidar_comp->yaw, lidar_comp->pitch),
                screenshot_comp->pathNextScreenshot, size);

            screenshot_comp->doneScreenshot();
        }

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
    if (Config::getVal<bool>("DrawAxis"))
        drawAxis();
    if (Config::getVal<bool>("CalibrateCameraPressed")) {
        calibrateCamera(100, getResourcePath("cloud/intrinsic"));
    }
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

void RenderSceneSystem::makeScreenshot(const glm::mat4 &perspective, const glm::mat4 &view,
                                       const std::string &path, const vec2i &size)
{
    auto camera = FpsCamera::getInstance();

    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();

    glm::mat4 old_view = camera->getView();
    mat4 old_perspective = program->getMat4(U_PROJECTION_MATRIX);

    camera->setView(view);
    program->setMat4(U_VIEW_MATRIX, view);
    program->setMat4(U_PROJECTION_MATRIX, perspective);
    glViewport(0, 0, size.x, size.y);
    renderScene();
    glFlush();
    SDL_GL_SwapWindow(Game::getWindow());
    utils::texture::saveScreen(path, size.x, size.y);

    camera->setView(old_view);
    program->setMat4(U_VIEW_MATRIX, camera->getView());
    program->setMat4(U_PROJECTION_MATRIX, old_perspective);
}

void RenderSceneSystem::drawAxis()
{
    glDisable(GL_DEPTH_TEST);

    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();
    program->setInt(U_IS_PRIMITIVE, true);
    glLineWidth(4.f);

    GLfloat axis_length = 500.f;

    // Draw x axis
    glm::vec3 x1(0.f, 0.f, 0.f);
    glm::vec3 x2(axis_length, 0.f, 0.f);
    program->setVec3(U_PRIM_COLOR, {1.f, 0.f, 0.f});
    render::drawLinen({x1, x2});

    // Draw y axis
    glm::vec3 y1(0.f, 0.f, 0.f);
    glm::vec3 y2(0.f, axis_length, 0.f);
    program->setVec3(U_PRIM_COLOR, {0.f, 1.f, 0.f});
    render::drawLinen({y1, y2});

    // Draw z axis
    glm::vec3 z1(0.f, 0.f, 0.f);
    glm::vec3 z2(0.f, 0.f, axis_length);
    program->setVec3(U_PRIM_COLOR, {0.f, 0.f, 1.f});
    render::drawLinen({z1, z2});

    glEnable(GL_DEPTH_TEST);
}

void RenderSceneSystem::makeCheckerboardPhotos(const std::vector<glm::mat4> &transforms,
                                               std::string dir)
{
    auto program = SceneProgram::getInstance();
    if (dir.back() != '/')
        dir += '/';

    const std::string ext = ".png";
    vec2i size = Config::getVal<vec2i>("ViewportSize");
    for (auto tr : transforms)
        makeScreenshot(program->getMat4(U_PROJECTION_MATRIX), tr, dir + xg::newGuid().str() + ext,
                       size);
}

void RenderSceneSystem::calibrateCamera(unsigned num, const std::string &dir)
{
    Config::getVal<bool>("CalibrateCameraPressed") =
        false; // TODO: check more accurate way to fix recursion here

    auto entityNames = m_ecsManager->getEntityByNames();

    if (!getEntityByName("CalibrationPattern"))
        return;

    auto checkerboard = getEntityByName("CalibrationPattern");

    auto pat_pos = checkerboard->getComponent<PositionComponent>();
    std::vector<glm::mat4> transforms(num);
    glm::vec3 normal = glm::vec3(0.f, 0.f, 1.f);
    GLfloat distance_mean = 100.f;
    GLfloat distance_min = distance_mean - 10.f;
    GLfloat distance_max = distance_mean + 10.f;
    GLfloat alpha = 0;
    GLfloat step_mean = 2.f * glm::pi<GLfloat>() / static_cast<GLfloat>(num);
    GLfloat step_min = step_mean - 0.2f;
    GLfloat step_max = step_mean + 0.2f;
    GLfloat rad_mean = 50.f;
    GLfloat rad_min = rad_mean - 5.f;
    GLfloat rad_max = rad_mean + 5.f;
    utils::Random rand;
    for (glm::mat4 &m : transforms) {
        GLfloat distance = rand.generateu(distance_min, distance_max);
        glm::vec3 photo_point = pat_pos->pos + distance * normal;
        GLfloat rad = rand.generateu(rad_min, rad_max);
        vec3 p{photo_point.x + rad * glm::cos(alpha), photo_point.y + rad * glm::sin(alpha),
               photo_point.z};

        m = glm::lookAt(p, pat_pos->pos, glm::vec3(0.f, 1.f, 0.f));
        alpha += rand.generateu(step_min, step_max);
    }

    makeCheckerboardPhotos(transforms, dir);

    // Calibration process
    int board_width = 9;
    int board_height = 6;
    GLfloat square_size = 3.54f;

    std::vector<std::vector<cv::Point3f>> obj_points;
    std::vector<std::vector<cv::Point2f>> img_points;
    std::vector<cv::Point2f> corners;
    cv::Size board_size = cv::Size(board_width, board_height);

    std::vector<std::string> photos;
    for (auto &photo : std::filesystem::directory_iterator(dir))
        if (photo.path().extension() == ".png")
            photos.push_back(photo.path().string());

    cv::Mat img, gray;
    for (const auto &photo : photos) {
        img = cv::imread(photo, cv::IMREAD_COLOR);
        cvtColor(img, gray, cv::COLOR_BGR2GRAY);

        bool found = false;
        found = findChessboardCorners(img, board_size, corners,
                                      cv::CALIB_CB_ADAPTIVE_THRESH | cv::CALIB_CB_FILTER_QUADS);
        if (found) {
            std::cout << "Corners found\n";
            cornerSubPix(
                gray, corners, cv::Size(5, 5), cv::Size(-1, -1),
                cv::TermCriteria(cv::TermCriteria::EPS | cv::TermCriteria::MAX_ITER, 30, 0.1));

            std::string corners_path = dir;
            if (corners_path.back() != '/')
                corners_path += '/';

            cv::drawChessboardCorners(img, board_size, corners, found);
            cv::imwrite(dir + "/corners/" + std::filesystem::path(photo).filename().string(), img);
        }

        std::vector<cv::Point3f> obj;
        for (int i = 0; i < board_height; ++i)
            for (int j = 0; j < board_width; ++j)
                obj.emplace_back((float)j * square_size, (float)i * square_size, 0);

        if (found) {
            img_points.push_back(corners);
            obj_points.push_back(obj);
        }
    }

    cv::Mat K;
    cv::Mat D;
    vector<cv::Mat> rvecs, tvecs;
    int flag = 0;
    flag |= cv::CALIB_FIX_K4;
    flag |= cv::CALIB_FIX_K5;
    cv::calibrateCamera(obj_points, img_points, img.size(), K, D, rvecs, tvecs /*, flag*/);

    glm::mat3x3 K_glm;
    cv::Mat K_32f;
    K.convertTo(K_32f, CV_32F);
    cvtools::fromCV2GLM(K_32f, &K_glm);
    utils::fs::saveMatTxt(getResourcePath("cloud/intrinsic/K.txt"), glm::transpose(K_glm));

    glm::mat3x3 D_glm;
    cv::Mat D_32f;
    D.convertTo(D_32f, CV_32F);
    cvtools::fromCV2GLM(D_32f, &D_glm);
    utils::fs::saveMatTxt(getResourcePath("cloud/intrinsic/D.txt"), glm::transpose(D_glm));
}
