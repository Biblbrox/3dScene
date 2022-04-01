#ifndef LIDARSCENE_KITTI_HPP
#define LIDARSCENE_KITTI_HPP

#include <iosfwd>
#include <glm/fwd.hpp>

namespace kitti {

/**
 * Save calibration file in kitti format
 * See: http://www.cvlibs.net/datasets/kitti/
 * @param path
 * @param intrinsic
 * @param extrinsic
 */
void saveKittiCalib(const std::string &path, const glm::mat4x4 &intr, const glm::mat4x4 &extr);

} // namespace kitti
#endif // LIDARSCENE_KITTI_HPP
