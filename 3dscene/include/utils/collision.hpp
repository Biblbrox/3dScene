#ifndef COLLISION_HPP
#define COLLISION_HPP

#include <cmath>
#include <algorithm>
#include <glm/gtc/constants.hpp>
#include <glm/gtx/transform.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <GL/glew.h>
#include <Eigen/Eigenvalues>

#include "utils/math.hpp"
#include "../render/texture.hpp"
#include "lifeprogram.hpp"

namespace coll {

    using glm::mat4;
    using glm::mat3;
    using glm::vec3;
    using glm::vec4;

    /**
 * Build 2d rectangle from rect with corrected coords by
 * rotation angle
 * @param rect
 * @param alpha
 * @return
 */
    inline utils::RectPoints2D
    buildRectPoints2d(const utils::Rect2D &rect, GLfloat alpha) noexcept {
        GLfloat bx, by, cx, cy, dx, dy;
        const GLfloat x = rect.x;
        const GLfloat y = rect.y;
        const GLfloat width = rect.w;
        const GLfloat height = rect.h;
        // angle must be in range 0 - 2*pi
        alpha -= glm::two_pi<GLfloat>()
                 * std::floor(alpha / glm::two_pi<GLfloat>());

        alpha = -alpha;

        GLfloat alpha_cos = std::cos(alpha);
        GLfloat alpha_sin = std::sin(alpha);

        bx = x + width * alpha_cos;
        by = y - width * alpha_sin;

        dx = x + height * alpha_sin;
        dy = y + height * alpha_cos;

        cx = bx + height * alpha_sin;
        cy = by + height * alpha_cos;

        return {{x,  y},
                {bx, by},
                {cx, cy},
                {dx, dy}};
    }

    inline std::vector<GLfloat>
    buildVerticesFromRect3D(utils::RectPoints3D rect) {
        auto[a, b, c, d, e, f, g, k] = rect;
        return {
                // Front plane
                a.x, a.y, a.z,
                b.x, b.y, b.z,
                c.x, c.y, c.z,
                a.x, a.y, a.z,
                c.x, c.y, c.z,
                d.x, d.y, d.z,
                // Right plane
                b.x, b.y, b.z,
                e.x, e.y, e.z,
                f.x, f.y, f.z,
                b.x, b.y, b.z,
                f.x, f.y, f.z,
                c.x, c.y, c.z,
                // Back plane
                e.x, e.y, e.z,
                k.x, k.y, k.z,
                g.x, g.y, g.z,
                e.x, e.y, e.z,
                g.x, g.y, g.z,
                f.x, f.y, f.z,
                // Top plane
                d.x, d.y, d.z,
                c.x, c.y, c.z,
                f.x, f.y, f.z,
                d.x, d.y, d.z,
                f.x, f.y, f.z,
                g.x, g.y, g.z,
                // Left plane
                k.x, k.y, k.z,
                a.x, a.y, a.z,
                d.x, d.y, d.z,
                k.x, k.y, k.z,
                d.x, d.y, d.z,
                g.x, g.y, g.z,
                // Bottom plane
                k.x, k.y, k.z,
                e.x, e.y, e.z,
                b.x, b.y, b.z,
                k.x, k.y, k.z,
                b.x, b.y, b.z,
                a.x, a.y, a.z,
        };
    }

    inline std::array<GLfloat, 6>
    findMeshBound(const std::vector<GLfloat> &mesh_vertices) {
        GLfloat min_x, max_x, min_y, max_y, min_z, max_z;
        min_x = max_x = mesh_vertices[0];
        min_y = max_y = mesh_vertices[1];
        min_z = max_z = mesh_vertices[2];
        for (size_t i = 0; i < mesh_vertices.size(); i += 3) {
            if (mesh_vertices[i] < min_x)
                min_x = mesh_vertices[i];
            if (mesh_vertices[i] > max_x)
                max_x = mesh_vertices[i];

            if (mesh_vertices[i + 1] < min_y)
                min_y = mesh_vertices[i + 1];
            if (mesh_vertices[i + 1] > max_y)
                max_y = mesh_vertices[i + 1];

            if (mesh_vertices[i + 2] < min_z)
                min_z = mesh_vertices[i + 2];
            if (mesh_vertices[i + 2] > max_z)
                max_z = mesh_vertices[i + 2];
        }

        return {min_x, max_x, min_y, max_y, min_z, max_z};
    }

