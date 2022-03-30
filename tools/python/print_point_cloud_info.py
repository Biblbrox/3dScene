import numpy as np
import sys
import os

file_path = sys.argv[1]

lidar_data = []
if file_path.endswith(".bin"):
    print(f"Load .bin file {file_path}")
    lidar_data = np.fromfile(file_path, dtype=np.float32).reshape(-1, 4)
elif file_path.endswith(".pcd"):
    print(f"Load .pcd file {file_path}")
    with open(file_path) as f:
        lidar_data = np.genfromtxt(file_path, dtype=np.float32, skip_header=11,
                                   usecols=(0, 1, 2, 3), comments='%').reshape(-1, 4)

x_min = np.min(lidar_data[:, 0])
x_max = np.max(lidar_data[:, 0])
y_min = np.min(lidar_data[:, 1])
y_max = np.max(lidar_data[:, 1])
z_min = np.min(lidar_data[:, 2])
z_max = np.max(lidar_data[:, 2])
intensity_min = np.min(lidar_data[:, 3])
intensity_max = np.max(lidar_data[:, 3])
print(f"X max: {x_max}")
print(f"X min: {x_min}")
print(f"Y max: {y_max}")
print(f"Y min: {y_min}")
print(f"Z max: {z_max}")
print(f"Z min: {z_min}")
print(f"I max: {intensity_max}")
print(f"I min: {intensity_min}")
print(f"I mean: {np.mean(lidar_data[:, 3])}")
print(f"X range(Length): {x_max - x_min}")
print(f"Y range(Width): {y_max - y_min}")
print(f"Z range(Height): {z_max - z_min}")
print(f"Points count: {np.size(lidar_data)}")
