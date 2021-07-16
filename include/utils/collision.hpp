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
#include "render/texture.hpp"
#include "sceneprogram.hpp"
#include "utils/datastructs.hpp"
#include "render/terrain.hpp"
#include "view/lidar.hpp"

namespace coll {

    using std::minmax;
    using std::max;
    using std::min;

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

    std::vector<vec3>
    buildVerticesFromRect3D(utils::RectPoints3D rect);


    std::array<GLfloat, 6>
    findMeshBound(const std::vector<vec3> &mesh_vertices);

    std::array<std::vector<vec3>, 2>
    divideByLongestSize(const std::vector<vec3>& mesh_vertices);

    using NodeData = utils::RectPoints3D;
    using Node = utils::data::Node<size_t, NodeData>;
    using NodePtr = std::shared_ptr<Node>;

    using VertData = std::vector<vec3>;
    using VertDataPtr = std::shared_ptr<vec3>;

    /**
     * Build top-down BVH tree until min_rect condition not required in
     * one of axis.
     * division is step original mesh divided by
     * @param mesh_vertices
     * @return
     */
    NodePtr buildBVH(const VertData &mesh_vertices, vec3 min_rect) noexcept;

    /**
    * Build top-down BVH tree until min_rect condition not required in
    * one of axis.
    * division is step original mesh divided by
    * @param mesh_vertices
    * @return
    */
    NodePtr buildBVHOBB(const VertData &mesh_vertices, vec3 min_rect) noexcept;


    using TreePtr = std::shared_ptr<utils::data::Node<size_t, utils::RectPoints3D>>;

    std::pair<bool, glm::vec3> BVHAABBTraversal(TreePtr tree, const Ray& ray);

    void BVHAABBTraversalRec(TreePtr tree, const Ray& ray,
                             std::vector<vec3>& intersections);

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
    constexpr std::pair<bool, vec3>
    raycastAABB(const Ray& ray, const utils::RectPoints3D& rect) noexcept
    {
        auto [min_x, max_x] = minmax({rect.a.x, rect.b.x, rect.c.x, rect.d.x, rect.e.x,
                                      rect.f.x, rect.g.x, rect.k.x});
        auto [min_y, max_y] = minmax({rect.a.y, rect.b.y, rect.c.y, rect.d.y, rect.e.y,
                                      rect.f.y, rect.g.y, rect.k.y});
        auto [min_z, max_z] = minmax({rect.a.z, rect.b.z, rect.c.z, rect.d.z, rect.e.z,
                                      rect.f.z, rect.g.z, rect.k.z});

        vec3 ray_origin = ray.origin;
        vec3 ray_dir = ray.dir;

        GLfloat tMinX = (min_x - ray_origin.x) / ray_dir.x;
        GLfloat tMaxX = (max_x - ray_origin.x) / ray_dir.x;

        GLfloat tMinY = (min_y - ray_origin.y) / ray_dir.y;
        GLfloat tMaxY = (max_y - ray_origin.y) / ray_dir.y;

        GLfloat tMinZ = (min_z - ray_origin.z) / ray_dir.z;
        GLfloat tMaxZ = (max_z - ray_origin.z) / ray_dir.z;

        GLfloat tmin = max(max(min(tMinX, tMaxX), min(tMinY, tMaxY)),
                           min(tMinZ, tMaxZ));
        GLfloat tmax = min(min(max(tMinX, tMaxX), max(tMinY, tMaxY)),
                           max(tMinZ, tMaxZ));

        if (tmax < 0)
            return {false, vec3(-1.f)};

        if (tmin > tmax)
            return {false, vec3(-1.f)};

        if (tmin < 0)
            return {true, ray_origin + ray_dir * tmax};

        return {true, ray_origin + ray_dir * tmin};
    }

    /**
     * Find ray-terrain intersection by binary search
     * @param terrain
     * @param ray
     * @param start
     * @param end
     * @param num_iter
     * @return
     */
    std::pair<bool, glm::vec3>
    rayTerrainIntersection(const Terrain& terrain, const Ray& ray,
                           GLfloat start, GLfloat end, size_t num_iter);

    bool interInRange(const Terrain& terrain,
                      GLfloat start, GLfloat end, const Ray& ray);
}

#endif //COLLISION_HPP
