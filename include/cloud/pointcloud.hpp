#ifndef LIDARPROCESSING_POINTCLOUD_HPP
#define LIDARPROCESSING_POINTCLOUD_HPP

#include <filesystem>
#include <pcl/common/io.h>
#include <pcl/io/pcd_io.h>
#include <pcl/point_cloud.h>
#include <pcl/visualization/pcl_visualizer.h>
#include <Eigen/Dense>

#include "base.hpp"
#include "pcltools.hpp"
#include "types.hpp"
#include "utils/datastructs.hpp"
#include "utils/math.hpp"

using Eigen::MatrixXd;

/**
 * Custom PointCloud with useful operators and methods
 * @tparam PointType
 */
template <typename PointType> class LdPointCloud : public pcl::PointCloud<PointType> {
  public:
    using Ptr = std::shared_ptr<LdPointCloud<PointType>>;

    explicit LdPointCloud(const std::string &file_path)
    {
        if (!std::filesystem::exists(file_path)) {
            // TODO: throw error
        }

        if (pcl::io::loadPCDFile<PointType>(file_path, *this) == -1)
            throw std::runtime_error("Unable to load point cloud from file: " + file_path);
    }

    explicit LdPointCloud(const LdPointCloud<PointType> &cloud) = default;
    explicit LdPointCloud(LdPointCloud<PointType> &&cloud) = default;
    explicit LdPointCloud() = default;

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
    void filterUniques(std::initializer_list<int> indices, Scalar epsilon = math::epsilon<Scalar>())
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

    void operator*=(const pcl::PointCloud<PointType> &cloud)
    {
        assert(cloud.size() == this->size());

        for (size_t i = 0; i < cloud.size(); ++i)
            points[i] *= cloud.points[i];
    }

    template <typename T> void operator*=(T scale)
    {
        static_assert(std::is_arithmetic_v<T>);
        std::for_each(this->points.begin(), this->points.end(), [&](auto &p) { p *= scale; });
    }

    template <typename T> void filterBounds(utils::Rect3<T> area)
    {
        static_assert(std::is_arithmetic_v<T>);

        std::remove_if(this->points.begin(), this->points.end(), [&](auto &p) {
            return !(p.x >= area.x1 && p.x <= area.x2 && p.y >= area.y1 && p.y <= area.y2 &&
                     p.z >= area.z1 && p.z <= area.z2);
        });
    }

    void drawCloud(const std::string &cloud_name) const
    {
        typename pcl::PointCloud<PointType>::Ptr cloud_ptr(new pcl::PointCloud<PointType>);
        cloud_ptr->points = this->points;
        cloud_ptr->sensor_origin_ = this->sensor_origin_;
        cloud_ptr->width = this->width;
        cloud_ptr->height = this->height;
        pcl::visualization::PCLVisualizer::Ptr viewer(
            new pcl::visualization::PCLVisualizer(cloud_name));
        viewer->setBackgroundColor(0, 0, 0);
        pcl::visualization::PointCloudColorHandlerRGBField<PointType> rgb(cloud_ptr);
        viewer->addPointCloud<PointType>(cloud_ptr, rgb, cloud_name);
        viewer->setPointCloudRenderingProperties(pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 3,
                                                 cloud_name);
        viewer->addCoordinateSystem(1.0);
        viewer->initCameraParameters();
        viewer->addText("Number of points: " + std::to_string(cloud_ptr->size()), 30, 30);

        auto keyHandler = [&](const pcl::visualization::KeyboardEvent &ev) {
            if (!ev.isShiftPressed())
                return;

            if (ev.getKeyCode() == '+' && ev.keyDown()) {
                double curPointSize;
                viewer->getPointCloudRenderingProperties(
                    pcl::visualization::PCL_VISUALIZER_POINT_SIZE, curPointSize, cloud_name);
                viewer->setPointCloudRenderingProperties(
                    pcl::visualization::PCL_VISUALIZER_POINT_SIZE, curPointSize + 1, cloud_name);
            }
            else if (ev.getKeyCode() == '_' && ev.keyDown()) {
                double curPointSize;
                viewer->getPointCloudRenderingProperties(
                    pcl::visualization::PCL_VISUALIZER_POINT_SIZE, curPointSize, cloud_name);
                curPointSize = (curPointSize - 1 >= 1) ? curPointSize - 1 : curPointSize;
                viewer->setPointCloudRenderingProperties(
                    pcl::visualization::PCL_VISUALIZER_POINT_SIZE, curPointSize, cloud_name);
            }
            else if (ev.getKeyCode() == 'D' && ev.keyDown()) {
                pcltools::filterGround<pcl::PointXYZRGB>(cloud_ptr, cloud_ptr, 1, 1.0f, 0.5f, 3.f);
                viewer->updatePointCloud(cloud_ptr, rgb, cloud_name);
            }
        };

        viewer->registerKeyboardCallback(keyHandler);

        viewer->spin();
        viewer->close();
    }
};

#endif // LIDARPROCESSING_POINTCLOUD_HPP
