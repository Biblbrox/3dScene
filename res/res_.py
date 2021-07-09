from pyqtgraph.Qt import QtCore, QtGui
import pyqtgraph.opengl as gl
import pyqtgraph as pg
import numpy as np

data = np.loadtxt('data.txt', delimiter=',')
data[:, 0] -= 15000
data[:, 1] -= 200
data[:, 2] -= 15000
#data[:, 2], data[:, 0] = data[:, 0], data[:, 2]

app = QtGui.QApplication([])
w = gl.GLViewWidget()
w.show()
g = gl.GLGridItem()
w.addItem(g)

pos = data
# pos[:, 2] = data[:, 1]
# pos[:, 1] = data[:, 2]
sp2 = gl.GLScatterPlotItem(pos=pos)
w.addItem(sp2)

# generate a color opacity gradient
color = np.zeros((data.shape[0], 4), dtype=np.float32)
color[:, 0] = 0.5
color[:, 1] = data[:, 1] / np.max(data[:, 1])
color[:, 2] = 0.5
color[:, 3] = 1

cm = pg.colormap.get('bkr', source="colorcet")
colors = cm.getLookupTable(nPts=data.shape[0])
color[:, 0:3] = colors
color[:, 0:3] /= 255

color[:, 0] = data[:, 1] / np.max(data[:, 1])
color[:, 1] = 0.1
color[:, 2] = 0.1
sp2.setData(color=color)

# Start Qt event loop unless running in interactive mode.
if __name__ == '__main__':
    import sys

    if (sys.flags.interactive != 1) or not hasattr(QtCore, PYQT_VERSION):
        QtGui.QApplication.instance().exec_()
