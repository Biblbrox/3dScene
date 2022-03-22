#ifndef SCENE_MATH_HPP
#define SCENE_MATH_HPP

#include <Eigen/Eigenvalues>
#include <GL/glew.h>
#include <filesystem>
#include <fstream>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <glm/mat4x4.hpp>
#include <glm/vec2.hpp>
#include <glm/vec3.hpp>
#include <numeric>
#include <pcl/io/io.h>
#include <pcl/point_types.h>
#include <vector>

#include "base.hpp"

using glm::mat4;
using glm::vec2;
using glm::vec3;
using glm::vec4;

namespace math {

/**
 * Find bounds of points
 * @param points
 * @return
 */
std::array<GLfloat, 6> findBounds(const std::vector<vec3> &points);

template <typename T> constexpr T epsilon() noexcept
{
    return static_cast<T>(1e-7);
}

template <typename T, typename V>
constexpr bool epsilonEqual(T &&t, V &&v, double eps = math::epsilon<double>()) noexcept
{
    static_assert(std::is_arithmetic_v<std::decay_t<T>> && std::is_arithmetic_v<std::decay_t<V>>);

    return std::abs(t - v) < eps;
}

template <typename T, int N, int K> void swap(Eigen::Matrix<T, N, K> &mat, int col1, int col2)
{
    mat.col(col1).swap(mat.col(col2));
}

/**
 * Build covariance matrix from set of points
 * @param points
 * @return
 */
Eigen::Matrix3f build_covarience_matrix(const std::vector<vec3> &points);

/**
 * Rotate(move elements) around element with idx position
 * @param points
 * @param idx
 * @return
 */
std::vector<vec2> rotate_points(const std::vector<vec2> &points, size_t idx);

/**
 * Transform viewport coordinates to world space
 * @param pos
 * @return
 */
glm::vec3 viewportToWorld(const glm::vec2 &pos, const glm::vec2 &clip, const glm::mat4 &projection,
                          const glm::mat4 &view);

/**
 * Build opengl projective matrix from camera intrinsic params
 * @param path
 * @return
 */
glm::mat4 loadCameraIntrinsic(const std::string &path, GLfloat near, GLfloat far, GLfloat width,
                              GLfloat height);

/**
 * Convert homogenous coordinates to cartesian space
 * @param hom_mat
 * @return
 */
glm::mat4x3 homogen2cartesian(const glm::mat4x4& hom_mat);

/**
 * Build view matrix from euler angles and position
 * @param pos
 * @param yaw
 * @param pitch
 * @return
 */
glm::mat4 viewFromEuler(const glm::vec3& pos, GLfloat yaw, GLfloat pitch);

//std::pair<GLfloat, GLfloat> eulerFromView(const glm::mat4& view);

/**
 * Save calibration file in kitti format
 * See: http://www.cvlibs.net/datasets/kitti/
 * @param path
 * @param intrinsic
 * @param extrinsic
 */
void saveKittiCalib(const std::string &path, const glm::mat4x4 &intr, const glm::mat4x4 &extr);

/**
 * Convert vector of glm points to vector of pcl points
 * @param points
 */
template <int Length, typename GlmType, typename PointType>
std::vector<PointType, Eigen::aligned_allocator<PointType>> vecGlm2Pcl(
    const std::vector<glm::vec<Length, GlmType>, Eigen::aligned_allocator<PointType>> &points)
{
    assert(Length == pcl::getFields<PointType>().size());

    std::vector<PointType, Eigen::aligned_allocator<PointType>> res(points.size());
    for (int i = 0; i < points.size(); ++i)
        for (int j = 0; j < Length; ++j)
            res[i].data[j] = *(glm::value_ptr(points[i]) + j);

    return res;
}

/**
 * Rotate world around point v
 * @param m
 * @param v
 * @param angle
 * @return
 */
FORCE_INLINE glm::mat4 rotate_around(const glm::mat4 &m, const glm::vec3 &v, GLfloat angle,
                                     const glm::vec3 &rot_axis = glm::vec3(1.f, 0.f, 0.f))
{
    glm::mat4 tr1 = glm::translate(m, v);
    glm::mat4 ro = glm::rotate(tr1, angle, rot_axis);
    glm::mat4 tr2 = glm::translate(ro, -v);

    return tr2;
}

inline mat4 createTransform(const vec3 &position, GLfloat angle, const vec3 &rot_axis,
                            const vec3 &sizes)
{
    vec3 pos = position / sizes;

    const GLfloat half = 1.f;
    const GLfloat centerX = pos.x + half;
    const GLfloat centerY = pos.y + half;
    const GLfloat centerZ = pos.z + half;

    const vec3 scale = sizes;

    mat4 ident = mat4(1.f);
    mat4 scaling = glm::scale(ident, scale);
    mat4 translation = translate(ident, pos);
    mat4 rotation = rotate_around(ident, vec3(centerX, centerY, centerZ), angle, rot_axis);

    mat4 transform = scaling * rotation * translation;

    return transform;
}

inline std::vector<vec3> transformVertices(const std::vector<vec3> &vertices, const mat4 &transform)
{
    std::vector<vec3> res;
    res.reserve(vertices.size());
    for (const vec3 &v : vertices)
        res.emplace_back(transform * vec4(v, 1.f));

    return res;
}

inline std::vector<Triangle> transformTriangles(const std::vector<Triangle> &triangles,
                                                const mat4 &transform)
{
    std::vector<Triangle> res;
    res.reserve(triangles.size());

    for (const auto &v : triangles) {
        vec3 a = vec3(v.p0[0], v.p0[1], v.p0[2]);
        vec3 b = vec3(v.p1()[0], v.p1()[1], v.p1()[2]);
        vec3 c = vec3(v.p2()[0], v.p2()[1], v.p2()[2]);

        a = transform * vec4(a, 1.f);
        b = transform * vec4(b, 1.f);
        c = transform * vec4(c, 1.f);

        res.emplace_back(Vector3(a.x, a.y, a.z), Vector3(b.x, b.y, b.z), Vector3(c.x, c.y, c.z));
    }

    return res;
}

inline glm::vec3 computeCentroid(const std::vector<vec3> &points)
{
    glm::vec3 means{0.f};
    for (const auto &point : points)
        means += point;

    means /= points.size();

    return means;
}

constexpr glm::vec3 getTranslation(const glm::mat4 &m) noexcept
{
    return m[3];
}

constexpr vec3 viewportToNDC(const vec2 &pos, const vec2 &clip)
{
    assert(clip.x > 0 && clip.y > 0);

    GLfloat width = clip.x;
    GLfloat height = clip.y;
    GLfloat x = pos.x;
    GLfloat y = pos.y;

    // To NDC space
    x = 2.f * x / width - 1.f;
    y = 1.f - 2.f * y / height;
    GLfloat z = 1;

    return {x, y, z};
}

constexpr unsigned int power_two(unsigned int val) noexcept
{
    unsigned int power = 2, nextVal = power * 2;

    while ((nextVal *= 2) <= val)
        power *= 2;

    return power * 2;
}

constexpr GLfloat barry_centric(const vec3 &p1, const vec3 &p2, const vec3 &p3, const vec2 &pos)
{
    GLfloat det = (p2.z - p3.z) * (p1.x - p3.x) + (p3.x - p2.x) * (p1.z - p3.z);
    GLfloat l1 = ((p2.z - p3.z) * (pos.x - p3.x) + (p3.x - p2.x) * (pos.y - p3.z)) / det;
    GLfloat l2 = ((p3.z - p1.z) * (pos.x - p3.x) + (p1.x - p3.x) * (pos.y - p3.z)) / det;
    GLfloat l3 = 1.f - l1 - l2;

    return l1 * p1.y + l2 * p2.y + l3 * p3.y;
}

template <typename Type> struct IsGlmType {
    static const bool value =
        std::is_same_v<Type, glm::vec1> || std::is_same_v<Type, glm::vec2> ||
        std::is_same_v<Type, glm::vec3> || std::is_same_v<Type, glm::vec4> ||
        std::is_same_v<Type, glm::mat2x2> || std::is_same_v<Type, glm::mat2x3> ||
        std::is_same_v<Type, glm::mat2x4> || std::is_same_v<Type, glm::mat3x2> ||
        std::is_same_v<Type, glm::mat3x3> || std::is_same_v<Type, glm::mat3x4> ||
        std::is_same_v<Type, glm::mat4x2> || std::is_same_v<Type, glm::mat4x3> ||
        std::is_same_v<Type, glm::mat4x4>;
};

template <typename Type> inline constexpr bool IsGlmType_v = IsGlmType<Type>::value;

template <typename T, int K> std::string to_string(const glm::vec<K, T> &val)
{
    std::string res;
    for (int i = 0; i < K; ++i)
        res += std::to_string(val[i]) + (i == K - 1 ? "" : " ");

    return res;
}

template <typename T, int R, int C> std::string to_string(const glm::mat<C, R, T> &val)
{
    std::string res;
    const T *p_source = static_cast<const T *>(glm::value_ptr(val));
    for (int i = 0; i < R * C; ++i)
        res += std::to_string(p_source[i]) + (i == R * C - 1 ? "" : " ");

    return res;
}

template <typename T, int C, int R> void print_glm(const glm::mat<C, R, T> &val)
{
    for (int i = 0; i < C; ++i) {
        for (int j = 0; j < R; ++j)
            std::cout << val[i][j] << " ";
        std::cout << "\n";
    }
}

template <typename T, int R, int C> void print_eigen(const Eigen::Matrix<T, R, C> &val)
{
    for (int i = 0; i < R; ++i) {
        for (int j = 0; j < C; ++j)
            std::cout << val(i, j) << " ";
        std::cout << "\n";
    }
}

template <typename T> constexpr int sgn(T val)
{
    return (T(0) < val) - (val < T(0));
}

template <typename T, typename U> constexpr auto cantor_pairing(T f, U s)
{
    return 0.5 * (f + s) * (f + s + 1) + s;
}

template <typename T, typename... Args> constexpr auto cantor_pairing(T arg, Args... args)
{
    return cantor_pairing(arg, cantor_pairing(args...));
}

template <typename T> constexpr glm::vec2 operator/(T val, const glm::vec2 &vec)
{
    static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                           " must be arithmetical");
    return glm::vec2(val / vec.x, val / vec.y);
}

template <typename T> constexpr glm::vec3 operator/(T val, const glm::vec3 &vec)
{
    static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                           " must be arithmetical");
    return glm::vec3(val / vec.x, val / vec.y, val / vec.z);
}

template <typename T> constexpr glm::vec4 operator/(T val, const glm::vec4 &vec)
{
    static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                           " must be arithmetical");
    return glm::vec4(val / vec.x, val / vec.y, val / vec.z, val / vec.w);
}

template <typename T> constexpr glm::vec2 operator/(const glm::vec2 &vec, T val)
{
    static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                           " must be arithmetical");
    return glm::vec2(vec.x / val, vec.y / val);
}

template <typename T> constexpr glm::vec3 operator/(const glm::vec3 &vec, T val)
{
    static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                           " must be arithmetical");
    return glm::vec3(vec.x / val, vec.y / val, vec.z / val);
}

template <typename T> constexpr glm::vec4 operator/(const glm::vec4 &vec, T val)
{
    static_assert(std::is_arithmetic_v<T>, "Template parameter"
                                           " must be arithmetical");
    return glm::vec4(vec.x / val, vec.y / val, vec.z / val, vec.w / val);
}
} // namespace math

#endif // SCENE_MATH_HPP
