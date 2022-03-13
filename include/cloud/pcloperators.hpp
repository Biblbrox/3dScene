#ifndef LIDARPROCESSING_PCLOPERATORS_HPP
#define LIDARPROCESSING_PCLOPERATORS_HPP

#include <cstddef>
#include <pcl/common/io.h>
#include <type_traits>

namespace lidar {

////// Operators for pcl data types

template <typename PointType> constexpr bool isPointType()
{
    return std::is_same_v<std::decay_t<PointType>, pcl::PointXYZ> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXY> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointDEM> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointIndices> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointNormal> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointSurfel> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointUV> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointWithRange> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXYZHSV> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXYZI> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXYZL> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXYZRGB> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXYZRGBA> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXYZRGBL> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXYZRGBNormal> ||
           std::is_same_v<std::decay_t<PointType>, pcl::PointXYZHSV>;
}

template <typename PointType, typename T>
constexpr std::enable_if_t<isPointType<PointType>(), PointType> operator*(PointType &&point,
                                                                          T &&value)
{
    static_assert(std::is_arithmetic_v<std::decay_t<T>>);
    static_assert(isPointType<PointType>());
    PointType res = point;
    for (short i = 0; i < arrayLength(point.data); ++i)
        res.data[i] *= value;

    return res;
}

template <typename PointType, typename T>
constexpr std::enable_if_t<isPointType<PointType>(), PointType> operator/(PointType &&point,
                                                                          T &&value)
{
    static_assert(std::is_arithmetic_v<std::decay_t<T>>);
    static_assert(isPointType<PointType>());
    PointType res = point;
    for (short i = 0; i < arrayLength(point.data); ++i)
        res.data[i] /= value;

    return res;
}

template <typename PointType, typename T>
constexpr std::enable_if_t<isPointType<PointType>(), void> operator*=(PointType &&point, T &&value)
{
    static_assert(std::is_arithmetic_v<std::decay_t<T>>);
    static_assert(isPointType<PointType>());
    for (size_t i = 0; i < arrayLength(point.data); ++i)
        point.data[i] *= value;
}

template <typename PointType, typename T>
constexpr std::enable_if_t<isPointType<PointType>(), void> operator/=(PointType &&point, T &&value)
{
    static_assert(std::is_arithmetic_v<std::decay_t<T>>);
    for (short i = 0; i < pcl::getFieldsList<PointType>(point).size(); ++i)
        point.data[i] *= value;
}

template <typename PointType>
constexpr std::enable_if_t<isPointType<PointType>(), bool> operator<(const PointType &p1,
                                                                     const PointType &p2)
{
    static_assert(isPointType<PointType>());
    bool res = false;
    for (short i = 0; i < arrayLength(p1.data); ++i) {
        res = p1.data[i] < p2.data[i];

        if (!epsilonEqual(p1.data[i], p2.data[i]) && (p1.data[i] > p2.data[i]))
            return false;

        if (res)
            return true;
    }

    return res;
}

} // namespace lidar

#endif // LIDARPROCESSING_PCLOPERATORS_HPP
