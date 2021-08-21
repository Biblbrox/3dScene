#include <boost/format.hpp>
#include <filesystem>
#include <imgui.h>
#include <imgui_impl_opengl3.h>
#include <imgui_impl_sdl.h>
#include <memory>

#include "base.hpp"
#include "components/bvhcomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/globallightcomponent.hpp"
#include "components/positioncomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/skyboxcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "config.hpp"
#include "exceptions/sdlexception.hpp"
#include "game.hpp"
#include "render/terrain.hpp"
#include "systems/keyboardsystem.hpp"
#include "systems/lidarsystem.hpp"
#include "systems/physicssystem.hpp"
#include "systems/renderguisystem.hpp"
#include "systems/renderscenesystem.hpp"
#include "utils/collision.hpp"
#include "utils/datastructs.hpp"
#include "utils/fs.hpp"
#include "utils/math.hpp"
#include "utils/random.hpp"
#include "utils/texture.hpp"
#include "world.hpp"

using std::cos;
using std::find_if;
using std::floor;
using std::make_shared;
using std::shared_ptr;
using std::sin;
using std::vector;

using utils::RectPoints3D;

using ecs::Entity;

using utils::fix_coords;
using utils::RectPoints3D;
using utils::data::mapBinaryTree;
using utils::log::Logger;
using utils::log::program_log_file_name;
using utils::texture::genRbo;
using utils::texture::genTexture;

using coll::buildBVH;

size_t genUniqueId()
{
    static size_t idx = 0;
    return idx++;
}

World::World() : m_wasInit(false), m_initFromFile(false)
{
    if (!Config::hasKey("SelectedObj"))
        Config::addVal("SelectedObj", 0, "int");
    if (!Config::hasKey("IsSelected"))
        Config::addVal("IsSelected", false, "bool");
    if (!Config::hasKey("DrawVertices"))
        Config::addVal("DrawVertices", true, "bool");
    if (!Config::hasKey("DrawBoundingBoxes"))
        Config::addVal("DrawBoundingBoxes", false, "bool");
    if (!Config::hasKey("DrawRays"))
        Config::addVal("DrawRays", false, "bool");
    if (!Config::hasKey("CheckCollision"))
        Config::addVal("CheckCollision", false, "bool");
    if (!Config::hasKey("TreeLevelShow"))
        Config::addVal("TreeLevelShow", 0, "int");
    if (!Config::hasKey("PrismFreq"))
        Config::addVal("PrismFreq", glm::vec2(90.f, 45.f), "vec2");
    if (!Config::hasKey("PrismStartAngle"))
        Config::addVal("PrismStartAngle", glm::vec2(0.f, 0.f), "vec2");
    if (!Config::hasKey("DrawLeafs"))
        Config::addVal("DrawLeafs", false, "bool");
    if (!Config::hasKey("EditMode"))
        Config::addVal("EditMode", false, "bool");
    if (!Config::hasKey("BackgroundColor"))
        Config::addVal("BackgroundColor", glm::vec4(0.2f, 0.f, 0.2f, 1.f),
                       "vec4");
    if (!Config::hasKey("InverseRotation"))
        Config::addVal("InverseRotation", false, "bool");
    if (!Config::hasKey("MSAA"))
        Config::addVal("MSAA", false, "bool");
    if (!Config::hasKey("MSAASamples"))
        Config::addVal("MSAASamples", 4, "int");
    if (!Config::hasKey("MouseSens"))
        Config::addVal("MouseSens", 1.f, "float");
    if (!Config::hasKey("Theme"))
        Config::addVal("Theme", 0, "int");
    if (!Config::hasKey("ShowCameraPos"))
        Config::addVal("ShowCameraPos", false, "bool");
    if (!Config::hasKey("ShowMoveSpeed"))
        Config::addVal("ShowMoveSpeed", false, "bool");
    if (!Config::hasKey("EnableLight"))
        Config::addVal("EnableLight", false, "bool");
    if (!Config::hasKey("LightPos"))
        Config::addVal("LightPos", glm::vec3(0.f), "vec3");
    if (!Config::hasKey("RayLength"))
        Config::addVal("RayLength", 10.f, "float");
    if (!Config::hasKey("DotDens"))
        Config::addVal("DotDens", 40.f, "float");
    if (!Config::hasKey("DrawPattern"))
        Config::addVal("DrawPattern", false, "bool");
    if (!Config::hasKey("ExportFileName"))
        Config::addVal("ExportFileName", std::string("out.txt"), "string");
    if (!Config::hasKey("ExportType"))
        Config::addVal("ExportType", 0, "int");
    if (!Config::hasKey("ObjDistance"))
        Config::addVal("ObjDistance", 10.f, "float");
    if (!Config::hasKey("DataFileTmp"))
        Config::addVal("DataFileTmp", std::string("data.txt"), "string");
}

