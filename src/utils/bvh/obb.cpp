#include <Eigen/Core>
#include <GL/glew.h>
#include <glm/glm.hpp>
#include <glm/vec3.hpp>
#include <glm/vec4.hpp>
//#include <pcl/pcl_base.h>
//#include <pcl/features/moment_of_inertia_estimation.h>
#include <vector>
/*#include <pcl/io/pcd_io.h>
#include <pcl/point_types.h>
#include <pcl/visualization/cloud_viewer.h>
#include <pcl/visualization/common/shapes.h>
 */

#include "render/texturebase.hpp"
#include "utils/bvh/obb.hpp"
#include "utils/datastructs.hpp"
#include "utils/math.hpp"

using math::build_covarience_matrix;
using math::rotate_around;
using utils::RectPoints3D;

using glm::mat3;

RectPoints3D OBBtoWorldSpace(RectPoints3D rect, const glm::vec3 &rot_axis, GLfloat angle,
                             const glm::vec3 &position, const TextureBase &texture) noexcept
{
    vec3 pos = position / texture.getSize();

    const GLfloat half = 1.f;
    const GLfloat centerX = pos.x + half;
    const GLfloat centerY = pos.y + half;
    const GLfloat centerZ = pos.z + half;

    const vec3 scale = texture.getSize();

    mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle, rot_axis);
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
//RectPoints3D buildOBB(const std::vector<vec3> &vertices) noexcept
//{
    //    using namespace Eigen;
    //
    //    using std::min;
    //    using std::max;
    //
    //    Matrix3f covariance = build_covarience_matrix(vertices);
    //    SelfAdjointEigenSolver<Matrix3f> eigen_solver(covariance, Eigen::ComputeEigenvectors);
    //    Eigen::Matrix3f eigenVectors = eigen_solver.eigenvectors();
    //    // This line is necessary for proper orientation in some cases.
    //    // The numbers come out the same without it, but
    //    // the signs are different and the box doesn't get correctly oriented in some cases.
    ////    eigenVectors.col(2) = eigenVectors.col(0).cross(eigenVectors.col(1));
    //
    ////    vec3 r = normalize(vec3(eigenVectors.col(0).x(), eigenVectors.col(0).y(),
    ///eigenVectors.col(0).z())); /    vec3 u = normalize(vec3(eigenVectors.col(1).x(),
    ///eigenVectors.col(1).y(), eigenVectors.col(1).z())); /    vec3 f =
    ///normalize(vec3(eigenVectors.col(2).x(), eigenVectors.col(2).y(), eigenVectors.col(2).z()));
    //
    //    vec3 r = normalize(vec3(eigenVectors(0,0), eigenVectors(1,0), eigenVectors(2,0)));
    //    vec3 u = normalize(vec3(eigenVectors(0,1), eigenVectors(1,1), eigenVectors(2,1)));
    //    vec3 f = normalize(vec3(eigenVectors(0,2), eigenVectors(1,2), eigenVectors(2,2)));
    //
    //    mat3 rot;
    //    rot[0][0]=r.x; rot[0][1]=u.x; rot[0][2]=f.x;
    //    rot[1][0]=r.y; rot[1][1]=u.y; rot[1][2]=f.y;
    //    rot[2][0]=r.z; rot[2][1]=u.z; rot[2][2]=f.z;
    //
    //    vec3 pmax, pmin;
    //    for (vec3 p: vertices) {
    //        // Rotate each point
    //        vec3 prime = vec3(dot(r, p), dot(u, p), dot(f, p));
    ////        pmin = glm::min(pmin, prime);
    //        pmin.x = min(pmin.x, prime.x);
    //        pmin.y = min(pmin.y, prime.y);
    //        pmin.z = min(pmin.z, prime.z);
    ////        pmax = glm::max(pmax, prime);
    //        pmax.x = max(pmax.x, prime.x);
    //        pmax.y = max(pmax.y, prime.y);
    //        pmax.z = max(pmax.z, prime.z);
    //    }
    //
    //    vec3 center = 0.5f * (pmax + pmin);
    //    vec3 ext = 0.5f * (pmax - pmin);
    //    vec3 pos = vec3(dot(rot[0], center), dot(rot[1], center), dot(rot[2], center));
    //
    //    RectPoints3D rect;
    //    rect.a = pos - r*ext[0] - u*ext[1] - f*ext[2];
    //    rect.b = pos + r*ext[0] - u*ext[1] - f*ext[2];
    //    rect.c = pos + r*ext[0] - u*ext[1] + f*ext[2];
    //    rect.d = pos - r*ext[0] - u*ext[1] + f*ext[2];
    //    rect.e = pos - r*ext[0] + u*ext[1] - f*ext[2];
    //    rect.f = pos + r*ext[0] + u*ext[1] - f*ext[2];
    //    rect.g = pos + r*ext[0] + u*ext[1] + f*ext[2];
    //    rect.k = pos - r*ext[0] + u*ext[1] + f*ext[2];

    /*pcl::PointCloud<pcl::PointXYZ>::Ptr cloud(new pcl::PointCloud<pcl::PointXYZ>());

    for(auto v: vertices) {
        cloud->push_back(pcl::PointXYZ(v.x, v.y, v.z));
    }

    pcl::MomentOfInertiaEstimation <pcl::PointXYZ> feature_extractor;
    feature_extractor.setInputCloud(cloud);
    feature_extractor.compute();

    // Declare some necessary variables
    std::vector<float> moment_of_inertia;
    std::vector<float> eccentricity;
    pcl::PointXYZ min_point_AABB;
    pcl::PointXYZ max_point_AABB;
    pcl::PointXYZ min_point_OBB;
    pcl::PointXYZ max_point_OBB;
    pcl::PointXYZ position_OBB;
    Eigen::Matrix3f rotational_matrix_OBB;
    float major_value, middle_value, minor_value;
    Eigen::Vector3f major_vector, middle_vector, minor_vector;
    Eigen::Vector3f mass_center;
    // Calculate descriptors and other features
    feature_extractor.getMomentOfInertia (moment_of_inertia);
    feature_extractor.getEccentricity (eccentricity);
    feature_extractor.getAABB (min_point_AABB, max_point_AABB);
    feature_extractor.getOBB (min_point_OBB, max_point_OBB, position_OBB, rotational_matrix_OBB);
    feature_extractor.getEigenValues (major_value, middle_value, minor_value);
    feature_extractor.getEigenVectors (major_vector, middle_vector, minor_vector);
    feature_extractor.getMassCenter (mass_center);
    //display
//    boost::shared_ptr<pcl::visualization::PCLVisualizer> viewer (new
pcl::visualization::PCLVisualizer ("3D Viewer"));
//    viewer->setBackgroundColor (0, 0, 0);
//    viewer->addCoordinateSystem (1.0);
//    viewer->initCameraParameters ();
//    viewer->addPointCloud<pcl::PointXYZ> (cloud, "sample cloud");
//    addCube method
//    viewer->addCube (min_point_AABB.x, max_point_AABB.x, min_point_AABB.y, max_point_AABB.y,
min_point_AABB.z, max_point_AABB.z, 1.0, 1.0, 0.0, "AABB");//AABB box Eigen::Vector3f position
(position_OBB.x, position_OBB.y, position_OBB.z); Eigen::Quaternionf quat (rotational_matrix_OBB);
//    viewer->addCube (position, quat, max_point_OBB.x - min_point_OBB.x, max_point_OBB.y -
min_point_OBB.y, max_point_OBB.z - min_point_OBB.z, "OBB");//OBB box
//    Center coordinates
//    pcl::PointXYZ center (mass_center (0), mass_center (1), mass_center (2));
//    pcl::PointXYZ x_axis (major_vector (0) + mass_center (0), major_vector (1) + mass_center (1),
major_vector (2) + mass_center (2));
//    pcl::PointXYZ y_axis (middle_vector (0) + mass_center (0), middle_vector (1) + mass_center
(1), middle_vector (2) + mass_center (2));
//    pcl::PointXYZ z_axis (minor_vector (0) + mass_center (0), minor_vector (1) + mass_center (1),
minor_vector (2) + mass_center (2));
//    viewer->addLine(center, x_axis, 1.0f, 0.0f, 0.0f, "major eigen vector");
//    viewer->addLine(center, y_axis, 0.0f, 1.0f, 0.0f, "middle eigen vector");
//    viewer->addLine(center, z_axis, 0.0f, 0.0f, 1.0f, "minor eigen vector");


    auto cube = pcl::visualization::createCube(position, quat, max_point_OBB.x - min_point_OBB.x,
max_point_OBB.y - min_point_OBB.y, max_point_OBB.z - min_point_OBB.z); double* bounds =
cube->GetBounds();

    GLfloat min_x = bounds[0];
    GLfloat max_x = bounds[1];
    GLfloat min_y = bounds[2];
    GLfloat max_y = bounds[3];
    GLfloat min_z = bounds[4];
    GLfloat max_z = bounds[5];

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

    return {a, b, c, d, e, f, g, k};*/

    //    return rect;
//}