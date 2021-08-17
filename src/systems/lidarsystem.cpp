#include <glm/gtc/matrix_transform.hpp>
#include <glm/glm.hpp>
#include <glm/gtc/epsilon.hpp>
#include <omp.h>

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
                                        std::ios_base::app),
                             m_posChanged(true),
                             m_prevPos{0.f, 0.f, 0.f}
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
    auto lidarComp = lidarEntities->getComponent<LidarComponent>();

    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                lidarComp->yaw, lidarComp->pitch);

    auto pos_compare = glm::epsilonEqual(m_prevPos, pos->pos, glm::epsilon<GLfloat>());
    if (!glm::all(pos_compare) || lidarComp->pattern_points.empty()) {
        m_posChanged = true;
        m_prevPos = pos->pos;
    } else {
        m_posChanged = false;
    }

    if (m_posChanged) {
        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle,
                lidarComp->density);
    }
    auto pattern = lidarComp->pattern_points;
    if (Config::getVal<bool>("DrawPattern")) {
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

    auto& entities = m_ecsManager->getEntities();
#pragma omp declare reduction (merge : std::vector<vec3> : omp_out.insert(omp_out.end(), omp_in.begin(), omp_in.end()))
    vector<vec3> coll_dots;
#pragma omp parallel for collapse(1) reduction(merge: coll_dots) shared(entities)
    for (const auto& dot: pattern) {
        for (auto & [key, en] : entities) {
            vec3 dir = normalize(dot - pos->pos);
            if (std::isnan(dir.x) || std::isnan(dir.y) || std::isnan(dir.z))
                continue;

            auto bvh_comp = en->getComponent<BVHComponent>();

            Ray ray;
            ray.direction = Vector3(dir.x, dir.y, dir.z);
            ray.origin = Vector3(pos->pos.x, pos->pos.y, pos->pos.z);
            ray.tmin = 0;
            ray.tmax = 10000;

            if (!bvh_comp) {
                auto terrainComp = en->getComponent<TerrainComponent>();
                if (!terrainComp)
                    continue;

                auto terrain = terrainComp->terrain;
                auto coll = coll::rayTerrainIntersection(*terrain, ray, 0, 10000.f, 100);
                if (coll.first) {
                    vec3 col_pos = coll.second;
                    coll_dots.emplace_back(col_pos);
                }

                continue;
            }

            auto pos_comp = en->getComponent<PositionComponent>();
			
            auto triangles = bvh_comp->triangles;
            auto bvh = bvh_comp->bvh_tree;
			auto find_inter = coll::BVHCollision(bvh, ray, *triangles);
			if (find_inter.first)
                coll_dots.emplace_back(find_inter.second);	
        }
    }

    for (const auto& dot: coll_dots) {
        col_stream << dot.x << ", " << dot.y << ", "
                   << dot.z << "\n";
    }
    col_stream.flush();

    Config::getVal<bool>("CheckCollision") = false;
}
