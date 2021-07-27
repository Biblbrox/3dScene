#include <GL/glew.h>
#include <filesystem>
#include <fstream>
#include <glm/glm.hpp>
#include <json/json.hpp>
#include <glm/exponential.hpp>

#include "components/positioncomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/skyboxcomponent.hpp"
#include "components/lightcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/materialcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "utils/fs.hpp"
#include "utils/math.hpp"
#include "utils/collision.hpp"

using glm::vec3;
using math::createTransform;
using math::transformTriangles;

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

using nlohmann::json;
namespace glm
{
    void to_json(json &j, const vec3 &v);
    void from_json(const json& j, vec3& v);

    void to_json(json &j, const vec2 &v);
    void from_json(const json& j, vec2& v);
}

void glm::to_json(json& j, const glm::vec3& v)
{
    j = json::array({v.x, v.y, v.z});
}

void glm::from_json(const json& j, glm::vec3& v)
{
    v.x = j[0];
    v.y = j[1];
    v.z = j[2];
}

void glm::to_json(json& j, const glm::vec2& v)
{
    j = json::array({v.x, v.y});
}

void glm::from_json(const json& j, glm::vec2& v)
{
    v.x = j[0];
    v.y = j[1];
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
        en_obj["Components"] = json::array();
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
                rot_obj["rot_axis"] = json::array({comp->rot_axis.x, comp->rot_axis.y, comp->rot_axis.z});
                comp_obj["PositionComponent"].push_back(rot_obj);

                en_obj["Components"].push_back(comp_obj);
            } else if (type == type_id<SpriteComponent>) {
                auto comp = en->getComponent<SpriteComponent>();
                auto sprite = comp->sprite;

                json comp_obj = json::object();
                comp_obj["SpriteComponent"] = json::array();

                json model_file = json::object();
                model_file["model_file"] = json(sprite->getModelFile());
                comp_obj["SpriteComponent"].push_back(model_file);

                json sizes_obj = json::object();
                sizes_obj["size"] = json(sprite->getSize());
                comp_obj["SpriteComponent"].push_back(sizes_obj);

                en_obj["Components"].push_back(comp_obj);
            } else if (type == type_id<BVHComponent>) {
                auto comp = en->getComponent<BVHComponent>();

                json comp_obj = json::object();
                comp_obj["BVHComponent"] = json::array();
                comp_obj["BVHComponent"].push_back({});

                en_obj["Components"].push_back(comp_obj);
            } else if (type == type_id<LidarComponent>) {
                auto comp = en->getComponent<LidarComponent>();

                json comp_obj = json::object();
                comp_obj["LidarComponent"] = json::array();
                comp_obj["LidarComponent"].push_back(json::object({{"yaw", comp->yaw}}));
                comp_obj["LidarComponent"].push_back(json::object({{"pitch", comp->pitch}}));
                comp_obj["LidarComponent"].push_back(json::object({{"freq", comp->freq}}));
                comp_obj["LidarComponent"].push_back(json::object({{"length", comp->length}}));
                comp_obj["LidarComponent"].push_back(json::object({{"density", comp->density}}));
                comp_obj["LidarComponent"].push_back(json::object({{"obj_distance", comp->obj_distance}}));
                comp_obj["LidarComponent"].push_back(json::object({{"start_angle", comp->start_angle}}));

                en_obj["Components"].push_back(comp_obj);
            } else if (type == type_id<LightComponent>) {
                auto comp = en->getComponent<LightComponent>();

                vec3 pos = comp->pos;
                vec3 amb = comp->ambient;
                vec3 dif = comp->diffuse;
                vec3 spec = comp->specular;

                json comp_obj = json::object();
                comp_obj["LightComponent"] = json::array();
                comp_obj["LightComponent"].push_back(json::object({{"direction", {pos.x, pos.y, pos.z}}}));
                comp_obj["LightComponent"].push_back(json::object({{"ambient", {amb.x, amb.y, amb.z}}}));
                comp_obj["LightComponent"].push_back(json::object({{"diffuse", {dif.x, dif.y, dif.z}}}));
                comp_obj["LightComponent"].push_back(json::object({{"specular", {spec.x, spec.y, spec.z}}}));

                en_obj["Components"].push_back(comp_obj);
            } else if (type == type_id<MaterialComponent>) {
                auto comp = en->getComponent<MaterialComponent>();
                vec3 spec = comp->specular;
                vec3 dif = comp->diffuse;
                vec3 amb = comp->ambient;
                GLfloat shininess = comp->shininess;

                json comp_obj = json::object();
                comp_obj["MaterialComponent"] = json::array();
                comp_obj["MaterialComponent"].push_back(json::object({{"ambient", {amb.x, amb.y, amb.z}}}));
                comp_obj["MaterialComponent"].push_back(json::object({{"diffuse", {dif.x, dif.y, dif.z}}}));
                comp_obj["MaterialComponent"].push_back(json::object({{"specular", {spec.x, spec.y, spec.z}}}));
                comp_obj["MaterialComponent"].push_back(json::object({{"shininess", shininess}}));

                en_obj["Components"].push_back(comp_obj);
            } else if (type == type_id<SelectableComponent>) {
                auto comp = en->getComponent<SelectableComponent>();

                json comp_obj = json::object();
                comp_obj["SelectableComponent"] = json::array();
                comp_obj["SelectableComponent"].push_back({});

                en_obj["Components"].push_back(comp_obj);
            } else if (type == type_id<TerrainComponent>) {
                auto comp = en->getComponent<TerrainComponent>();
                auto terrain = comp->terrain;

                json comp_obj = json::object();
                comp_obj["TerrainComponent"] = json::array();
                comp_obj["TerrainComponent"].push_back(json::object({{"height_image", terrain->getHeightImage()}}));
                comp_obj["TerrainComponent"].push_back(json::object({{"texture_image", terrain->getTextureFile()}}));
                comp_obj["TerrainComponent"].push_back(json::object({{"width", terrain->getWidth()}}));
                comp_obj["TerrainComponent"].push_back(json::object({{"height", terrain->getHeight()}}));
                comp_obj["TerrainComponent"].push_back(json::object({{"scale", terrain->getScale()}}));

                en_obj["Components"].push_back(comp_obj);
            } else if (type == type_id<SkyboxComponent>) {
                auto comp = en->getComponent<SkyboxComponent>();

                json comp_skybox = json::object();
                comp_skybox["SkyboxComponent"] = json::array();
                comp_skybox["SkyboxComponent"].push_back({});

                en_obj["Components"].push_back(comp_skybox);
            }
        }

        j["Entities"].push_back(en_obj);
    }
    std::cout << j.dump() << std::endl;

    std::ofstream out(file_name, std::ios::out);
    out << j.dump();

    out.close();
}

