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
    size_t nans = 0;
    for (const auto& dot: pattern) {
        vec3 dir = normalize(dot - pos->pos);
        if (std::isnan(dir.x) || std::isnan(dir.y) || std::isnan(dir.z)) {
            nans++;
            return;
        }

        // Check collision
        for (const auto&[key, en]: m_ecsManager->getEntities()) {
            auto bvh_comp = en->getComponent<BVHComponent>();
            if (!bvh_comp)
                continue;
            auto pos_comp = en->getComponent<PositionComponent>();
            auto sprite_comp = en->getComponent<SpriteComponent>();

            auto coll = coll::BVHAABBTraversal(bvh_comp->vbh_tree, {dir, pos->pos});

            if (coll.first) {
                Logger::info("collision occurred, pos: %1$.3f, %2$.3f, %3$.3f",
                             coll.second.x, coll.second.y, coll.second.z);

                col_stream << coll.second.x << ", " << coll.second.y << ", "
                           << coll.second.z << "\n";
                coll_dots.emplace_back(coll.second);
            }
        }
    }
    Logger::info("nans: %lu", nans);
}