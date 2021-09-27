#ifndef UTILS_TEXTURE_HPP
#define UTILS_TEXTURE_HPP

#include <glm/vec2.hpp>
#include <SDL_image.h>

#include "exceptions/glexception.hpp"
#include "base.hpp"

#define CHECK_FRAMEBUFFER_COMPLETE() \
if (glCheckFramebufferStatus(GL_FRAMEBUFFER) != GL_FRAMEBUFFER_COMPLETE) \
throw GLException((boost::format( \
        "Warning: Unable to generate framebuffer. " \
        "GL Error: %s\n") % gluErrorString(glGetError())).str(), \
        logger::program_log_file_name(), \
        logger::Category::INITIALIZATION_ERROR); \

using glm::vec3;
using glm::vec2;
using glm::vec;
using std::vector;

namespace utils::texture
{
    /**
     * Load SDL2 surface from pixels
     * @param pixels
     * @param width
     * @param height
     * @param rgba
     * @return
     */
    SDL_Surface*
    loadSurfaceFromPixels(GLubyte* pixels, int width, int height, bool rgba = false);

    /**
     * Load opengl texture from pixels to GPU with specific format.
     * Result texture has RGBA format.
     * If function can't load texture exception will be thrown.
     * @param pixels
     * @param width
     * @param height
     * @param texture_format
     * @return textureID
     */
    GLuint
    loadTextureFromPixels32(const void *pixels, GLuint width, GLuint height,
                            GLenum textureType = GL_RGBA, GLenum type = GL_UNSIGNED_BYTE);

    /**
     * Load texture from file
     * Return texture id.
     * textureWidth and textureHeight fields used to store texture size
     * @param file
     * @param textureWidth
     * @param textureHeight
     * @return
     */
    GLuint loadTexture(const std::string &file,
                       GLuint *textureWidth = nullptr, GLuint *textureHeight = nullptr);
    /**
     * Generate FrameBuffer Object. Use isMsaa = true for generating multisampled
     * framebuffer.
     * @param isMsaa
     * @param width
     * @param height
     * @param textureMSAA
     * @param rbo
     * @param texture
     * @param scene_fb
     * @param scene_fbms
     */
    void generateFBO(bool isMsaa, GLuint width, GLuint height, GLuint* textureMSAA,
                     GLuint* rbo, GLuint* texture, GLuint* scene_fb, GLuint* scene_fbms = nullptr);

    /**
     * Clean FrameBuffer Object. Free texture, rbo and so on. If framebuffer multisampled
     * use isMSAA = true
     * @param texture
     * @param sceneBuffer
     * @param rbo
     * @param isMSAA
     * @param sceneBufferMSAA
     * @param textureMSAA
     */
    void cleanFBO(GLuint* texture, GLuint* sceneBuffer, GLuint* rbo,  bool isMSAA = false,
                  GLuint* sceneBufferMSAA = nullptr, GLuint* textureMSAA = nullptr);

    /**
     * Load cubemap images to cubemap texture. Specify faces 6 textures.
     * @param faces
     * @return
     */
    GLuint loadCubemap(const std::vector<std::string>& faces);

    /**
     *
     * @param file
     * @param flip
     * @return
     */
    SDL_Surface* loadSurface(const std::string& file, bool flip = true);

    /**
     * Return Surface format
     * if surface format can't be recognized 0 will be returned
     * @param surface
     * @return
     */
    constexpr GLenum getSurfaceFormatInfo(const SDL_Surface &surface) noexcept
    {
        GLenum format = 0;
        GLint color_num = surface.format->BytesPerPixel;
        if (color_num == 4) {     // contains an alpha channel
            if (surface.format->Rmask == 0x000000ff)
                format = GL_RGBA;
            else
                format = GL_BGRA;
        } else if (color_num == 3) {     // no alpha channel
            if (surface.format->Rmask == 0x000000ff)
                format = GL_RGB;
            else
                format = GL_BGR;
        } else if (color_num == 1) {
            format = GL_RG8;
        }

        return format;
    }

    constexpr GLenum surfByNumChannels(GLuint num_channels)
    {
        GLenum format = 0;
        if (num_channels == 4) {     // contains an alpha channel
            format = GL_RGBA;
        } else if (num_channels == 3) {     // no alpha channel
            format = GL_RGB;
        } else if (num_channels == 1) {
            format = GL_RG8;
        }

        return format;
    }

    /**
    * Flip vertically SDL_Surface
    * @param sfc
    * @return
    */
    inline SDL_Surface *flipVertically(const SDL_Surface *const sfc)
    {
        assert(sfc);
        SDL_Surface *result =
                SDL_CreateRGBSurface(sfc->flags, sfc->w, sfc->h,
                                     sfc->format->BytesPerPixel * 8,
                                     sfc->format->Rmask,
                                     sfc->format->Gmask,
                                     sfc->format->Bmask, sfc->format->Amask);
        // Number of pixels per row
        const auto pitch = sfc->pitch;
        // Total number of pixels
        const auto pxlength = pitch * (sfc->h - 1);
        // Right end pixels
        auto pixels = static_cast<unsigned char *>(sfc->pixels) + pxlength;
        // Left pixels
        auto rpixels = static_cast<unsigned char *>(result->pixels);
        for (auto line = 0; line < sfc->h; ++line) {
            memcpy(rpixels, pixels, pitch);
            pixels -= pitch;
            rpixels += pitch;
        }

        return result;
    }


    /**
     * Generate texture
     * @param width
     * @param height
     * @param msaa
     * @param samples
     * @return
     */
    GLuint genTexture(GLuint width, GLuint height, bool msaa = false, size_t samples = 4);

    /**
     * Generate RenderBuffer Object.
     * @param width
     * @param height
     * @param msaa
     * @param samples
     * @return
     */
    GLuint genRbo(GLuint width, GLuint height, bool msaa = false, size_t samples = 4);

    /**
     * Save screen pixels to file file_name with rgb format.
     * @param width
     * @param height
     */
    void saveScreen(const std::string& file_name, GLsizei width, GLsizei height);
}
#endif //UTILS_TEXTURE_HPP
