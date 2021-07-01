#include <memory>
#include <boost/format.hpp>
#include <imgui.h>
#include <imgui_impl_sdl.h>
#include <imgui_impl_opengl3.h>

#include "base.hpp"
#include "world.hpp"
#include "config.hpp"
#include "game.hpp"
#include "utils/math.hpp"
#include "utils/datastructs.hpp"
#include "utils/collision.hpp"
#include "utils/texture.hpp"
#include "components/positioncomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/terraincomponent.hpp"
#include "systems/renderscenesystem.hpp"
#include "systems/renderguisystem.hpp"
#include "systems/keyboardsystem.hpp"
#include "systems/lidarsystem.hpp"
#include "systems/animationsystem.hpp"
#include "systems/physicssystem.hpp"
#include "systems/particlerendersystem.hpp"
#include "utils/random.hpp"
#include "exceptions/sdlexception.hpp"
#include "render/terrain.hpp"


using utils::log::Logger;
using utils::log::program_log_file_name;
using boost::format;
using std::floor;
using std::vector;
using std::make_shared;
using std::sin;
using std::cos;
using std::find_if;
using utils::fix_coords;
using utils::texture::genRbo;
using utils::texture::genTexture;

size_t unique_id()
{
    static size_t idx = 0;
    return idx++;
}

World::World() : m_wasInit(false)
{
    if (!Config::hasKey("DrawTextures"))
        Config::addVal("DrawTextures", false, "bool");
    if (!Config::hasKey("DrawBoundingBoxes"))
        Config::addVal("DrawBoundingBoxes", false, "bool");
    if (!Config::hasKey("DrawRays"))
        Config::addVal("DrawRays", false, "bool");
    if (!Config::hasKey("CheckCollision"))
        Config::addVal("CheckCollision", false, "bool");
    if (!Config::hasKey("TreeLevelShow"))
        Config::addVal("TreeLevelShow", 0, "int");
    if (!Config::hasKey("MinRectSize"))
        Config::addVal("MinRectSize", glm::vec3(0.001f), "vec3");
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
}

World::~World()
{
    ImGui_ImplOpenGL3_Shutdown();
    ImGui_ImplSDL2_Shutdown();
    ImGui::DestroyContext();
}

void World::update(size_t delta)
{
    if constexpr (debug)
        m_fps.update();

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
        init();
    }

    filter_entities();
    for (auto &system: m_systems)
        system.second->update(delta);
}

void World::init()
{
    m_systems.clear();
    createSystem<KeyboardSystem>();
    createSystem<RenderSceneSystem>();
    createSystem<AnimationSystem>();
    createSystem<PhysicsSystem>();
    createSystem<ParticleRenderSystem>();
    createSystem<RenderGuiSystem>();
    createSystem<LidarSystem>();

    m_entities.clear();
    init_terrain();
    init_sprites();
    init_scene();

    m_wasInit = true;
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
            (1000, 1000, 30, getResourcePath("heightmap.png"),
             getResourcePath("terrain.png"), 2500.f, glm::vec3(0.f));
}


void World::init_scene()
{
    auto scene = createEntity(unique_id());
    scene->activate();
    scene->addComponent<SceneComponent>();
    auto scene_comp = scene->getComponent<SceneComponent>();

    GLuint* scene_fb = &scene_comp->sceneBuffer;
    GLuint* scene_fbmsaa = &scene_comp->sceneBufferMSAA;
    GLuint* textureMSAA = &scene_comp->textureMSAA;
    GLuint* texture = &scene_comp->texture;

    int screen_width = utils::getWindowWidth<GLuint>(*Game::getWindow());
    int screen_height = utils::getWindowHeight<GLuint>(*Game::getWindow());

    bool msaa = Config::getVal<bool>("MSAA");
    if (msaa) {
        // Generate multisampled framebuffer
        glGenFramebuffers(1, scene_fbmsaa);
        glBindFramebuffer(GL_FRAMEBUFFER, *scene_fbmsaa);
        // Create multisampled texture attachment
        *textureMSAA = genTexture(screen_width, screen_height, true);
        GLuint rbo = genRbo(screen_width, screen_height, true);
        glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
                               GL_TEXTURE_2D_MULTISAMPLE, *textureMSAA, 0);
        glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_STENCIL_ATTACHMENT,
                                  GL_RENDERBUFFER, rbo);
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
        GLuint rbo = genRbo(screen_width, screen_height);
        glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
                               GL_TEXTURE_2D, *texture, 0);
        glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_STENCIL_ATTACHMENT,
                                  GL_RENDERBUFFER, rbo);
    }

    CHECK_FRAMEBUFFER_COMPLETE();
}

