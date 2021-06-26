import numpy as np
from vispy import color
from vispy import app, visuals, scene

data = np.genfromtxt("data.txt", delimiter=",", usemask=True)


def vpscatter(xdata, ydata, zdata):
    # build your visuals
    Scatter3D = scene.visuals.create_visual_node(visuals.MarkersVisual)

    # The real-things : plot using scene
    # build canvas
    canvas = scene.SceneCanvas(keys='interactive', show=True)

    # Add a ViewBox to let the user zoom/rotate
    view = canvas.central_widget.add_view()
    view.camera = 'turntable'
    view.camera.fov = 45
    view.camera.distance = 500

    # data
    n = xdata.size
    pos = np.zeros((n, 3))
    pos[:, 0] = xdata.ravel()
    pos[:, 1] = ydata.ravel()
    pos[:, 2] = zdata.ravel()
    # colors = np.ones((n, 4), dtype=np.float32)
    color_data = zdata
    color_data = np.interp(color_data, (color_data.min(), color_data.max()), (0, 1))
    colors = color.get_colormap("hsl").map(color_data).reshape(color_data.shape + (-1,))

    # plot
    p1 = Scatter3D(parent=view.scene)
    p1.set_gl_state('translucent', blend=True, depth_test=True)
    p1.set_data(pos, face_color=colors)

    # run
    app.run()


vpscatter(data[:, 0], data[:, 2], data[:, 1])
