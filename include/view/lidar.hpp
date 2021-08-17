#ifndef LIDAR_HPP
#define LIDAR_HPP

#include <GL/glew.h>
#include <glm/vec3.hpp>
#include <bvh/bvh.hpp>
#include <bvh/vector.hpp>
#include <bvh/triangle.hpp>
#include <bvh/ray.hpp>
#include <bvh/sweep_sah_builder.hpp>
#include <bvh/single_ray_traverser.hpp>
#include <bvh/primitive_intersectors.hpp>

#include "base.hpp"
#include "fpscamera.hpp"

using glm::vec3;
using glm::vec2;
using glm::normalize;

/*using Scalar   = GLfloat;
using Vector3  = bvh::Vector3<Scalar>;
using Triangle = bvh::Triangle<Scalar>;
using Ray      = bvh::Ray<Scalar>;
using Tree = bvh::Bvh<Scalar>;
using TreePtr = std::shared_ptr<bvh::Bvh<Scalar>>;*/

FORCE_INLINE inline vec3 ray_point(const Ray& ray, GLfloat distance)
{
    Vector3 pos = ray.origin + normalize(ray.direction) * distance;
    return {pos[0], pos[1], pos[2]};
}

class Lidar: public FpsCamera
{
public:
    explicit Lidar(GLfloat ray_length, GLfloat x, GLfloat y, GLfloat z, GLfloat up_x,
                   GLfloat up_y, GLfloat up_z, GLfloat yaw, GLfloat pitch)
            : FpsCamera(x, y, z, up_x, up_y, up_z, yaw, pitch),
              m_rayLength(ray_length){};

    explicit Lidar(GLfloat ray_length, glm::vec3 position = glm::vec3(0.0f, 0.0f, 0.0f),
                   glm::vec3 up = glm::vec3(0.0f, 1.0f, 0.0f),
                   GLfloat yaw = YAW, GLfloat pitch = PITCH)
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
