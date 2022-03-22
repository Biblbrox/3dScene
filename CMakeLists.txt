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

find_package(PCL REQUIRED)
find_package(SDL2 REQUIRED)
find_package(SDL2_image REQUIRED)
#find_package(SDL2_ttf REQUIRED)
find_package(SDL2_mixer REQUIRED)
find_package(OpenGL REQUIRED)
find_package(GLEW REQUIRED)
find_package(GLM REQUIRED)
find_package(ASSIMP REQUIRED)
find_package(Boost REQUIRED COMPONENTS locale serialization)
find_package(Eigen3 3.3 REQUIRED NO_MODULE)
find_package(OpenMP)
find_package(OpenCV 4.2 REQUIRED)
include_directories ("/usr/include/opencv4/")
if (OPENMP_FOUND)
    message("OpenMP found")
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${OpenMP_C_FLAGS}")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${OpenMP_CXX_FLAGS}")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} ${OpenMP_EXE_LINKER_FLAGS}")
endif ()


add_subdirectory(${EXT_PATH}/bvh)
add_subdirectory(${EXT_PATH}/crossguid)
#add_subdirectory("${PROJECT_SOURCE_DIR}/tools/cpp/complex_image_cloud")

add_compile_definitions(GLM_FORCE_CUDA)
add_compile_definitions(GLM_FORCE_INLINE)

add_library(strutils ${EXT_PATH}/strutils/strutils.cpp
        ${EXT_PATH}/strutils/strutils.hpp)

add_library(logger ${EXT_PATH}/logger/logger.cpp
        ${EXT_PATH}/logger/logger.hpp)

add_library(imgui
        # Main Imgui files
        ${EXT_PATH}/imgui/imgui.cpp ${EXT_PATH}/imgui/imgui_draw.cpp
        ${EXT_PATH}/imgui/imgui_tables.cpp ${EXT_PATH}/imgui/imgui_widgets.cpp
        # SDL2+OpenGL-specific files
        ${EXT_PATH}/imgui/backends/imgui_impl_sdl.cpp
        ${EXT_PATH}/imgui/backends/imgui_impl_opengl3.cpp
        # ImGui misc path
        ${EXT_PATH}/imgui/misc/cpp/imgui_stdlib.cpp
        ${EXT_PATH}/ImGuiFileDialog/ImGuiFileDialog.cpp)

# Make SDL2 available to Imgui
target_include_directories(imgui PUBLIC ${SDL2_INCLUDE_DIRS} ${ASSIMP_INCLUDE_DIRS})

# imgui/backends/ contains the SDL implementation
target_include_directories(imgui PUBLIC ${EXT_PATH}/imgui/ ${EXT_PATH}/imgui/backends/
        ${EXT_PATH}/imgui/misc/cpp)

# Configure Imgui to use OpengGL through SDL2
target_compile_definitions(imgui PUBLIC IMGUI_IMPL_OPENGL_LOADER_CUSTOM=<SDL_opengl.h>
        IMGUI_DISABLE_DEMO_WINDOWS=1 GL_GLEXT_PROTOTYPES=1)

set(SDL2_TTF_LIBRARIES SDL2_ttf)

