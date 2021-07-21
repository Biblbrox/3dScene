#ifndef FS_HPP
#define FS_HPP

#include <glm/vec3.hpp>
#include <boost/serialization/split_free.hpp>
#include <boost/serialization/vector.hpp>
#include <boost/serialization/string.hpp>
#include <boost/serialization/variant.hpp>
#include <variant>

#include "ecs/entity.hpp"
#include "config.hpp"
#include "game.hpp"
#include "components/positioncomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/lightcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/materialcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/terraincomponent.hpp"

namespace utils::fs
{

    using ecs::Entity;

    void saveSimJson(const std::string &file_name,
                     std::unordered_map<size_t, std::shared_ptr<Entity>>& entities);

    std::vector<ecs::Entity> loadSimJson(const std::string& file_name);

    void saveLidarDataCart(const std::string &data_file,
                           const std::string &res_file);

    void
    saveLidarDataSphere(const std::string &data_file, const std::string &res_file,
                        const glm::vec3 &lidar_pos);
}

#endif //FS_HPP
