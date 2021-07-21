#include <memory>
#include <boost/format.hpp>
#include <imgui.h>
#include <imgui_impl_sdl.h>
#include <imgui_impl_opengl3.h>

#include <bvh/bvh.hpp>
#include <bvh/vector.hpp>
#include <bvh/triangle.hpp>
#include <bvh/ray.hpp>
#include <bvh/sweep_sah_builder.hpp>
#include <bvh/single_ray_traverser.hpp>
#include <bvh/primitive_intersectors.hpp>

#include "base.hpp"
#include "world.hpp"
#include "config.hpp"
#include "game.hpp"
#include "utils/fs.hpp"
#include "utils/bvh/aabb.hpp"
#include "utils/bvh/obb.hpp"
#include "utils/math.hpp"
#include "utils/datastructs.hpp"
#include "utils/collision.hpp"
#include "utils/texture.hpp"
#include "components/positioncomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/lightcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/materialcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "systems/renderscenesystem.hpp"
#include "systems/renderguisystem.hpp"
#include "systems/keyboardsystem.hpp"
#include "systems/lidarsystem.hpp"
#include "systems/physicssystem.hpp"
#include "utils/random.hpp"
#include "exceptions/sdlexception.hpp"
#include "render/terrain.hpp"


using std::floor;
using std::vector;
using std::make_shared;
using std::shared_ptr;
using std::sin;
using std::cos;
using std::find_if;

using utils::RectPoints3D;

using ecs::Entity;

using utils::RectPoints3D;
using utils::log::Logger;
using utils::log::program_log_file_name;
using utils::fix_coords;
using utils::texture::genRbo;
using utils::texture::genTexture;
using utils::data::mapBinaryTree;

using coll::buildBVH;

size_t unique_id()
{
    static size_t idx = 0;
    return idx++;
}

World::World() : m_wasInit(false), m_initFromFile(false)
{
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
    if (!Config::hasKey("MinRectSize"))
        Config::addVal("MinRectSize", glm::vec3(0.0001f), "vec3");
    if (!Config::hasKey("PrismFreq"))
        Config::addVal("PrismFreq", glm::vec2(90.f, 45.f), "vec2");
    if (!Config::hasKey("PrismStartAngle"))
        Config::addVal("PrismStartAngle", glm::vec2(0.f, 0.f), "vec2");
    if (!Config::hasKey("LaserPos"))
        Config::addVal("LaserPos", glm::vec3(0.f), "vec3");
    if (!Config::hasKey("DrawLeafs"))
        Config::addVal("DrawLeafs", false, "bool");
    if (!Config::hasKey("EditMode"))
        Config::addVal("EditMode", false, "bool");
    if (!Config::hasKey("BackgroundColor"))
        Config::addVal("BackgroundColor", glm::vec4(0.2f, 0.f, 0.2f, 1.f), "vec4");
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
    if (!Config::hasKey("CellColor"))
        Config::addVal("CellColor", glm::vec4(1.f, 0.2f, 0.f, 1.f), "vec4");
    if (!Config::hasKey("CellBorderColor"))
        Config::addVal("CellBorderColor", glm::vec4(1.f, 1.f, 1.f, 1.f), "vec4");
    if (!Config::hasKey("ColoredLife"))
        Config::addVal("ColoredLife", false, "bool");
    if (!Config::hasKey("ShowCameraPos"))
        Config::addVal("ShowCameraPos", false, "bool");
    if (!Config::hasKey("EnableLight"))
        Config::addVal("EnableLight", false, "bool");
    if (!Config::hasKey("LightPos"))
        Config::addVal("LightPos", glm::vec3(0.f), "vec3");
    if (!Config::hasKey("LaserYaw"))
        Config::addVal("LaserYaw", 0.f, "float");
    if (!Config::hasKey("LaserPitch"))
        Config::addVal("LaserPitch", 0.f, "float");
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
    deallocate_scene();
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

    if (getGameState() == GameStates::STOP
        && getPrevGameState() != GameStates::STOP) {
        setGameState(GameStates::STOP);
    }

    if (getGameState() == GameStates::PLAY
        && getPrevGameState() == GameStates::PAUSE) {
        setGameState(GameStates::PLAY);
    }

    if (getGameState() == GameStates::PLAY
        && getPrevGameState() == GameStates::STOP) {
        setGameState(GameStates::PLAY);
//        init();
    }

    filter_entities();

    for (auto &[key, system]: m_systems)
        system->update(delta);
}

