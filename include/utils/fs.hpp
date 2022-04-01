#ifndef FS_HPP
#define FS_HPP

#include <boost/serialization/split_free.hpp>
#include <boost/serialization/string.hpp>
#include <boost/serialization/variant.hpp>
#include <boost/serialization/vector.hpp>
#include <filesystem>
#include <glm/vec3.hpp>
#include <pcl/io/pcd_io.h>

#include "config.hpp"
#include "exceptions/fsexception.hpp"
#include "game.hpp"
#include "math.hpp"

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

/**
 * Check write access to file file_name
 * @return
 */
bool writableFile(std::string_view file_name);

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

FORCE_INLINE size_t bytesInFile(std::ifstream& f)
{
    f.seekg(0, std::ifstream::end);
    size_t length = f.tellg();
    f.seekg (0, std::ifstream::beg);
    return length;
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
