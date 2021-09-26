#include <pcl/point_cloud.h>
#include <glm/ext/matrix_projection.hpp>
#include <pcl/visualization/pcl_visualizer.h>

#include "complexcloud.hpp"
#include "cvtools.hpp"
#include "base.hpp"

using glm::vec2;
using glm::vec3;
using glm::vec4;
using glm::mat4;

ComplexCloud::ComplexCloud(Image img, pcl::PointCloud<pcl::PointXYZ> xyzCloud)
        : m_img(std::move(img))
{
    pcl::PointCloud<pcl::PointXYZ> cloud(std::move(xyzCloud));

    m_projectedPoints.reserve(cloud.size());
    Mat4 calMatrix = m_img.getCalMatrix();

    float rows = static_cast<float>(m_img.getInnerMat().cols);
    float cols = static_cast<float>(m_img.getInnerMat().rows);
    for (const auto& p: cloud) {
        glm::vec3 p_3d{p.x, p.y, p.z};
        glm::mat4 cal_glm;
        cvtools::fromCV2GLM(calMatrix.t(), &cal_glm);
        glm::vec4 viewport{0, 0, rows, cols};
        glm::vec3 projected_glm = glm::project(p_3d, glm::mat4(1.f), cal_glm, viewport);

        cv::Point projected(std::round(projected_glm.x), std::round(projected_glm.y));

        m_projectedPoints.emplace_back(projected);
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
