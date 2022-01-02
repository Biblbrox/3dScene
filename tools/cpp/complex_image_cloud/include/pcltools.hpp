#ifndef PCLTOOLS_HPP
#define PCLTOOLS_HPP

#include <pcl/point_cloud.h>
#include <pcl/io/pcd_io.h>
#include <pcl/point_types.h>
#include <pcl/filters/extract_indices.h>
#include <pcl/segmentation/progressive_morphological_filter.h>

namespace pcltools
{
    /**
     * Filter ground points
     * @tparam PointT
     * @param cloud
     */
    template<typename PointT>
    void
    filterGround(typename pcl::PointCloud<PointT>::Ptr cloud,
                 typename pcl::PointCloud<PointT>::Ptr cloud_filtered, int windowSize, float slope,
                 float initialDst, float maxDst)
    {
        pcl::PointIndicesPtr ground (new pcl::PointIndices);

        pcl::ProgressiveMorphologicalFilter<PointT> pmf;
        pmf.setInputCloud(cloud);
        pmf.setMaxWindowSize(windowSize);
        pmf.setSlope(slope);
        pmf.setInitialDistance (initialDst);
        pmf.setMaxDistance (maxDst);
        pmf.extract (ground->indices);

        // Create the filtering object
        pcl::ExtractIndices<PointT> extract;
        extract.setInputCloud (cloud);
        extract.setIndices (ground);
        extract.filter (*cloud_filtered);
    }
}

#endif //PCLTOOLS_HPP
