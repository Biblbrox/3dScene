#ifndef COMPLEXCLOUD_HPP
#define COMPLEXCLOUD_HPP

#include <pcl/point_cloud.h>
#include <pcl/point_types.h>

#include "image.hpp"

class ComplexCloud
{
public:
    ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZ> xyzCloud);

    void getXYZC() const;

    /**
     * Draw image with projected points from 3d point cloud
     */
    void drawProjected() const;

    /**
     * Draw point cloud with rgb data
     */
    void drawComplexCloud() const;

    /**
     * Draw point cloud with rgb data converted to intensity
     */
    void drawIntensityCloud() const;

    void saveComplexCloud() const;

    /**
     * Save xyzi point cloud to file file_name
     */
    void saveIntensityCloud(const std::string& file_name) const;

private:
    /**
     * Create xyzi point clout from xyzrgb cloud
     * @param rgb_cloud
     * @return
     */
    pcl::PointCloud<pcl::PointXYZI>::Ptr
    makeIntensityCloudFromRGB(pcl::PointCloud<pcl::PointXYZRGB>::Ptr rgb_cloud) const;

    Image m_img;
    pcl::PointCloud<pcl::PointXYZRGB>::Ptr m_complexCloud;
    std::vector<cv::Point> m_projectedPoints;
};


#endif //COMPLEXCLOUD_HPP
