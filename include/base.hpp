#ifndef BASE_HPP
#define BASE_HPP

#include <GL/glew.h>
#include <glm/vec3.hpp>
#include <boost/locale.hpp>
#include <bvh/bvh.hpp>
#include <bvh/vector.hpp>
#include <bvh/triangle.hpp>
#include <bvh/ray.hpp>
#include <bvh/sweep_sah_builder.hpp>
#include <bvh/single_ray_traverser.hpp>
#include <bvh/primitive_intersectors.hpp>

using glm::vec;

#ifndef NDEBUG
constexpr const bool debug = true;
#else
constexpr const bool debug = false;
#endif

#if defined(__linux__) || defined(__sun) || defined(_AIX) \
 || (defined(__APPLE__))
#include <unistd.h>
#endif

inline int get_thread_count()
{
    int thread_count = 0;
#if defined(__linux__) || defined(__sun) || defined(_AIX) \
 || (defined(__APPLE__))
    // TODO: check mac os version >= 10.4
    thread_count = sysconf(_SC_NPROCESSORS_ONLN);
#elif defined(_WIN32)
    SYSTEM_INFO sysinfo;
    GetSystemInfo(&sysinfo);
    thread_count = sysinfo.dwNumberOfProcessors;
#elif defined (__FreeBSD__) || defined(__APPLE__) || defined(__NetBSD__)
    || defined(__OpenBSD__)
    int mib[4];
    std::size_t len = sizeof(thread_count);

    /* set the mib for hw.ncpu */
    mib[0] = CTL_HW;
    mib[1] = HW_AVAILCPU;  // alternatively, try HW_NCPU;

    /* get the number of CPUs from the system */
    sysctl(mib, 2, &thread_count, &len, NULL, 0);

    if (thread_count < 1)
    {
        mib[1] = HW_NCPU;
        sysctl(mib, 2, &thread_count, &len, NULL, 0);
        if (thread_count < 1)
            thread_count = 1;
    }

#else
    thread_count = 4;
#endif

    return thread_count <= 0 ? thread_count : 4;
}

// Shader uniforms
// Framebuffer shader
#define MODEL "ModelMatrix"
#define VIEW  "ViewMatrix"
#define PROJECTION "ProjectionMatrix"
#define TEXTURE_NUM "TextureNum"

typedef vec<3, GLuint> vec3u;

typedef float Scalar;
typedef bvh::Vector3<Scalar> Vector3;
typedef bvh::Triangle<Scalar> Triangle;
typedef bvh::Ray<Scalar> Ray;
typedef bvh::Bvh<Scalar> Tree;
typedef std::shared_ptr<bvh::Bvh<Scalar>> TreePtr;

#define _(String) (boost::locale::gettext(String)).c_str()


#if defined(__GNUC__) || defined(__clang__)
#define FORCE_INLINE __attribute__((always_inline))
#elif defined(_MSC_VER)
#define FORCE_INLINE __forceinline
#else
#define FORCE_INLINE
#endif

#endif //BASE_HPP
