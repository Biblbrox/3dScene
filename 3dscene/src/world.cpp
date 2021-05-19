#include <memory>
#include <boost/format.hpp>
#include <imgui.h>
#include <imgui_impl_sdl.h>
#include <imgui_impl_opengl3.h>
#include <iostream>
#include <thread>

#include "base.hpp"
#include "world.hpp"
#include "config.hpp"
#include "game.hpp"
#include "utils/math.hpp"
#include "utils/datastructs.hpp"
#include "utils/collision.hpp"
#include "components/positioncomponent.hpp"
#include "components/cellcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "systems/renderersystem.hpp"
#include "components/textcomponent.hpp"
#include "systems/keyboardsystem.hpp"
#include "systems/animationsystem.hpp"
#include "systems/physicssystem.hpp"
#include "systems/particlerendersystem.hpp"
#include "utils/random.hpp"
#include "exceptions/sdlexception.hpp"
#include "exceptions/glexception.hpp"
#include "lifeprogram.hpp"

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

const GLfloat cubeSize = 20.f;

size_t unique_id()
{
    static size_t idx = 0;
    return idx++;
}

World::World() : m_wasInit(false)
{
    if (!Config::hasKey("DrawTextures"))
        Config::addVal("DrawTextures", false, "bool");
    if (!Config::hasKey("TreeLevelShow"))
        Config::addVal("TreeLevelShow", 0, "int");
    if (!Config::hasKey("MinRectSize"))
        Config::addVal("MinRectSize", glm::vec3(0.001f), "vec3");
    if (!Config::hasKey("BackgroundColor"))
        Config::addVal("BackgroundColor", glm::vec4(0.2f, 0.f, 0.2f, 1.f), "vec4");
    if (!Config::hasKey("InverseRotation"))
        Config::addVal("InverseRotation", false, "bool");
    if (!Config::hasKey("MSAA"))
        Config::addVal("MSAA", false, "bool");
    if (!Config::hasKey("MSAASamples"))
        Config::addVal("MSAASamples", 4, "int");
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

    if (getGameState() == GameStates::PAUSE
        && !m_timer.isPaused()) {
        m_timer.pause();
        std::cout << "Timer paused" << std::endl;
    }

    if (getGameState() == GameStates::STOP
        && getPrevGameState() != GameStates::STOP) {
        setGameState(GameStates::STOP);
        m_timer.stop();
        std::cout << "Timer stopped" << std::endl;
    }

    if (getGameState() == GameStates::PLAY
        && getPrevGameState() == GameStates::PAUSE) {
        setGameState(GameStates::PLAY);
        m_timer.unpause();
        std::cout << "Timer unpaused" << std::endl;
    }

    if (getGameState() == GameStates::PLAY
        && getPrevGameState() == GameStates::STOP) {
        setGameState(GameStates::PLAY);
        m_timer.start();
        // reinit field
        init();
        std::cout << "Timer started" << std::endl;
    }

    if (getGameState() == GameStates::PLAY) {
        GLfloat stepTime = Config::getVal<GLfloat>("StepTime");
        if (m_timer.getTicks() / 1000.f > stepTime) {
            m_timer.stop();
            m_timer.start();
            std::cout << "Field updated" << std::endl;
        }
    }

    filter_entities();
    for (auto &system: m_systems)
        system.second->update(delta);
}

void World::init()
{
    m_systems.clear();
    createSystem<KeyboardSystem>();
    createSystem<RendererSystem>();
    createSystem<AnimationSystem>();
    createSystem<PhysicsSystem>();
    createSystem<ParticleRenderSystem>();

    init_sprites();

    m_wasInit = true;
}

void World::filter_entities()
{
    for (auto it = m_entities.begin(); it != m_entities.end();)
        it = !it->second->isActivate() ? m_entities.erase(it) : ++it;
}

void World::init_sprites()
{
    m_entities.clear();
    utils::Random rand;

    std::shared_ptr<Sprite> car_sprite, palm_sprite;
    car_sprite = std::make_shared<Sprite>();
    palm_sprite = std::make_shared<Sprite>();
    car_sprite->addTexture(getResourcePath("ford_focus2.obj"), 40, 40, 40);
    car_sprite->generateDataBuffer();
    palm_sprite->addTexture(getResourcePath("lowpolypalm.obj"), 40, 40, 40);
    palm_sprite->generateDataBuffer();
    auto min_rect = Config::getVal<glm::vec3>("MinRectSize");
    for (size_t i = 0; i < 5; ++i) {
        auto en_left = createEntity(unique_id());
        en_left->activate();
        en_left->addComponent<SpriteComponent>();
        en_left->addComponent<PositionComponent>();
        auto sprite_left = en_left->getComponent<SpriteComponent>();
        sprite_left->sprite = palm_sprite;
        auto pos_left = en_left->getComponent<PositionComponent>();
        pos_left->x = i * 400;
        pos_left->y = 0;
        pos_left->z = 0;

        auto tree = coll::buildBVH(sprite_left->sprite->getVertices()[0], min_rect);
        en_left->addComponent<BVHComponent>();
        en_left->getComponent<BVHComponent>()->vbh_tree = tree;

        auto en_right = createEntity(unique_id());
        en_right->activate();
        en_right->addComponent<SpriteComponent>();
        en_right->addComponent<PositionComponent>();
        auto sprite_right = en_right->getComponent<SpriteComponent>();
        sprite_right->sprite = palm_sprite;
        auto pos_right = en_right->getComponent<PositionComponent>();
        pos_right->x = i * 400;
        pos_right->y = 0;
        pos_right->z = 1000;
        tree = coll::buildBVH(sprite_right->sprite->getVertices()[0], min_rect);
        en_right->addComponent<BVHComponent>();
        en_right->getComponent<BVHComponent>()->vbh_tree = tree;

//        auto car = createEntity(unique_id());
//        car->activate();
//        car->addComponent<SpriteComponent>();
//        car->addComponent<PositionComponent>();
//        auto car_sprite_comp = car->getComponent<SpriteComponent>();
//        car_sprite_comp->sprite = car_sprite;
//        auto car_pos = car->getComponent<PositionComponent>();
//        car_pos->x = i * 400;
//        car_pos->y = 0;
//        car_pos->z = rand.generateu(150, 350);
//        car_pos->angle = -glm::half_pi<GLfloat>();
//        car_pos->rot_axis = glm::vec3(0.f, 1.f, 0.f);
//        tree = coll::buildBVH(car_sprite_comp->sprite->getVertices()[0], min_rect);
//        car->addComponent<BVHComponent>();
//        car->getComponent<BVHComponent>()->vbh_tree = tree;
    }
}
