#include <pcl/point_cloud.h>
#include <glm/ext/matrix_projection.hpp>
#include <pcl/features/normal_3d.h>
#include <pcl/io/pcd_io.h>
#include <pcl/visualization/pcl_visualizer.h>
#include <filesystem>

#include "complexcloud.hpp"
#include "cvtools.hpp"
#include "utils/fs.hpp"
#include "types.hpp"
#include "pcltools.hpp"
#include "view/lidar.hpp"

using glm::vec2;
using glm::vec3;
using glm::vec4;
using glm::mat4;

ComplexCloud::ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZ> xyzCloud)
        : m_img(std::move(img)),
          m_complexCloud(new pcl::PointCloud<pcl::PointXYZRGB>(xyzCloud.width, xyzCloud.height)),
          m_sensorOrigin(xyzCloud.sensor_origin_)
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

ComplexCloud::ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZI> xyzCloud)
    : m_img(std::move(img)),
      m_complexCloud(new pcl::PointCloud<pcl::PointXYZRGB>(xyzCloud.width, xyzCloud.height)),
      m_sensorOrigin(xyzCloud.sensor_origin_)
{
    m_complexCloud->points.reserve(xyzCloud.size());
    for (size_t i = 0; i < xyzCloud.size(); ++i) {
        pcl::PointXYZI p = xyzCloud.points[i];
        pcl::PointXYZRGB complexPoint;
        complexPoint.x = p.x;
        complexPoint.y = p.y;
        complexPoint.z = p.z;
        complexPoint.r = 200;
        complexPoint.g = 1;
        complexPoint.b = 1;
        m_complexCloud->points[i] = complexPoint;
    }

    pcl::PointCloud<pcl::PointXYZI> cloud(std::move(xyzCloud));

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
    for (const auto &p: m_projectedPoints)
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

ComplexCloud::ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZRGB> xyzCloud)
        : m_img(std::move(img)),
          m_complexCloud(new pcl::PointCloud<pcl::PointXYZRGB>(xyzCloud.width, xyzCloud.height)),
          m_sensorOrigin(xyzCloud.sensor_origin_)
{
    m_complexCloud->points.reserve(xyzCloud.size());
    m_complexCloud = pcl::make_shared<pcl::PointCloud<pcl::PointXYZRGB>>(xyzCloud);
}

void ComplexCloud::drawComplexCloud() const
{
    std::string cloudName = "XYZRGB cloud";

    pcl::visualization::PCLVisualizer::Ptr viewer(
            new pcl::visualization::PCLVisualizer(cloudName));
    viewer->setBackgroundColor(0, 0, 0);
    pcl::visualization::PointCloudColorHandlerRGBField<pcl::PointXYZRGB> rgb(m_complexCloud);
    viewer->addPointCloud<pcl::PointXYZRGB>(m_complexCloud, rgb, cloudName);
    viewer->setPointCloudRenderingProperties(pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 3,
                                             cloudName);
    viewer->addCoordinateSystem(1.0);
    viewer->initCameraParameters();
    viewer->addText("Number of points: " + std::to_string(m_complexCloud->size()), 30, 30);

    auto keyHandler = [&](const pcl::visualization::KeyboardEvent &ev) {
        if (!ev.isShiftPressed())
            return;

        if (ev.getKeyCode() == '+' && ev.keyDown()) {
            double curPointSize;
            viewer->getPointCloudRenderingProperties(
                    pcl::visualization::PCL_VISUALIZER_POINT_SIZE, curPointSize, cloudName);
            viewer->setPointCloudRenderingProperties(
                    pcl::visualization::PCL_VISUALIZER_POINT_SIZE, curPointSize + 1, cloudName);
        } else if (ev.getKeyCode() == '_' && ev.keyDown()) {
            double curPointSize;
            viewer->getPointCloudRenderingProperties(
                    pcl::visualization::PCL_VISUALIZER_POINT_SIZE, curPointSize, cloudName);
            curPointSize = (curPointSize - 1 >= 1) ? curPointSize - 1 : curPointSize;
            viewer->setPointCloudRenderingProperties(
                    pcl::visualization::PCL_VISUALIZER_POINT_SIZE, curPointSize, cloudName);
        } else if (ev.getKeyCode() == 'D' && ev.keyDown()) {
            pcltools::filterGround<pcl::PointXYZRGB>(m_complexCloud, m_complexCloud,
                                                     1, 1.0f, 0.5f, 3.f);
            viewer->updatePointCloud(m_complexCloud, rgb, cloudName);
        }
    };

    viewer->registerKeyboardCallback(keyHandler);

    viewer->spin();
    viewer->close();
}

