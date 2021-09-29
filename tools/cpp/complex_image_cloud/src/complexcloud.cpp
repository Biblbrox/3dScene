#include <pcl/point_cloud.h>
#include <glm/ext/matrix_projection.hpp>
#include <pcl/common/angles.h> // for pcl::deg2rad
#include <pcl/features/normal_3d.h>
#include <pcl/io/pcd_io.h>
#include <pcl/visualization/pcl_visualizer.h>
#include <pcl/console/parse.h>
#include <filesystem>

#include "complexcloud.hpp"
#include "cvtools.hpp"
#include "base.hpp"

using glm::vec2;
using glm::vec3;
using glm::vec4;
using glm::mat4;

ComplexCloud::ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZ> xyzCloud)
        : m_img(std::move(img)),
          m_complexCloud(new pcl::PointCloud<pcl::PointXYZRGB>(xyzCloud.width, xyzCloud.height))
{
    m_complexCloud->points.reserve(xyzCloud.size());
    for (size_t i = 0; i < xyzCloud.size(); ++i) {
        pcl::PointXYZ p = xyzCloud.points[i];
        pcl::PointXYZRGB complexPoint;
        complexPoint.x = p.x;
        complexPoint.y = p.y;
        complexPoint.z = p.z;
        complexPoint.r = 200;
        complexPoint.g = 1;
        complexPoint.b = 1;
        m_complexCloud->points[i] = complexPoint;
    }

    pcl::PointCloud<pcl::PointXYZ> cloud(std::move(xyzCloud));

    m_projectedPoints.reserve(cloud.size());
    Mat4 calMatrix = m_img.getCalMatrix();

    float rows = static_cast<float>(m_img.getInnerMat().cols);
    float cols = static_cast<float>(m_img.getInnerMat().rows);
    cv::Mat invertedImg = m_img.getInnerMat();
    cv::flip(invertedImg, invertedImg, 0);
    for (size_t i = 0; i < cloud.size(); ++i) {
        glm::vec3 p_3d{cloud[i].x, cloud[i].y, cloud[i].z};
        glm::mat4 cal_glm;
        cvtools::fromCV2GLM(calMatrix.t(), &cal_glm);
        glm::vec4 viewport{0, 0, rows, cols};
        glm::vec3 projected_glm = glm::project(p_3d, glm::mat4(1.f), cal_glm, viewport);

        cv::Point projected(std::round(projected_glm.x), std::round(projected_glm.y));

        m_projectedPoints.emplace_back(projected);
        cv::Vec3b color = cvtools::getImgColor(invertedImg, projected);
        m_complexCloud->points[i].b = color[0];
        m_complexCloud->points[i].g = color[1];
        m_complexCloud->points[i].r = color[2];
    }
}

void ComplexCloud::drawProjected() const
{
    cv::Mat copy = m_img.getInnerMat();
    cv::flip(copy, copy, 0);
    for (const auto& p: m_projectedPoints)
        cv::circle(copy, p, 0, cv::Scalar(255, 0, 10), -1);
    cv::flip(copy, copy, 0);

    cv::namedWindow("Projected points", cv::WINDOW_FULLSCREEN);
    cv::imshow("Projected points", copy);

    while (true) {
        int key = cv::waitKey(0) & 0xFF;
        if (key == 27) {
            cv::destroyAllWindows();
            break;
        }
    }
}

void ComplexCloud::drawComplexCloud() const
{
    pcl::visualization::PCLVisualizer::Ptr viewer (
            new pcl::visualization::PCLVisualizer ("XYZRGB cloud"));
    viewer->setBackgroundColor (0, 0, 0);
    pcl::visualization::PointCloudColorHandlerRGBField<pcl::PointXYZRGB> rgb(m_complexCloud);
    viewer->addPointCloud<pcl::PointXYZRGB> (m_complexCloud, rgb, "XYZRGB cloud");
    viewer->setPointCloudRenderingProperties (pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 3,
                                              "XYZRGB cloud");
    viewer->addCoordinateSystem (1.0);
    viewer->initCameraParameters ();

    viewer->spin();
    viewer->close();
}

void ComplexCloud::drawIntensityCloud() const
{
    pcl::PointCloud<pcl::PointXYZI>::Ptr intensityCloud = makeIntensityCloudFromRGB(m_complexCloud);

    pcl::visualization::PCLVisualizer::Ptr viewer (
            new pcl::visualization::PCLVisualizer ("XYZI cloud"));
    viewer->setBackgroundColor (0, 0, 0);
    pcl::visualization::PointCloudColorHandlerGenericField<pcl::PointXYZI>
            intensity(intensityCloud, "intensity");
    viewer->addPointCloud<pcl::PointXYZI> (intensityCloud, intensity, "XYZI cloud");
    viewer->setPointCloudRenderingProperties (pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 3,
                                              "XYZI cloud");
    viewer->addCoordinateSystem (1.0);
    viewer->initCameraParameters ();


    viewer->spin();
    viewer->close();
}

void ComplexCloud::saveIntensityCloud(const std::string &file_name) const
{
    if (!std::filesystem::exists(file_name)) {
        // TODO: throw error
        return;
    }

    pcl::PointCloud<pcl::PointXYZI>::Ptr intensityCloud = makeIntensityCloudFromRGB(m_complexCloud);

    pcl::io::savePCDFileASCII(file_name, *intensityCloud);
}

pcl::PointCloud<pcl::PointXYZI>::Ptr
ComplexCloud::makeIntensityCloudFromRGB(pcl::PointCloud<pcl::PointXYZRGB>::Ptr rgb_cloud) const
{
    assert(rgb_cloud != nullptr);

    pcl::PointCloud<pcl::PointXYZI>::Ptr intensityCloud(
            new pcl::PointCloud<pcl::PointXYZI>(rgb_cloud->width, rgb_cloud->height));

    for (size_t i = 0; i < rgb_cloud->size(); ++i) {
        intensityCloud->points[i].x = rgb_cloud->points[i].x;
        intensityCloud->points[i].y = rgb_cloud->points[i].y;
        intensityCloud->points[i].z = rgb_cloud->points[i].z;
        intensityCloud->points[i].intensity = cvtools::getIntensity(cv::Vec3b(
                rgb_cloud->points[i].r,
                rgb_cloud->points[i].g,
                rgb_cloud->points[i].b
        ));
    }

    return intensityCloud;
}