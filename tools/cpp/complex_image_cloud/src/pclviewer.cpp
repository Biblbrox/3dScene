#include <pcl/point_types.h>

#if VTK_MAJOR_VERSION > 8
#include <vtkGenericOpenGLRenderWindow.h>
#endif

#include "ui_pclviewer.h"
#include "cloud/pointcloud.hpp"
#include "constants.hpp"
#include "pclviewer.hpp"
#include "complexcloud.hpp"

PCLViewer::PCLViewer(QMainWindow *parent) : QMainWindow(parent), m_ui(new Ui::PCLViewer)
{
    m_ui->setupUi(this);
    this->setWindowTitle("PCL viewer");

    LdPointCloud<pcl::PointXYZRGB> cloud(
        "/home/biblbrox/Projects/3dscene/res/cloud/000001_complex.pcd");

    cloud.drawCloud("XYZRGB cloud");

    // Set up the QVTK window
    m_viewer.reset(new pcl::visualization::PCLVisualizer("viewer", false));
    m_ui->qvtkWidget->SetRenderWindow(m_viewer->getRenderWindow());
    m_viewer->setupInteractor(m_ui->qvtkWidget->GetInteractor(),
                              m_ui->qvtkWidget->GetRenderWindow());
    m_ui->qvtkWidget->update();

    // Connect "random" button and the function
    connect(m_ui->pushButton_random, SIGNAL(clicked()), this, SLOT(filterButtonPressed()));

    // Connect R,G,B sliders and their functions
    connect(m_ui->horizontalSlider_R, SIGNAL(valueChanged(int)), this, SLOT(slopeChanged(int)));
    connect(m_ui->horizontalSlider_G, SIGNAL(valueChanged(int)), this,
            SLOT(initialDistanceChanged(float)));
    connect(m_ui->horizontalSlider_B, SIGNAL(valueChanged(int)), this,
            SLOT(maxDistanceChanged(float)));
    connect(m_ui->horizontalSlider_R, SIGNAL(sliderReleased()), this, SLOT(RGBsliderReleased()));
    connect(m_ui->horizontalSlider_G, SIGNAL(sliderReleased()), this, SLOT(RGBsliderReleased()));
    connect(m_ui->horizontalSlider_B, SIGNAL(sliderReleased()), this, SLOT(RGBsliderReleased()));

    // Connect point size slider
    connect(m_ui->horizontalSlider_p, SIGNAL(valueChanged(int)), this,
            SLOT(windowSizeChanged(int)));

    m_viewer->addPointCloud(m_cloud->getComplexCloud(), "m_cloud");
    windowSizeChanged(2);
    m_viewer->resetCamera();
    m_ui->qvtkWidget->update();
}

void PCLViewer::filterButtonPressed()
{
    printf("Random button was pressed\n");

    m_cloud->filterGround();
    m_viewer->updatePointCloud(m_cloud->getComplexCloud(), "m_cloud");
    m_ui->qvtkWidget->update();
}

void PCLViewer::RGBsliderReleased()
{
    m_viewer->updatePointCloud(m_cloud->getComplexCloud(), "m_cloud");
    m_ui->qvtkWidget->update();
}

void PCLViewer::windowSizeChanged(int value)
{
    m_cloud->setWindowSize(value);
    m_ui->qvtkWidget->update();
}

void PCLViewer::slopeChanged(float value)
{
    m_cloud->setSlope(value);
}

void PCLViewer::initialDistanceChanged(float value)
{
    m_cloud->setInitialDistance(value);
}

void PCLViewer::maxDistanceChanged(float value)
{
    m_cloud->setMaxDistance(value);
}

PCLViewer::~PCLViewer()
{
    delete m_ui;
}