    /**
     * Return rectangular bounding box for given vertices
     * Result contain vertices grouped to triangle primitives
     * @param mesh_vertices
     * @param angle
     * @param rot_axis
     * @return
     */
    inline utils::RectPoints3D
    buildAABB(const std::vector<GLfloat> &mesh_vertices) noexcept {
        assert(mesh_vertices.size() % 3 == 0
               && "Vertices count must be power of 3");
        auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(
                mesh_vertices);

        // Front plane
        glm::vec3 a = {min_x, min_y, min_z};
        glm::vec3 b = {max_x, min_y, min_z};
        glm::vec3 c = {max_x, max_y, min_z};
        glm::vec3 d = {min_x, max_y, min_z};

        // Right plane
        glm::vec3 e = {max_x, min_y, max_z};
        glm::vec3 f = {max_x, max_y, max_z};

        // Back plane
        glm::vec3 g = {min_x, max_y, max_z};
        glm::vec3 k = {min_x, min_y, max_z};

        return {a, b, c, d, e, f, g, k};
    }


    inline utils::RectPoints3D
    rebuildAABBinWorldSpace(const utils::RectPoints3D& rect) noexcept {
        GLfloat min_x = std::min({rect.a.x, rect.b.x, rect.c.x, rect.d.x,
                                  rect.e.x, rect.f.x, rect.g.x, rect.k.x});
        GLfloat max_x = std::max({rect.a.x, rect.b.x, rect.c.x, rect.d.x,
                                  rect.e.x, rect.f.x, rect.g.x, rect.k.x});
        GLfloat min_y = std::min({rect.a.y, rect.b.y, rect.c.y, rect.d.y,
                                  rect.e.y, rect.f.y, rect.g.y, rect.k.y});
        GLfloat max_y = std::max({rect.a.y, rect.b.y, rect.c.y, rect.d.y,
                                  rect.e.y, rect.f.y, rect.g.y, rect.k.y});
        GLfloat min_z = std::min({rect.a.z, rect.b.z, rect.c.z, rect.d.z,
                                  rect.e.z, rect.f.z, rect.g.z, rect.k.z});
        GLfloat max_z = std::max({rect.a.z, rect.b.z, rect.c.z, rect.d.z,
                                  rect.e.z, rect.f.z, rect.g.z, rect.k.z});

        // Front plane
        glm::vec3 a = {min_x, min_y, min_z};
        glm::vec3 b = {max_x, min_y, min_z};
        glm::vec3 c = {max_x, max_y, min_z};
        glm::vec3 d = {min_x, max_y, min_z};

        // Right plane
        glm::vec3 e = {max_x, min_y, max_z};
        glm::vec3 f = {max_x, max_y, max_z};

        // Back plane
        glm::vec3 g = {min_x, max_y, max_z};
        glm::vec3 k = {min_x, min_y, max_z};

        return {a, b, c, d, e, f, g, k};
    }

