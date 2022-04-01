#include <string>
#include <glm/glm.hpp>
#include <GL/glew.h>
#include <fstream>

#include "utils/kitti/kitti.hpp"
#include "utils/math.hpp"

void saveKittiCalib(const std::string &path, const glm::mat4x4 &intr, const glm::mat4x4 &extr)
{
    using namespace glm;

    mat4x3 P0, P1, P2, P3;
    mat3x3 R0_rect;

    P0 = P1 = P2 = P3 = intr;

    GLfloat scale_factor =
        std::sqrt(extr[0][0] * extr[0][0] + extr[0][1] * extr[0][1] + extr[0][2] * extr[0][2]);

    R0_rect =
        (1.f / scale_factor) * mat3(extr[0][0], extr[0][1], extr[0][2], extr[1][0], extr[1][1],
                                    extr[1][2], extr[2][0], extr[2][1], extr[2][2]);
    vec3 translation{extr[0][3], extr[1][3], extr[2][3]};

    glm::mat4x3 tr_lid_to_cam = extr;
    glm::mat4x3 tr_imu_to_lid = glm::mat4x3(1.f);

    std::ofstream kitti_calib(path);
    if (!kitti_calib.good()) {
        // TODO: throw error
    }

    kitti_calib << "P0: " << math::to_string(P0) << "\n"
                << "P1: " << math::to_string(P1) << "\n"
                << "P2: " << math::to_string(P2) << "\n"
                << "P3: " << math::to_string(P3) << "\n"
                << "R0_rect: " << math::to_string(R0_rect) << "\n"
                << "Tr_velo_to_cam: " << math::to_string(tr_lid_to_cam) << "\n"
                << "Tr_imu_to_velo: " << math::to_string(tr_imu_to_lid) << "\n";

    kitti_calib.close();
}