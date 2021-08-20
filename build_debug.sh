#!/usr/bin/env bash

cd Debug
cmake -DCMAKE_BUILD_TYPE=Debug ..
make -j5
