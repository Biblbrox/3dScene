#include <array>
#include <glm/glm.hpp>
#include <glm/gtx/string_cast.hpp>
#include <glm/gtc/matrix_access.hpp>
#include <pcl/point_types.h>

#include "exceptions/fsexception.hpp"
#include "logger/logger.hpp"
#include "utils/math.hpp"
#include "utils/fs.hpp"

using glm::mat3;

std::array<GLfloat, 6> math::findBounds(const std::vector<vec3> &points)
{
    GLfloat min_x, max_x, min_y, max_y, min_z, max_z;
    min_x = max_x = points[0].x;
    min_y = max_y = points[0].y;
    min_z = max_z = points[0].z;

    for (auto vert : points) {
        if (vert.x < min_x)
            min_x = vert.x;
        if (vert.x > max_x)
            max_x = vert.x;

        if (vert.y < min_y)
            min_y = vert.y;
        if (vert.y > max_y)
            max_y = vert.y;

        if (vert.z < min_z)
            min_z = vert.z;
        if (vert.z > max_z)
            max_z = vert.z;
    }

    return {min_x, max_x, min_y, max_y, min_z, max_z};
}

std::vector<vec2> math::rotate_points(const std::vector<vec2> &points, size_t idx)
{
    assert(idx < points.size());

    std::vector<vec2> res;
    res.reserve(points.size());
    for (size_t i = 0; i < points.size(); ++i)
        res.emplace_back(points[i] + 2.f * (points[idx] - points[i]));

    std::reverse(res.begin(), res.end());
    res.shrink_to_fit();

    return res;
}

Eigen::Matrix3f math::build_covarience_matrix(const std::vector<vec3> &points)
{
    Eigen::Matrix3f cov;

    glm::vec3 means = computeCentroid(points);

    for (int i = 0; i < 3; ++i)
        for (int j = 0; j < 3; ++j)
            for (int k = 0; k < points.size(); ++k)
                cov(i, j) += (points[k + i][i] - means[i]) * (points[k + j][j] - means[j]);

    cov /= points.size() - 1;

    return cov;
}

glm::vec3 math::viewportToWorld(const vec2 &pos, const vec2 &clip, const mat4 &projection,
                                const mat4 &view)
{
    // To NDC space
    glm::vec3 p = viewportToNDC(pos, clip);

    // To 4-d homogenus space
    glm::vec4 ray = {p.x, p.y, -1.f, 1.f};

    // To eye space
    ray = glm::inverse(projection) * ray;
    ray = glm::vec4(ray.x, ray.y, -1.f, 0.f);

    // To world space
    glm::vec3 ray_world = glm::inverse(view) * ray;
    ray_world = glm::normalize(ray_world);

    return ray_world;
}

glm::mat4 math::loadCameraIntrinsic(const std::string &path, GLfloat near, GLfloat far,
                                    GLfloat width, GLfloat height)
{
    glm::mat3 K = utils::fs::loadMat<3, 3, GLfloat>(path);
    K = glm::transpose(K);

    K[2][0] *= -1;
    K[2][1] *= -1;
    K[2][2] *= -1;

    GLfloat A = near + far;
    GLfloat B = near * far;

    glm::mat4x4 persp;
    persp = glm::row(persp, 0, {glm::row(K, 0), 0.f});
    persp = glm::row(persp, 1, {glm::row(K, 1), 0.f});
    persp = glm::row(persp, 2, {0.f, 0.f, A, B});
    persp = glm::row(persp, 3, {0.f, 0.f, -1.f, 0.f});

    glm::mat4x4 NDC = glm::ortho(0.f, width, height, 0.f, near, far);
    glm::mat4x4 proj = NDC * persp;

    return proj;
}

glm::mat4x3 math::homogen2cartesian(const glm::mat4x4 &hom_mat)
{
    return glm::mat4x3();
}

glm::mat4 math::viewFromEuler(const vec3 &pos, GLfloat yaw, GLfloat pitch)
{
    // calculate the new Front vector
    glm::vec3 front;
    front.x = cos(glm::radians(yaw)) * cos(glm::radians(pitch));
    front.y = sin(glm::radians(pitch));
    front.z = sin(glm::radians(yaw)) * cos(glm::radians(pitch));
    front = glm::normalize(front);
    // also re-calculate the Right and Up vector
    glm::vec3 right = glm::normalize(glm::cross(front, glm::vec3(0.f, 1.f, 0.f)));
    glm::vec3 up = glm::normalize(glm::cross(right, front));

    return glm::lookAt(pos, pos + front, up);
}
