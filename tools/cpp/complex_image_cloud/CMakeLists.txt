cmake_minimum_required(VERSION 3.16)

set(CMAKE_CXX_STANDARD 17)
set(GAME_NAME "ComplexImageCloud")
set(EXT_PATH "libs")
project(${GAME_NAME})

IF(POLICY CMP0012)
    CMAKE_POLICY(SET CMP0012 NEW)
ENDIF()

set(CPU_TYPE "native")
set(ARCH_PARAM "")
if (NOT ${CPU_TYPE} STREQUAL "")
    set(ARCH_PARAM "-march=${CPU_TYPE} -msse4.2")
endif()
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
        "-O3" "-std=c++17" ${ARCH_PARAM} "-fopenmp=libomp")

message("Build type: ${CMAKE_BUILD_TYPE}")
if (CMAKE_BUILD_TYPE MATCHES Release)
    add_compile_definitions(BOOST_DISABLE_ASSERTS)
endif()

find_package(PCL REQUIRED)
#find_package(SDL2 REQUIRED)
#find_package(SDL2_image REQUIRED)
#find_package(SDL2_ttf REQUIRED)
#find_package(SDL2_mixer REQUIRED)
find_package(OpenGL REQUIRED)
find_package(GLEW REQUIRED)
find_package( OpenCV REQUIRED )
find_package(GLM REQUIRED)
#find_package(ASSIMP REQUIRED)
find_package(Boost REQUIRED COMPONENTS locale serialization)
find_package(Eigen3 3.3 REQUIRED NO_MODULE)
find_package(OpenMP)
if (OPENMP_FOUND)
    message("OpenMP found")
    set (CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${OpenMP_C_FLAGS}")
    set (CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${OpenMP_CXX_FLAGS}")
    set (CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} ${OpenMP_EXE_LINKER_FLAGS}")
endif()

#add_subdirectory(${EXT_PATH}/bvh)

add_compile_definitions(GLM_FORCE_CUDA)
add_compile_definitions(GLM_FORCE_INLINE)

FILE(GLOB_RECURSE CPP RELATIVE ${PROJECT_SOURCE_DIR} "src/*.cpp")
FILE(GLOB_RECURSE HPP RELATIVE ${PROJECT_SOURCE_DIR} "include/*.hpp" "include/*.h")

set(SOURCES ${HPP} ${CPP})

add_executable(${GAME_NAME} ${SOURCES})
target_link_libraries(${GAME_NAME} ${Boost_LIBRARIES} GLEW
        libGLEW.so libGLU.so libGL.so pthread Eigen3::Eigen
        ${PCL_LIBRARIES} ${OpenCV_LIBS})

target_include_directories(${GAME_NAME} PRIVATE include
        ${GLEW_INCLUDE_DIRS} ${OPENGL_INCLUDE_DIRS} ${OpenCV_INCLUDE_DIRS}
        ${GLM_INCLUDE_DIRS} ${Boost_INCLUDE_DIR} ${PCL_INCLUDE_DIRS} ${EXT_PATH})

target_compile_definitions(${GAME_NAME} PUBLIC)