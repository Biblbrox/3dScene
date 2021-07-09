#include <glm/gtx/rotate_vector.hpp>

#include "view/lidar.hpp"
#include "config.hpp"

using glm::cross;
using glm::normalize;
using std::vector;
using glm::sqrt;
using glm::pi;
using glm::atan;
using glm::vec3;
using glm::vec2;

GLfloat Lidar::getRayLength() const
{
    return m_rayLength;
}

GLfloat Lidar::getPitch() const
{
    return m_pitch;
}

GLfloat Lidar::getYaw() const
{
    return m_yaw;
}

void Lidar::setYaw(GLfloat yaw)
{
    m_yaw = yaw;
    updateCameraVectors();
}

void Lidar::setPitch(GLfloat pitch)
{
    m_pitch = pitch;
    updateCameraVectors();
}

void Lidar::setPos(const glm::vec3& pos)
{
    m_pos = pos;
    updateCameraVectors();
}

void Lidar::setFront(const glm::vec3 &front)
{
    m_front = front;
    updateCameraVectors();
}

glm::vec3 Lidar::getFront() const
{
    return m_front;
}

void Lidar::setWorldUp(const glm::vec3 &worldUp)
{
    m_worldUp = worldUp;
    updateCameraVectors();
}

void Lidar::setRayLength(GLfloat length)
{
    m_rayLength = length;
}

void Lidar::updateCameraVectors()
{
    // calculate the new Front vector
    glm::vec3 front;
    front.x = cos(glm::radians(m_yaw)) * cos(glm::radians(m_pitch));
    front.y = sin(glm::radians(m_pitch));
    front.z = sin(glm::radians(m_yaw)) * cos(glm::radians(m_pitch));

    m_front = glm::normalize(front);
    // also re-calculate the Right and Up vector
    m_right = glm::normalize(glm::cross(m_front, m_worldUp));  // normalize the vectors, because their length gets closer to 0 the more you look up or down which results in slower movement.
    m_up    = glm::normalize(glm::cross(m_right, m_front));
}

std::vector<vec3> Lidar::pattern() const
{
    vector<vec3> res;

    vec3 dir = m_front * m_rayLength;

    // Up vector on draw plane
    vec3 up = normalize(getUp()) + dir;
    vec3 dir_on_plane;

    GLfloat alpha = glm::radians(2.f);
    GLfloat n = 1.5;
    GLfloat Delta = alpha * (n - 1);
    vec2 freq = Config::getVal<glm::vec2>("PrismFreq");
    GLfloat f1 = freq[0];
    GLfloat f2 = freq[1];
    GLfloat t = 0;
    vec2 start_angle = Config::getVal<glm::vec2>("PrismStartAngle");
    GLfloat Theta10 = start_angle[0];
    GLfloat Theta20 = start_angle[1];
    GLfloat Theta1 = (2 * pi<GLfloat>() * f1 * t  + Theta10) / 360;
    GLfloat Theta2 = (2 * pi<GLfloat>() * f2 * t  + Theta20) / 360;
    GLfloat distance = 10.f;
    GLfloat Z = distance * Delta * (cos(Theta1) + cos(Theta2));
    GLfloat Y = distance * Delta * (sin(Theta1) + sin(Theta2));

    GLfloat dot_dens = Config::getVal<GLfloat>("DotDens");
    while (t <= dot_dens) {
        GLfloat rho = sqrt(Z * Z + Y * Y);
        dir_on_plane = cross(up, dir);
        GLfloat angle = (pi<GLfloat>() / 2.f - atan(Z / Y)) * 2.f - pi<GLfloat>();
        dir_on_plane = rho * glm::rotate(dir_on_plane, angle, dir);

        vec3 pos = m_pos + dir_on_plane + m_front * m_rayLength;

        t += 0.01;
        Theta1 = (2 * pi<GLfloat>() * f1 * t  + Theta10) / 360;
        Theta2 = (2 * pi<GLfloat>() * f2 * t  + Theta20) / 360;
        Z = distance * Delta * (cos(Theta1) + cos(Theta2));
        Y = distance * Delta * (sin(Theta1) + sin(Theta2));
        res.push_back(pos);
    }

    return res;
}
