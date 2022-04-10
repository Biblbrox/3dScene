#include <QApplication>

#include "pclviewer.hpp"


int main(int argc, char *argv[])
{
    QApplication a (argc, argv);
    PCLViewer w;
    w.show ();

    return a.exec();
}