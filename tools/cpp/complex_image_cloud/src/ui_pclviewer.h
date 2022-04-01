/********************************************************************************
** Form generated from reading UI file 'pclviewer.ui'
**
** Created by: Qt User Interface Compiler version 5.9.7
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_PCLVIEWER_H
#define UI_PCLVIEWER_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLCDNumber>
#include <QtWidgets/QLabel>
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
    QLabel *label;
    QSlider *horizontalSlider_R;
    QLCDNumber *lcdNumber_R;
    QHBoxLayout *horizontalLayout_2;
    QVBoxLayout *verticalLayout_2;
    QLabel *label_2;
    QSlider *horizontalSlider_G;
    QLCDNumber *lcdNumber_G;
    QHBoxLayout *horizontalLayout_3;
    QVBoxLayout *verticalLayout_3;
    QLabel *label_3;
    QSlider *horizontalSlider_B;
    QLCDNumber *lcdNumber_B;
    QHBoxLayout *horizontalLayout_4;
    QVBoxLayout *verticalLayout_4;
    QLabel *label_4;
    QSlider *horizontalSlider_p;
    QLCDNumber *lcdNumber_p;
    QPushButton *pushButton_random;
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
            PCLViewer->setObjectName(QStringLiteral("PCLViewer"));
        PCLViewer->resize(694, 527);
        PCLViewer->setMinimumSize(QSize(0, 0));
        PCLViewer->setMaximumSize(QSize(5000, 5000));
        centralwidget = new QWidget(PCLViewer);
        centralwidget->setObjectName(QStringLiteral("centralwidget"));
        horizontalLayout_5 = new QHBoxLayout(centralwidget);
        horizontalLayout_5->setObjectName(QStringLiteral("horizontalLayout_5"));
        tabWidget = new QTabWidget(centralwidget);
        tabWidget->setObjectName(QStringLiteral("tabWidget"));
        tab = new QWidget();
        tab->setObjectName(QStringLiteral("tab"));
        horizontalLayout_6 = new QHBoxLayout(tab);
        horizontalLayout_6->setObjectName(QStringLiteral("horizontalLayout_6"));
        verticalLayout_5 = new QVBoxLayout();
        verticalLayout_5->setObjectName(QStringLiteral("verticalLayout_5"));
        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName(QStringLiteral("horizontalLayout"));
        verticalLayout = new QVBoxLayout();
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        label_5 = new QLabel(tab);
        label_5->setObjectName(QStringLiteral("label_5"));
        QFont font;
        font.setPointSize(16);
        font.setBold(false);
        font.setItalic(false);
        font.setWeight(50);
        label_5->setFont(font);

        verticalLayout->addWidget(label_5);

        label = new QLabel(tab);
        label->setObjectName(QStringLiteral("label"));
        label->setFont(font);

        verticalLayout->addWidget(label);

        horizontalSlider_R = new QSlider(tab);
        horizontalSlider_R->setObjectName(QStringLiteral("horizontalSlider_R"));
        horizontalSlider_R->setMaximum(255);
        horizontalSlider_R->setValue(128);
        horizontalSlider_R->setOrientation(Qt::Horizontal);

        verticalLayout->addWidget(horizontalSlider_R);


        horizontalLayout->addLayout(verticalLayout);

        lcdNumber_R = new QLCDNumber(tab);
        lcdNumber_R->setObjectName(QStringLiteral("lcdNumber_R"));
        lcdNumber_R->setDigitCount(3);
        lcdNumber_R->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_R->setProperty("intValue", QVariant(128));

        horizontalLayout->addWidget(lcdNumber_R);


        verticalLayout_5->addLayout(horizontalLayout);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setObjectName(QStringLiteral("horizontalLayout_2"));
        verticalLayout_2 = new QVBoxLayout();
        verticalLayout_2->setObjectName(QStringLiteral("verticalLayout_2"));
        label_2 = new QLabel(tab);
        label_2->setObjectName(QStringLiteral("label_2"));
        label_2->setFont(font);

        verticalLayout_2->addWidget(label_2);

        horizontalSlider_G = new QSlider(tab);
        horizontalSlider_G->setObjectName(QStringLiteral("horizontalSlider_G"));
        horizontalSlider_G->setMaximum(255);
        horizontalSlider_G->setValue(128);
        horizontalSlider_G->setOrientation(Qt::Horizontal);

        verticalLayout_2->addWidget(horizontalSlider_G);


        horizontalLayout_2->addLayout(verticalLayout_2);

        lcdNumber_G = new QLCDNumber(tab);
        lcdNumber_G->setObjectName(QStringLiteral("lcdNumber_G"));
        lcdNumber_G->setDigitCount(3);
        lcdNumber_G->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_G->setProperty("intValue", QVariant(128));

        horizontalLayout_2->addWidget(lcdNumber_G);


        verticalLayout_5->addLayout(horizontalLayout_2);

        horizontalLayout_3 = new QHBoxLayout();
        horizontalLayout_3->setObjectName(QStringLiteral("horizontalLayout_3"));
        verticalLayout_3 = new QVBoxLayout();
        verticalLayout_3->setObjectName(QStringLiteral("verticalLayout_3"));
        label_3 = new QLabel(tab);
        label_3->setObjectName(QStringLiteral("label_3"));
        label_3->setFont(font);

        verticalLayout_3->addWidget(label_3);

        horizontalSlider_B = new QSlider(tab);
        horizontalSlider_B->setObjectName(QStringLiteral("horizontalSlider_B"));
        horizontalSlider_B->setMaximum(255);
        horizontalSlider_B->setValue(128);
        horizontalSlider_B->setOrientation(Qt::Horizontal);

        verticalLayout_3->addWidget(horizontalSlider_B);


        horizontalLayout_3->addLayout(verticalLayout_3);

        lcdNumber_B = new QLCDNumber(tab);
        lcdNumber_B->setObjectName(QStringLiteral("lcdNumber_B"));
        lcdNumber_B->setDigitCount(3);
        lcdNumber_B->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_B->setProperty("intValue", QVariant(128));

        horizontalLayout_3->addWidget(lcdNumber_B);


        verticalLayout_5->addLayout(horizontalLayout_3);

        horizontalLayout_4 = new QHBoxLayout();
        horizontalLayout_4->setObjectName(QStringLiteral("horizontalLayout_4"));
        verticalLayout_4 = new QVBoxLayout();
        verticalLayout_4->setObjectName(QStringLiteral("verticalLayout_4"));
        label_4 = new QLabel(tab);
        label_4->setObjectName(QStringLiteral("label_4"));
        label_4->setFont(font);

        verticalLayout_4->addWidget(label_4);

        horizontalSlider_p = new QSlider(tab);
        horizontalSlider_p->setObjectName(QStringLiteral("horizontalSlider_p"));
        horizontalSlider_p->setMinimum(1);
        horizontalSlider_p->setMaximum(6);
        horizontalSlider_p->setValue(2);
        horizontalSlider_p->setOrientation(Qt::Horizontal);

        verticalLayout_4->addWidget(horizontalSlider_p);


        horizontalLayout_4->addLayout(verticalLayout_4);

        lcdNumber_p = new QLCDNumber(tab);
        lcdNumber_p->setObjectName(QStringLiteral("lcdNumber_p"));
        lcdNumber_p->setDigitCount(1);
        lcdNumber_p->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_p->setProperty("intValue", QVariant(2));

        horizontalLayout_4->addWidget(lcdNumber_p);


        verticalLayout_5->addLayout(horizontalLayout_4);

        pushButton_random = new QPushButton(tab);
        pushButton_random->setObjectName(QStringLiteral("pushButton_random"));

        verticalLayout_5->addWidget(pushButton_random);


        horizontalLayout_6->addLayout(verticalLayout_5);

        qvtkWidget = new QVTKWidget(tab);
        qvtkWidget->setObjectName(QStringLiteral("qvtkWidget"));
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
        tab_2->setObjectName(QStringLiteral("tab_2"));
        horizontalLayout_11 = new QHBoxLayout(tab_2);
        horizontalLayout_11->setObjectName(QStringLiteral("horizontalLayout_11"));
        verticalLayout_6 = new QVBoxLayout();
        verticalLayout_6->setObjectName(QStringLiteral("verticalLayout_6"));
        horizontalLayout_7 = new QHBoxLayout();
        horizontalLayout_7->setObjectName(QStringLiteral("horizontalLayout_7"));
        verticalLayout_7 = new QVBoxLayout();
        verticalLayout_7->setObjectName(QStringLiteral("verticalLayout_7"));
        label_6 = new QLabel(tab_2);
        label_6->setObjectName(QStringLiteral("label_6"));
        label_6->setFont(font);

        verticalLayout_7->addWidget(label_6);

        label_7 = new QLabel(tab_2);
        label_7->setObjectName(QStringLiteral("label_7"));
        label_7->setFont(font);

        verticalLayout_7->addWidget(label_7);

        horizontalSlider_R_2 = new QSlider(tab_2);
        horizontalSlider_R_2->setObjectName(QStringLiteral("horizontalSlider_R_2"));
        horizontalSlider_R_2->setMaximum(255);
        horizontalSlider_R_2->setValue(128);
        horizontalSlider_R_2->setOrientation(Qt::Horizontal);

        verticalLayout_7->addWidget(horizontalSlider_R_2);


        horizontalLayout_7->addLayout(verticalLayout_7);

        lcdNumber_R_2 = new QLCDNumber(tab_2);
        lcdNumber_R_2->setObjectName(QStringLiteral("lcdNumber_R_2"));
        lcdNumber_R_2->setDigitCount(3);
        lcdNumber_R_2->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_R_2->setProperty("intValue", QVariant(128));

        horizontalLayout_7->addWidget(lcdNumber_R_2);


        verticalLayout_6->addLayout(horizontalLayout_7);

        horizontalLayout_8 = new QHBoxLayout();
        horizontalLayout_8->setObjectName(QStringLiteral("horizontalLayout_8"));
        verticalLayout_8 = new QVBoxLayout();
        verticalLayout_8->setObjectName(QStringLiteral("verticalLayout_8"));
        label_8 = new QLabel(tab_2);
        label_8->setObjectName(QStringLiteral("label_8"));
        label_8->setFont(font);

        verticalLayout_8->addWidget(label_8);

        horizontalSlider_G_2 = new QSlider(tab_2);
        horizontalSlider_G_2->setObjectName(QStringLiteral("horizontalSlider_G_2"));
        horizontalSlider_G_2->setMaximum(255);
        horizontalSlider_G_2->setValue(128);
        horizontalSlider_G_2->setOrientation(Qt::Horizontal);

        verticalLayout_8->addWidget(horizontalSlider_G_2);


        horizontalLayout_8->addLayout(verticalLayout_8);

        lcdNumber_G_2 = new QLCDNumber(tab_2);
        lcdNumber_G_2->setObjectName(QStringLiteral("lcdNumber_G_2"));
        lcdNumber_G_2->setDigitCount(3);
        lcdNumber_G_2->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_G_2->setProperty("intValue", QVariant(128));

        horizontalLayout_8->addWidget(lcdNumber_G_2);


        verticalLayout_6->addLayout(horizontalLayout_8);

        horizontalLayout_9 = new QHBoxLayout();
        horizontalLayout_9->setObjectName(QStringLiteral("horizontalLayout_9"));
        verticalLayout_9 = new QVBoxLayout();
        verticalLayout_9->setObjectName(QStringLiteral("verticalLayout_9"));
        label_9 = new QLabel(tab_2);
        label_9->setObjectName(QStringLiteral("label_9"));
        label_9->setFont(font);

        verticalLayout_9->addWidget(label_9);

        horizontalSlider_B_2 = new QSlider(tab_2);
        horizontalSlider_B_2->setObjectName(QStringLiteral("horizontalSlider_B_2"));
        horizontalSlider_B_2->setMaximum(255);
        horizontalSlider_B_2->setValue(128);
        horizontalSlider_B_2->setOrientation(Qt::Horizontal);

        verticalLayout_9->addWidget(horizontalSlider_B_2);


        horizontalLayout_9->addLayout(verticalLayout_9);

        lcdNumber_B_2 = new QLCDNumber(tab_2);
        lcdNumber_B_2->setObjectName(QStringLiteral("lcdNumber_B_2"));
        lcdNumber_B_2->setDigitCount(3);
        lcdNumber_B_2->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_B_2->setProperty("intValue", QVariant(128));

        horizontalLayout_9->addWidget(lcdNumber_B_2);


        verticalLayout_6->addLayout(horizontalLayout_9);

        horizontalLayout_10 = new QHBoxLayout();
        horizontalLayout_10->setObjectName(QStringLiteral("horizontalLayout_10"));
        verticalLayout_10 = new QVBoxLayout();
        verticalLayout_10->setObjectName(QStringLiteral("verticalLayout_10"));
        label_10 = new QLabel(tab_2);
        label_10->setObjectName(QStringLiteral("label_10"));
        label_10->setFont(font);

        verticalLayout_10->addWidget(label_10);

        horizontalSlider_p_2 = new QSlider(tab_2);
        horizontalSlider_p_2->setObjectName(QStringLiteral("horizontalSlider_p_2"));
        horizontalSlider_p_2->setMinimum(1);
        horizontalSlider_p_2->setMaximum(6);
        horizontalSlider_p_2->setValue(2);
        horizontalSlider_p_2->setOrientation(Qt::Horizontal);

        verticalLayout_10->addWidget(horizontalSlider_p_2);


        horizontalLayout_10->addLayout(verticalLayout_10);

        lcdNumber_p_2 = new QLCDNumber(tab_2);
        lcdNumber_p_2->setObjectName(QStringLiteral("lcdNumber_p_2"));
        lcdNumber_p_2->setDigitCount(1);
        lcdNumber_p_2->setSegmentStyle(QLCDNumber::Flat);
        lcdNumber_p_2->setProperty("intValue", QVariant(2));

        horizontalLayout_10->addWidget(lcdNumber_p_2);


        verticalLayout_6->addLayout(horizontalLayout_10);

        pushButton_random_2 = new QPushButton(tab_2);
        pushButton_random_2->setObjectName(QStringLiteral("pushButton_random_2"));

        verticalLayout_6->addWidget(pushButton_random_2);


        horizontalLayout_11->addLayout(verticalLayout_6);

        tabWidget->addTab(tab_2, QString());

        horizontalLayout_5->addWidget(tabWidget);

        PCLViewer->setCentralWidget(centralwidget);
        menuBar = new QMenuBar(PCLViewer);
        menuBar->setObjectName(QStringLiteral("menuBar"));
        menuBar->setGeometry(QRect(0, 0, 694, 30));
        PCLViewer->setMenuBar(menuBar);

        retranslateUi(PCLViewer);
        QObject::connect(horizontalSlider_R, SIGNAL(sliderMoved(int)), lcdNumber_R, SLOT(display(int)));
        QObject::connect(horizontalSlider_G, SIGNAL(sliderMoved(int)), lcdNumber_G, SLOT(display(int)));
        QObject::connect(horizontalSlider_B, SIGNAL(sliderMoved(int)), lcdNumber_B, SLOT(display(int)));
        QObject::connect(horizontalSlider_p, SIGNAL(sliderMoved(int)), lcdNumber_p, SLOT(display(int)));

        tabWidget->setCurrentIndex(1);


        QMetaObject::connectSlotsByName(PCLViewer);
    } // setupUi

    void retranslateUi(QMainWindow *PCLViewer)
    {
        PCLViewer->setWindowTitle(QApplication::translate("PCLViewer", "PCLViewer", Q_NULLPTR));
        label_5->setText(QApplication::translate("PCLViewer", "Filter settings", Q_NULLPTR));
        label->setText(QApplication::translate("PCLViewer", "Window Size", Q_NULLPTR));
        label_2->setText(QApplication::translate("PCLViewer", "Slope", Q_NULLPTR));
        label_3->setText(QApplication::translate("PCLViewer", "Initial distance", Q_NULLPTR));
        label_4->setText(QApplication::translate("PCLViewer", "Max distance", Q_NULLPTR));
        pushButton_random->setText(QApplication::translate("PCLViewer", "Filter ground", Q_NULLPTR));
        tabWidget->setTabText(tabWidget->indexOf(tab), QApplication::translate("PCLViewer", "Complex Cloud", Q_NULLPTR));
        label_6->setText(QApplication::translate("PCLViewer", "Filter settings", Q_NULLPTR));
        label_7->setText(QApplication::translate("PCLViewer", "Window Size", Q_NULLPTR));
        label_8->setText(QApplication::translate("PCLViewer", "Slope", Q_NULLPTR));
        label_9->setText(QApplication::translate("PCLViewer", "Initial distance", Q_NULLPTR));
        label_10->setText(QApplication::translate("PCLViewer", "Max distance", Q_NULLPTR));
        pushButton_random_2->setText(QApplication::translate("PCLViewer", "Filter ground", Q_NULLPTR));
        tabWidget->setTabText(tabWidget->indexOf(tab_2), QApplication::translate("PCLViewer", "Intensity Cloud", Q_NULLPTR));
    } // retranslateUi

};

namespace Ui {
    class PCLViewer: public Ui_PCLViewer {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_PCLVIEWER_H
