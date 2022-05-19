#include <QDoubleValidator>
#include <QString>
#include <pcl/point_types.h>

#if VTK_MAJOR_VERSION > 8
#    include <vtkGenericOpenGLRenderWindow.h>
#endif

#include "base.hpp"
#include "cloud/pointcloud.hpp"
#include "constants.hpp"
#include "logger/logger.hpp"
#include "pclviewer.hpp"
#include "ui_pclviewer.h"

PCLViewer::PCLViewer(QMainWindow *parent)
    : QMainWindow(parent), m_ui(new Ui::PCLViewer), m_detectCircle(false), m_detectSphere(false),
      m_detectPlane(false), m_threshold(0.1)
{
    m_ui->setupUi(this);
    this->setWindowTitle("PCL viewer");

    m_cloud = std::make_shared<LdPointCloud<pcl::PointXYZRGB>>(
        "/home/biblbrox/Projects/3dscene/res/cloud/000001_complex.pcd");

    // Set up the QVTK window
    m_viewer.reset(new pcl::visualization::PCLVisualizer("viewer", false));
    m_ui->qvtkWidget->SetRenderWindow(m_viewer->getRenderWindow());
    m_viewer->setupInteractor(m_ui->qvtkWidget->GetInteractor(),
                              m_ui->qvtkWidget->GetRenderWindow());
    m_ui->qvtkWidget->update();

    // Connect "random" button and the function
    connect(m_ui->ransacButton, SIGNAL(clicked()), this, SLOT(ransacButtonPressed()));
    connect(m_ui->detectPlane, SIGNAL(detectPlaneToggled()), this, SLOT(toggleDetectPlane()));
    connect(m_ui->detectSphere, SIGNAL(detectSphereToggled()), this, SLOT(toggleDetectSphere()));
    connect(m_ui->detectCircles, SIGNAL(detectCircleToggled()), this, SLOT(toggleDetectCircle()));
    connect(m_ui->thresholdValue, QOverload<const QString &>::of(&QLineEdit::textChanged), this,
            [=](const QString &val) {
                logger::Logger::info((boost::format("Thresold = %1%") % val.toStdString()).str());
                m_threshold = val.toDouble();
            });

    // auto dv = new QDoubleValidator(0.0, 50.0, 3);
    // dv->setNotation(QDoubleValidator::StandardNotation);
    // m_ui->thresholdValue->setValidator(dv);

    m_viewer->addPointCloud<pcl::PointXYZRGB>(to_boost_ptr(m_cloud), "m_cloud");
    m_viewer->resetCamera();
    m_ui->qvtkWidget->update();
}

void PCLViewer::ransacButtonPressed()
{
    printf("Ransac button was pressed\n");

    //pcl::Point
    if (m_detectPlane) {
        auto inliers =
            pcltools::ransac<pcl::PointXYZRGB>(to_boost_ptr(m_cloud), pcltools::RansacModel::plane);
        m_cloud->points.clear();
        m_cloud->points = inliers->points;
    }

    m_viewer->updatePointCloud(to_boost_ptr(m_cloud), "m_cloud");
    m_ui->qvtkWidget->update();
}

void PCLViewer::toggleDetectPlane()
{
    m_detectPlane = !m_detectPlane;
}

void PCLViewer::toggleDetectSphere()
{
    m_detectSphere = !m_detectSphere;
}

void PCLViewer::toggleDetectCircle()
{
    m_detectCircle = !m_detectCircle;
}

PCLViewer::~PCLViewer()
{
    delete m_ui;
}
