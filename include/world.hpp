#ifndef WORLD_HPP
#define WORLD_HPP

#include <unordered_map>
#include <memory>
#include <string>
#include <SDL_ttf.h>
#include <boost/multi_array.hpp>

#include "utils/fps.hpp"
#include "utils/timer.hpp"
#include "utils/utils.hpp"
#include "ecs/basesystem.hpp"
#include "ecs/entity.hpp"
#include "view/arcballcamera.hpp"
#include "utils/audio.hpp"
#include "ecs/ecsmanager.hpp"
#include "utils/threadpool.hpp"

using utils::time::Timer;

class World: public ecs::EcsManager
{
public:
    World();
    ~World();

    void init() override;
    void init(const std::string& init_file) override;
    void update(size_t delta) override;

private:
    utils::Fps m_fps;

    void init_sprites();
    void init_scene();
    void init_terrain();
    void init_imgui();
    void init_skybox();
    void init_from_file(const std::string& json_file);

    void deallocate_imgui();

    /**
     * Remove all entities that not alive
     */
    void filter_entities();


    bool m_wasInit;
    bool m_initFromFile;
    GLuint m_terrainID;
    GLuint m_sceneID;

    std::string m_initFile;
};

#endif //WORLD_HPP
