#include "view/lidar.hpp"

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
