#include <GL/glew.h>
#include <filesystem>
#include <fstream>
#include <glm/glm.hpp>
#include <json/json.hpp>
#include <glm/exponential.hpp>
#include <boost/archive/text_oarchive.hpp>
#include <boost/archive/text_iarchive.hpp>

#include "components/positioncomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/lightcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/materialcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "utils/fs.hpp"

using glm::vec3;

void
utils::fs::saveLidarDataCart(const std::string &data_file,
                             const std::string &res_file)
{
    const auto copyOptions = std::filesystem::copy_options::overwrite_existing;
    std::filesystem::copy(data_file, res_file, copyOptions);
}

void utils::fs::saveLidarDataSphere(const std::string &data_file,
                                    const std::string &res_file,
                                    const glm::vec3 &lidar_pos)
{
    std::ifstream in(data_file);
    std::ofstream out(res_file, std::ios::out);

    std::string line;
    while (std::getline(in, line)) {
        std::istringstream iss(line);
        vec3 point;
        if (!(iss >> point.x >> point.y >> point.z)) {
            // Error
        }

        vec3 p = point - lidar_pos;
        GLfloat rho = glm::length(p);
        GLfloat alpha = 1.f / glm::tan(p.y / p.x);
        GLfloat gamma = 1.f / glm::sin(p.z / rho);

        if (!(out << rho << ", " << alpha << ", " << gamma << "\n")) {
            // Error
        }
    }

    in.close();
    out.close();
}

/*void utils::fs::saveSimSerial(const std::string &file_name, EntMap& entities)
{
    std::ofstream out(file_name, std::ios::out);
    boost::serialization::Payload obj;
    for (auto& [_, en]: entities) {
        boost::archive::text_oarchive oa(out);
        oa << *en;
    }

    out.close();
}*/

std::vector<ecs::Entity> utils::fs::loadSimSerial(const std::string &file_name)
{
    std::vector<ecs::Entity> res;
    boost::serialization::Payload obj;

    std::ifstream in(file_name);
    boost::archive::text_iarchive ia(in);
    while (in.peek() != EOF) {
        ecs::Entity en;
        ia >> en;
    }
}

using nlohmann::json;

void utils::fs::saveSimJson(const std::string &file_name,
                            std::unordered_map<size_t, std::shared_ptr<Entity>> &entities)
{
    using ecs::types::type_id;
    json j;
    j["Entities"] = json::array();
    for (auto& [_, en]: entities) {
        for (auto&[type, comp_gen]: en->getComponents()) {
            if (type == type_id<PositionComponent>) {
                auto comp = en->getComponent<PositionComponent>();
                json comp_obj = json::object({{"pos", {comp->pos.x, comp->pos.y, comp->pos.z}},
                                              {"angle", comp->angle},
                                              {"rot", {comp->rot_axis.x, comp->rot_axis.y, comp->rot_axis.z}}});
                j["Entities"].push_back(comp_obj);
            } else if (type == type_id<SpriteComponent>) {
//                auto comp = en->getComponent<SpriteComponent>();
//                comp->sprite->m_objFiles
//                json comp_obj = json::object({{"pos", {comp->pos.x, comp->pos.y, comp->pos.z}},
//                                              {"angle", comp->angle},
//                                              {"rot", {comp->rot_axis.x, comp->rot_axis.y, comp->rot_axis.z}}});
//                j["Entities"].push_back(comp_obj);
            } else if (type == type_id<BVHComponent>) {
                auto comp = en->getComponent<BVHComponent>();

            } else if (type == type_id<LidarComponent>) {
                auto comp = en->getComponent<LidarComponent>();

            } else if (type == type_id<LightComponent>) {
                auto comp = en->getComponent<LightComponent>();

            } else if (type == type_id<MaterialComponent>) {
                auto comp = en->getComponent<MaterialComponent>();

            } else if (type == type_id<SelectableComponent>) {
                auto comp = en->getComponent<SelectableComponent>();

            } else if (type == type_id<TerrainComponent>) {
                auto comp = en->getComponent<TerrainComponent>();

            }
        }
    }
    std::cout << j.dump() << std::endl;
}

std::vector<ecs::Entity> utils::fs::loadSimJson(const std::string &file_name)
{

}


