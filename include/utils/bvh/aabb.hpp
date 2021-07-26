#ifndef AABB_HPP
#define AABB_HPP

#include <vector>

#include "utils/datastructs.hpp"
#include "render/texturebase.hpp"

using utils::RectPoints3D;
using std::minmax;

/**
* Return rectangular bounding box for given vertices
* Result contain vertices grouped to triangle primitives
* @param mesh_vertices
* @param angle
* @param rot_axis
* @return
*/
RectPoints3D
buildAABB(const std::vector <vec3> &mesh_vertices) noexcept;

/**
* Return rectangular bounding box for given vertices
* Result contain vertices grouped to triangle primitives
* @param mesh_vertices
* @param angle
* @param rot_axis
* @return
*/
RectPoints3D
AABBtoWorldSpace(utils::RectPoints3D rect,
                 const glm::vec3 &rot_axis, GLfloat angle,
                 const glm::vec3 &position,
                 const TextureBase &texture) noexcept;

RectPoints3D
AABBTransform(RectPoints3D rect,
              const vec3 &rot_axis, GLfloat angle,
              const vec3 &position, const TextureBase &texture) noexcept;

constexpr RectPoints3D
rebuildAABBinWorldSpace(const RectPoints3D &rect) noexcept
{
    auto[min_x, max_x] = minmax({rect.a.x, rect.b.x, rect.c.x, rect.d.x,
                                 rect.e.x, rect.f.x, rect.g.x, rect.k.x});
    auto[min_y, max_y] = minmax({rect.a.y, rect.b.y, rect.c.y, rect.d.y,
                                 rect.e.y, rect.f.y, rect.g.y, rect.k.y});
        auto[min_z, max_z] = minmax({rect.a.z, rect.b.z, rect.c.z, rect.d.z,
                                     rect.e.z, rect.f.z, rect.g.z, rect.k.z});

    // Front plane
    vec3 a = {min_x, min_y, min_z};
    vec3 b = {max_x, min_y, min_z};
    vec3 c = {max_x, max_y, min_z};
    vec3 d = {min_x, max_y, min_z};

    // Right plane
    vec3 e = {max_x, min_y, max_z};
    vec3 f = {max_x, max_y, max_z};

    // Back plane
    vec3 g = {min_x, max_y, max_z};
    vec3 k = {min_x, min_y, max_z};

    return {a, b, c, d, e, f, g, k};
}

#endif //AABB_HPP
