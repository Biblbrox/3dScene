#!/usr/bin/env bash

# Profile with perf tool

cd ./Debug &&
sudo perf record -g ./3DScene &&
sudo perf script | stackcollapse-perf.pl | flamegraph.pl > graph.svg;

