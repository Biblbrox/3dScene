from pyqtgraph.Qt import QtCore, QtGui
import pyqtgraph as pg
import pyqtgraph.opengl as gl
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import Normalize
import sys
import math

file_name = sys.argv[1]
data =  np.fromfile(file_name, dtype=np.float32).reshape(-1, 4)


intensity = data[:, 3]
#data = data[:, 0:3]
#data[:, [2, 1]] = data[:, [1, 2]]
#data[:, 2] += abs(np.min(data[:, 2]))

print(data)
length = np.size(data)
data = np.squeeze(data[np.where(data[:, 0] > -14), :], axis=0)
data = np.squeeze(data[np.where(data[:, 1] > -13), :], axis=0)
data = np.squeeze(data[np.where(data[:, 2]  < 2.3), :], axis=0)
print(data)

#pg.setConfigOption('background', 'w')
#pg.setConfigOption('foreground', 'k')
app = QtGui.QApplication([])
w = gl.GLViewWidget()
w.show()

cmap = plt.get_cmap('gist_ncar')

data += 10
dir = data[:, 1] / np.cos(np.pi / 4) + data[:, 0] / np.sin(np.pi / 4)
rgba_img = cmap(dir / np.max(dir))


sp2 = gl.GLScatterPlotItem(pos=data, color=rgba_img, size=1)
sp2.setGLOptions('opaque')
w.addItem(sp2)

sp2.setData(color=rgba_img)

# Start Qt event loop unless running in interactive mode.
if __name__ == '__main__':
    import sys

    if (sys.flags.interactive != 1) or not hasattr(QtCore, PYQT_VERSION):
        pass
        QtGui.QApplication.instance().exec_()
