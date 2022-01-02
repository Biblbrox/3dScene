import numpy as np
import sys
import os

bin_path = sys.argv[1]
lidar_data = []
header = []
with open(bin_path, 'r') as f:
    header = f.readlines()[0:11]
    lidar_data =  np.genfromtxt(bin_path, dtype=np.float32, skip_header=11,
    usecols=(0, 1, 2, 3), comments='%').reshape(-1, 4)

#lidar_data[:, 2] = -lidar_data[:, 2]
#lidar_data[:, [0, 2]] = lidar_data[:, [2, 0]]
#lidar_data[:, [2, 1]] = lidar_data[:, [1, 2]]

print(bin_path)
file_name, extension = bin_path.split('.')
vel_path = '{}.{}'.format(file_name, 'bin')

np.savetxt(vel_path, lidar_data, comments='%', header="\n".join(line.strip() for line in header))