void World::init_sprites()
{
    utils::Random rand;

    auto terrainEn = m_entities[m_terrainID];
    auto terrain = terrainEn->getComponent<TerrainComponent>()->terrain;

    std::shared_ptr<Sprite> car_sprite, palm_sprite, house_sprite;
    car_sprite = std::make_shared<Sprite>();
    palm_sprite = std::make_shared<Sprite>();
    house_sprite = std::make_shared<Sprite>();
    car_sprite->addTexture(getResourcePath("ford_focus2.obj"), 40, 40, 40);
    car_sprite->generateDataBuffer();
    palm_sprite->addTexture(getResourcePath("lowpolypalm.obj"), 40, 40, 40);
    palm_sprite->generateDataBuffer();
//    house_sprite->addTexture(getResourcePath("house8.obj"), 40, 40, 40);
//    house_sprite->generateDataBuffer();
    auto min_rect = Config::getVal<glm::vec3>("MinRectSize");
    for (size_t i = 0; i < 5; ++i) {
        auto en_left = createEntity(unique_id());
        en_left->activate();
        en_left->addComponent<SpriteComponent>();
        en_left->addComponent<PositionComponent>();
        auto sprite_left = en_left->getComponent<SpriteComponent>();
        sprite_left->sprite = palm_sprite;
        auto pos_left = en_left->getComponent<PositionComponent>();
        pos_left->pos.x = i * 400;
        pos_left->pos.z = 0;
        pos_left->pos.y = terrain->getAltitude({pos_left->pos.x, pos_left->pos.z});
        auto tree = coll::buildBVH(sprite_left->sprite->getVertices()[0], min_rect);
        en_left->addComponent<BVHComponent>();
        en_left->getComponent<BVHComponent>()->vbh_tree = tree;
        en_left->getComponent<BVHComponent>()->vbh_tree_model = coll::buildBVH(sprite_left->sprite->getVertices()[0], min_rect);
        utils::data::mapBinaryTree(en_left->getComponent<BVHComponent>()->vbh_tree, [pos_left, sprite_left](std::shared_ptr<utils::RectPoints3D> bound_rect)
        {
            *bound_rect = coll::AABBtoWorldSpace(
                    *bound_rect, pos_left->rot_axis, pos_left->angle,
                    pos_left->pos, *sprite_left->sprite
            );
        });

        auto en_right = createEntity(unique_id());
        en_right->activate();
        en_right->addComponent<SpriteComponent>();
        en_right->addComponent<PositionComponent>();
        auto sprite_right = en_right->getComponent<SpriteComponent>();
        sprite_right->sprite = palm_sprite;
        auto pos_right = en_right->getComponent<PositionComponent>();
        pos_right->pos.x = i * 400;
        pos_right->pos.z = 1000;
        pos_right->pos.y = terrain->getAltitude({pos_right->pos.x, pos_right->pos.z});
        tree = coll::buildBVH(sprite_right->sprite->getVertices()[0], min_rect);
        en_right->addComponent<BVHComponent>();
        en_right->getComponent<BVHComponent>()->vbh_tree = tree;
        en_right->getComponent<BVHComponent>()->vbh_tree_model = coll::buildBVH(sprite_right->sprite->getVertices()[0], min_rect);
        utils::data::mapBinaryTree(en_right->getComponent<BVHComponent>()->vbh_tree, [pos_right, sprite_right](std::shared_ptr<utils::RectPoints3D> bound_rect)
        {
            *bound_rect = coll::AABBtoWorldSpace(
                    *bound_rect, pos_right->rot_axis, pos_right->angle,
                    pos_right->pos, *sprite_right->sprite
            );
        });

        auto car = createEntity(unique_id());
        car->activate();
        car->addComponent<SpriteComponent>();
        car->addComponent<PositionComponent>();
        auto car_sprite_comp = car->getComponent<SpriteComponent>();
        car_sprite_comp->sprite = car_sprite;
        auto car_pos = car->getComponent<PositionComponent>();
        car_pos->pos.x = i * 400;
        car_pos->pos.z = rand.generateu(150, 350);
        car_pos->pos.y = terrain->getAltitude({car_pos->pos.x, car_pos->pos.z});
        car_pos->angle = -glm::half_pi<GLfloat>();
        car_pos->rot_axis = glm::vec3(0.f, 1.f, 0.f);
        tree = coll::buildBVH(car_sprite_comp->sprite->getVertices()[0], min_rect);
        car->addComponent<BVHComponent>();
        car->getComponent<BVHComponent>()->vbh_tree = tree;
        car->getComponent<BVHComponent>()->vbh_tree_model = coll::buildBVH(car_sprite_comp->sprite->getVertices()[0], min_rect);
        utils::data::mapBinaryTree(car->getComponent<BVHComponent>()->vbh_tree, [car_pos, car_sprite_comp](std::shared_ptr<utils::RectPoints3D> bound_rect)
        {
            *bound_rect = coll::AABBtoWorldSpace(
                    *bound_rect, car_pos->rot_axis, car_pos->angle,
                    car_pos->pos, *car_sprite_comp->sprite
            );
        });

        /*auto house = createEntity(unique_id());
        house->activate();
        house->addComponent<SpriteComponent>();
        house->addComponent<PositionComponent>();
        auto house_sprite_comp = house->getComponent<SpriteComponent>();
        house_sprite_comp->sprite = house_sprite;
        auto house_pos = house->getComponent<PositionComponent>();
        house_pos->x = (i + 6) * 400;
        house_pos->y = 0;
        house_pos->z = rand.generateu(150, 350);
        house_pos->angle = -glm::half_pi<GLfloat>();
        house_pos->rot_axis = glm::vec3(0.f, 1.f, 0.f);
        tree = coll::buildBVH(house_sprite_comp->sprite->getVertices()[0], min_rect);
        house->addComponent<BVHComponent>();
        house->getComponent<BVHComponent>()->vbh_tree = tree;*/
    }
}

void World::deallocate_scene()
{

}