    /**
    * Return rectangular bounding box for given vertices
    * Result contain vertices grouped to triangle primitives
    * @param mesh_vertices
    * @param angle
    * @param rot_axis
    * @return
    */
    inline utils::RectPoints3D
    AABBtoWorldSpace(utils::RectPoints3D rect,
                     const glm::vec3& rot_axis, GLfloat angle,
                     const glm::vec3& position, const Texture& texture,
                     const glm::mat4& model,
                     const glm::mat4& view,
                     const glm::mat4& projection) noexcept {

        glm::vec3 pos = {2.f * position.x / texture.getWidth(),
                         2.f * position.y / texture.getHeight(),
                         2.f * position.z / texture.getDepth()};

        const GLfloat half = 1.f;
        const GLfloat centerX = pos.x + half;
        const GLfloat centerY = pos.y + half;
        const GLfloat centerZ = pos.z + half;

        const glm::vec3 scale = glm::vec3(texture.getWidth(), texture.getHeight(),
                                          texture.getDepth());

        mat4 rotation = utils::math::rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                                   rot_axis);
        mat4 translation = translate(mat4(1.f), pos);
        mat4 scaling = glm::scale(mat4(1.f), scale);
        glm::mat4 transform = scaling * rotation * translation;

        rect.a = transform * vec4(rect.a, 1.f);
        rect.b = transform * vec4(rect.b, 1.f);
        rect.c = transform * vec4(rect.c, 1.f);
        rect.d = transform * vec4(rect.d, 1.f);
        rect.e = transform * vec4(rect.e, 1.f);
        rect.f = transform * vec4(rect.f, 1.f);
        rect.g = transform * vec4(rect.g, 1.f);
        rect.k = transform * vec4(rect.k, 1.f);

