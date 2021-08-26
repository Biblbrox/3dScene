from pyqtgraph.Qt import QtCore, QtGui
import pyqtgraph.opengl as gl
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import Normalize
import sys

file_name = sys.argv[1]
data =  np.fromfile("data.txt", dtype=np.float32).reshape(-1, 4)

data[:, [2, 1]] = data[:, [1, 2]]

app = QtGui.QApplication([])
w = gl.GLViewWidget()
w.show()

cmap = plt.get_cmap('gist_rainbow')

rgba_img = cmap(data[:, 2] / np.max(data[:, 2]))

pos = data
sp2 = gl.GLScatterPlotItem(pos=pos, color=rgba_img)
sp2.setGLOptions('opaque')
w.addItem(sp2)

sp2.setData(color=rgba_img)

# Start Qt event loop unless running in interactive mode.
if __name__ == '__main__':
    import sys

    if (sys.flags.interactive != 1) or not hasattr(QtCore, PYQT_VERSION):
        QtGui.QApplication.instance().exec_()