void ComplexCloud::drawIntensityCloud() const
{
    pcl::PointCloud<pcl::PointXYZI>::Ptr intensityCloud = makeIntensityCloudFromRGB(m_complexCloud);

    pcl::visualization::PCLVisualizer::Ptr viewer(
            new pcl::visualization::PCLVisualizer("XYZI cloud"));
    viewer->setBackgroundColor(0, 0, 0);
    pcl::visualization::PointCloudColorHandlerGenericField<pcl::PointXYZI>
            intensity(intensityCloud, "intensity");
    viewer->addPointCloud<pcl::PointXYZI>(intensityCloud, intensity, "XYZI cloud");
    viewer->setPointCloudRenderingProperties(pcl::visualization::PCL_VISUALIZER_POINT_SIZE, 3,
                                             "XYZI cloud");
    viewer->addCoordinateSystem(1.0);
    viewer->initCameraParameters();


    viewer->spin();
    viewer->close();
}

void ComplexCloud::saveIntensityCloud(const std::string &file_name, const glm::vec3 &scaling,
                                      bool relative) const
{
    if (!std::filesystem::exists(file_name)) {
        std::ofstream out_file(file_name);
        if (out_file.bad()) {
            out_file.close();
            // TODO: throw error
            return;
        }
        out_file.close();
    }

    pcl::PointCloud<pcl::PointXYZI>::Ptr intensityCloud = makeIntensityCloudFromRGB(m_complexCloud);
    if (relative) {
        for (auto &p: intensityCloud->points) {
            p.x -= m_sensorOrigin.x();
            p.y -= m_sensorOrigin.y();
            p.z -= m_sensorOrigin.z();
        }
    }

    for (auto &p: intensityCloud->points) {
        p.x *= scaling.x;
        p.y *= scaling.y;
        p.z *= scaling.z;
    }

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
        intensityCloud->points[i].intensity = cvtools::getIntensitySqrt(cv::Vec3b(
                rgb_cloud->points[i].r,
                rgb_cloud->points[i].g,
                rgb_cloud->points[i].b
        ));
    }

    return intensityCloud;
}

pcl::PointCloud<pcl::PointXYZRGB>::Ptr ComplexCloud::getComplexCloud() const
{
    return m_complexCloud;
}

void ComplexCloud::filterGround() const
{
    pcltools::filterGround<pcl::PointXYZRGB>(m_complexCloud, m_complexCloud, m_windowSize, m_slope,
                                             m_initDistance, m_maxDistance);
}

void ComplexCloud::setWindowSize(int windowSize)
{
    m_windowSize = windowSize;
}

void ComplexCloud::setSlope(float slope)
{
    m_slope = slope;
}

void ComplexCloud::setInitialDistance(float initDst)
{
    m_initDistance = initDst;
}

void ComplexCloud::setMaxDistance(float maxDst)
{
    m_maxDistance = maxDst;
}

void ComplexCloud::saveComplexCloud(const std::string &file_name, const glm::vec3 &scaling,
                                    bool relative, bool binary) const
{
    if (!binary) {
        if (!std::filesystem::exists(file_name)) {
            std::ofstream out_file(file_name);
            if (out_file.bad()) {
                out_file.close();
                // TODO: throw error
                return;
            }
            out_file.close();
        }

        pcl::PointCloud<pcl::PointXYZRGB>::Ptr complexCloud =
            pcl::make_shared<pcl::PointCloud<pcl::PointXYZRGB>>(*m_complexCloud);
        if (relative) {
            complexCloud->sensor_origin_ = m_sensorOrigin;
            std::cout << "Sensor origin: " << m_sensorOrigin.x() << ", " << m_sensorOrigin.y()
                      << ", " << m_sensorOrigin.z() << "\n";
            for (auto &p : complexCloud->points) {
                p.x -= m_sensorOrigin.x();
                p.y -= m_sensorOrigin.y();
                p.z -= m_sensorOrigin.z();
            }
        }

        for (auto &p : complexCloud->points) {
            p.x *= scaling.x;
            p.y *= scaling.y;
            p.z *= scaling.z;
        }

        pcl::io::savePCDFileASCII(file_name, *complexCloud);
    } else {
        Frame<pcl::PointXYZRGB> frame(glm::vec3(0.f), m_complexCloud->points);
        frame.points = m_complexCloud->points;
    }
}
