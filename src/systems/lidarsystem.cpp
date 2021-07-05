#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <glm/glm.hpp>

#include "sceneprogram.hpp"
#include "systems/lidarsystem.hpp"
#include "components/bvhcomponent.hpp"
#include "components/positioncomponent.hpp"
#include "components/spritecomponent.hpp"
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

LidarSystem::LidarSystem() : col_stream(getResourcePath("data.txt"),
                                        std::ios_base::app),
                             m_lidar(60.f)
{
    auto pos = Config::getVal<glm::vec3>("LaserPos");
    m_lidar.setPos(pos);
}

LidarSystem::~LidarSystem()
{
    col_stream.flush();
    col_stream.close();
}

void LidarSystem::update_state(size_t delta)
{
    auto pos = Config::getVal<glm::vec3>("LaserPos");
    m_lidar.setPos(pos);
    auto length = Config::getVal<GLfloat>("RayLength");
    m_lidar.setRayLength(length);

    if (Config::getVal<bool>("CheckCollision"))
        drawLidarIntersect();
}

void LidarSystem::drawLidarIntersect()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();
    program->setInt("isPrimitive", true);

    GLfloat yaw = Config::getVal<GLfloat>("LaserYaw");
    GLfloat pitch = Config::getVal<GLfloat>("LaserPitch");

    m_lidar.setYaw(yaw);
    m_lidar.setPitch(pitch);

    auto pattern = m_lidar.pattern();
    program->setVec3("primColor", {1.f, 1.f, 1.f});
    pattern.push_back(m_lidar.getPos());
    render::drawDots(pattern);
    if (Config::getVal<bool>("DrawRays")) {
        vector<vec3> rays;
        for (const auto& dot: pattern) {
            rays.push_back(m_lidar.getPos());
            rays.push_back(dot);
        }
        program->setVec3("primColor", {0.1, 1.f, 0.1});
        render::drawLinen(rays);
    }

    vector<vec3> coll_dots;
    for (const auto& dot: pattern) {
        vec3 dir = normalize(m_lidar.getPos() - dot);
        // Check collision
        for (const auto&[key, en]: m_ecsManager->getEntities()) {
            auto bvh_comp = en->getComponent<BVHComponent>();
            if (!bvh_comp)
                continue;
            auto pos_comp = en->getComponent<PositionComponent>();
            auto sprite_comp = en->getComponent<SpriteComponent>();

            auto coll = coll::BVHAABBTraversal(bvh_comp->vbh_tree, {dir, m_lidar.getPos()});

            if (coll.first) {
                Logger::info("collision occurred, pos: %1$.3f, %2$.3f, %3$.3f",
                             coll.second.x, coll.second.y, coll.second.z);

                col_stream << coll.second.x << ", "
                           << coll.second.y << ", " << coll.second.z
                           << "\n";
                coll_dots.emplace_back(coll.second);
            }
        }
    }

    m_lidar.setYaw(yaw);
    m_lidar.setPitch(pitch);
}