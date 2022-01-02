import numpy as np
import sys
import os

bin_path = sys.argv[1]

# Read pcd file
lidar_data = []
header = []
with open(bin_path, 'r') as f:
    header = f.readlines()[0:11]
    lidar_data =  np.genfromtxt(bin_path, dtype=np.float32, skip_header=11,
                                usecols=(0, 1, 2, 3), comments='%').reshape(-1, 4)

x_min = np.min(lidar_data[:, 0])
x_max = np.max(lidar_data[:, 0])
y_min = np.min(lidar_data[:, 1])
y_max = np.max(lidar_data[:, 1])
z_min = np.min(lidar_data[:, 2])
z_max = np.max(lidar_data[:, 2])
print(f"X range(Length): {x_max - x_min}")
print(f"Y range(Width): {y_max - y_min}")
print(f"Z range(Height): {z_max - z_min}")