std::vector<ecs::Entity>
utils::fs::loadSimJson(const std::string &file_name)
{
    if (!std::filesystem::exists(file_name)) {
        // Throw error
    }

    std::vector<ecs::Entity> res;

    std::ifstream ifs(file_name);

    json j = json::parse(ifs);
    for (const auto& en: j["Entities"]) {
        ecs::Entity entity;
        for (const auto& comp: en["Components"]) {
            if (comp.contains("PositionComponent")) {
                json json_pos = comp["PositionComponent"];
                vec3 pos = json_pos[0]["pos"].get<glm::vec3>();
                GLfloat angle = json_pos[1]["angle"].get<GLfloat>();
                vec3 rot_axis = json_pos[2]["rot_axis"].get<glm::vec3>();

                entity.addComponent<PositionComponent>();
                auto pos_comp = entity.getComponent<PositionComponent>();
                pos_comp->pos = pos;
                pos_comp->rot_axis = rot_axis;
                pos_comp->angle = angle;
            } else if (comp.contains("SpriteComponent")) {
                json json_sprite = comp["SpriteComponent"];

                std::string model_file = json_sprite[0]["model_file"].get<std::string>();
                glm::vec3 size = json_sprite[1]["size"].get<glm::vec3>();

                entity.addComponent<SpriteComponent>();
                auto sprite_comp = entity.getComponent<SpriteComponent>();
                sprite_comp->sprite = std::make_shared<Sprite>(model_file, size);
            } else if (comp.contains("BVHComponent")) {
                entity.addComponent<BVHComponent>();
            } else if (comp.contains("SceneComponent")) {
                continue;
            } else if (comp.contains("LidarComponent")) {
                json json_lidar = comp["LidarComponent"];
                GLfloat yaw = json_lidar[0]["yaw"].get<GLfloat>();
                GLfloat pitch = json_lidar[1]["pitch"].get<GLfloat>();
                vec2 freq = json_lidar[2]["freq"].get<vec2>();
                GLfloat length = json_lidar[3]["length"].get<GLfloat>();
                GLfloat density = json_lidar[4]["density"].get<GLfloat>();
                GLfloat obj_distance = json_lidar[5]["obj_distance"].get<GLfloat>();
                vec2 start_angle = json_lidar[6]["start_angle"].get<vec2>();

                entity.addComponent<LidarComponent>();
                auto lidar = entity.getComponent<LidarComponent>();
                lidar->start_angle = start_angle;
                lidar->obj_distance = obj_distance;
                lidar->density = density;
                lidar->length = length;
                lidar->freq = freq;
                lidar->pitch = pitch;
                lidar->yaw = yaw;
            } else if (comp.contains("LightComponent")) {
                json json_light = comp["LightComponent"];
                vec3 pos = json_light[0]["direction"].get<vec3>();
                vec3 ambient = json_light[1]["ambient"].get<vec3>();
                vec3 diffuse = json_light[2]["diffuse"].get<vec3>();
                vec3 specular = json_light[3]["specular"].get<vec3>();

                entity.addComponent<LightComponent>();
                auto light = entity.getComponent<LightComponent>();
                light->pos = pos;
                light->ambient = ambient;
                light->diffuse = diffuse;
                light->specular = specular;
            } else if (comp.contains("MaterialComponent")) {
                json json_mat = comp["MaterialComponent"];
                vec3 ambient = json_mat[0]["ambient"].get<vec3>();
                vec3 diffuse = json_mat[1]["diffuse"].get<vec3>();
                vec3 specular = json_mat[2]["specular"].get<vec3>();
                GLfloat shininess = json_mat[3]["shininess"].get<GLfloat>();

                entity.addComponent<MaterialComponent>();
                auto material = entity.getComponent<MaterialComponent>();
                material->ambient = ambient;
                material->diffuse = diffuse;
                material->specular = specular;
                material->shininess = shininess;
            } else if (comp.contains("SelectableComponent")) {
                entity.addComponent<SelectableComponent>();
            } else if (comp.contains("TerrainComponent")) {
                json json_ter = comp["TerrainComponent"];

                std::string height_image = json_ter[0]["height_image"].get<std::string>();
                std::string texture_image = json_ter[1]["texture_image"].get<std::string>();
                vec3 scale = json_ter[4]["scale"].get<vec3>();

                entity.addComponent<TerrainComponent>();
                auto terrain = entity.getComponent<TerrainComponent>();
                terrain->terrain = std::make_shared<Terrain>
                        (height_image, texture_image, scale);
            } else if (comp.contains("SkyboxComponent")) {
                continue;
            }
        }
        res.push_back(entity);
    }

    for (auto& en: res) {
        auto bvh = en.getComponent<BVHComponent>();
        if (bvh) {
            auto sprite = en.getComponent<SpriteComponent>()->sprite;
            auto pos = en.getComponent<PositionComponent>();
            auto triangles = sprite->getTriangles();
            mat4 transform = math::createTransform(pos->pos, pos->angle, pos->rot_axis, sprite->getSize());
            triangles = math::transformTriangles(triangles, transform);
            bvh->bvh_tree = coll::buildBVH(triangles);
            bvh->triangles = std::make_shared<std::vector<Triangle>>(triangles);
        }
    }

    ifs.close();

    return res;
}


