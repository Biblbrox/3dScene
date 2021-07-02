#ifndef FS_HPP
#define FS_HPP

#include "ecs/entity.hpp"

using ecs::Entity;

void saveSimulationJson(const std::string& file_name,
                        const std::vector<Entity>& entities);

#endif //FS_HPP
