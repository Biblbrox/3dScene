#include <glm/gtc/matrix_transform.hpp>
#include <glm/glm.hpp>

#include "sceneprogram.hpp"
#include "systems/lidarsystem.hpp"
#include "components/bvhcomponent.hpp"
#include "components/positioncomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "utils/logger.hpp"
#include "config.hpp"
#include "utils/collision.hpp"
#include "render/render.hpp"
#include "components/terraincomponent.hpp"

using utils::log::Logger;
using glm::cos;
using glm::sin;
using glm::sqrt;
using glm::asin;
using glm::acos;


LidarSystem::LidarSystem() : col_stream(getResourcePath(Config::getVal<std::string>("DataFileTmp")),
                                        std::ios_base::app)
{}

LidarSystem::~LidarSystem()
{
    col_stream.flush();
    col_stream.close();
}

void LidarSystem::update_state(size_t delta)
{
    drawLidarIntersect();
}

void LidarSystem::drawLidarIntersect()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();

    auto lidarEntities = getEntitiesByTag<LidarComponent>().begin()->second;
    auto pos = lidarEntities->getComponent<PositionComponent>();
    auto lidar = lidarEntities->getComponent<LidarComponent>();

    auto pattern = lidar->pattern_points;
    if (Config::getVal<bool>("DrawPattern")) {
        auto program = SceneProgram::getInstance();
        program->useFramebufferProgram();
        program->setInt("isPrimitive", true);

        program->setVec3("primColor", {1.f, 1.f, 1.f});
        pattern.push_back(pos->pos);
        render::drawDots(pattern);
        if (Config::getVal<bool>("DrawRays")) {
            vector<vec3> rays;
            for (const auto &dot: pattern) {
                rays.push_back(pos->pos);
                rays.push_back(dot);
            }
            program->setVec3("primColor", {0.1, 1.f, 0.1});
            render::drawLinen(rays);
        }
    }

    if (!Config::getVal<bool>("CheckCollision"))
        return;

    vector<vec3> coll_dots;
    for (const auto& dot: pattern) {
        vec3 dir = normalize(dot - pos->pos);
        if (std::isnan(dir.x) || std::isnan(dir.y) || std::isnan(dir.z)) {
            continue;
        }

        // Check collision
        for (const auto&[key, en]: m_ecsManager->getEntities()) {
            auto bvh_comp = en->getComponent<BVHComponent>();

            Ray ray;
            ray.direction = Vector3(dir.x, dir.y, dir.z);
            ray.origin = Vector3(pos->pos.x, pos->pos.y, pos->pos.z);
            ray.tmin = 0;
            ray.tmax = 100000;

            if (!bvh_comp) {
                auto terrainComp = en->getComponent<TerrainComponent>();
                if (!terrainComp)
                    continue;

                auto terrain = terrainComp->terrain;
                auto coll = coll::rayTerrainIntersection(*terrain, ray, 0, 1000.f, 1000);
                if (coll.first) {
                    vec3 col_pos = coll.second;
                    col_stream << col_pos.x << ", " << col_pos.y << ", "
                               << col_pos.z << "\n";
                    col_stream.flush();
                }

                continue;
            }

            auto pos_comp = en->getComponent<PositionComponent>();
            auto sprite_comp = en->getComponent<SpriteComponent>();

            auto triangles = bvh_comp->triangles;
            auto bvh = bvh_comp->bvh_tree;
            bvh::ClosestPrimitiveIntersector<Bvh, Triangle> primitive_intersector(*bvh, triangles->data());
            bvh::SingleRayTraverser<Bvh> traverser(*bvh);

            auto hit = traverser.traverse(ray, primitive_intersector);
            if (hit) {
                auto triangle_index = hit->primitive_index;
                auto intersection = hit->intersection;
                vec3 col_pos = pos->pos + dir * intersection.t;
                col_stream << col_pos.x << ", " << col_pos.y << ", "
                           << col_pos.z << "\n";
                col_stream.flush();
            }
        }
    }
}