        return rebuildAABBinWorldSpace(rect);
    }

    /**
     * Return rectangular oriented bounding box for given vertices
     * Result contain vertices grouped to triangle primitives
     * @param mesh_vertices
     * @param angle
     * @param rot_axis
     * @return
     */
    inline utils::RectPoints3D
    buildOBB(const std::vector<GLfloat> &mesh_vertices) noexcept {
        assert(mesh_vertices.size() % 3 == 0
               && "Vertices count must be power of 3");
        // Build covarience matrix
        glm::mat3 cov_glm = utils::math::build_covarience_matrix(mesh_vertices);
        Eigen::Matrix3f cov;
        cov << cov_glm[0][0], cov_glm[0][1], cov_glm[0][2],
                cov_glm[1][0], cov_glm[1][1], cov_glm[1][2],
                cov_glm[2][0], cov_glm[2][1], cov_glm[2][2];
        // Find eigen vectors
        Eigen::SelfAdjointEigenSolver<Eigen::Matrix3f> eigensolver(cov);
        if (eigensolver.info() != Eigen::Success) {
            // TODO: throw error
        }
        auto eigen_vectors = eigensolver.eigenvectors();
        //std::cout << eigen_vectors;

        auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(
                mesh_vertices);

        // Front plane
        glm::vec3 a = {min_x, min_y, min_z};
        glm::vec3 b = {max_x, min_y, min_z};
        glm::vec3 c = {max_x, max_y, min_z};
        glm::vec3 d = {min_x, max_y, min_z};

        // Right plane
        glm::vec3 e = {max_x, min_y, max_z};
        glm::vec3 f = {max_x, max_y, max_z};

        // Back plane
        glm::vec3 g = {min_x, max_y, max_z};
        glm::vec3 k = {min_x, min_y, max_z};

        return {a, b, c, d, e, f, g, k};
    }

    std::array<std::vector<GLfloat>, 2>
    inline divideByLongestSize(std::vector<GLfloat> mesh_vertices) {
        auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(
                mesh_vertices);

        // Divide by longest side
        GLfloat x_length = std::abs(std::abs(max_x) - std::abs(min_x));
        GLfloat y_length = std::abs(std::abs(max_y) - std::abs(min_y));
        GLfloat z_length = std::abs(std::abs(max_z) - std::abs(min_z));

        std::vector<GLfloat> left_part;
        std::vector<GLfloat> right_part;
        if (x_length > y_length && x_length > z_length) {
            for (size_t i = 0; i < mesh_vertices.size(); i += 3) {
                if (mesh_vertices[i] < min_x + x_length / 2.f) {
                    left_part.push_back(mesh_vertices[i]);
                    left_part.push_back(mesh_vertices[i + 1]);
                    left_part.push_back(mesh_vertices[i + 2]);
                } else {
                    right_part.push_back(mesh_vertices[i]);
                    right_part.push_back(mesh_vertices[i + 1]);
                    right_part.push_back(mesh_vertices[i + 2]);
                }
            }
        } else if (y_length > x_length && y_length > z_length) {
            for (size_t i = 0; i < mesh_vertices.size(); i += 3) {
                if (mesh_vertices[i + 1] < min_y + y_length / 2.f) {
                    left_part.push_back(mesh_vertices[i]);
                    left_part.push_back(mesh_vertices[i + 1]);
                    left_part.push_back(mesh_vertices[i + 2]);
                } else {
                    right_part.push_back(mesh_vertices[i]);
                    right_part.push_back(mesh_vertices[i + 1]);
                    right_part.push_back(mesh_vertices[i + 2]);
                }
            }
        } else if (z_length > x_length && z_length > y_length) {
            for (size_t i = 0; i < mesh_vertices.size(); i += 3) {
                if (mesh_vertices[i + 2] < min_z + z_length / 2.f) {
                    left_part.push_back(mesh_vertices[i]);
                    left_part.push_back(mesh_vertices[i + 1]);
                    left_part.push_back(mesh_vertices[i + 2]);
                } else {
                    right_part.push_back(mesh_vertices[i]);
                    right_part.push_back(mesh_vertices[i + 1]);
                    right_part.push_back(mesh_vertices[i + 2]);
                }
            }
        }

        return {left_part, right_part};
    }

    using NodeData = utils::RectPoints3D;
    using Node = utils::data::Node<size_t, NodeData>;
    using NodePtr = std::shared_ptr<Node>;

    using VertData = std::vector<GLfloat>;
    using VertDataPtr = std::shared_ptr<VertData>;

    /**
     * Build top-down BVH tree until min_rect condition not required in
     * one of axis.
     * division is step original mesh divided by
     * @param mesh_vertices
     * @return
     */
    inline NodePtr
    buildBVH(const VertData &mesh_vertices, glm::vec3 min_rect) noexcept {
        buildOBB(mesh_vertices);
        NodePtr node = std::make_shared<Node>();
        node->m_data = std::make_shared<NodeData>(
                coll::buildAABB(mesh_vertices));
//        buildOBB(mesh_vertices);

        auto[left_part, right_part] = divideByLongestSize(mesh_vertices);

        auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(
                mesh_vertices);

        // Divide by longest side
        GLfloat x_length = std::abs(std::abs(max_x) - std::abs(min_x));
        GLfloat y_length = std::abs(std::abs(max_y) - std::abs(min_y));
        GLfloat z_length = std::abs(std::abs(max_z) - std::abs(min_z));
        if (x_length > min_rect.x || y_length > min_rect.y
            || z_length > min_rect.z) {
            node->m_left = buildBVH(left_part, min_rect);
            node->m_right = buildBVH(right_part, min_rect);
            return node;
        }

        return nullptr;
    }

    /**
     * Check whether first line (p11, p12) intersect with second (p21, p22)
     * @param p11
     * @param p12
     * @param p21
     * @param p22
     * @return
     */
    constexpr bool lineLine(const vec2 &p11, const vec2 &p12,
                            const vec2 &p21, const vec2 &p22) noexcept {
        GLfloat x1 = p11.x;
        GLfloat x2 = p12.x;
        GLfloat x3 = p21.x;
        GLfloat x4 = p22.x;

        GLfloat y1 = p11.y;
        GLfloat y2 = p12.y;
        GLfloat y3 = p21.y;
        GLfloat y4 = p22.y;

        // calculate the distance to intersection point
        GLfloat uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3))
                     / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
        GLfloat uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3))
                     / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

        // if uA and uB are between 0-1, lines are colliding
        return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1;
    }

    /**
     * Return point where ray intersect AABB
     * return vec of -1 when intersection is not occurred.
     * @param ray_dir
     * @param ray_origin
     * @param rect
     * @return
     */
    constexpr std::pair<bool, glm::vec3>
    raycastAABB(glm::vec3 ray_dir, glm::vec3 ray_origin,
                utils::RectPoints3D rect) noexcept {
        GLfloat min_x = std::min(
                {rect.a.x, rect.b.x, rect.c.x, rect.d.x, rect.e.x,
                 rect.f.x, rect.g.x, rect.k.x});
        GLfloat max_x = std::max(
                {rect.a.x, rect.b.x, rect.c.x, rect.d.x, rect.e.x,
                 rect.f.x, rect.g.x, rect.k.x});

        GLfloat min_y = std::min(
                {rect.a.y, rect.b.y, rect.c.y, rect.d.y, rect.e.y,
                 rect.f.y, rect.g.y, rect.k.y});
        GLfloat max_y = std::max(
                {rect.a.y, rect.b.y, rect.c.y, rect.d.y, rect.e.y,
                 rect.f.y, rect.g.y, rect.k.y});

        GLfloat min_z = std::min(
                {rect.a.z, rect.b.z, rect.c.z, rect.d.z, rect.e.z,
                 rect.f.z, rect.g.z, rect.k.z});
        GLfloat max_z = std::max(
                {rect.a.z, rect.b.z, rect.c.z, rect.d.z, rect.e.z,
                 rect.f.z, rect.g.z, rect.k.z});

        GLfloat tMinX = (min_x - ray_origin.x) / ray_dir.x;
        GLfloat tMaxX = (max_x - ray_origin.x) / ray_dir.x;

        GLfloat tMinY = (min_y - ray_origin.y) / ray_dir.y;
        GLfloat tMaxY = (max_y - ray_origin.y) / ray_dir.y;

        GLfloat tMinZ = (min_z - ray_origin.z) / ray_dir.z;
        GLfloat tMaxZ = (max_z - ray_origin.z) / ray_dir.z;

        GLfloat tmin = std::max(
                std::max(std::min(tMinX, tMaxX), std::min(tMinY, tMaxY)),
                std::min(tMinZ, tMaxZ));
        GLfloat tmax = std::min(
                std::min(std::max(tMinX, tMaxX), std::max(tMinY, tMaxY)),
                std::max(tMinZ, tMaxZ));

        if (tmax < 0)
            return {false, glm::vec3(-1.f)};

        if (tmin > tmax)
            return {false, glm::vec3(-1.f)};

        if (tmin < 0)
            return {true, ray_origin + ray_dir * tmax};

        return {true, ray_origin + ray_dir * tmin};
    }


    utils::RectPoints3D
    inline apply_transform(utils::RectPoints3D rect, LifeProgram &program) {


        return {
                 program.getMat4("ModelMatrix") * program.getMat4("ViewMatrix") * glm::vec4(rect.a, 1.f) ,
                 program.getMat4("ModelMatrix") * program.getMat4("ViewMatrix") * glm::vec4(rect.b, 1.f) ,
                 program.getMat4("ModelMatrix") * program.getMat4("ViewMatrix") * glm::vec4(rect.c, 1.f) ,
                 program.getMat4("ModelMatrix") * program.getMat4("ViewMatrix") * glm::vec4(rect.d, 1.f) ,
                 program.getMat4("ModelMatrix") * program.getMat4("ViewMatrix") * glm::vec4(rect.e, 1.f) ,
                 program.getMat4("ModelMatrix") * program.getMat4("ViewMatrix") * glm::vec4(rect.f, 1.f) ,
                 program.getMat4("ModelMatrix") * program.getMat4("ViewMatrix") * glm::vec4(rect.g, 1.f) ,
                 program.getMat4("ModelMatrix") * program.getMat4("ViewMatrix") * glm::vec4(rect.k, 1.f) ,

        };
    }
}

#endif //COLLISION_HPP
