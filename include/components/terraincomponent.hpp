#ifndef TERRAINCOMPONENT_HPP
#define TERRAINCOMPONENT_HPP

#include "render/terrain.hpp"
#include "ecs/component.hpp"

struct TerrainComponent : ecs::Component
{
    std::shared_ptr<Terrain> terrain = nullptr;
};

#endif //TERRAINCOMPONENT_HPP
