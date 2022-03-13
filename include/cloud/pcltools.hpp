#ifndef LIDARPROCESSING_PCLTOOLS_HPP
#define LIDARPROCESSING_PCLTOOLS_HPP

#include <initializer_list>
#include <pcl/common/io.h>

#include "base.hpp"
#include "pcloperators.hpp"
#include "utils/math.hpp"
#include "view/lidar.hpp"

namespace pcltools {

/////// Convert function to different datatypes

template<typename PointType>
typename pcl::PointCloud<PointType>::Ptr
frame2pcl(const Frame<PointType>& frame)
{
    typename pcl::PointCloud<PointType>::Ptr cloud(new pcl::PointCloud<PointType>());
    cloud->points = frame.points;
    cloud->sensor_origin_.x() = frame.sourcePos.x;
    cloud->sensor_origin_.y() = frame.sourcePos.y;
    cloud->sensor_origin_.z() = frame.sourcePos.z;

    return cloud;
}

template<typename PointType>
typename Frame<PointType>::Ptr
pcl2frame(const typename pcl::PointCloud<PointType>::Ptr cloud)
{
    typename Frame<PointType>::Ptr frame = std::make_shared<Frame<PointType>>();
    frame->points = cloud->points;
    frame->sourcePos = cloud->sensor_origin_;

    return frame;
}

template<typename PointType>
Matrix
pcl2Eigen(const pcl::PointCloud<PointType>& cloud)
{
    int fields_size = pcl::getFields<PointType>().size();
    Matrix cloud_tensor(cloud.size(), fields_size);

    for (int i = 0; i < cloud.size(); ++i) {
        const auto& point = cloud.points[i];
        Matrix values(1, fields_size);
        for (int j = 0; j < fields_size; ++j)
            values(0, j) = point.data[j];

        cloud_tensor.row(i) = values;
    }

    return cloud_tensor;
}

template<typename PointType>
Matrix
frame2Eigen(const Frame<PointType>& frame)
{
    // TODO: write more clearly
    typename pcl::PointCloud<PointType>::Ptr cloud = frame2pcl(frame);
    return pcl2Eigen(*cloud);
}

template<typename PointType>
typename Frame<PointType>::Ptr
eigen2Frame(const Matrix& matrix)
{
    typename Frame<PointType>::Ptr frame = std::make_shared<Frame<PointType>>();
    frame->points.resize(matrix.rows());
    for (int i = 0; i < matrix.rows(); ++i)
        for (int j = 0; j < matrix.cols(); ++j)
            frame->points[i].data[j] = matrix(i, j);

    return frame;
}

template<typename PointType>
void
sort(pcl::PointCloud<PointType>& cloud, std::initializer_list<int> indices)
{
    for (int idx : indices) {
        if (idx > pcl::getFieldsList(cloud).size())
            break;

        auto sort_func = [&](const auto& p1, const auto& p2) {
            return p1.data[idx] < p2.data[idx];
        };
        std::sort(cloud.points.begin(), cloud.points.end(), sort_func);
    }
}

/**
 * Remove duplicates from point cloud with epsilon
 * @param indices
 * @param epsilon
 */
template<typename PointType>
std::pair<Matrix, pcl::PointCloud<PointType>>
filterUniques(pcl::PointCloud<PointType>& cloud,
              std::initializer_list<int> indices,
              bool return_counts = false,
              Scalar epsilon = math::epsilon<Scalar>())
{
    sort(cloud, indices);
    std::vector<int> cloud_indices = indices;
    cloud_indices.resize(pcl::getFieldsList(cloud).size());
    auto equal_points = [&](const auto& p1, const auto& p2) {
        for (int idx : indices) {
            bool equal = math::epsilonEqual(p1.data[idx], p2.data[idx], epsilon);
            if (!equal)
                return false;
        }

        return true;
    };

    pcl::PointCloud<PointType> unique_cloud = cloud;
    auto unique_end =
      std::unique(unique_cloud.begin(), unique_cloud.end(), equal_points);
    unique_cloud.erase(unique_end, unique_cloud.end());
    auto set_cmp = [](auto& p1, auto& p2) {
        return p1 < p2;
    };
    std::set<PointType, decltype(set_cmp)> unique_points(
      unique_cloud.begin(), unique_cloud.end(), set_cmp);
    if (return_counts) {
        int unique_rows = unique_cloud.size();
        int unique_cols = pcl::getFieldsList(cloud).size();
        Matrix uniques_count(unique_rows, unique_cols);
        for (int i = 0; i < unique_rows; ++i) {
            for (int j = 0; j < unique_cols; ++j) {
                auto cmp_points = [&](const auto& p) {
                    // Compare uniques_cloud_nc(i, j) with original cloud
                    return epsilonEqual(cloud[i].data[j], p.data[j]);
                };
                uniques_count(i, j) = std::count_if(
                  unique_points.begin(), unique_points.end(), cmp_points);
            }
        }
        // TODO: TOOOOO SLOW
        return { uniques_count, unique_cloud };
    }

    return { {}, unique_cloud };
}

} // namespace lidar

#endif // LIDARPROCESSING_PCLTOOLS_HPP
