#ifndef FS_HPP
#define FS_HPP

#include <glm/vec3.hpp>
#include <boost/serialization/split_free.hpp>
#include <boost/serialization/vector.hpp>
#include <boost/serialization/string.hpp>
#include <boost/serialization/variant.hpp>
#include <variant>
#include <filesystem>

#include "ecs/entity.hpp"
#include "config.hpp"
#include "game.hpp"
#include "view/lidar.hpp"
#include "components/positioncomponent.hpp"
#include "components/lidarcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/globallightcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/selectablecomponent.hpp"
#include "components/terraincomponent.hpp"

namespace utils::fs
{
    using ecs::Entity;

    /**
     * Save point cloud frame to txt file.
     * @param frame
     * @param file_name
     * @param intensity
     */
    void
    saveFrameToFileTxt(const Frame& frame, const std::string& file_name, bool intensity = false);

    /**
     * Save point cloud frame to velodyne format file.
     * @param frame
     * @param file_name
     * @param intensity
     */
    void
    saveFrameToFileBin(const Frame& frame, const std::string& file_name, bool intensity = false);

    /**
     * Save point cloud frame to velodyne format file.
     * @param frame
     * @param file_name
     * @param intensity
     */
    void
    saveFrameToFilePcd(const Frame& frame, const std::string& file_name, bool intensity = false);


    /**
     * Save simulation objects to json format
     * @param file_name
     * @param entities
     */
    void saveSimJson(const std::string &file_name,
                     const std::unordered_map<size_t, std::shared_ptr<Entity>>& entities);

    template <int N, int K, typename T>
    void saveMatTxt(const std::string& fileName, const glm::mat<N, K, T>& m, bool transpose = false)
    {
        if (!std::filesystem::exists(fileName)) {
            return;
            //TODO: throw error
        }

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
     * Load simulation objects from json format
     * @param file_name
     * @param ecsManager
     * @return
     */
    std::vector<ecs::Entity>
    loadSimJson(const std::string& file_name, ecs::EcsManager& ecsManager);

    void
    saveLidarDataCart(const std::string &data_file, const std::string &res_file);

    void
    saveLidarDataSphere(const std::string &data_file, const std::string &res_file,
                        const glm::vec3 &lidar_pos);
}

#endif //FS_HPP
