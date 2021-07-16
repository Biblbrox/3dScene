#include <glm/glm.hpp>
#include <glm/gtx/transform.hpp>

#include "utils/bvh/aabb.hpp"
#include "utils/math.hpp"

using glm::mat4;
using glm::translate;
using math::rotate_around;
using math::findBounds;

/**
 * Return rectangular bounding box for given vertices
 * Result contain vertices grouped to triangle primitives
 * @param vertices
 * @param angle
 * @param rot_axis
 * @return
 */
RectPoints3D buildAABB(const std::vector<vec3> &vertices) noexcept
{
    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findBounds(vertices);

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

/**
* Return rectangular bounding box for given vertices
* Result contain vertices grouped to triangle primitives
* @param mesh_vertices
* @param angle
* @param rot_axis
* @return
*/
RectPoints3D
AABBtoWorldSpace(RectPoints3D rect,
                 const vec3& rot_axis, GLfloat angle,
                 const vec3& position, const Texture& texture) noexcept
{
    vec3 pos = position / texture.getSize();

    const GLfloat half = 1.f;
    const GLfloat centerX = pos.x + half;
    const GLfloat centerY = pos.y + half;
    const GLfloat centerZ = pos.z + half;

    const vec3 scale = texture.getSize();

    mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                  rot_axis);
    mat4 translation = translate(mat4(1.f), pos);
    mat4 scaling = glm::scale(mat4(1.f), scale);
    mat4 transform = scaling * rotation * translation;

    rect = rectTransform(rect, transform);

    return rebuildAABBinWorldSpace(rect);
}


RectPoints3D AABBTransform(RectPoints3D rect,
                           const vec3& rot_axis, GLfloat angle,
                           const vec3& position, const Texture& texture) noexcept
{
    vec3 pos = position / texture.getSize();

    const GLfloat half = 1.f;
    const GLfloat centerX = position.x + half;
    const GLfloat centerY = position.y + half;
    const GLfloat centerZ = position.z + half;

    mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                  rot_axis);
    mat4 translation = translate(mat4(1.f), position);
    mat4 transform = rotation * translation;

    rect = rectTransform(rect, transform);

    return rebuildAABBinWorldSpace(rect);
}