cmake_minimum_required(VERSION 3.16)

set(CMAKE_CXX_STANDARD 17)
set(GAME_NAME "3DScene")
set(EXT_PATH "cmake_modules")
project(${GAME_NAME})

set(CPU_TYPE "native")
set(ARCH_PARAM "")
if (NOT ${CPU_TYPE} STREQUAL "")
    set(ARCH_PARAM "-march=${CPU_TYPE}")
endif()
message("Using cpu type ${CPU_TYPE}")

set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_SOURCE_DIR}/cmake_modules/")

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
        "-O3" "-std=c++17" ${ARCH_PARAM}
        "-fopenmp=libomp")

if (${CMAKE_BUILD_TYPE} STREQUAL "Release")
    add_compile_definitions(BOOST_DISABLE_ASSERTS)
endif (${CMAKE_BUILD_TYPE} STREQUAL "Release")

#find_package(PCL REQUIRED)
find_package(SDL2 REQUIRED)
find_package(SDL2_image REQUIRED)
find_package(SDL2_ttf REQUIRED)
find_package(SDL2_mixer REQUIRED)
find_package(OpenGL REQUIRED)
find_package(GLEW REQUIRED)
find_package(GLM REQUIRED)
find_package(ASSIMP REQUIRED)
find_package(Boost REQUIRED COMPONENTS locale serialization)
find_package(Eigen3 3.3 REQUIRED NO_MODULE)
#set(PCL_DIR ${EXT_PATH}/pcl/cmake)
#set(PCL_DIR ${EXT_PATH}/cmake/pcl_pclconfig.cmake)
find_package(OpenMP)
if (OPENMP_FOUND)
    message("OpenMP found")
    set (CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${OpenMP_C_FLAGS}")
    set (CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${OpenMP_CXX_FLAGS}")
    set (CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} ${OpenMP_EXE_LINKER_FLAGS}")
endif()

add_subdirectory(${EXT_PATH}/bvh)

add_compile_definitions(GLM_FORCE_CUDA)
add_compile_definitions(GLM_FORCE_INLINE)

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
target_compile_definitions(imgui PUBLIC IMGUI_IMPL_OPENGL_LOADER_CUSTOM=<SDL_opengl.h>  GL_GLEXT_PROTOTYPES=1)

include_directories(${SDL2_INCLUDE_DIRS} ${SDL2_IMAGE_INCLUDE_DIR}
        ${SDL2_TTF_INCLUDE_DIR} ${GLEW_INCLUDE_DIRS} ${OPENGL_INCLUDE_DIRS}
        ${GLM_INCLUDE_DIRS} ${Boost_INCLUDE_DIR} ${PCL_INCLUDE_DIRS}
        ${EXT_PATH}/ImGuiFileDialog/)

FILE(GLOB_RECURSE CPP RELATIVE ${CMAKE_SOURCE_DIR} "src/*.cpp")
FILE(GLOB_RECURSE HPP RELATIVE ${CMAKE_SOURCE_DIR} "include/*.hpp" "include/*.h")

set(SOURCES ${HPP} ${CPP})
set(SDL2_TTF_LIBRARIES SDL2_ttf)

add_executable(${GAME_NAME} ${SOURCES})
target_link_libraries(${GAME_NAME} ${SDL2_LIBRARIES} ${SDL2_IMAGE_LIBRARIES}
        ${SDL2_TTF_LIBRARIES} ${SDL2_MIXER_LIBRARIES} ${Boost_LIBRARIES} GLEW
        libGLEW.so libGLU.so libGL.so imgui pthread Eigen3::Eigen ${ASSIMP_LIBRARIES} bvh)


target_include_directories(${GAME_NAME} PRIVATE include)
