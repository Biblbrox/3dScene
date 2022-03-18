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
    with open(lidar_file) as f:
        lidar_data = np.genfromtxt(file_path, dtype=np.float32, skip_header=11,
                                   usecols=(0, 1, 2, 3), comments='%').reshape(-1, 4)


lidar_data = np.delete(cloud, list(range(0, lidar_data.shape[0], 3)), axis=0)
np.savetxt("res.bin", lidar_data, comments='', header="\n".join(line.strip() for line in header))