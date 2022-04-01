cmake_minimum_required(VERSION 3.16)
set(CMAKE_CXX_STANDARD 17)
set(GAME_NAME "LidarScene")
set(EXT_PATH "libs")
project(${GAME_NAME})

IF (POLICY CMP0012)
    CMAKE_POLICY(SET CMP0012 NEW)
ENDIF ()

set(CPU_TYPE "native")
set(ARCH_PARAM "")
if (NOT ${CPU_TYPE} STREQUAL "")
    set(ARCH_PARAM "-march=${CPU_TYPE}")
endif ()

message("Using cpu type ${CPU_TYPE}")

set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_SOURCE_DIR}/libs/")

set(CMAKE_CXX_FLAGS_DEBUG_INIT "-D_FORTIFY_SOURCE=2" "-D_GLIBCXX_ASSERTIONS"
        "-fasynchronous-unwind-tables" "-fexceptions" "-fpie" "-Wl,-pie" "-fpic"
        "-shared" "-fstack-clash-protection" "-fstack-protector"
        "-fstack-protector-strong" "-ggdb" "-grecord-gcc-switches" "-fcf-protection"
        "-pipe" "-Wall" "-Werror=format-security" "-Wl,-z,defs" "-Wl,-z,now"
        "-O0" "-Wl,-z,relro" "-std=c++17" "-fno-inline-functions" ${ARCH_PARAM}
        "-fopenmp=libomp")

set(CMAKE_CXX_FLAGS_RELEASE_INIT "-fasynchronous-unwind-tables" "-fexceptions"
        "-fpie" "-Wl,-pie" "-fpic" "-shared" "-fstack-clash-protection"
        "-fstack-protector" "-fstack-protector-strong" "-fcf-protection" "-pipe"
        "-Wall" "-Werror=format-security" "-Wl,-z,defs" "-Wl,-z,now" "-Wl,-z,relro"
        "-O2" "-std=c++17" ${ARCH_PARAM} "-fopenmp=libomp")

message("Build type: ${CMAKE_BUILD_TYPE}")
if (CMAKE_BUILD_TYPE MATCHES Release)
    add_compile_definitions(BOOST_DISABLE_ASSERTS)
endif ()

# Target LidarScene
include (CMakeListsScene.txt)

# Target ComplexPointCloud
include (CMakeListsComplexCloud.txt)