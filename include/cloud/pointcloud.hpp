#ifndef LIDARPROCESSING_POINTCLOUD_HPP
#define LIDARPROCESSING_POINTCLOUD_HPP

#include <filesystem>
#include <pcl/common/io.h>
#include <pcl/io/pcd_io.h>
#include <pcl/point_cloud.h>

#include <Eigen/Dense>

#include "base.hpp"
#include "pcltools.hpp"
#include "types.hpp"
#include "utils/math.hpp"
#include "utils/datastructs.hpp"

using Eigen::MatrixXd;

/**
 * Custom PointCloud with useful operators and methods
 * @tparam PointType
 */
template<typename PointType>
class LdPointCloud : public pcl::PointCloud<PointType>
{
  public:
    using Ptr = std::shared_ptr<LdPointCloud<PointType> >;

    explicit LdPointCloud(const std::string& file_path)
    {
        if (!std::filesystem::exists(file_path)) {
            // TODO: throw error
        }

        if (pcl::io::loadPCDFile<PointType>(file_path, *this) == -1)
            throw std::runtime_error("Unable to load point cloud from file: " + file_path);
    }

    explicit LdPointCloud(const LdPointCloud<PointType>& cloud) = default;
    explicit LdPointCloud(LdPointCloud<PointType>&& cloud) = default;


    using pcl::PointCloud<PointType>::points;

    void sort(std::initializer_list<int> indices)
    {
        pcltools::sort(*this, indices);
    }

    /**
     * Remove duplicates from point cloud with epsilon
     * @param indices
     * @param epsilon
     */
    void filterUniques(std::initializer_list<int> indices,
                       Scalar epsilon = math::epsilon<Scalar>())
    {
        pcltools::filterUniques(*this, indices, epsilon);
    }

    Matrix column(int col)
    {
        int fields_size = pcl::getFieldsList(*this).size();
        assert(fields_size > col);

        Matrix colData(points.size(), 1);
        for (size_t i = 0; i < points.size(); ++i)
            colData(i, 0) = points[i].data[col];

        return colData;
    }

    void operator*=(const pcl::PointCloud<PointType>& cloud)
    {
        assert(cloud.size() == this->size());

        for (size_t i = 0; i < cloud.size(); ++i)
            points[i] *= cloud.points[i];
    }

    template<typename T>
    void operator*=(T scale)
    {
        static_assert(std::is_arithmetic_v<T>);
        std::for_each(this->points.begin(), this->points.end(), [&](auto& p) {
            p *= scale;
        });
    }

    template<typename T>
    void filterBounds(utils::Rect3<T> area)
    {
        static_assert(std::is_arithmetic_v<T>);

        std::remove_if(this->points.begin(), this->points.end(), [&](auto& p) {
            return !(p.x >= area.x1 && p.x <= area.x2 && p.y >= area.y1 &&
                     p.y <= area.y2 && p.z >= area.z1 && p.z <= area.z2);
        });
    }
};

#endif // LIDARPROCESSING_POINTCLOUD_HPP