World::~World()
{
    deallocate_imgui();
}

void World::deallocate_imgui()
{
    if (m_wasInit) {
        ImGui_ImplOpenGL3_Shutdown();
        ImGui_ImplSDL2_Shutdown();
        ImGui::DestroyContext();
    }
}

void World::update(size_t delta)
{
    if constexpr (debug)
        m_fps.update();

    if (m_initFromFile) {
        init_from_file(m_initFile);
        m_initFromFile = false;
    }

    if (getGameState() == GameStates::STOP &&
        getPrevGameState() != GameStates::STOP) {
        setGameState(GameStates::STOP);
    }

    if (getGameState() == GameStates::PLAY &&
        getPrevGameState() == GameStates::PAUSE) {
        setGameState(GameStates::PLAY);
    }

    if (getGameState() == GameStates::PLAY &&
        getPrevGameState() == GameStates::STOP) {
        setGameState(GameStates::PLAY);
        //        init();
    }

    filter_entities();

    for (auto &[key, system] : m_systems)
        system->update(delta);
}

void World::init()
{
    glBindFramebuffer(GL_FRAMEBUFFER, 0);
    m_systems.clear();

    Config::getVal<bool>("IsSelected") = false;

    if (!m_wasInit) {
        //        deallocate_imgui();
        init_imgui();
    }
    createSystem<RenderGuiSystem>();
    createSystem<LidarSystem>();
    createSystem<RenderSceneSystem>();
    createSystem<KeyboardSystem>();

    m_entities.clear();
    init_terrain();
    init_sprites();
    init_scene();
    init_skybox();

    m_wasInit = true;
}

void World::init(const std::string &init_file)
{
    m_initFromFile = true;
    m_initFile = init_file;
}

void World::init_from_file(const std::string &init_file)
{
    auto entities = utils::fs::loadSimJson(init_file, *this);

    Config::getVal<bool>("IsSelected") = false;

    glBindFramebuffer(GL_FRAMEBUFFER, 0);
    m_systems.clear();

    if (!m_wasInit) {
        //        deallocate_imgui();
        init_imgui();
    }
    createSystem<RenderGuiSystem>();
    createSystem<LidarSystem>();
    createSystem<RenderSceneSystem>();
    createSystem<KeyboardSystem>();

    m_entities.clear();
    for (auto &en : entities) {
        auto e = std::make_shared<ecs::Entity>(en);
        e->activate();
        m_entities.emplace(e->getId(), e);
        if (e->getComponent<TerrainComponent>())
            m_terrainID = e->getId();
    }

    init_scene();
    init_skybox();
    m_wasInit = true;
    m_initFromFile = false;
}

void World::init_imgui()
{
    // Setup Dear ImGui context
    IMGUI_CHECKVERSION();
    ImGui::CreateContext();

    // Setup Platform/Renderer backends
    ImGui_ImplSDL2_InitForOpenGL(Game::getWindow(), Game::getGLContext());
    ImGui_ImplOpenGL3_Init();
}

void World::filter_entities()
{
    for (auto it = m_entities.begin(); it != m_entities.end();)
        it = !it->second->isActivate() ? m_entities.erase(it) : ++it;
}

void World::init_terrain()
{
    m_terrainID = genUniqueId();
    auto terrain = createEntity(m_terrainID);
    terrain->activate();
    terrain->addComponent<TerrainComponent>();

    auto terrainComp = terrain->getComponent<TerrainComponent>();

    terrainComp->terrain = std::make_shared<Terrain>(
        getResourcePath("terrain/terrain_height_map.jpg"),
        getResourcePath("terrain/sand_grass_02.jpg"),
        vec3(20000.f, 100.f, 20000.f));
}

