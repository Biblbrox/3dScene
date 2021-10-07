#include "image.hpp"
#include "complexcloud.hpp"
#include "constants.hpp"

#include <pcl/io/pcd_io.h>
#include <pcl/point_types.h>


int main()
{
    Image img("/home/biblbrox/autonet/3dscene/res/screenshot.bmp",
              "/home/biblbrox/autonet/3dscene/res/cal_matrix.txt");

    pcl::PointCloud<pcl::PointXYZ>::Ptr cloud(new pcl::PointCloud<pcl::PointXYZ>);
    pcl::io::loadPCDFile<pcl::PointXYZ> ("/home/biblbrox/autonet/3dscene/res/000000.pcd", *cloud);

    ComplexCloud complexCloud(img, *cloud);

//    complexCloud.drawProjected();

    complexCloud.drawComplexCloud();
//    complexCloud.drawIntensityCloud();
    complexCloud.saveIntensityCloud(getResourcePath("xyzi.pcd"));
    complexCloud.saveIntensityCloud(getResourcePath("xyzi_relative.pcd"), {}, true);


    return 0;
}