from pyqtgraph.Qt import QtCore, QtGui
import pyqtgraph.opengl as gl
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import Normalize

data = np.loadtxt('../data.txt', delimiter=',')

data[:, [2, 1]] = data[:, [1, 2]]

max_coord = np.max([data[:, 0], data[:, 1], data[:, 2]])
max_x = np.max([data[:, 0]])
max_y = np.max([data[:, 1]])
max_z = np.max([data[:, 2]])
min_x = np.min([data[:, 0]])
min_y = np.min([data[:, 1]])
min_z = np.min([data[:, 2]])

data[:, 0] = data[:, 0] - max_x + (max_x - min_x)
data[:, 1] = data[:, 1] - max_y + (max_y - min_y)
data[:, 2] = data[:, 2] - max_z + (max_z - min_z)


app = QtGui.QApplication([])
w = gl.GLViewWidget()
w.show()
# g = gl.GLGridItem()
# w.addItem(g)

cmap = plt.get_cmap('jet')

norm = Normalize(vmin=min_y, vmax=max_y)
rgba_img = cmap(data[:, 2] / np.max(data[:, 2]))

pos = data
sp2 = gl.GLScatterPlotItem(pos=pos, color=rgba_img)
sp2.setGLOptions('opaque')
w.addItem(sp2)

sp2.setData(color=rgba_img)
sp2.translate(-(max_x - min_x) / 2, -(max_y - min_y) / 2, -(max_z - min_z) / 2)

# Start Qt event loop unless running in interactive mode.
if __name__ == '__main__':
    import sys

    if (sys.flags.interactive != 1) or not hasattr(QtCore, PYQT_VERSION):
        QtGui.QApplication.instance().exec_()
