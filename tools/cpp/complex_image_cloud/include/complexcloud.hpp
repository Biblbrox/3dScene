#ifndef COMPLEXCLOUD_HPP
#define COMPLEXCLOUD_HPP

#include <pcl/point_cloud.h>
#include <pcl/point_types.h>
#include <glm/glm.hpp>

#include "image.hpp"

class ComplexCloud
{
public:
    ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZ> xyzCloud);
    ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZI> xyzCloud);
    ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZRGB> xyzCloud);

    /**
     * Draw image with projected points from 3d point cloud
     */
    void drawProjected() const;

    /**
     * Draw point cloud with rgb data
     */
    void drawComplexCloud() const;

    pcl::PointCloud<pcl::PointXYZRGB>::Ptr getComplexCloud() const;

    /**
     * Draw point cloud with rgb data converted to intensity
     */
    void drawIntensityCloud() const;

    /**
     * Save xyzrgb point cloud to .pcd file
     * @param file_name
     * @param scaling
     * @param relative
     */
    void saveComplexCloud(const std::string& file_name,
                          const glm::vec3& scaling = glm::vec3(1.f, 1.f, 1.f),
                          bool relative = false, bool binary = false) const;

    /**
     * Filter ground points
     */
    void filterGround() const;

    /**
     * Save xyzi point cloud to .pcd file
     * @param file_name
     * @param scaling
     * @param relative
     */
    void saveIntensityCloud(const std::string& file_name,
                            const glm::vec3& scaling = glm::vec3(1.f, 1.f, 1.f),
                            bool relative = false) const;

    /// Filter params
    void setWindowSize(int);

    void setSlope(float);

    void setInitialDistance(float);

    void setMaxDistance(float);
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
    Eigen::Vector4f m_sensorOrigin;

    int m_windowSize;
    float m_slope;
    float m_initDistance;
    float m_maxDistance;
};


#endif //COMPLEXCLOUD_HPP
