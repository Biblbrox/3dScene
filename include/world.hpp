#ifndef MOONLANDER_WORLD_HPP
#define MOONLANDER_WORLD_HPP

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
#include "components/cellcomponent.hpp"

using utils::time::Timer;

struct CellState
{
    bool alive;
    glm::vec4 color;
};

class World: public ecs::EcsManager
{
public:
    World();
    ~World();

    void init() override;
    void update(size_t delta) override;

private:
    Timer m_timer;
    utils::Fps m_fps;

    void init_sprites();

    /**
     * Remove all entities that not alive
     */
    void filter_entities();


    bool m_wasInit;
};

#endif //MOONLANDER_WORLD_HPP
