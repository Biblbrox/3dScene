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
    void drawProjected() const;
private:
    Image m_img;
    pcl::PointCloud<pcl::PointXYZRGB> m_complexCloud;
    std::vector<cv::Point> m_projectedPoints;
};


#endif //COMPLEXCLOUD_HPP
