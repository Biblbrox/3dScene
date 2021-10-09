#include <glm/glm.hpp>
#include <glm/gtc/epsilon.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <omp.h>

#include "components/bvhcomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/positioncomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "config.hpp"
#include "render/render.hpp"
#include "sceneprogram.hpp"
#include "systems/lidarsystem.hpp"
#include "utils/collision.hpp"
#include "logger/logger.hpp"
#include "utils/fs.hpp"

using glm::acos;
using glm::asin;
using std::string;
using glm::cos;
using glm::sin;
using glm::sqrt;
using logger::Logger;
using utils::fs::saveFrameToFileTxt;
using utils::fs::saveFrameToFilePcd;
using coll::rayTerrainIntersection;

LidarSystem::LidarSystem() : m_posChanged(true), m_prevPos{0.f, 0.f, 0.f}
{
}

void LidarSystem::update_state(size_t delta)
{
    collision();
}

void LidarSystem::collision()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();

    auto lidarEntities = getEntitiesByTag<LidarComponent>().begin()->second;
    auto pos = lidarEntities->getComponent<PositionComponent>();
    auto lidarComp = lidarEntities->getComponent<LidarComponent>();

    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

    auto pos_compare = glm::epsilonEqual(m_prevPos, pos->pos, glm::epsilon<GLfloat>());
    if (!glm::all(pos_compare) || lidarComp->pattern_points.empty()) {
        m_posChanged = true;
        m_prevPos = pos->pos;
    }
    else {
        m_posChanged = false;
    }

    if (m_posChanged)
        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle, lidarComp->density);

    const auto& pattern = lidarComp->pattern_points;
    if (Config::getVal<bool>("DrawPattern")) {
        program->useFramebufferProgram();
        program->setInt(U_IS_PRIMITIVE, true);

        program->setVec3(U_PRIM_COLOR, {1.f, 1.f, 1.f});
        render::drawDots(pattern);
        render::drawDots({pos->pos});
        if (Config::getVal<bool>("DrawRays")) {
            vector<vec3> rays;
            for (const auto &dot : pattern) {
                rays.push_back(pos->pos);
                rays.push_back(dot);
            }
            program->setVec3(U_PRIM_COLOR, {0.7f, 0.1f, 0.1f});
            program->setFloat(U_ALPHA, 0.6f);
            render::drawLinen(rays);
        }
    }

   if (!Config::getVal<bool>("CheckCollision"))
        return;

    auto bvhEntities = getEntitiesByTag<BVHComponent>();
    auto terrain = getEntitiesByTag<TerrainComponent>().begin()->second;
//#pragma omp declare reduction (merge : std::vector<vec3> \
//							   : omp_out.insert(omp_out.end(), omp_in.begin(), omp_in.end()))
    vector<vec4> coll_dots;
//#pragma omp parallel for collapse(1) reduction(merge                           \
//                                               : coll_dots) shared(entities), default(shared)
    for (const auto &dot : pattern) {
        vec3 dir = normalize(dot - pos->pos);
        if (glm::any(glm::isnan(dir)))
            continue;

        Ray ray;
        ray.direction = Vector3(dir.x, dir.y, dir.z);
        ray.origin = Vector3(pos->pos.x, pos->pos.y, pos->pos.z);
        ray.tmin = 0;
        ray.tmax = 10000;

        bool was_collision = false;
        std::vector<glm::vec3> col_per_ent;
        // Need to make geometric shadow of objects
        for (const auto &[key, en] : bvhEntities) {
            auto bvh_comp = en->getComponent<BVHComponent>();

            std::pair<bool, vec3> coll = {false, vec3(0.f)};
            GLfloat intensity;

            if (en->getComponent<LidarComponent>())
                continue;

            auto pos_comp = en->getComponent<PositionComponent>();

            auto triangles = bvh_comp->triangles;
            auto bvh = bvh_comp->bvh_tree;
            GLfloat similiarity;
            coll = coll::BVHCollision(bvh, ray, *triangles, similiarity);
            similiarity = (-similiarity + 1.f) / 2.f;
            intensity = similiarity;

            if (coll.first) {
                col_per_ent.emplace_back(coll.second);
//                coll_dots.emplace_back(glm::vec4(coll.second, intensity));
//                was_collision = true;
            }
        }

        if (!col_per_ent.empty()) {
            glm::vec3 closest = col_per_ent[0];
            GLfloat distance = glm::length(col_per_ent[0] - pos->pos);
            for (const vec3& p: col_per_ent) {
                GLfloat dst = glm::length(p - pos->pos);
                if (dst < distance) {
                    distance = dst;
                    closest = p;
                }
            }

            coll_dots.emplace_back(glm::vec4(closest, 1.f));
            was_collision = true;
        }

        if (was_collision)
            continue;

        auto terrainComp = terrain->getComponent<TerrainComponent>();
        auto coll = rayTerrainIntersection(*terrainComp->terrain, ray, 0, 10000.f, 100);
        if (coll.first) {
            GLfloat intensity = 0.09f;
            coll_dots.emplace_back(glm::vec4(coll.second, intensity));
        }
    }

    lidarComp->coll_points.insert(lidarComp->coll_points.end(), coll_dots.cbegin(),
                                  coll_dots.cend());

    Frame frame{pos->pos, coll_dots};
    saveFrameToFilePcd(frame, getResourcePath("000000.pcd"), true);
    Config::getVal<bool>("CheckCollision") = false;
}
