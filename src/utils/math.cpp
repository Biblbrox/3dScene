#include <array>

#include "utils/math.hpp"

std::array<GLfloat, 6> math::findBounds(const std::vector<vec3> &points)
{
    GLfloat min_x, max_x, min_y, max_y, min_z, max_z;
    min_x = max_x = points[0].x;
    min_y = max_y = points[0].y;
    min_z = max_z = points[0].z;

    for (auto vert: points) {
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
                cov(i,j) += (points[k + i][i] - means[i])
                        * (points[k + j][j] - means[j]);

            cov /= points.size() - 1;

            return cov;
}

glm::vec3
math::viewportToWorld(const vec2 &pos, const vec2 &clip, const mat4 &projection, const mat4 &view)
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
