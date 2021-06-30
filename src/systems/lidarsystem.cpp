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
                             m_lidar(5000.f)
{
    auto pos = m_lidar.getPos();
    pos.z = 1000.f;
    m_lidar.setPos(pos);
    m_lidar.setPitch(0);
    m_lidar.setYaw(0);
    m_lidar.setFront({1.f, 0.f, 0.f});
}

LidarSystem::~LidarSystem()
{
    col_stream.flush();
    col_stream.close();
}

void LidarSystem::update_state(size_t delta)
{
    if (Config::getVal<bool>("CheckCollision"))
        drawLidarIntersect();
}

void LidarSystem::drawLidarIntersect()
{
    auto program = SceneProgram::getInstance();
    program->useFramebufferProgram();

    program->setInt("isPrimitive", true);
    program->updateInt("isPrimitive");
    glm::vec3 dir = m_lidar.getDirection();
    const GLfloat length = m_lidar.getRayLength();
    dir *= length;

    GLfloat hor_step = 2 * glm::pi<GLfloat>();
    GLfloat ver_step = glm::pi<GLfloat>();
    std::vector<glm::vec3> rays;
    std::vector<glm::vec3> dots;

    std::vector<glm::vec3> coll_dots;
    glm::vec3 pos_trans = m_lidar.getPos();

    GLfloat yaw = m_lidar.getYaw();
    GLfloat pitch = m_lidar.getPitch();



    GLfloat alpha = glm::radians(2.f);
    GLfloat n = 1.5;
    GLfloat Delta = alpha * (n - 1);
    GLfloat f1 = 100, f2 = 45;
    GLfloat t = 0;
    GLfloat Theta10 = 0;
    GLfloat Theta20 = 0;
    GLfloat Theta1 = 2 * glm::pi<GLfloat>() * f1 * t  + Theta10;
    GLfloat Theta2 = 2 * glm::pi<GLfloat>() * f2 * t  + Theta20;
    GLfloat X = Delta * (cos(Theta1) + cos(Theta2));
    GLfloat Y = Delta * (sin(Theta1) + sin(Theta2));
    while (t <= 40.f) {
        m_lidar.setFront(glm::normalize(glm::vec3(m_lidar.getFront().x, Y, X)));

        dir = m_lidar.getDirection();

        // Check collision
        /*
        for (const auto&[key, en]: m_ecsManager->getEntities()) {
            auto bvh_comp = en->getComponent<BVHComponent>();
            if (!bvh_comp)
                continue;
            auto pos_comp = en->getComponent<PositionComponent>();
            auto sprite_comp = en->getComponent<SpriteComponent>();

            auto coll = coll::BVHAABBTraversal(bvh_comp->vbh_tree, dir, pos_trans);

            if (coll.first) {
//                Logger::info(
//                        "collision occurred, pos: %1$.3f, %2$.3f, %3$.3f",
//                        coll.second.x, coll.second.y, coll.second.z);

//                col_stream << coll.second.x << ", "
//                           << coll.second.y << ", " << coll.second.z
//                           << "\n";
                coll_dots.emplace_back(coll.second);
            }
        }
         */

        GLfloat distance = 10;
        t += 0.01;
        Theta1 = (2 * glm::pi<GLfloat>() * f1 * t  + Theta10) / 360;
        Theta2 = (2 * glm::pi<GLfloat>() * f2 * t  + Theta20) / 360;
        X = distance * Delta * (cos(Theta1) + cos(Theta2));
        Y = distance * Delta * (sin(Theta1) + sin(Theta2));
        dots.push_back(m_lidar.getPos() + glm::normalize(dir) * length);
        rays.push_back(m_lidar.getPos());
        rays.push_back(m_lidar.getPos() + glm::normalize(dir) * length);
    }


    /*GLfloat alphaVer = -10 * glm::pi<GLfloat>();
    while (alphaVer <= 10 * glm::pi<GLfloat>()) {
        m_lidar.setPitch(pitch + alphaVer);

        GLfloat alphaHor = -10 * glm::pi<GLfloat>();
        while (alphaHor <= 10 * glm::pi<GLfloat>()) {
            m_lidar.setYaw(yaw + alphaHor);

            dir = m_lidar.getDirection();

            for (const auto&[key, en]: m_ecsManager->getEntities()) {
                auto bvh_comp = en->getComponent<BVHComponent>();
                if (!bvh_comp)
                    continue;
                auto pos_comp = en->getComponent<PositionComponent>();
                auto sprite_comp = en->getComponent<SpriteComponent>();

                auto coll = coll::BVHAABBTraversal(bvh_comp->vbh_tree, dir,
                                                   pos_trans);

                if (coll.first) {
                    Logger::info(
                            "collision occurred, pos: %1$.3f, %2$.3f, %3$.3f",
                            coll.second.x, coll.second.y, coll.second.z);

                    col_stream << coll.second.x << ", "
                               << coll.second.y << ", " << coll.second.z
                               << "\n";
                    coll_dots.emplace_back(coll.second);
                }
            }

            alphaHor += hor_step;
            rays.push_back(m_lidar.getPos());
            rays.push_back(m_lidar.getPos() + glm::normalize(dir) * length);
        }
        alphaVer += ver_step;
    } */

    // Restore yaw and pitch to original
    m_lidar.setYaw(yaw);
    m_lidar.setPitch(pitch);

    program->setInt("isPrimitive", true);
    program->updateInt("isPrimitive");

    program->setVec3("primColor", {0.1, 1.f, 0.1});
    program->updateVec3("primColor");
    render::drawDots(coll_dots);

    if (Config::getVal<bool>("DrawRays"))
        render::drawLinen(rays);

    program->setVec3("primColor", {1.f, 1.f, 1.f});
    program->updateVec3("primColor");
    dots.push_back(m_lidar.getPos());
    render::drawDots(dots);

}