void World::init_scene()
{
    m_sceneID = genUniqueId();
    auto scene = createEntity(m_sceneID);
    scene->activate();
    scene->addComponent<SceneComponent>();
    auto scene_comp = scene->getComponent<SceneComponent>();

    GLuint *scene_fb = &scene_comp->sceneBuffer;
    GLuint *scene_fbmsaa = &scene_comp->sceneBufferMSAA;
    GLuint *textureMSAA = &scene_comp->textureMSAA;
    GLuint *texture = &scene_comp->texture;
    GLuint *rbo = &scene_comp->rbo;

    int screen_width = utils::getWindowWidth<int>(*Game::getWindow());
    int screen_height = utils::getWindowHeight<int>(*Game::getWindow());

    bool msaa = Config::getVal<bool>("MSAA");
    if (msaa) {
        scene_comp->isMsaa = true;
        // Generate multisampled framebuffer
        glGenFramebuffers(1, scene_fbmsaa);
        glBindFramebuffer(GL_FRAMEBUFFER, *scene_fbmsaa);
        // Create multisampled texture attachment
        *textureMSAA = genTexture(screen_width, screen_height, true);
        *rbo = genRbo(screen_width, screen_height, true);
        glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
                               GL_TEXTURE_2D_MULTISAMPLE, *textureMSAA, 0);
        glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_STENCIL_ATTACHMENT,
                                  GL_RENDERBUFFER, *rbo);
        CHECK_FRAMEBUFFER_COMPLETE();
        glBindFramebuffer(GL_FRAMEBUFFER, 0);

        // Generate intermediate framebuffer
        glGenFramebuffers(1, scene_fb);
        glBindFramebuffer(GL_FRAMEBUFFER, *scene_fb);
        // Create color attachment texture
        *texture = genTexture(screen_width, screen_height);
        glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
                               GL_TEXTURE_2D, *texture, 0);
    }
    else {
        // Generate not multisampled buffer
        glGenFramebuffers(1, scene_fb);
        glBindFramebuffer(GL_FRAMEBUFFER, *scene_fb);
        // Create color texture attachment
        *texture = genTexture(screen_width, screen_height);
        *rbo = genRbo(screen_width, screen_height);
        glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
                               GL_TEXTURE_2D, *texture, 0);
        glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_STENCIL_ATTACHMENT,
                                  GL_RENDERBUFFER, *rbo);
    }

    CHECK_FRAMEBUFFER_COMPLETE();
}

