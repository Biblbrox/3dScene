#ifndef LIDARPROCESSING_PCLTOOLS_HPP
#define LIDARPROCESSING_PCLTOOLS_HPP

#include <initializer_list>
#include <pcl/common/io.h>
#include <pcl/filters/extract_indices.h>
#include <pcl/segmentation/progressive_morphological_filter.h>

#include "base.hpp"
#include "config.hpp"
#include "cvutils/cvtools.hpp"
#include "cvutils/opencv.hpp"
#include "image.hpp"
#include "pcloperators.hpp"
#include "utils/fs.hpp"
#include "utils/math.hpp"
#include "view/lidar.hpp"

namespace pcltools {

template <typename PointType>
void shiftCloud(pcl::PointCloud<PointType> &cloud, const glm::vec3 &shift)
{
    std::for_each(cloud.points.begin(), cloud.points.end(), [shift](PointType &p) {
        p.x += shift.x;
        p.y += shift.y;
        p.z += shift.z;
    });
}

template <typename PointType> void shiftCloud(Frame<PointType> &cloud, const glm::vec3 &shift)
{
    std::for_each(cloud.points.begin(), cloud.points.end(), [shift](PointType &p) {
        p.x += shift.x;
        p.y += shift.y;
        p.z += shift.z;
    });
}

/////// Convert function to different datatypes
template <typename PointType>
typename pcl::PointCloud<PointType>::Ptr frame2pcl(const Frame<PointType> &frame)
{
    typename pcl::PointCloud<PointType>::Ptr cloud(new pcl::PointCloud<PointType>());
    cloud->points = frame.points;
    cloud->sensor_origin_.x() = frame.sourcePos.x;
    cloud->sensor_origin_.y() = frame.sourcePos.y;
    cloud->sensor_origin_.z() = frame.sourcePos.z;

    return cloud;
}

template <typename PointType>
typename Frame<PointType>::Ptr pcl2frame(const typename pcl::PointCloud<PointType>::Ptr cloud)
{
    typename Frame<PointType>::Ptr frame = std::make_shared<Frame<PointType>>();
    frame->points = cloud->points;
    frame->sourcePos = cloud->sensor_origin_;

    return frame;
}

template <typename PointType> Matrix pcl2Eigen(const pcl::PointCloud<PointType> &cloud)
{
    int fields_size = pcl::getFields<PointType>().size();
    if constexpr (std::is_same_v<PointType, pcl::PointXYZRGB>)
        fields_size = 6;

    Matrix cloud_tensor(cloud.size(), fields_size);

    for (int i = 0; i < cloud.size(); ++i) {
        const auto &point = cloud.points[i];
        Matrix values(1, fields_size);
        for (int j = 0; j < pcl::getFields<PointType>().size(); ++j)
            values(0, j) = point.data[j];

        if constexpr (std::is_same_v<PointType, pcl::PointXYZI>)
            values(0, 3) = point.intensity;

        if constexpr (std::is_same_v<PointType, pcl::PointXYZRGB>) {
            values(0, 3) = point.r;
            values(0, 4) = point.g;
            values(0, 5) = point.b;
        }

        cloud_tensor.row(i) = values;
    }

    return cloud_tensor;
}

template <typename PointType> Matrix frame2Eigen(const Frame<PointType> &frame)
{
    // TODO: write more clearly
    typename pcl::PointCloud<PointType>::Ptr cloud = frame2pcl(frame);
    return pcl2Eigen(*cloud);
}

template <typename PointType> typename Frame<PointType>::Ptr eigen2Frame(const Matrix &matrix)
{
    typename Frame<PointType>::Ptr frame = std::make_shared<Frame<PointType>>();
    frame->points.resize(matrix.rows());
    for (int i = 0; i < matrix.rows(); ++i) {
        if constexpr (std::is_same_v<PointType, pcl::PointXYZRGB>) {
            for (int j = 0; j < 3; ++j)
                frame->points[i].data[j] = matrix(i, j);
            frame->points[i].r = matrix(i, 3);
            frame->points[i].g = matrix(i, 4);
            frame->points[i].b = matrix(i, 5);
        }
        else if constexpr (std::is_same_v<PointType, pcl::PointXYZI>) {
            for (int j = 0; j < 3; ++j)
                frame->points[i].data[j] = matrix(i, j);
            frame->points[i].intensity = matrix(i, 3);
        }
        else {
            for (int j = 0; j < matrix.cols(); ++j)
                frame->points[i].data[j] = matrix(i, j);
        }
    }

    return frame;
}

template <typename PointType>
void sort(pcl::PointCloud<PointType> &cloud, std::initializer_list<int> indices)
{
    for (int idx : indices) {
        if (idx > pcl::getFieldsList(cloud).size())
            break;

        auto sort_func = [&](const auto &p1, const auto &p2) {
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
template <typename PointType>
std::pair<Matrix, pcl::PointCloud<PointType>>
filterUniques(pcl::PointCloud<PointType> &cloud, std::initializer_list<int> indices,
              bool return_counts = false, Scalar epsilon = math::epsilon<Scalar>())
{
    sort(cloud, indices);
    std::vector<int> cloud_indices = indices;
    cloud_indices.resize(pcl::getFieldsList(cloud).size());
    auto equal_points = [&](const auto &p1, const auto &p2) {
        for (int idx : indices) {
            bool equal = math::epsilonEqual(p1.data[idx], p2.data[idx], epsilon);
            if (!equal)
                return false;
        }

        return true;
    };

    pcl::PointCloud<PointType> unique_cloud = cloud;
    auto unique_end = std::unique(unique_cloud.begin(), unique_cloud.end(), equal_points);
    unique_cloud.erase(unique_end, unique_cloud.end());
    auto set_cmp = [](auto &p1, auto &p2) { return p1 < p2; };
    std::set<PointType, decltype(set_cmp)> unique_points(unique_cloud.begin(), unique_cloud.end(),
                                                         set_cmp);
    if (return_counts) {
        int unique_rows = unique_cloud.size();
        int unique_cols = pcl::getFieldsList(cloud).size();
        Matrix uniques_count(unique_rows, unique_cols);
        for (int i = 0; i < unique_rows; ++i) {
            for (int j = 0; j < unique_cols; ++j) {
                auto cmp_points = [&](const auto &p) {
                    // Compare uniques_cloud_nc(i, j) with original cloud
                    return epsilonEqual(cloud[i].data[j], p.data[j]);
                };
                uniques_count(i, j) =
                    std::count_if(unique_points.begin(), unique_points.end(), cmp_points);
            }
        }
        // TODO: TOOOOO SLOW
        return {uniques_count, unique_cloud};
    }

    return {{}, unique_cloud};
}

template <typename InPointType>
Frame<pcl::PointXYZRGB> projectToImageColor(const Frame<InPointType> &cloud, Image image,
                                            const glm::mat4 &projection)
{
    float rows = static_cast<float>(image.getMat().cols);
    float cols = static_cast<float>(image.getMat().rows);
    image.invert(0);
    cv::Mat invertedImg = image.getMat();
    Frame<pcl::PointXYZRGB> xyzrgb_cloud;
    xyzrgb_cloud.points.resize(cloud.points.size());
    xyzrgb_cloud = cloud;

    // Change coordiate system to sensor origin
    glm::vec3 sensor_origin = cloud.sourcePos;
    shiftCloud(xyzrgb_cloud, -sensor_origin);

    // Project point cloud to image and get rgb colors from it
    for (size_t i = 0; i < cloud.points.size(); ++i) {
        glm::vec3 p_3d{xyzrgb_cloud.points[i].x, xyzrgb_cloud.points[i].y,
                       xyzrgb_cloud.points[i].z};
        glm::vec4 viewport{0, 0, rows, cols};
        glm::vec3 projected_glm =
            glm::project(p_3d, glm::mat4(1.f), glm::transpose(projection), viewport);

        cv::Point projected(std::round(projected_glm.x), std::round(projected_glm.y));

        cv::Vec3b color = cvtools::getImgColor(invertedImg, projected);
        xyzrgb_cloud.points[i].b = color[0];
        xyzrgb_cloud.points[i].g = color[1];
        xyzrgb_cloud.points[i].r = color[2];
    }

    // Change coordiate system to sensor origin
    shiftCloud(xyzrgb_cloud, sensor_origin);

    return xyzrgb_cloud;
}

template <typename InPointType>
Frame<pcl::PointXYZI> projectToImageIntensity(const Frame<InPointType> &cloud, Image image,
                                              const glm::mat4 &projection)
{
    float rows = static_cast<float>(image.getMat().cols);
    float cols = static_cast<float>(image.getMat().rows);
    image.invert(0);
    cv::Mat invertedImg = image.getMat();
    Frame<pcl::PointXYZI> xyzi_cloud;
    xyzi_cloud.points.resize(cloud.points.size());
    xyzi_cloud = cloud;

    // Change coordiate system to sensor origin
    glm::vec3 sensor_origin = cloud.sourcePos;
    shiftCloud(xyzi_cloud, -sensor_origin);

    // Project point cloud to image and get rgb colors from it
    for (size_t i = 0; i < cloud.points.size(); ++i) {
        glm::vec3 p_3d{xyzi_cloud.points[i].x, xyzi_cloud.points[i].y, xyzi_cloud.points[i].z};
        glm::vec4 viewport{0, 0, rows, cols};
        glm::vec3 projected_glm =
            glm::project(p_3d, glm::mat4(1.f), glm::transpose(projection), viewport);

        cv::Point projected(std::round(projected_glm.x), std::round(projected_glm.y));

        cv::Vec3b color = cvtools::getImgColor(invertedImg, projected);
        xyzi_cloud.points[i].intensity = cvtools::getIntensitySqrt(color);
    }

    // Change coordiate system to sensor origin
    shiftCloud(xyzi_cloud, sensor_origin);

    return xyzi_cloud;
}

template <typename PointType>
typename pcl::PointCloud<PointType>::Ptr loadFromBin(const std::string &file_path)
{
    typename pcl::PointCloud<PointType>::Ptr cloud(new pcl::PointCloud<PointType>());
    size_t field_size = pcl::getFields<PointType>().size();

    std::ifstream f(file_path, std::ios::binary);
    size_t length = utils::fs::bytesInFile(f);
    size_t points_count = std::ceil(length / (field_size * sizeof(glm::float32_t)));
    cloud->points.reserve(points_count);
    cloud->width = points_count;
    cloud->height = 1;

    for (int i = 0; i < cloud->width; ++i) {
        PointType point;
        f.read(reinterpret_cast<char *>(point.data), sizeof(glm::float32_t) * field_size);
        cloud->points.push_back(point);
    };

    f.close();
    return cloud;
}

/**
 * Filter ground points
 * @tparam PointT
 * @param cloud
 */
template <typename PointT>
void filterGround(typename pcl::PointCloud<PointT>::Ptr cloud,
                  typename pcl::PointCloud<PointT>::Ptr cloud_filtered, int windowSize, float slope,
                  float initialDst, float maxDst)
{
    pcl::PointIndicesPtr ground(new pcl::PointIndices);

    pcl::ProgressiveMorphologicalFilter<PointT> pmf;
    pmf.setInputCloud(cloud);
    pmf.setMaxWindowSize(windowSize);
    pmf.setSlope(slope);
    pmf.setInitialDistance(initialDst);
    pmf.setMaxDistance(maxDst);
    pmf.extract(ground->indices);

    // Create the filtering object
    pcl::ExtractIndices<PointT> extract;
    extract.setInputCloud(cloud);
    extract.setIndices(ground);
    extract.filter(*cloud_filtered);
}

/**
 * Save point cloud frame to txt file.
 * @param frame
 * @param file_name
 * @param intensity
 */
template <typename PointType>
void saveFrameToFileTxt(const Frame<PointType> &frame, const std::string &file_name,
                        bool intensity = false)
{
    // TODO: rewrite
    std::ofstream out(file_name, std::ios::out | std::ios::app);

    size_t field_size = pcl::getFields<PointType>().size();
    for (const auto &point : frame.points)
        for (int i = 0; i < field_size; ++i)
            out << point.data[i] << (i == field_size - 1 ? "\n" : ", ");

    out.close();
}

/**
 * Save point cloud frame to velodyne format file.
 * @param frame
 * @param file_name
 * @param intensity
 */
template <typename PointType>
void saveFrameToFileBin(const Frame<PointType> &frame, const std::string &file_name)
{
    using glm::float32;

    std::ofstream out(file_name, std::ios::out | std::ios::binary);

    size_t field_size = pcl::getFields<PointType>().size();
    for (const auto &point : frame.points)
        for (int i = 0; i < field_size; ++i)
            out.write((char *)&point.data[i], sizeof(glm::float32_t));

    out.close();
}

/**
 * Save point cloud frame to velodyne format file.
 * @param frame
 * @param file_name
 * @param intensity
 */
template <typename PointType>
void saveFrameToFilePcd(const Frame<PointType> &frame, const std::string &file_name)
{
    pcl::PointCloud<PointType> cloud;
    // Fill in the cloud data
    cloud.width = frame.points.size();
    cloud.height = 1;
    cloud.is_dense = false;
    cloud.points.resize(cloud.width * cloud.height);
    for (size_t i = 0; i < cloud.width; ++i) {
        for (size_t j = 0; j < pcl::getFields<PointType>().size(); ++j)
            cloud[i].data[j] = frame.points[i].data[j];

        if constexpr (std::is_same_v<PointType, pcl::PointXYZI>)
            cloud[i].intensity = frame.points[i].intensity;

        if constexpr (std::is_same_v<PointType, pcl::PointXYZRGB>)
            cloud[i].rgb = frame.points[i].rgb;
    }

    cloud.sensor_origin_ =
        Eigen::Vector4f(frame.sourcePos.x, frame.sourcePos.y, frame.sourcePos.z, 1.f);
    pcl::io::savePCDFileASCII(file_name, cloud);
}

/**
 * Save point cloud to file. If use_real_world_space is set all point will be scaled from opengl
 * world units to real world units.
 * @tparam PointType
 * @param frame
 * @param type
 * @param file_name
 * @param use_real_world_space
 */
template <typename PointType>
void saveFrame(const Frame<PointType> &frame, CloudType type, const std::string &file_name,
               bool use_real_world_space = false)
{
    using Eigen::placeholders::all;
    // if (!fs::writableFile(file_name)) {
    //     // TODO: throw error
    //     return;
    // }

    typename Frame<PointType>::Ptr copy = std::make_shared<Frame<PointType>>(frame);
    if (use_real_world_space) {
        Matrix eigCloud = pcltools::frame2Eigen(frame);

        vec3 camera_pos = FpsCamera::getInstance()->getPos();
        eigCloud.col(0).array() -= frame.sourcePos.x;
        eigCloud.col(1).array() -= frame.sourcePos.y;
        eigCloud.col(2).array() -= frame.sourcePos.z;

        eigCloud(all, 2).array() *= -1;
        math::swap(eigCloud, 0, 2);
        math::swap(eigCloud, 1, 2);
        eigCloud(all, 1) = -eigCloud(all, 1);

        // Scale cloud
        vec3 scale = Config::getVal<glm::vec3>("RealScale");

        eigCloud.col(0) *= scale.x;
        eigCloud.col(1) *= scale.y;
        eigCloud.col(2) *= scale.z;
        copy = pcltools::eigen2Frame<PointType>(eigCloud);
    }

    switch (type) {
    case CloudType::binary:
        saveFrameToFileBin(*copy, file_name);
        break;
    case CloudType::pcd:
        saveFrameToFilePcd(*copy, file_name);
        break;
    case CloudType::txt:
        saveFrameToFileTxt(*copy, file_name);
        break;
    default:
        break;
    }
}

} // namespace pcltools

#endif // LIDARPROCESSING_PCLTOOLS_HPP
