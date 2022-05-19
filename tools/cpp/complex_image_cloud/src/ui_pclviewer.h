/********************************************************************************
** Form generated from reading UI file 'pclviewer.ui'
**
** Created by: Qt User Interface Compiler version 5.15.3
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_PCLVIEWER_H
#define UI_PCLVIEWER_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QCheckBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLCDNumber>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSlider>
#include <QtWidgets/QTabWidget>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>
#include "QVTKWidget.h"

QT_BEGIN_NAMESPACE

class Ui_PCLViewer
{
public:
    QWidget *centralwidget;
    QHBoxLayout *horizontalLayout_5;
    QTabWidget *tabWidget;
    QWidget *tab;
    QHBoxLayout *horizontalLayout_6;
    QVBoxLayout *verticalLayout_5;
    QHBoxLayout *horizontalLayout;
    QVBoxLayout *verticalLayout;
    QLabel *label_5;
    QCheckBox *detectCircles;
    QHBoxLayout *horizontalLayout_2;
    QVBoxLayout *verticalLayout_2;
    QLabel *label_2;
    QCheckBox *detectPlane;
    QHBoxLayout *horizontalLayout_3;
    QVBoxLayout *verticalLayout_3;
    QLabel *label_3;
    QCheckBox *detectSphere;
    QLabel *label;
    QLineEdit *thresholdValue;
    QPushButton *ransacButton;
    QVTKWidget *qvtkWidget;
    QWidget *tab_2;
    QHBoxLayout *horizontalLayout_11;
    QVBoxLayout *verticalLayout_6;
    QHBoxLayout *horizontalLayout_7;
    QVBoxLayout *verticalLayout_7;
    QLabel *label_6;
    QLabel *label_7;
    QSlider *horizontalSlider_R_2;
    QLCDNumber *lcdNumber_R_2;
    QHBoxLayout *horizontalLayout_8;
    QVBoxLayout *verticalLayout_8;
    QLabel *label_8;
    QSlider *horizontalSlider_G_2;
    QLCDNumber *lcdNumber_G_2;
    QHBoxLayout *horizontalLayout_9;
    QVBoxLayout *verticalLayout_9;
    QLabel *label_9;
    QSlider *horizontalSlider_B_2;
    QLCDNumber *lcdNumber_B_2;
    QHBoxLayout *horizontalLayout_10;
    QVBoxLayout *verticalLayout_10;
    QLabel *label_10;
    QSlider *horizontalSlider_p_2;
    QLCDNumber *lcdNumber_p_2;
    QPushButton *pushButton_random_2;
    QMenuBar *menuBar;

    void setupUi(QMainWindow *PCLViewer)
    {
        if (PCLViewer->objectName().isEmpty())
            PCLViewer->setObjectName(QString::fromUtf8("PCLViewer"));
        PCLViewer->resize(694, 527);
        PCLViewer->setMinimumSize(QSize(0, 0));
        PCLViewer->setMaximumSize(QSize(5000, 5000));
        centralwidget = new QWidget(PCLViewer);
        centralwidget->setObjectName(QString::fromUtf8("centralwidget"));
        horizontalLayout_5 = new QHBoxLayout(centralwidget);
        horizontalLayout_5->setObjectName(QString::fromUtf8("horizontalLayout_5"));
        tabWidget = new QTabWidget(centralwidget);
        tabWidget->setObjectName(QString::fromUtf8("tabWidget"));
        tab = new QWidget();
        tab->setObjectName(QString::fromUtf8("tab"));
        horizontalLayout_6 = new QHBoxLayout(tab);
        horizontalLayout_6->setObjectName(QString::fromUtf8("horizontalLayout_6"));
        verticalLayout_5 = new QVBoxLayout();
        verticalLayout_5->setObjectName(QString::fromUtf8("verticalLayout_5"));
        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName(QString::fromUtf8("horizontalLayout"));
        verticalLayout = new QVBoxLayout();
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));
        label_5 = new QLabel(tab);
        label_5->setObjectName(QString::fromUtf8("label_5"));
        QFont font;
        font.setPointSize(16);
        font.setBold(false);
        font.setItalic(false);
        font.setWeight(50);
        label_5->setFont(font);

        verticalLayout->addWidget(label_5);


        horizontalLayout->addLayout(verticalLayout);

        detectCircles = new QCheckBox(tab);
        detectCircles->setObjectName(QString::fromUtf8("detectCircles"));

        horizontalLayout->addWidget(detectCircles);


        verticalLayout_5->addLayout(horizontalLayout);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setObjectName(QString::fromUtf8("horizontalLayout_2"));
        verticalLayout_2 = new QVBoxLayout();
        verticalLayout_2->setObjectName(QString::fromUtf8("verticalLayout_2"));
        label_2 = new QLabel(tab);
        label_2->setObjectName(QString::fromUtf8("label_2"));
        label_2->setFont(font);

        verticalLayout_2->addWidget(label_2);


        horizontalLayout_2->addLayout(verticalLayout_2);

        detectPlane = new QCheckBox(tab);
        detectPlane->setObjectName(QString::fromUtf8("detectPlane"));

        horizontalLayout_2->addWidget(detectPlane);


        verticalLayout_5->addLayout(horizontalLayout_2);

        horizontalLayout_3 = new QHBoxLayout();
        horizontalLayout_3->setObjectName(QString::fromUtf8("horizontalLayout_3"));
        verticalLayout_3 = new QVBoxLayout();
        verticalLayout_3->setObjectName(QString::fromUtf8("verticalLayout_3"));
        label_3 = new QLabel(tab);
        label_3->setObjectName(QString::fromUtf8("label_3"));
        label_3->setFont(font);

        verticalLayout_3->addWidget(label_3);


        horizontalLayout_3->addLayout(verticalLayout_3);

        detectSphere = new QCheckBox(tab);
        detectSphere->setObjectName(QString::fromUtf8("detectSphere"));

        horizontalLayout_3->addWidget(detectSphere);


        verticalLayout_5->addLayout(horizontalLayout_3);

        label = new QLabel(tab);
        label->setObjectName(QString::fromUtf8("label"));

        verticalLayout_5->addWidget(label);

        thresholdValue = new QLineEdit(tab);
        thresholdValue->setObjectName(QString::fromUtf8("thresholdValue"));

        verticalLayout_5->addWidget(thresholdValue);

        ransacButton = new QPushButton(tab);
        ransacButton->setObjectName(QString::fromUtf8("ransacButton"));

        verticalLayout_5->addWidget(ransacButton);


        horizontalLayout_6->addLayout(verticalLayout_5);

        qvtkWidget = new QVTKWidget(tab);
        qvtkWidget->setObjectName(QString::fromUtf8("qvtkWidget"));
        QSizePolicy sizePolicy(QSizePolicy::Maximum, QSizePolicy::Maximum);
        sizePolicy.setHorizontalStretch(1);
        sizePolicy.setVerticalStretch(1);
        sizePolicy.setHeightForWidth(qvtkWidget->sizePolicy().hasHeightForWidth());
        qvtkWidget->setSizePolicy(sizePolicy);
        qvtkWidget->setMinimumSize(QSize(100, 100));
        qvtkWidget->setMaximumSize(QSize(999999, 999999));
        qvtkWidget->setSizeIncrement(QSize(1, 1));

        horizontalLayout_6->addWidget(qvtkWidget);

        tabWidget->addTab(tab, QString());
        tab_2 = new QWidget();
        tab_2->setObjectName(QString::fromUtf8("tab_2"));
        horizontalLayout_11 = new QHBoxLayout(tab_2);
        horizontalLayout_11->setObjectName(QString::fromUtf8("horizontalLayout_11"));
        verticalLayout_6 = new QVBoxLayout();
        verticalLayout_6->setObjectName(QString::fromUtf8("verticalLayout_6"));
        horizontalLayout_7 = new QHBoxLayout();
        horizontalLayout_7->setObjectName(QString::fromUtf8("horizontalLayout_7"));
        verticalLayout_7 = new QVBoxLayout();
        verticalLayout_7->setObjectName(QString::fromUtf8("verticalLayout_7"));
        label_6 = new QLabel(tab_2);
        label_6->setObjectName(QString::fromUtf8("label_6"));
        label_6->setFont(font);

        verticalLayout_7->addWidget(label_6);

        label_7 = new QLabel(tab_2);
        label_7->setObjectName(QString::fromUtf8("label_7"));
        label_7->setFont(font);

        verticalLayout_7->addWidget(label_7);

        horizontalSlider_R_2 = new QSlider(tab_2);
        horizontalSlider_R_2->setObjectName(QString::fromUtf8("horizontalSlider_R_2"));
        horizontalSlider_R_2->setMaximum(255);
        horizontalSlider_R_2->setValue(128);
        horizontalSlider_R_2->setOrientation(Qt::Horizontal);

        verticalLayout_7->addWidget(horizontalSlider_R_2);


        horizontalLayout_7->addLayout(verticalLayout_7);

        lcdNumber_R_2 = new QLCDNumber(tab_2);
        lcdNumber_R_2->setObjectName(QString::fromUtf8("lcdNumber_R_2"));
        lcdNumber_R_2->setDigitCount(3);
        lcdNumber_R_2->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_R_2->setProperty("intValue", QVariant(128));

        horizontalLayout_7->addWidget(lcdNumber_R_2);


        verticalLayout_6->addLayout(horizontalLayout_7);

        horizontalLayout_8 = new QHBoxLayout();
        horizontalLayout_8->setObjectName(QString::fromUtf8("horizontalLayout_8"));
        verticalLayout_8 = new QVBoxLayout();
        verticalLayout_8->setObjectName(QString::fromUtf8("verticalLayout_8"));
        label_8 = new QLabel(tab_2);
        label_8->setObjectName(QString::fromUtf8("label_8"));
        label_8->setFont(font);

        verticalLayout_8->addWidget(label_8);

        horizontalSlider_G_2 = new QSlider(tab_2);
        horizontalSlider_G_2->setObjectName(QString::fromUtf8("horizontalSlider_G_2"));
        horizontalSlider_G_2->setMaximum(255);
        horizontalSlider_G_2->setValue(128);
        horizontalSlider_G_2->setOrientation(Qt::Horizontal);

        verticalLayout_8->addWidget(horizontalSlider_G_2);


        horizontalLayout_8->addLayout(verticalLayout_8);

        lcdNumber_G_2 = new QLCDNumber(tab_2);
        lcdNumber_G_2->setObjectName(QString::fromUtf8("lcdNumber_G_2"));
        lcdNumber_G_2->setDigitCount(3);
        lcdNumber_G_2->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_G_2->setProperty("intValue", QVariant(128));

        horizontalLayout_8->addWidget(lcdNumber_G_2);


        verticalLayout_6->addLayout(horizontalLayout_8);

        horizontalLayout_9 = new QHBoxLayout();
        horizontalLayout_9->setObjectName(QString::fromUtf8("horizontalLayout_9"));
        verticalLayout_9 = new QVBoxLayout();
        verticalLayout_9->setObjectName(QString::fromUtf8("verticalLayout_9"));
        label_9 = new QLabel(tab_2);
        label_9->setObjectName(QString::fromUtf8("label_9"));
        label_9->setFont(font);

        verticalLayout_9->addWidget(label_9);

        horizontalSlider_B_2 = new QSlider(tab_2);
        horizontalSlider_B_2->setObjectName(QString::fromUtf8("horizontalSlider_B_2"));
        horizontalSlider_B_2->setMaximum(255);
        horizontalSlider_B_2->setValue(128);
        horizontalSlider_B_2->setOrientation(Qt::Horizontal);

        verticalLayout_9->addWidget(horizontalSlider_B_2);


        horizontalLayout_9->addLayout(verticalLayout_9);

        lcdNumber_B_2 = new QLCDNumber(tab_2);
        lcdNumber_B_2->setObjectName(QString::fromUtf8("lcdNumber_B_2"));
        lcdNumber_B_2->setDigitCount(3);
        lcdNumber_B_2->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_B_2->setProperty("intValue", QVariant(128));

        horizontalLayout_9->addWidget(lcdNumber_B_2);


        verticalLayout_6->addLayout(horizontalLayout_9);

        horizontalLayout_10 = new QHBoxLayout();
        horizontalLayout_10->setObjectName(QString::fromUtf8("horizontalLayout_10"));
        verticalLayout_10 = new QVBoxLayout();
        verticalLayout_10->setObjectName(QString::fromUtf8("verticalLayout_10"));
        label_10 = new QLabel(tab_2);
        label_10->setObjectName(QString::fromUtf8("label_10"));
        label_10->setFont(font);

        verticalLayout_10->addWidget(label_10);

        horizontalSlider_p_2 = new QSlider(tab_2);
        horizontalSlider_p_2->setObjectName(QString::fromUtf8("horizontalSlider_p_2"));
        horizontalSlider_p_2->setMinimum(1);
        horizontalSlider_p_2->setMaximum(6);
        horizontalSlider_p_2->setValue(2);
        horizontalSlider_p_2->setOrientation(Qt::Horizontal);

        verticalLayout_10->addWidget(horizontalSlider_p_2);


        horizontalLayout_10->addLayout(verticalLayout_10);

        lcdNumber_p_2 = new QLCDNumber(tab_2);
        lcdNumber_p_2->setObjectName(QString::fromUtf8("lcdNumber_p_2"));
        lcdNumber_p_2->setDigitCount(1);
        lcdNumber_p_2->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_p_2->setProperty("intValue", QVariant(2));

        horizontalLayout_10->addWidget(lcdNumber_p_2);


        verticalLayout_6->addLayout(horizontalLayout_10);

        pushButton_random_2 = new QPushButton(tab_2);
        pushButton_random_2->setObjectName(QString::fromUtf8("pushButton_random_2"));

        verticalLayout_6->addWidget(pushButton_random_2);


        horizontalLayout_11->addLayout(verticalLayout_6);

        tabWidget->addTab(tab_2, QString());

        horizontalLayout_5->addWidget(tabWidget);

        PCLViewer->setCentralWidget(centralwidget);
        menuBar = new QMenuBar(PCLViewer);
        menuBar->setObjectName(QString::fromUtf8("menuBar"));
        menuBar->setGeometry(QRect(0, 0, 694, 23));
        PCLViewer->setMenuBar(menuBar);

        retranslateUi(PCLViewer);

        tabWidget->setCurrentIndex(0);


        QMetaObject::connectSlotsByName(PCLViewer);
    } // setupUi

    void retranslateUi(QMainWindow *PCLViewer)
    {
        PCLViewer->setWindowTitle(QCoreApplication::translate("PCLViewer", "PCLViewer", nullptr));
        label_5->setText(QCoreApplication::translate("PCLViewer", "Detect circles", nullptr));
        detectCircles->setText(QCoreApplication::translate("PCLViewer", "CheckBox", nullptr));
        label_2->setText(QCoreApplication::translate("PCLViewer", "Detect plane", nullptr));
        detectPlane->setText(QCoreApplication::translate("PCLViewer", "CheckBox", nullptr));
        label_3->setText(QCoreApplication::translate("PCLViewer", "Detect sphere", nullptr));
        detectSphere->setText(QCoreApplication::translate("PCLViewer", "CheckBox", nullptr));
        label->setText(QCoreApplication::translate("PCLViewer", "Threshold value", nullptr));
        ransacButton->setText(QCoreApplication::translate("PCLViewer", "Run ransac", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(tab), QCoreApplication::translate("PCLViewer", "Complex Cloud", nullptr));
        label_6->setText(QCoreApplication::translate("PCLViewer", "Filter settings", nullptr));
        label_7->setText(QCoreApplication::translate("PCLViewer", "Window Size", nullptr));
        label_8->setText(QCoreApplication::translate("PCLViewer", "Slope", nullptr));
        label_9->setText(QCoreApplication::translate("PCLViewer", "Initial distance", nullptr));
        label_10->setText(QCoreApplication::translate("PCLViewer", "Max distance", nullptr));
        pushButton_random_2->setText(QCoreApplication::translate("PCLViewer", "Filter ground", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(tab_2), QCoreApplication::translate("PCLViewer", "Intensity Cloud", nullptr));
    } // retranslateUi

};

namespace Ui {
    class PCLViewer: public Ui_PCLViewer {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_PCLVIEWER_H