void World::init_sprites()
{
    auto add_bvh = [](const PositionComponent &pos,
                      const SpriteComponent &sprite, BVHComponent &bvh) {
        auto &triangles = sprite.sprite->getTriangles();
        mat4 man_transform = math::createTransform(
            pos.pos, pos.angle, pos.rot_axis, sprite.sprite->getSize());
        triangles = math::transformTriangles(triangles, man_transform);
        bvh.bvh_tree = coll::buildBVH(triangles);
        bvh.triangles = make_shared<vector<Triangle>>(triangles);
    };

    auto lidarEn = createEntity(genUniqueId());
    lidarEn->activate();
    lidarEn
        ->addComponents<PositionComponent, LidarComponent, SpriteComponent>();
    auto lidar_pos = lidarEn->getComponent<PositionComponent>();
    auto lidarComp = lidarEn->getComponent<LidarComponent>();

    auto lidarSprite = lidarEn->getComponent<SpriteComponent>();
    lidarSprite->sprite = std::make_shared<Sprite>(
        getModelPath("cube/cube.obj"), vec3(100.f, 100.f, 100.f), false);

    Lidar lidar(lidarComp->length, lidar_pos->pos, {0.f, 1.f, 0.f},
                lidarComp->yaw, lidarComp->pitch);
    lidarComp->pattern_points = lidar.risleyPattern2(
        lidarComp->freq, lidarComp->start_angle, lidarComp->density);

    utils::Random rand;

    auto terrainEn = m_entities[m_terrainID];
    auto terrain = terrainEn->getComponent<TerrainComponent>()->terrain;

    GLfloat start_x, start_z;
    start_x = start_z = 0.f;

    auto camera = FpsCamera::getInstance();
    camera->setPos({start_x, 200.f, start_z});

    vec3 man_size = {10.f, 10.f, 10.f};
    vec3 chair_size = {10.f, 10.f, 10.f};
    vec3 house_size = {1.f, 1.f, 1.f};
    std::shared_ptr<Sprite> car_sprite, palm_sprite, house_sprite, man_sprite,
        chair_sprite;
    house_sprite = make_shared<Sprite>(
        getModelPath("Soviet_Panel/spah9lvl.obj"), house_size, false);
    man_sprite =
        make_shared<Sprite>(getModelPath("police/police.obj"), man_size);
    chair_sprite = make_shared<Sprite>(
        getModelPath("Wooden_Chair/Wooden_Chair.obj"), chair_size);

    auto chair_en = createEntity(genUniqueId());
    chair_en->activate();
    chair_en->addComponents<SpriteComponent, PositionComponent,
                            SelectableComponent, BVHComponent>();
    auto chair_sprite_comp = chair_en->getComponent<SpriteComponent>();
    chair_sprite_comp->sprite = chair_sprite;
    auto pos_chair = chair_en->getComponent<PositionComponent>();
    pos_chair->pos.x = 40.f + start_x;
    pos_chair->pos.z = 400.f + start_z;
    pos_chair->pos.y =
        terrain->getAltitude({pos_chair->pos.x, pos_chair->pos.z}) + 40.f;
    add_bvh(*pos_chair, *chair_sprite_comp,
            *chair_en->getComponent<BVHComponent>());

    auto man_en = createEntity(genUniqueId());
    man_en->activate();
    man_en->addComponents<SpriteComponent, PositionComponent,
                          SelectableComponent, BVHComponent>();
    auto man_sprite_comp = man_en->getComponent<SpriteComponent>();
    man_sprite_comp->sprite = man_sprite;
    auto pos_man = man_en->getComponent<PositionComponent>();
    pos_man->pos.x = 40.f + start_x;
    pos_man->pos.z = 300 + start_z;
    pos_man->pos.y =
        terrain->getAltitude({pos_man->pos.x, pos_man->pos.z}) + 60.f;
    add_bvh(*pos_man, *man_sprite_comp, *man_en->getComponent<BVHComponent>());

    auto light_en = createEntity(genUniqueId());
    light_en->activate();
    light_en->addComponent<GlobalLightComponent>();

    auto light_comp = light_en->getComponent<GlobalLightComponent>();
    light_comp->direction = vec3(-0.2f, -1.f, 0.3f);
    light_comp->ambient = vec3(0.3f);
    light_comp->diffuse = vec3(0.5f);
    light_comp->specular = vec3(0.5f);
    Config::addVal("LightPos", camera->getPos(), "vec3");

    for (size_t i = 0; i < 5; ++i) {
        auto house = createEntity(genUniqueId());
        house->activate();
        house->addComponents<SpriteComponent, PositionComponent,
                             SelectableComponent, BVHComponent>();
        auto house_sprite_comp = house->getComponent<SpriteComponent>();
        house_sprite_comp->sprite = house_sprite;
        auto house_pos = house->getComponent<PositionComponent>();
        house_pos->pos.x = i * 30.f + start_x;
        house_pos->pos.z = rand.generateu(30.f, 40.f) + start_z;
        house_pos->pos.y =
            terrain->getAltitude({house_pos->pos.x, house_pos->pos.z});
        house_pos->angle = -glm::half_pi<GLfloat>();
        house_pos->rot_axis = vec3(0.f, 1.f, 0.f);
        add_bvh(*house_pos, *house_sprite_comp,
                *house->getComponent<BVHComponent>());
    }
}

