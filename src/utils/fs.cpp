#include <GL/glew.h>
#include <filesystem>
#include <fstream>
#include <glm/glm.hpp>
#include <json/json.hpp>
#include <glm/exponential.hpp>
#include <boost/archive/text_oarchive.hpp>
#include <boost/archive/text_iarchive.hpp>
#include <initializer_list>

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

void utils::fs::saveSimSerial(const std::string &file_name,
                              std::unordered_map<size_t, std::shared_ptr<Entity>>& entities)
{
    std::ofstream out(file_name, std::ios::out);
    boost::serialization::Payload obj;
    for (auto& [_, en]: entities) {
        boost::archive::text_oarchive oa(out);
        oa << *en;
    }

    out.close();
}

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
namespace utils::fs
{
    void to_json(json &j, const vec3 &v);
    void from_json(const json& j, vec3& v);
}

void utils::fs::to_json(json& j, const vec3& v)
{
    j = json::array({v.x, v.y, v.z});
}

void utils::fs::from_json(const json& j, vec3& v)
{
    v.x = j[0];
    v.y = j[1];
    v.z = j[2];
}

void utils::fs::saveSimJson(const std::string &file_name,
                            std::unordered_map<size_t, std::shared_ptr<Entity>> &entities)
{
    using ecs::types::type_id;
    json j;
    j["Entities"] = json::array();
    for (auto& [_, en]: entities) {
        std::string key =  std::to_string(_);
        json en_obj = json::object();
        // Component list
        en_obj[key] = json::array();
        for (auto&[type, comp_gen]: en->getComponents()) {
            if (type == type_id<PositionComponent>) {
                auto comp = en->getComponent<PositionComponent>();
                json comp_obj = json::object();
                comp_obj["PositionComponent"] = json::array();

                json pos_obj = json::object();
                pos_obj["pos"] = json::array({comp->pos.x, comp->pos.y, comp->pos.z});
                comp_obj["PositionComponent"].push_back(pos_obj);

                json ang_obj = json::object();
                ang_obj["angle"] = comp->angle;
                comp_obj["PositionComponent"].push_back(ang_obj);

                json rot_obj = json::object();
                pos_obj["pos"] = json::array({comp->rot_axis.x, comp->rot_axis.y, comp->rot_axis.z});
                comp_obj["PositionComponent"].push_back(rot_obj);

                en_obj[key].push_back(comp_obj);
            } else if (type == type_id<SpriteComponent>) {
                auto comp = en->getComponent<SpriteComponent>();
                auto sprite = comp->sprite;

                json comp_obj = json::object();
                comp_obj["SpriteComponent"] = json::array();

                json files_obj = json::object();
                files_obj["obj_files"] = json(sprite->getObjFiles());
                comp_obj["SpriteComponent"].push_back(files_obj);

                json sizes_obj = json::object();
                json sizes_array = json::array();
                for (auto size: sprite->getSizes())
                    sizes_array.push_back({size.x, size.y, size.z});
                sizes_obj["sizes"] = json(sizes_array);
                comp_obj["SpriteComponent"].push_back(sizes_obj);

                en_obj[key].push_back(comp_obj);
            } else if (type == type_id<BVHComponent>) {
                auto comp = en->getComponent<BVHComponent>();
                auto min_rect = comp->min_rect;

                json comp_obj = json::object();
                comp_obj["BVHComponent"] = json::array();
                json min_rect_obj = json::object();
                min_rect_obj["min_rect"] = json({min_rect.x, min_rect.y, min_rect.z});
                comp_obj["BVHComponent"].push_back(min_rect_obj);

                en_obj[key].push_back(comp_obj);
            } else if (type == type_id<LidarComponent>) {
                auto comp = en->getComponent<LidarComponent>();

                json comp_obj = json::object();
                comp_obj["LidarComponent"] = json::array();
                comp_obj["LidarComponent"].push_back(json::object({{"yaw", comp->yaw}}));
                comp_obj["LidarComponent"].push_back(json::object({{"pitch", comp->pitch}}));
                comp_obj["LidarComponent"].push_back(json::object({{"freq", {comp->freq.x, comp->freq.y}}}));
                comp_obj["LidarComponent"].push_back(json::object({{"length", comp->length}}));
                comp_obj["LidarComponent"].push_back(json::object({{"density", comp->density}}));
                comp_obj["LidarComponent"].push_back(json::object({{"obj_distance", comp->obj_distance}}));

                en_obj[key].push_back(comp_obj);
            } else if (type == type_id<LightComponent>) {
                auto comp = en->getComponent<LightComponent>();

                vec3 pos = comp->pos;
                vec3 amb = comp->ambient;
                vec3 dif = comp->diffuse;
                vec3 spec = comp->specular;

                json comp_obj = json::object();
                comp_obj["LightComponent"] = json::array();
                comp_obj["LightComponent"].push_back(json::object({{"pos", {pos.x, pos.y, pos.z}}}));
                comp_obj["LightComponent"].push_back(json::object({{"amb", {amb.x, amb.y, amb.z}}}));
                comp_obj["LightComponent"].push_back(json::object({{"dif", {dif.x, dif.y, dif.z}}}));
                comp_obj["LightComponent"].push_back(json::object({{"spec", {spec.x, spec.y, spec.z}}}));

                en_obj[key].push_back(comp_obj);

            } else if (type == type_id<MaterialComponent>) {
                auto comp = en->getComponent<MaterialComponent>();
                vec3 spec = comp->specular;
                vec3 dif = comp->diffuse;
                vec3 amb = comp->ambient;

                json comp_obj = json::object();
                comp_obj["MaterialComponent"] = json::array();
                comp_obj["MaterialComponent"].push_back(json::object({{"spec", {spec.x, spec.y, spec.z}}}));
                comp_obj["MaterialComponent"].push_back(json::object({{"dif", {dif.x, dif.y, dif.z}}}));
                comp_obj["MaterialComponent"].push_back(json::object({{"amb", {amb.x, amb.y, amb.z}}}));

                en_obj[key].push_back(comp_obj);
            } else if (type == type_id<SelectableComponent>) {
                auto comp = en->getComponent<SelectableComponent>();

                json comp_obj = json::object();
                comp_obj["SelectableComponent"] = json::array();
                comp_obj["SelectableComponent"].push_back({});

                en_obj[key].push_back(comp_obj);
            } else if (type == type_id<TerrainComponent>) {
                auto comp = en->getComponent<TerrainComponent>();

            }
        }

        j["Entities"].push_back(en_obj);
    }
    std::cout << j.dump() << std::endl;

    std::ofstream out(file_name, std::ios::out);
    out << j.dump();

    out.close();
}

std::vector<ecs::Entity> utils::fs::loadSimJson(const std::string &file_name)
{
    if (!std::filesystem::exists(file_name)) {
        // Throw error
    }

    std::ifstream ifs(file_name);

    json j = json::parse(ifs);

    for (auto en: j["Entities"]) {

    }

    std::cout << j["Entities"].size() << "\n";

    ifs.close();
}


