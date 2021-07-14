#ifndef FS_HPP
#define FS_HPP

#include <glm/vec3.hpp>
#include <boost/serialization/split_free.hpp>
#include <boost/serialization/vector.hpp>
#include <boost/serialization/string.hpp>
#include <variant>

#include "ecs/entity.hpp"
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

    using EntMap = std::unordered_map<size_t, std::shared_ptr<ecs::Entity>>;

    void saveSimulationJson(const std::string &file_name,
                            EntMap& entities);

    void saveLidarDataCart(const std::string &data_file,
                           const std::string &res_file);

    void
    saveLidarDataSphere(const std::string &data_file, const std::string &res_file,
                        const glm::vec3 &lidar_pos);
}

struct FileContents {
    std::variant<PositionComponent, LidarComponent, SpriteComponent,
            LightComponent, SceneComponent, BVHComponent,
            MaterialComponent, SelectableComponent, TerrainComponent> payload;

private:
    friend class boost::serialization::access;
    template <typename Ar> void serialize(Ar& ar, unsigned)
    {
        ar & payload;
    }
};

BOOST_SERIALIZATION_SPLIT_FREE(SceneComponent)
BOOST_SERIALIZATION_SPLIT_FREE(TerrainComponent)
BOOST_SERIALIZATION_SPLIT_FREE(SpriteComponent)

namespace boost::serialization
{
    template<class Archive>
    void serialize(Archive& ar, vec3& v, const unsigned int version)
    {
        ar & v.x;
        ar & v.y;
        ar & v.z;
    }

    template<class Archive>
    void serialize(Archive& ar, vec2& v, const unsigned int version)
    {
        ar & v.x;
        ar & v.y;
    }

    template<class Archive>
    void serialize(Archive& ar, utils::RectPoints3D& rect, const unsigned int version)
    {
        ar & rect.a;
        ar & rect.b;
        ar & rect.c;
        ar & rect.d;
        ar & rect.e;
        ar & rect.f;
        ar & rect.g;
        ar & rect.k;
    }


    template<class Archive>
    void serialize(Archive& ar, PositionComponent& pos, const unsigned int version)
    {
        ar & pos.pos.x;
        ar & pos.pos.y;
        ar & pos.pos.z;
        ar & pos.rot_axis.x;
        ar & pos.rot_axis.y;
        ar & pos.rot_axis.z;
        ar & pos.angle;
    }

    template<class Archive>
    void serialize(Archive& ar, LidarComponent& lid, const unsigned int version)
    {
        ar & lid.yaw;
        ar & lid.pitch;
        ar & lid.freq;
        ar & lid.start_angle;
        ar & lid.density;
        ar & lid.pattern_points;
        ar & lid.obj_distance;
    }

    template<class Archive>
    void serialize(Archive& ar, LightComponent& light, const unsigned int version)
    {
        ar & light.pos;
        ar & light.ambient;
        ar & light.diffuse;
        ar & light.specular;
    }

    template<class Archive>
    void serialize(Archive& ar, MaterialComponent& mat, const unsigned int version)
    {
        ar & mat.ambient;
        ar & mat.diffuse;
        ar & mat.specular;
        ar & mat.shininess;
    }

    template<class Archive>
    void serialize(Archive& ar, SelectableComponent& sel, const unsigned int version)
    {
        ar & sel.dragged;
    }

    template<class Archive>
    void serialize(Archive& ar, BVHComponent& bvh, const unsigned int version)
    {
        using Nd = std::shared_ptr<utils::RectPoints3D>;

        auto tree = bvh.vbh_tree;
        auto tree_model = bvh.vbh_tree_model;

        auto ser = [&ar, version](Nd& node) {
            boost::serialization::serialize(ar, *node, version);
        };

        utils::data::mapBinaryTree(tree, ser);
        utils::data::mapBinaryTree(tree_model, ser);
    }

    template<class Archive>
    void load(Archive& ar, SpriteComponent& sprite_comp, const unsigned int version)
    {
        sprite_comp.sprite = std::make_shared<Sprite>();
        auto sprite = sprite_comp.sprite;

        std::vector<std::string> obj_files;
        std::vector<vec3> sizes;
        ar & obj_files;
        ar & sizes;
        for (size_t i = 0; i < obj_files.size(); ++i) {
            sprite->addMesh(obj_files[i], sizes[i]);
        }
        sprite->generateDataBuffer();
    }

    template<class Archive>
    void save(Archive& ar, const SpriteComponent& sprite_comp, const unsigned int version)
    {
        auto sprite = sprite_comp.sprite;
        ar & sprite->getObjFiles();
        ar & sprite->getSizes();
    }

    template<class Archive>
    void save(Archive& ar, const SceneComponent& scene_comp, const unsigned int version)
    {
        ar & scene_comp.samples;
        ar & scene_comp.isMsaa;
    }

    template<class Archive>
    void save(Archive& ar, const TerrainComponent& ter_comp, const unsigned int version)
    {
        auto terrain = ter_comp.terrain;
        ar & terrain->getWidth();
        ar & terrain->getHeight();
        ar & terrain->getStep();
        ar & terrain->getTextureFile();
        ar & terrain->getScale();
    }

    template<class Archive>
    void serialize(Archive& ar, ecs::Entity& en, const unsigned int version)
    {
        using ecs::types::type_id;

        ar & en.isActivate();
        for (auto& [type, comp_gen]: en.getComponents()) {
            if (type == type_id<PositionComponent>) {
                auto comp = en.getComponent<PositionComponent>();
                serialize(ar, *comp, version);
            } else if (type == type_id<SpriteComponent>) {
                auto comp = en.getComponent<SpriteComponent>();
                serialize(ar, *comp, version);
            } else if (type == type_id<BVHComponent>) {
                auto comp = en.getComponent<BVHComponent>();
                serialize(ar, *comp, version);
            } else if(type == type_id<LidarComponent>) {
                auto comp = en.getComponent<LidarComponent>();
                serialize(ar, *comp, version);
            } else if (type == type_id<LightComponent>) {
                auto comp = en.getComponent<LightComponent>();
                serialize(ar, *comp, version);
            } else if (type == type_id<MaterialComponent>) {
                auto comp = en.getComponent<MaterialComponent>();
                serialize(ar, *comp, version);
            } else if (type == type_id<SelectableComponent>) {
                auto comp = en.getComponent<SelectableComponent>();
                serialize(ar, *comp, version);
            } else if (type == type_id<TerrainComponent>) {
                auto comp = en.getComponent<TerrainComponent>();
                serialize(ar, *comp, version);
            }
        }
    }
}

#endif //FS_HPP
