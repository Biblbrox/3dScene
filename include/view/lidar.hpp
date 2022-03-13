#ifndef LIDAR_HPP
#define LIDAR_HPP

#include <GL/glew.h>
#include <glm/vec3.hpp>
#include <pcl/io/io.h>
#include <variant>

//#include "base.hpp"
#include "fpscamera.hpp"

using glm::normalize;
using glm::vec2;
using glm::vec3;

FORCE_INLINE vec3 ray_point(const Ray &ray, GLfloat distance)
{
    Vector3 pos = ray.origin + normalize(ray.direction) * distance;
    return {pos[0], pos[1], pos[2]};
}

template <typename PointType> struct Frame {
    using Ptr = std::shared_ptr<Frame<PointType>>;

    Frame() : sourcePos(glm::vec3(0.f)), points() {}

    Frame(glm::vec3 _sourcePos,
          std::vector<PointType, Eigen::aligned_allocator<PointType>> _points)
        : sourcePos(_sourcePos), points(_points)
    {
    }

    // Position of lidar or other source
    glm::vec3 sourcePos;
    // XYZ or XYZI points
    std::vector<PointType, Eigen::aligned_allocator<PointType>> points;
};

enum class CloudType { binary, pcd, txt };

template <typename PointType>
FORCE_INLINE void scale_cloud(Frame<PointType> &cloud, const glm::vec3 &scale)
{
    for (auto &point : cloud.points) {
        point.x *= scale.x;
        point.y *= scale.y;
        point.z *= scale.z;
    }
}

class Lidar : public FpsCamera {
  public:
    explicit Lidar(GLfloat ray_length, GLfloat x, GLfloat y, GLfloat z, GLfloat up_x, GLfloat up_y,
                   GLfloat up_z, GLfloat yaw, GLfloat pitch)
        : FpsCamera(x, y, z, up_x, up_y, up_z, yaw, pitch), m_rayLength(ray_length){};

    explicit Lidar(GLfloat ray_length, glm::vec3 position = glm::vec3(0.0f, 0.0f, 0.0f),
                   glm::vec3 up = glm::vec3(0.0f, 1.0f, 0.0f), GLfloat yaw = YAW,
                   GLfloat pitch = PITCH)
        : FpsCamera(position, up, yaw, pitch), m_rayLength(ray_length){};

    GLfloat getRayLength() const;

    void setYaw(GLfloat yaw);
    void setPitch(GLfloat pitch);
    void setPos(const glm::vec3 &pos);
    void setFront(const glm::vec3 &front);
    void setWorldUp(const glm::vec3 &worldUp);
    void setRayLength(GLfloat length);

    GLfloat getYaw() const;
    GLfloat getPitch() const;
    glm::vec3 getFront() const;

    /**
     * Perform lidar point cloud by pattern
     * @return
     */
    std::vector<vec3> risleyPattern2(const vec2 &freq, const vec2 &angle, GLfloat dens,
                                     GLfloat refractive_index = 1.5f, bool draw = false,
                                     GLfloat render_step = 0.f) const;

  private:
    void updateCameraVectors();
    GLfloat m_rayLength;
};

#endif // LIDAR_HPP
