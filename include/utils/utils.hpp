#ifndef UTILS_H
#define UTILS_H

#include <GL/glew.h>
#include <string>
#include <glm/vec2.hpp>
#include <typeinfo>
#include <boost/algorithm/string/split.hpp>
#include <boost/algorithm/string/classification.hpp>
#include <SDL.h>
#include <SDL_video.h>

#include "view/arcballcamera.hpp"
#include "constants.hpp"
#include "datastructs.hpp"

using glm::vec2;

namespace utils
{
    /**
     * Split long string to multiple lines.
     * @param str
     * @return
     */
    inline std::vector<std::string> split_to_lines(const std::string& str)
    {
        std::vector<std::string> res;
        boost::split(res, str, boost::is_any_of("\n"), boost::token_compress_on);
        return res;
    }

    template <typename T>
    inline glm::vec<2, T> getMousePos()
    {
        int window_x, window_y;
        // Position in range 0:window_width and 0:window_height
        SDL_GetMouseState(&window_x, &window_y);

        T x = static_cast<T>(window_x);
        T y = static_cast<T>(window_y);

        return {x, y};
    }

    /**
     * Return corrected cords. It's needed because when camera
     * moves all non-static objects moves also.
     * @param coords
     * @param camPos
     * @return
     */
    constexpr glm::vec2 fix_coords(const vec2& coords, const vec2& camPos)
    {
        return {coords.x + camPos.x, coords.y + camPos.y};
    }

    /**
     * Divide clip by multiple small clips.
     * Number of clips = num_x * num_y.
     * @param clip
     * @param num_x
     * @param num_y
     * @return
     */
    template <int num_x, int num_y>
    std::array<Rect2D, num_x * num_y>
    constexpr generate_clips(Rect2D clip)
    {
        GLfloat part_width = clip.w / num_x;
        GLfloat part_height = clip.h / num_y;

        std::array<Rect2D, num_x * num_y> clips;
        size_t i = 0;
        for (GLfloat y = clip.y; y < clip.y + clip.h; y += part_height)
            for (GLfloat x = clip.x; x < clip.x + clip.w; x += part_width)
                clips[++i] = {x, y, part_width, part_height};

        return clips;
    }

    /**
    * Load shader from file by specific path
    * shaderType param may of the supported shader types
    * If shader can't be loaded (file not found or bad read access)
    * or can't be compiled std::runtime_error exception will be thrown.
    * @param path
    * @param shaderType
    * @return
    */
    GLuint loadShaderFromFile(const std::string &path, GLenum shaderType);

    /**
     * Both functions getScreenWidth and getScreenHeight must
     * be called after SDL2 initialization. Otherwise 0 will be returned
     * @tparam T
     * @return
     */
    template<typename T>
    inline T getDisplayWidth() noexcept
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter "
                                               "must be arithmetical");
        if (SDL_WasInit(SDL_INIT_VIDEO) != SDL_INIT_VIDEO)
            return 0;

        SDL_DisplayMode dm;
        SDL_GetCurrentDisplayMode(0, &dm);
        return dm.w;
    }

    template<typename T>
    inline T getDisplayHeight() noexcept
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter "
                                               "must be arithmetical");

        if (SDL_WasInit(SDL_INIT_VIDEO) != SDL_INIT_VIDEO)
            return 0;

        SDL_DisplayMode dm;
        SDL_GetCurrentDisplayMode(0, &dm);
        return dm.h;
    }

    template<typename T>
    inline glm::vec<2, T> getDisplaySize() noexcept
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter "
                                               "must be arithmetical");

        if (SDL_WasInit(SDL_INIT_VIDEO) != SDL_INIT_VIDEO)
            return {0, 0};

        SDL_DisplayMode dm;
        SDL_GetCurrentDisplayMode(0, &dm);
        return {dm.w, dm.h};
    }

    template<typename T>
    inline T getWindowHeight(SDL_Window& window) noexcept
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter "
                                               "must be arithmetical");

        if (SDL_WasInit(SDL_INIT_VIDEO) != SDL_INIT_VIDEO)
            return 0;

        int height;
        SDL_GetWindowSize(&window, nullptr, &height);

        return height;
    }

    template<typename T>
    inline T getWindowWidth(SDL_Window& window) noexcept
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter "
                                               "must be arithmetical");

        if (SDL_WasInit(SDL_INIT_VIDEO) != SDL_INIT_VIDEO)
            return 0;

        int width;
        SDL_GetWindowSize(&window, &width, nullptr);

        return width;
    }

    template<typename T>
    inline glm::vec<2, T> getWindowSize(SDL_Window& window) noexcept
    {
        static_assert(std::is_arithmetic_v<T>, "Template parameter "
                                               "must be arithmetical");

        if (SDL_WasInit(SDL_INIT_VIDEO) != SDL_INIT_VIDEO)
            return {0, 0};

        int width, height;
        SDL_GetWindowSize(&window, &width, &height);

        return {width, height};
    }
}

#endif //UTILS_H