void World::init_skybox()
{
    float skyboxVertices[] = {
        // positions
        -1.0f, 1.0f,  -1.0f, -1.0f, -1.0f, -1.0f, 1.0f,  -1.0f, -1.0f,
        1.0f,  -1.0f, -1.0f, 1.0f,  1.0f,  -1.0f, -1.0f, 1.0f,  -1.0f,

        -1.0f, -1.0f, 1.0f,  -1.0f, -1.0f, -1.0f, -1.0f, 1.0f,  -1.0f,
        -1.0f, 1.0f,  -1.0f, -1.0f, 1.0f,  1.0f,  -1.0f, -1.0f, 1.0f,

        1.0f,  -1.0f, -1.0f, 1.0f,  -1.0f, 1.0f,  1.0f,  1.0f,  1.0f,
        1.0f,  1.0f,  1.0f,  1.0f,  1.0f,  -1.0f, 1.0f,  -1.0f, -1.0f,

        -1.0f, -1.0f, 1.0f,  -1.0f, 1.0f,  1.0f,  1.0f,  1.0f,  1.0f,
        1.0f,  1.0f,  1.0f,  1.0f,  -1.0f, 1.0f,  -1.0f, -1.0f, 1.0f,

        -1.0f, 1.0f,  -1.0f, 1.0f,  1.0f,  -1.0f, 1.0f,  1.0f,  1.0f,
        1.0f,  1.0f,  1.0f,  -1.0f, 1.0f,  1.0f,  -1.0f, 1.0f,  -1.0f,

        -1.0f, -1.0f, -1.0f, -1.0f, -1.0f, 1.0f,  1.0f,  -1.0f, -1.0f,
        1.0f,  -1.0f, -1.0f, -1.0f, -1.0f, 1.0f,  1.0f,  -1.0f, 1.0f};

    unsigned int skyboxVAO, skyboxVBO;
    glGenVertexArrays(1, &skyboxVAO);
    glGenBuffers(1, &skyboxVBO);
    glBindVertexArray(skyboxVAO);
    glBindBuffer(GL_ARRAY_BUFFER, skyboxVBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(skyboxVertices), &skyboxVertices,
                 GL_STATIC_DRAW);
    glEnableVertexAttribArray(0);
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), nullptr);

    auto skyboxEn = createEntity(genUniqueId());
    skyboxEn->activate();
    skyboxEn->addComponent<SkyboxComponent>();
    auto skybox = skyboxEn->getComponent<SkyboxComponent>();

    vector<std::string> faces = {getResourcePath("skybox/cloudy/right.png"),
                                 getResourcePath("skybox/cloudy/left.png"),
                                 getResourcePath("skybox/cloudy/top.png"),
                                 getResourcePath("skybox/cloudy/bottom.png"),
                                 getResourcePath("skybox/cloudy/back.png"),
                                 getResourcePath("skybox/cloudy/front.png")};

    skybox->vao = skyboxVAO;
    skybox->skybox_id = utils::texture::loadCubemap(faces);

    if (GLenum error = glGetError(); error != GL_NO_ERROR) {
        Logger::write(utils::log::program_log_file_name(),
                      utils::log::Category::INITIALIZATION_ERROR,
                      (boost::format("Unable to load skybox: %s") %
                       glewGetErrorString(error))
                          .str());
    }
}

void World::addEntityFromFile(const std::string &model_file)
{
    std::shared_ptr<Sprite> sprite =
        std::make_shared<Sprite>(model_file, vec3(1.f, 1.f, 1.f));
    auto terrainEn = m_entities[m_terrainID];
    auto terrain = terrainEn->getComponent<TerrainComponent>()->terrain;

    auto en = createEntity(genUniqueId());
    en->activate();
    en->addComponents<SpriteComponent, PositionComponent, SelectableComponent,
                      BVHComponent>();
    auto sprite_comp = en->getComponent<SpriteComponent>();
    sprite_comp->sprite = sprite;
    auto pos_chair = en->getComponent<PositionComponent>();
    pos_chair->pos.x = 200.f;
    pos_chair->pos.z = 400.f;
    pos_chair->pos.y =
        terrain->getAltitude({pos_chair->pos.x, pos_chair->pos.z}) + 40.f;
    auto &triangles = sprite->getTriangles();
    mat4 chair_transform = math::createTransform(
        pos_chair->pos, 0, {0.f, 1.f, 1.f}, {1.f, 1.f, 1.f});
    triangles = math::transformTriangles(triangles, chair_transform);
    en->getComponent<BVHComponent>()->bvh_tree = coll::buildBVH(triangles);
    en->getComponent<BVHComponent>()->triangles =
        std::make_shared<std::vector<Triangle>>(triangles);
}
