#!/usr/bin/env bash

import numpy as np
import sys
import os

bin_path = sys.argv[1]
lidar_data =  np.fromfile(bin_path, dtype=np.float32).reshape(-1, 4)
lidar_data[:, 2] = -lidar_data[:, 2]
lidar_data[:, [0, 2]] = lidar_data[:, [2, 0]]
lidar_data[:, [2, 1]] = lidar_data[:, [1, 2]]

#k = 0.054
k = 0.054
lidar_data[:, 0:3] *= k
# lidar_data[:, 3] = 0

file_name, extension = bin_path.split('.')
vel_path = '{}.{}'.format(file_name, 'bin')
lidar_data.tofile(vel_path)