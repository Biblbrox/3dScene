#ifndef FS_HPP
#define FS_HPP

#include <boost/serialization/split_free.hpp>
#include <boost/serialization/string.hpp>
#include <boost/serialization/variant.hpp>
#include <boost/serialization/vector.hpp>
#include <filesystem>
#include <glm/vec3.hpp>
#include <pcl/io/pcd_io.h>
#include <variant>

#include "cloud/pcltools.hpp"
#include "cloud/pointcloud.hpp"
#include "components/bvhcomponent.hpp"
#include "components/globallightcomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/positioncomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/terraincomponent.hpp"
#include "config.hpp"
#include "ecs/entity.hpp"
#include "exceptions/fsexception.hpp"
#include "game.hpp"
#include "math.hpp"
#include "view/lidar.hpp"

namespace utils::fs {
using ecs::Entity;

/**
 * Save simulation objects to json format
 * @param file_name
 * @param entities
 */
void saveSimJson(const std::string &file_name,
                 const std::unordered_map<size_t, std::shared_ptr<Entity>> &entities);

/**
 * Load simulation objects from json format
 * @param file_name
 * @param ecsManager
 * @return
 */
std::vector<ecs::Entity> loadSimJson(const std::string &file_name, ecs::EcsManager &ecsManager);

void saveLidarDataCart(const std::string &data_file, const std::string &res_file);

void saveLidarDataSphere(const std::string &data_file, const std::string &res_file,
                         const glm::vec3 &lidar_pos);

FORCE_INLINE size_t bytesInFile(std::ifstream& f)
{
    f.seekg(0, std::ifstream::end);
    size_t length = f.tellg();
    f.seekg (0, std::ifstream::beg);
    return length;
}

/**
 * Check write access to file file_name
 * @return
 */
bool writableFile(std::string_view file_name);

template <typename PointType>
typename pcl::PointCloud<PointType>::Ptr loadFromBin(const std::string &file_path)
{
    typename pcl::PointCloud<PointType>::Ptr cloud(new pcl::PointCloud<PointType>());
    size_t field_size = pcl::getFields<PointType>().size();

    std::ifstream f(file_path, std::ios::binary);
    size_t length = bytesInFile(f);
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
    for (size_t i = 0; i < cloud.width; ++i)
        for (size_t j = 0; j < pcl::getFields<PointType>().size(); ++j)
            cloud[i].data[j] = frame.points[i].data[j];

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
        //eigCloud(all, 1) = -eigCloud(all, 1);

        // Scale cloud
        vec3 scale = Config::getVal<vec3>("RealScale");


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

/**
 * Save glm matrix to text file
 * @tparam N
 * @tparam K
 * @tparam T
 * @param fileName
 * @param m
 * @param transpose
 */
template <int N, int K, typename T>
void saveMatTxt(const std::string &fileName, const glm::mat<N, K, T> &m, bool transpose = false)
{
    glm::mat<N, K, T> mat_out = transpose ? glm::transpose(m) : m;
    std::ofstream out(fileName);
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < K; ++j)
            out << mat_out[i][j] << " ";

        out << "\n";
    }

    out.close();
}

/**
 * Load glm matrix of arbitrary length from file
 * @tparam Length
 * @tparam Type
 * @param file_name
 * @param mat
 */
template <int C, int R, typename Type>
glm::mat<C, R, Type, glm::defaultp> loadMat(const std::string &file_name)
{
    if (!std::filesystem::exists(file_name)) {
        // TODO: throw error
    }

    glm::mat<C, R, Type, glm::defaultp> mat;
    std::ifstream f(file_name);
    for (int i = 0; i < R; ++i)
        for (int j = 0; j < C; ++j)
            f >> mat[i][j];

    f.close();

    return mat;
}

} // namespace utils::fs

#endif // FS_HPP
