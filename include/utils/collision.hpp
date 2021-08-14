#ifndef COLLISION_HPP
#define COLLISION_HPP

#include <cmath>
#include <algorithm>
#include <glm/gtc/constants.hpp>
#include <glm/gtx/transform.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <GL/glew.h>
#include <ecs/entity.hpp>
#include <Eigen/Eigenvalues>

#include <bvh/bvh.hpp>
#include <bvh/vector.hpp>
#include <bvh/triangle.hpp>
#include <bvh/ray.hpp>
#include <bvh/sweep_sah_builder.hpp>
#include <bvh/single_ray_traverser.hpp>
#include <bvh/primitive_intersectors.hpp>

#include "utils/math.hpp"
#include "render/texturebase.hpp"
#include "sceneprogram.hpp"
#include "utils/datastructs.hpp"
#include "render/terrain.hpp"
#include "view/lidar.hpp"

using Scalar   = float;
using Vector3  = bvh::Vector3<Scalar>;
using Triangle = bvh::Triangle<Scalar>;
using Ray      = bvh::Ray<Scalar>;
using Tree = bvh::Bvh<Scalar>;
using TreePtr = std::shared_ptr<bvh::Bvh<Scalar>>;

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

    /**
     * Build top-down BVH tree until min_rect condition not required in
     * one of axis.
     * division is step original mesh divided by
     * @param mesh_vertices
     * @return
     */
    TreePtr buildBVH(const std::vector<Triangle>& triangles) noexcept;

    void updateBVH(std::shared_ptr<ecs::Entity> en);

    std::pair<bool, vec3>
    BVHCollision(TreePtr tree, const Ray& ray, const std::vector<Triangle>& triangles);


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
    inline std::pair<bool, vec3>
    raycastAABB(const Ray& ray, const utils::RectPoints3D& rect) noexcept
    {
        auto [min_x, max_x] = minmax({rect.a.x, rect.b.x, rect.c.x, rect.d.x, rect.e.x,
                                      rect.f.x, rect.g.x, rect.k.x});
        auto [min_y, max_y] = minmax({rect.a.y, rect.b.y, rect.c.y, rect.d.y, rect.e.y,
                                      rect.f.y, rect.g.y, rect.k.y});
        auto [min_z, max_z] = minmax({rect.a.z, rect.b.z, rect.c.z, rect.d.z, rect.e.z,
                                      rect.f.z, rect.g.z, rect.k.z});

        vec3 ray_origin = vec3(ray.origin[0], ray.origin[1], ray.origin[2]);
        vec3 ray_dir = vec3(ray.direction[0], ray.direction[1], ray.direction[2]);

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
