#ifndef OBB_HPP
#define OBB_HPP

#include <vector>

#include "utils/datastructs.hpp"

using utils::RectPoints3D;

/**
* Return rectangular oriented bounding box for given vertices
* Result contain vertices grouped to triangle primitives
* @param mesh_vertices
* @param angle
* @param rot_axis
* @return
*/
RectPoints3D
buildOBB(const std::vector<vec3> &mesh_vertices) noexcept;

/**
 * Return rectangular bounding box for given vertices
 * Result contain vertices grouped to triangle primitives
 * @param mesh_vertices
 * @param angle
 * @param rot_axis
 * @return
 */
RectPoints3D
OBBtoWorldSpace(RectPoints3D rect,
                const glm::vec3 &rot_axis, GLfloat angle,
                const glm::vec3 &position, const TextureBase &texture) noexcept;


#endif //OBB_HPP
