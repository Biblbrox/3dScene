#ifndef PCLVIEWER_HPP
#define PCLVIEWER_HPP

#include <iostream>

// Qt
#include <QMainWindow>

// Point Cloud Library
#include <pcl/point_cloud.h>
#include <pcl/point_types.h>
#include <pcl/visualization/pcl_visualizer.h>

// Visualization Toolkit (VTK)
#include <vtkRenderWindow.h>

#include "complexcloud.hpp"

typedef pcl::PointXYZRGB PointT;
typedef pcl::PointCloud<PointT> PointCloudT;


QT_BEGIN_NAMESPACE
namespace Ui
{
    class PCLViewer;
}
QT_END_NAMESPACE

class PCLViewer : public QMainWindow
{
Q_OBJECT

public:
    explicit PCLViewer(QMainWindow *parent = nullptr);

    ~PCLViewer() override;

public Q_SLOTS:
    void
    filterButtonPressed ();

    void RGBsliderReleased ();

    void windowSizeChanged (int value);

    void slopeChanged (float value);

    void initialDistanceChanged (float value);

    void maxDistanceChanged (float value);

private:
    Ui::PCLViewer *m_ui;

protected:
    pcl::visualization::PCLVisualizer::Ptr m_viewer;
    std::shared_ptr<ComplexCloud> m_cloud;
};


#endif //PCLVIEWER_HPP