# Target 3DScene
FILE(GLOB_RECURSE CPP RELATIVE ${PROJECT_SOURCE_DIR} "src/*.cpp")
FILE(GLOB_RECURSE HPP RELATIVE ${PROJECT_SOURCE_DIR} "include/*.hpp" "include/*.h" src/*.hpp src/*.h)
set(SOURCES ${HPP} ${CPP} include/shadernames.hpp)
add_executable(${GAME_NAME} ${SOURCES})

set(SCENE_LIBRARY_DEPENDENCIES ${SDL2_LIBRARIES} ${SDL2_IMAGE_LIBRARIES}
        ${SDL2_TTF_LIBRARIES} ${SDL2_MIXER_LIBRARIES} ${Boost_LIBRARIES} GLEW
        libGLEW.so libGLU.so libGL.so imgui pthread Eigen3::Eigen ${ASSIMP_LIBRARIES}
        ${PCL_LIBRARIES} bvh strutils logger crossguid)
message("************************${OpenCV_LIBS}*************************")
target_link_libraries(${GAME_NAME} ${SCENE_LIBRARY_DEPENDENCIES} ${PCL_LIBRARIES} ${OpenCV_LIBS})

set(SCENE_INCLUDE_DEPENDENCIES include
        ${SDL2_INCLUDE_DIRS} ${SDL2_IMAGE_INCLUDE_DIR}
        ${SDL2_TTF_INCLUDE_DIR} ${GLEW_INCLUDE_DIRS} ${OPENGL_INCLUDE_DIRS}
        ${GLM_INCLUDE_DIRS} ${Boost_INCLUDE_DIR} ${PCL_INCLUDE_DIRS}
        ${EXT_PATH}/ImGuiFileDialog/ ${EXT_PATH} ${EXT_PATH}/crossguid/include)
target_include_directories(${GAME_NAME} PRIVATE ${SCENE_INCLUDE_DEPENDENCIES})

# Add Eigen
set(EIGEN_INCLUDE_DIRS "${CMAKE_SOURCE_DIR}/libs")
message("********************${EIGEN_INCLUDE_DIRS}*************************")
target_include_directories(${GAME_NAME} PRIVATE ${EIGEN_INCLUDE_DIRS})

# Target ComplexPointCloud COMPLEX_IMAGE_CLOUD
set(TOOL_NAME "ComplexPointCloud")

find_package(VTK COMPONENTS
        vtkGUISupportQt
        vtkRenderingOpenGL2
        REQUIRED)
INCLUDE(${VTK_USE_FILE}) # include UseVTK.cmake

set(CMAKE_AUTOMOC ON) # For meta object compiler
set(CMAKE_AUTORCC ON) # Resource files
set(CMAKE_AUTOUIC ON) # UI files
if (CMAKE_VERSION VERSION_LESS "3.7.0")
    set(CMAKE_INCLUDE_CURRENT_DIR ON)
endif ()
find_package(Qt5 COMPONENTS Core Gui Widgets REQUIRED)
set(COMPLEX_IMAGE_CLOUD ${CMAKE_SOURCE_DIR}/tools/cpp/complex_image_cloud)
QT5_WRAP_UI(${COMPLEX_IMAGE_CLOUD}/src/ui_pclviewer.h ${COMPLEX_IMAGE_CLOUD}/src/src/pclviewer.ui)

FILE(GLOB_RECURSE COMPLEX_CLOUD_CPP "${PROJECT_SOURCE_DIR}/tools/cpp/complex_image_cloud/src/*.cpp")
FILE(GLOB_RECURSE COMPLEX_CLOUD_HPP "${PROJECT_SOURCE_DIR}/tools/cpp/complex_image_cloud/include/*.hpp"
        "${PROJECT_SOURCE_DIR}/tools/cpp/complex_image_cloud/include/*.h"
        "${PROJECT_SOURCE_DIR}/tools/cpp/complex_image_cloud/src/*.hpp"
        "${PROJECT_SOURCE_DIR}/tools/cpp/complex_image_cloud/src/*.h")
add_executable(${TOOL_NAME} ${COMPLEX_CLOUD_CPP} ${COMPLEX_CLOUD_HPP})
target_link_libraries(${TOOL_NAME} Qt5::Core Qt5::Gui Qt5::Widgets ${SCENE_LIBRARY_DEPENDENCIES})

target_link_libraries(${TOOL_NAME} ${Boost_LIBRARIES} GLEW
        libGLEW.so libGLU.so libGL.so pthread Eigen3::Eigen
        ${PCL_LIBRARIES} vtkGUISupportQt ${OpenCV_LIBS})

target_include_directories(${TOOL_NAME} PRIVATE ${PROJECT_SOURCE_DIR}
        ${PROJECT_SOURCE_DIR}/tools/cpp/complex_image_cloud/include ${SCENE_INCLUDE_DEPENDENCIES})


target_compile_definitions(${GAME_NAME} PUBLIC GLM_FORCE_DEPTH_ZERO_TO_ONE=1)