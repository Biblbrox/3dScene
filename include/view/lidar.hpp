#ifndef LIDAR_HPP
#define LIDAR_HPP

#include <GL/glew.h>
#include <glm/vec3.hpp>

#include "fpscamera.hpp"

using glm::vec3;
using glm::vec2;
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
    void setWorldUp(const glm::vec3& worldUp);
    void setRayLength(GLfloat length);

    GLfloat getYaw() const;
    GLfloat getPitch() const;
    glm::vec3 getFront() const;


    /**
     * Perform lidar point cloud by pattern
     * @return
     */
    std::vector<vec3>
    risleyPattern2(const vec2& freq, const vec2& angle, GLfloat dens) const;
private:
    void updateCameraVectors();
    GLfloat m_rayLength;
};

#endif //LIDAR_HPP
