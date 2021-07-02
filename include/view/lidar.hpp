#ifndef LIDAR_HPP
#define LIDAR_HPP

#include <GL/glew.h>
#include <glm/vec3.hpp>

#include "fpscamera.hpp"

using glm::vec3;
using glm::normalize;

struct Ray
{
    vec3 ray_dir;
    vec3 ray_origin;
};

inline vec3 ray_point(const Ray& ray, GLfloat distance)
{
    return ray.ray_origin + normalize(ray.ray_dir) * distance;
}

class Lidar: public FpsCamera
{
public:
    explicit Lidar(float ray_length, float x, float y, float z, float up_x,
                   float up_y,  float up_z, float yaw, float pitch)
            : FpsCamera(x, y, z, up_x, up_y, up_z, yaw, pitch),
              m_rayLength(ray_length){};

    explicit Lidar(GLfloat ray_length, glm::vec3 position = glm::vec3(0.0f, 0.0f, 0.0f),
                   glm::vec3 up = glm::vec3(0.0f, 1.0f, 0.0f),
                   float yaw = YAW, float pitch = PITCH)
            : FpsCamera(position, up, yaw, pitch), m_rayLength(ray_length){};

    GLfloat getRayLength() const;

    void setYaw(GLfloat yaw);
    void setPitch(GLfloat pitch);
    void setPos(const glm::vec3& pos);
    void setFront(const glm::vec3& front);

    GLfloat getYaw() const;
    GLfloat getPitch() const;
    glm::vec3 getFront() const;

    void updateCameraVectors() override
    {
        // calculate the new Front vector
        glm::vec3 front;
        front.x = cos(glm::radians(m_yaw)) * cos(glm::radians(m_pitch));
        front.y = sin(glm::radians(m_pitch));
        front.z = sin(glm::radians(m_yaw)) * cos(glm::radians(m_pitch));
//        m_front = glm::normalize(front);
        // also re-calculate the Right and Up vector
        m_right = glm::normalize(glm::cross(m_front, m_worldUp));  // normalize the vectors, because their length gets closer to 0 the more you look up or down which results in slower movement.
        m_up    = glm::normalize(glm::cross(m_right, m_front));
    }

private:
    GLfloat m_rayLength;
};

#endif //LIDAR_HPP
