#ifndef MATH_HPP
#define MATH_HPP

#include <vector>
#include <glm/vec2.hpp>
#include <glm/vec3.hpp>
#include <glm/mat4x4.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <GL/glew.h>
#include <Eigen/Eigenvalues>

#include "base.hpp"

using glm::vec2;
using glm::vec3;
using glm::vec4;
using glm::mat4;

namespace math {

    constexpr GLfloat barry_centric(const vec3& p1, const vec3& p2,
                                    const vec3& p3, const vec2& pos)
    {
        GLfloat det = (p2.z - p3.z) * (p1.x - p3.x) + (p3.x - p2.x) * (p1.z - p3.z);
        GLfloat l1 = ((p2.z - p3.z) * (pos.x - p3.x) + (p3.x - p2.x) * (pos.y - p3.z)) / det;
        GLfloat l2 = ((p3.z - p1.z) * (pos.x - p3.x) + (p1.x - p3.x) * (pos.y - p3.z)) / det;
        GLfloat l3 = 1.f - l1 - l2;

        return l1 * p1.y + l2 * p2.y + l3 * p3.y;
    }

    /**
 * Rotate world around point v
 * @param m
 * @param v
 * @param angle
 * @return
 */
    FORCE_INLINE inline glm::mat4
    rotate_around(const glm::mat4 &m, const glm::vec3 &v, GLfloat angle,
                  const glm::vec3& rot_axis = glm::vec3(1.f, 0.f, 0.f))
    {
        glm::mat4 tr1 = glm::translate(m, v);
        glm::mat4 ro = glm::rotate(tr1, angle, rot_axis);
        glm::mat4 tr2 = glm::translate(ro, -v);

        return tr2;
    }


    inline
    std::array<GLfloat, 6> findBounds(const std::vector<vec3> &points)
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

    inline mat4 createTransform(const vec3& position, GLfloat angle,
                                const vec3& rot_axis, const vec3& sizes)
    {
        vec3 pos = position / sizes;

        const GLfloat half = 1.f;
        const GLfloat centerX = pos.x + half;
        const GLfloat centerY = pos.y + half;
        const GLfloat centerZ = pos.z + half;

        const vec3 scale = sizes;

        mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                      rot_axis);
        mat4 translation = translate(mat4(1.f), pos);
        mat4 scaling = glm::scale(mat4(1.f), scale);
        mat4 transform = scaling * rotation * translation;

        return transform;
    }

    inline std::vector<vec3> transformVertices(const std::vector<vec3>& vertices,
                                               const mat4& transform)
    {
        std::vector<vec3> res;
        res.reserve(vertices.size());
        for (const vec3& v: vertices) {
            res.push_back(transform * vec4(v, 1.f));
        }

        return res;
    }

    inline std::vector<Triangle>
    transformTriangles(const std::vector<Triangle>& triangles,
                       const mat4& transform)
    {
        std::vector<Triangle> res;
        res.reserve(triangles.size());

        for (const auto & v : triangles) {
            vec3 a = vec3(v.p0[0], v.p0[1], v.p0[2]);
            vec3 b = vec3(v.p1()[0], v.p1()[1], v.p1()[2]);
            vec3 c = vec3(v.p2()[0], v.p2()[1], v.p2()[2]);

            a = transform * vec4(a, 1.f);
            b = transform * vec4(b, 1.f);
            c = transform * vec4(c, 1.f);

            res.emplace_back(Vector3(a.x, a.y, a.z), Vector3(b.x, b.y, b.z),
                             Vector3(c.x, c.y, c.z));
        }

        return res;
    }

    FORCE_INLINE inline mat4 buildTransformMat(const vec3& pos, const vec3& rot_axis,
                                               const vec3& scale, GLfloat angle)
    {
        mat4 translating = glm::translate(mat4(1.f), pos);
        mat4 rotating = glm::rotate(mat4(1.f), angle, rot_axis);
        mat4 scaling = glm::scale(mat4(1.f), scale);

        return scaling * rotating * translating;
    }

    constexpr vec3 viewportToNDC(const vec2& pos, const vec2& clip)
    {
        GLfloat width = clip.x;
        GLfloat height = clip.y;
        GLfloat x = pos.x;
        GLfloat y = pos.y;

        // To NDC space
        x = 2.f * x / width - 1.f;
        y = 1.f - 2.f * y / height;
        GLfloat z = 1;

        return {x, y, z};
    }

    /**
     * Transform viewport coordinates to world space
     * @param pos
     * @return
     */
    inline glm::vec3 viewportToWorld(const glm::vec2& pos, const glm::vec2& clip,
                                     const glm::mat4& projection,
                                     const glm::mat4& view)
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

    inline glm::vec3 computeCentroid(const std::vector<vec3>& points)
    {
        glm::vec3 means{0.f};
        for (auto point : points) {
            means[0] += point.x;
            means[1] += point.y;
            means[2] += point.z;
        }

        means /= points.size();

        return means;
    }

    /**
     * Build covariance matrix from set of points
     * @param points
     * @return
     */
    inline Eigen::Matrix3f build_covarience_matrix(const std::vector<vec3>& points)
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

    constexpr unsigned int power_two(unsigned int val) noexcept
    {
        unsigned int power = 2, nextVal = power * 2;


        while ((nextVal *= 2) <= val)
            power *= 2;

        return power * 2;
    }

    /**
     * Rotate(move elements) around element with idx position
     * @param points
     * @param idx
     * @return
     */
    inline std::vector<vec2> rotate_points(const std::vector<vec2>& points, size_t idx)
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

    template <typename T>
    constexpr int sgn(T val)
    {
        return (T(0) < val) - (val < T(0));
    }

    template <typename T, typename U>
    constexpr auto cantor_pairing(T f, U s)
    {
        return 0.5 * (f + s) * (f + s + 1) + s;
    }

    template <typename T, typename ...Args>
    constexpr auto cantor_pairing(T arg, Args... args)
    {
        return cantor_pairing(arg, cantor_pairing(args...));
    }

    template <typename T>
    constexpr glm::vec2 operator/(T val, const glm::vec2& vec)
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                               " must be arithmetical");
        return glm::vec2(val / vec.x, val / vec.y);
    }

    template <typename T>
    constexpr glm::vec3 operator/(T val, const glm::vec3& vec)
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                                   " must be arithmetical");
        return glm::vec3(val / vec.x, val / vec.y, val / vec.z);
    }

    template <typename T>
    constexpr glm::vec4 operator/(T val, const glm::vec4& vec)
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                               " must be arithmetical");
        return glm::vec4(val / vec.x, val / vec.y, val / vec.z, val / vec.w);
    }

    template <typename T>
    constexpr glm::vec2 operator/(const glm::vec2& vec, T val)
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                               " must be arithmetical");
        return glm::vec2(vec.x / val, vec.y / val);
    }

    template <typename T>
    constexpr glm::vec3 operator/(const glm::vec3& vec, T val)
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                               " must be arithmetical");
        return glm::vec3(vec.x / val, vec.y / val, vec.z / val);
    }

    template <typename T>
    constexpr glm::vec4 operator/(const glm::vec4& vec, T val)
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                               " must be arithmetical");
        return glm::vec4(vec.x / val, vec.y / val, vec.z / val, vec.w / val);
    }
}

#endif //MATH_HPP
