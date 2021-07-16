#include <glm/glm.hpp>
#include <glm/vec3.hpp>
#include <glm/vec4.hpp>
#include <GL/glew.h>
#include <Eigen/Core>

#include "render/texture.hpp"
#include "utils/bvh/obb.hpp"
#include "utils/datastructs.hpp"
#include "utils/math.hpp"


using utils::RectPoints3D;
using math::build_covarience_matrix;
using math::rotate_around;

using glm::mat3;

RectPoints3D
OBBtoWorldSpace(RectPoints3D rect,
                      const glm::vec3& rot_axis, GLfloat angle,
                      const glm::vec3& position, const Texture& texture) noexcept
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

    return rect;
//    return rebuildAABBinWorldSpace(rect);
}


/**
 * Return rectangular oriented bounding box for given vertices
 * Result contain vertices grouped to triangle primitives
 * @param vertices
 * @param angle
 * @param rot_axis
 * @return
 */
RectPoints3D buildOBB(const std::vector<vec3> &vertices) noexcept
{
    using namespace Eigen;

    Matrix3f covariance = build_covarience_matrix(vertices);
    SelfAdjointEigenSolver<Matrix3f> eigen_solver(covariance, Eigen::ComputeEigenvectors);
    Eigen::Matrix3f eigenVectors = eigen_solver.eigenvectors();
    // This line is necessary for proper orientation in some cases.
    // The numbers come out the same without it, but
    // the signs are different and the box doesn't get correctly oriented in some cases.
//    eigenVectors.col(2) = eigenVectors.col(0).cross(eigenVectors.col(1));

//    vec3 r = normalize(vec3(eigenVectors.col(0).x(), eigenVectors.col(0).y(), eigenVectors.col(0).z()));
//    vec3 u = normalize(vec3(eigenVectors.col(1).x(), eigenVectors.col(1).y(), eigenVectors.col(1).z()));
//    vec3 f = normalize(vec3(eigenVectors.col(2).x(), eigenVectors.col(2).y(), eigenVectors.col(2).z()));

    vec3 r = normalize(vec3(eigenVectors(0,0), eigenVectors(1,0), eigenVectors(2,0)));
    vec3 u = normalize(vec3(eigenVectors(0,1), eigenVectors(1,1), eigenVectors(2,1)));
    vec3 f = normalize(vec3(eigenVectors(0,2), eigenVectors(1,2), eigenVectors(2,2)));

    mat3 rot;
    rot[0][0]=r.x; rot[0][1]=u.x; rot[0][2]=f.x;
    rot[1][0]=r.y; rot[1][1]=u.y; rot[1][2]=f.y;
    rot[2][0]=r.z; rot[2][1]=u.z; rot[2][2]=f.z;

    vec3 pmax, pmin;
    for (vec3 p: vertices) {
        // Rotate each point
        vec3 prime = vec3(dot(r, p), dot(u, p), dot(f, p));
        pmin = glm::min(pmin, prime);
        pmax = glm::max(pmax, prime);
    }

    vec3 center = 0.5f * (pmax + pmin);
    vec3 ext = 0.5f * (pmax - pmin);
    vec3 pos = vec3(dot(rot[0], center), dot(rot[1], center), dot(rot[2], center));

    RectPoints3D rect;
    rect.a = pos - r*ext[0] - u*ext[1] - f*ext[2];
    rect.b = pos + r*ext[0] - u*ext[1] - f*ext[2];
    rect.c = pos + r*ext[0] - u*ext[1] + f*ext[2];
    rect.d = pos - r*ext[0] - u*ext[1] + f*ext[2];
    rect.e = pos - r*ext[0] + u*ext[1] - f*ext[2];
    rect.f = pos + r*ext[0] + u*ext[1] - f*ext[2];
    rect.g = pos + r*ext[0] + u*ext[1] + f*ext[2];
    rect.k = pos - r*ext[0] + u*ext[1] + f*ext[2];

    return rect;
}