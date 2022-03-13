#include <pcl/io/pcd_io.h>
#include <pcl/point_types.h>

#include "complexcloud.hpp"
#include "constants.hpp"
#include "image.hpp"
#include "pcltools.hpp"
#include "pclviewer.hpp"
#include "ui_pclviewer.h"
#include "utils/fs.hpp"

PCLViewer::PCLViewer(QMainWindow *parent) : QMainWindow(parent), m_ui(new Ui::PCLViewer)
{
    m_ui->setupUi(this);
    this->setWindowTitle("PCL viewer");

    Image img("/home/biblbrox/autonet/3dscene/res/screenshot.bmp",
              "/home/biblbrox/autonet/3dscene/res/cal_matrix.txt");

    // pcl::PointCloud<pcl::PointXYZ>::Ptr cloud(new pcl::PointCloud<pcl::PointXYZ>);
    // pcl::io::loadPCDFile<pcl::PointXYZ> ("/home/biblbrox/autonet/3dscene/res/cloud/000000.pcd",
    // *cloud);
    pcl::PointCloud<pcl::PointXYZI>::Ptr cloud = utils::fs::loadFromBin<pcl::PointXYZI>(
        "/home/biblbrox/autonet/3dscene/res/cloud/000000.bin");

    m_cloud = std::make_shared<ComplexCloud>(img, *cloud);

    //    complexCloud.drawProjected();

    //    complexCloud.drawComplexCloud();
    //    complexCloud.drawIntensityCloud();
    m_cloud->saveIntensityCloud(getResourcePath("xyzi.pcd"));
    m_cloud->saveIntensityCloud(getResourcePath("xyzi_relative.pcd"), {1.f, 1.f, 1.f}, true);
    m_cloud->saveComplexCloud(getResourcePath("xyzrgb.pcd"));
    m_cloud->saveComplexCloud(getResourcePath("xyzrgb_relative.pcd"), {1.f, 1.f, 1.f}, true);

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
