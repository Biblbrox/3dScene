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
#include "sceneprogram.hpp"
#include "utils/datastructs.hpp"

namespace coll {

    using glm::mat4;
    using glm::mat3;
    using glm::vec3;
    using glm::vec4;
    using utils::RectPoints3D;

    /**
 * Build 2d rectangle from rect with corrected coords by
 * rotation angle
 * @param rect
 * @param alpha
 * @return
 */
    utils::RectPoints2D
    buildRectPoints2d(const utils::Rect2D &rect, GLfloat alpha) noexcept;

    std::vector<GLfloat>
    buildVerticesFromRect3D(utils::RectPoints3D rect);


    std::array<GLfloat, 6>
    findMeshBound(const std::vector<GLfloat> &mesh_vertices);

    /**
     * Return rectangular bounding box for given vertices
     * Result contain vertices grouped to triangle primitives
     * @param mesh_vertices
     * @param angle
     * @param rot_axis
     * @return
     */
    utils::RectPoints3D
    buildAABB(const std::vector<GLfloat> &mesh_vertices) noexcept;

    utils::RectPoints3D
    rebuildAABBinWorldSpace(const utils::RectPoints3D& rect) noexcept;

    /**
    * Return rectangular bounding box for given vertices
    * Result contain vertices grouped to triangle primitives
    * @param mesh_vertices
    * @param angle
    * @param rot_axis
    * @return
    */
    utils::RectPoints3D
    AABBtoWorldSpace(utils::RectPoints3D rect,
                     const glm::vec3& rot_axis, GLfloat angle,
                     const glm::vec3& position, const Texture& texture) noexcept;
    /**
     * Return rectangular oriented bounding box for given vertices
     * Result contain vertices grouped to triangle primitives
     * @param mesh_vertices
     * @param angle
     * @param rot_axis
     * @return
     */
    inline utils::RectPoints3D
    buildOBB(const std::vector<GLfloat> &mesh_vertices) noexcept;

    std::array<std::vector<GLfloat>, 2>
    divideByLongestSize(const std::vector<GLfloat>& mesh_vertices);

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
    NodePtr
    buildBVH(const VertData &mesh_vertices, glm::vec3 min_rect) noexcept;


    using TreePtr = std::shared_ptr<utils::data::Node<size_t, utils::RectPoints3D>>;

    std::pair<bool, glm::vec3>
    BVHAABBTraversal(TreePtr tree,
                        const glm::vec3& ray_dir, const glm::vec3& ray_origin);

    void
    BVHAABBTraversalRec(TreePtr tree,
                        const glm::vec3& ray_dir, const glm::vec3& ray_origin,
                        std::vector<glm::vec3>& instersections);

    /**
     * Check whether first line (p11, p12) intersect with second (p21, p22)
     * @param p11
     * @param p12
     * @param p21
     * @param p22
     * @return
     */
    constexpr bool lineLine(const vec2 &p11, const vec2 &p12,
                            const vec2 &p21, const vec2 &p22) noexcept
    {
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
                utils::RectPoints3D rect) noexcept
    {
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
}

#endif //COLLISION_HPP