void World::init()
{
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

    if (m_wasInit)
        deallocate_scene();

    m_entities.clear();
    init_terrain();
    init_sprites();
    init_scene();

    m_wasInit = true;
}


void World::init(const std::string& init_file)
{
    m_initFromFile = true;
    m_initFile = init_file;
}

void World::init_from_file(const std::string& init_file)
{
    auto entities = utils::fs::loadSimJson(init_file);

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

    if (m_wasInit)
        deallocate_scene();

    m_entities.clear();
    for (auto& en: entities) {
        auto e = std::make_shared<ecs::Entity>(en);
        e->activate();
        m_entities.emplace(unique_id(), e);
    }

    init_scene();
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
    m_terrainID = unique_id();
    auto terrain = createEntity(m_terrainID);
    terrain->activate();
    terrain->addComponent<TerrainComponent>();

    auto terrainComp = terrain->getComponent<TerrainComponent>();

    terrainComp->terrain = std::make_shared<Terrain>
            (1000, 700, getResourcePath("terrain_height_map.jpg"),
             getResourcePath("rock_2_4w.jpg"), vec3(2000.f, 1.f, 2000.f));
}


void World::init_scene()
{
    m_sceneID = unique_id();
    auto scene = createEntity(m_sceneID);
    scene->activate();
    scene->addComponent<SceneComponent>();
    auto scene_comp = scene->getComponent<SceneComponent>();

    GLuint* scene_fb = &scene_comp->sceneBuffer;
    GLuint* scene_fbmsaa = &scene_comp->sceneBufferMSAA;
    GLuint* textureMSAA = &scene_comp->textureMSAA;
    GLuint* texture = &scene_comp->texture;
    GLuint* rbo = &scene_comp->rbo;

    int screen_width = utils::getWindowWidth<GLuint>(*Game::getWindow());
    int screen_height = utils::getWindowHeight<GLuint>(*Game::getWindow());

    bool msaa = Config::getVal<bool>("MSAA");
    if (msaa) {
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
    } else {
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

void World::deallocate_scene()
{
    auto scene_en = m_entities[m_sceneID];
    auto scene = scene_en->getComponent<SceneComponent>();
    if (scene->sceneBuffer != 0)
        glDeleteFramebuffers(1, &scene->sceneBuffer);
    if (scene->texture != 0)
        glDeleteTextures(1, &scene->texture);
    if (scene->rbo != 0)
        glDeleteRenderbuffers(1, &scene->rbo);
    if (scene->isMsaa) {
        if (scene->sceneBufferMSAA != 0)
            glDeleteFramebuffers(1, &scene->sceneBufferMSAA);
        if (scene->textureMSAA != 0)
            glDeleteTextures(1, &scene->textureMSAA);
    }
}

void World::init_sprites()
{
    auto lidarEn = createEntity(unique_id());
    lidarEn->activate();
    lidarEn->addComponents<PositionComponent, LidarComponent>();
    auto lidar_pos = lidarEn->getComponent<PositionComponent>();
    lidar_pos->pos = Config::getVal<glm::vec3>("LaserPos");
    auto lidarComp = lidarEn->getComponent<LidarComponent>();
    lidarComp->yaw = Config::getVal<GLfloat>("LaserYaw");
    lidarComp->pitch = Config::getVal<GLfloat>("LaserPitch");
    lidarComp->length = Config::getVal<GLfloat>("RayLength");
    lidarComp->freq = Config::getVal<vec2>("PrismFreq");
    lidarComp->start_angle = Config::getVal<vec2>("PrismStartAngle");
    lidarComp->density = Config::getVal<GLfloat>("DotDens");

    Lidar lidar(lidarComp->length, lidar_pos->pos, {0.f, 1.f, 0.f},
                lidarComp->yaw, lidarComp->pitch);
    lidarComp->pattern_points = lidar.risleyPattern2(
            lidarComp->freq, lidarComp->start_angle,
            lidarComp->density);

    utils::Random rand;
    auto min_rect = Config::getVal<glm::vec3>("MinRectSize");

    auto terrainEn = m_entities[m_terrainID];
    auto terrain = terrainEn->getComponent<TerrainComponent>()->terrain;

    GLfloat start_x, start_z;
//    start_x = start_z = terrain->getWorldWidth() / 2.f;
    start_x = start_z = 0.f;

    auto camera = FpsCamera::getInstance();
    camera->setPos({start_x, 200.f, start_z});

    vec3 man_size = {10.f, 10.f, 10.f};
    vec3 chair_size = {10.f, 10.f, 10.f};
    vec3 palm_size = {2.f, 2.f, 2.f};
    vec3 car_size = {2.f, 2.f, 2.f};
    vec3 house_size = {1.f, 1.f, 1.f};
    std::shared_ptr<Sprite> car_sprite, palm_sprite, house_sprite, man_sprite,
            chair_sprite;
    car_sprite = std::make_shared<Sprite>();
    palm_sprite = std::make_shared<Sprite>();
    house_sprite = std::make_shared<Sprite>();
    man_sprite = std::make_shared<Sprite>();
    chair_sprite = std::make_shared<Sprite>();
    car_sprite->addMesh(getResourcePath("ford_focus2.obj"), car_size);
    car_sprite->generateDataBuffer();
    palm_sprite->addMesh(getResourcePath("lowpolypalm.obj"), palm_size);
    palm_sprite->generateDataBuffer();
    house_sprite->addMesh(getResourcePath("spah9lvl.obj"), house_size);
    house_sprite->generateDataBuffer();
    man_sprite->addMesh(getResourcePath("human_female.obj"), man_size);
    man_sprite->generateDataBuffer();
    chair_sprite->addMesh(getResourcePath("Wooden_Chair/Wooden_Chair.obj"),
                          chair_size);
    chair_sprite->generateDataBuffer();

    auto chair_en = createEntity(unique_id());
    chair_en->activate();
    chair_en->addComponents<SpriteComponent, PositionComponent,
            SelectableComponent, BVHComponent, MaterialComponent>();
    auto chair_sprite_comp = chair_en->getComponent<SpriteComponent>();
    chair_sprite_comp->sprite = chair_sprite;
    auto pos_chair = chair_en->getComponent<PositionComponent>();
    pos_chair->pos.x = 40.f + start_x;
    pos_chair->pos.z = 400.f + start_z;
    pos_chair->pos.y = terrain->getAltitude(
            {pos_chair->pos.x, pos_chair->pos.z});
    auto triangles = chair_sprite->getTriangles()[0];
    mat4 chair_transform = math::createTransform(pos_chair->pos, 0,
                                                 {0.f, 1.f, 1.f}, chair_size);
    triangles = math::transformTriangles(triangles, chair_transform);
    chair_en->getComponent<BVHComponent>()->bvh_tree = coll::buildBVH(
            triangles);
    chair_en->getComponent<BVHComponent>()->triangles = std::make_shared<std::vector<Triangle>>(
            triangles);
    auto material = chair_en->getComponent<MaterialComponent>();
    material->ambient = vec3(1.f);
    material->diffuse = vec3(0.8f);
    material->specular = vec3(0.f);
    material->shininess = 32.f;

    auto man_en = createEntity(unique_id());
    man_en->activate();
    man_en->addComponents<SpriteComponent, PositionComponent,
            SelectableComponent, BVHComponent, MaterialComponent>();
    auto man_sprite_comp = man_en->getComponent<SpriteComponent>();
    man_sprite_comp->sprite = man_sprite;
    auto pos_man = man_en->getComponent<PositionComponent>();
    pos_man->pos.x = 40.f + start_x;
    pos_man->pos.z = 300 + start_z;
    pos_man->pos.y = terrain->getAltitude({pos_man->pos.x, pos_man->pos.z});
    triangles = man_sprite->getTriangles()[0];
    mat4 man_transform = math::createTransform(pos_man->pos, 0, {0.f, 1.f, 1.f},
                                               man_size);
    triangles = math::transformTriangles(triangles, man_transform);
    man_en->getComponent<BVHComponent>()->bvh_tree = coll::buildBVH(triangles);
    man_en->getComponent<BVHComponent>()->triangles = std::make_shared<std::vector<Triangle>>(
            triangles);
    material = man_en->getComponent<MaterialComponent>();
    material->ambient = vec3(1.f);
    material->diffuse = vec3(0.8f);
    material->specular = vec3(0.f);
    material->shininess = 32.f;

    auto light_en = createEntity(unique_id());
    light_en->activate();
    light_en->addComponents<LightComponent, SpriteComponent>();

    auto light_comp = light_en->getComponent<LightComponent>();
    light_comp->pos = camera->getPos();
    light_comp->ambient = vec3(0.1f);
    light_comp->diffuse = vec3(0.5f);
    light_comp->specular = vec3(0.5f);
    std::shared_ptr<Sprite> light_sprite = std::make_shared<Sprite>();
    light_sprite->addMesh(getResourcePath("DiscoBall.obj"), 2.f, 2.f, 2.f);
    light_sprite->generateDataBuffer();
    light_en->getComponent<SpriteComponent>()->sprite = light_sprite;

    Config::addVal("LightPos", camera->getPos(), "vec3");

//    auto tree = coll::buildBVH(light_sprite->getVertices()[0], min_rect);
//    light_en->getComponent<BVHComponent>()->vbh_tree = tree;
//    light_en->getComponent<BVHComponent>()->vbh_tree_model =
//            coll::buildBVH(light_sprite->getVertices()[0], min_rect);
//    mapBinaryTree(light_en->getComponent<BVHComponent>()->vbh_tree,
//                  [light_comp, light_sprite](shared_ptr<RectPoints3D> bound_rect)
//                  {
//                      *bound_rect = coll::AABBtoWorldSpace(
//                              *bound_rect, {0.f, 0.f, 0.f}, 0.f, light_comp->pos, *light_sprite
//                      );
//                  });

    for (size_t i = 0; i < 5; ++i) {
        auto left = createEntity(unique_id());
        left->activate();
        left->addComponents<SpriteComponent, PositionComponent,
                SelectableComponent, BVHComponent, MaterialComponent>();
        auto sprite_left = left->getComponent<SpriteComponent>();
        sprite_left->sprite = palm_sprite;
        auto pos_left = left->getComponent<PositionComponent>();
        pos_left->pos.x = i * 30.f + start_x;
        pos_left->pos.z = 0 + start_z;
        pos_left->pos.y = terrain->getAltitude({pos_left->pos.x, pos_left->pos.z});
        triangles = palm_sprite->getTriangles()[0];
        mat4 palm_transform = math::createTransform(pos_left->pos, pos_left->angle, pos_left->rot_axis,
                                                    palm_size);
        triangles = math::transformTriangles(triangles, palm_transform);
        left->getComponent<BVHComponent>()->bvh_tree = coll::buildBVH(triangles);
        left->getComponent<BVHComponent>()->triangles = std::make_shared<std::vector<Triangle>>(
                triangles);
        material = left->getComponent<MaterialComponent>();
        material->ambient = vec3(1.f);
        material->diffuse = vec3(0.8f);
        material->specular = vec3(0.f);
        material->shininess = 32.f;

        auto right = createEntity(unique_id());
        right->activate();
        right->addComponents<SpriteComponent, PositionComponent,
                SelectableComponent, BVHComponent, MaterialComponent>();
        auto sprite_right = right->getComponent<SpriteComponent>();
        sprite_right->sprite = palm_sprite;
        auto pos_right = right->getComponent<PositionComponent>();
        pos_right->pos.x = i * 30.f + start_x;
        pos_right->pos.z = 30.f + start_z;
        pos_right->pos.y = terrain->getAltitude({pos_right->pos.x, pos_right->pos.z});
        triangles = palm_sprite->getTriangles()[0];
        palm_transform = math::createTransform(pos_right->pos, pos_right->angle, pos_right->rot_axis,
                                               palm_size);
        triangles = math::transformTriangles(triangles, palm_transform);
        right->getComponent<BVHComponent>()->bvh_tree = coll::buildBVH(triangles);
        right->getComponent<BVHComponent>()->triangles = std::make_shared<std::vector<Triangle>>(
                triangles);

        material = right->getComponent<MaterialComponent>();
        material->ambient = vec3(1.f);
        material->diffuse = vec3(0.8f);
        material->specular = vec3(0.f);
        material->shininess = 32.f;

        auto car = createEntity(unique_id());
        car->activate();
        car->addComponents<SpriteComponent, PositionComponent,
                SelectableComponent, BVHComponent, MaterialComponent>();
        auto car_sprite_comp = car->getComponent<SpriteComponent>();
        car_sprite_comp->sprite = car_sprite;
        auto car_pos = car->getComponent<PositionComponent>();
        car_pos->pos.x = i * 30.f + start_x;
        car_pos->pos.z = rand.generateu(30.f, 40.f) + start_z;
        car_pos->pos.y = terrain->getAltitude({car_pos->pos.x, car_pos->pos.z});
        car_pos->angle = -glm::half_pi<GLfloat>();
        car_pos->rot_axis = vec3(0.f, 1.f, 0.f);
        triangles = palm_sprite->getTriangles()[0];
        auto car_transform = math::createTransform(car_pos->pos, car_pos->angle,
                                                   car_pos->rot_axis, car_size);
        triangles = math::transformTriangles(triangles, car_transform);
        car->getComponent<BVHComponent>()->bvh_tree = coll::buildBVH(triangles);
        car->getComponent<BVHComponent>()->triangles = std::make_shared<std::vector<Triangle>>(
                triangles);
        material = car->getComponent<MaterialComponent>();
        material->ambient = vec3(1.f);
        material->diffuse = vec3(1.f);
        material->specular = vec3(0.5f);
        material->shininess = 32.f;


        auto house = createEntity(unique_id());
        house->activate();
        house->addComponents<SpriteComponent, PositionComponent,
                SelectableComponent, BVHComponent, MaterialComponent>();
        auto house_sprite_comp = house->getComponent<SpriteComponent>();
        house_sprite_comp->sprite = house_sprite;
        auto house_pos = house->getComponent<PositionComponent>();
        house_pos->pos.x = i * 30.f + start_x;
        house_pos->pos.z = rand.generateu(30.f, 40.f) + start_z;
        house_pos->pos.y = terrain->getAltitude({house_pos->pos.x, house_pos->pos.z});
        house_pos->angle = -glm::half_pi<GLfloat>();
        house_pos->rot_axis = vec3(0.f, 1.f, 0.f);
        triangles = palm_sprite->getTriangles()[0];
        auto house_transform = math::createTransform(house_pos->pos, house_pos->angle,
                                                     house_pos->rot_axis, house_size);
        triangles = math::transformTriangles(triangles, house_transform);
        house->getComponent<BVHComponent>()->bvh_tree = coll::buildBVH(triangles);
        house->getComponent<BVHComponent>()->triangles = std::make_shared<std::vector<Triangle>>(
                triangles);
        material = house->getComponent<MaterialComponent>();
        material->ambient = vec3(1.f);
        material->diffuse = vec3(1.f);
        material->specular = vec3(0.5f);
        material->shininess = 32.f;
    }
}

