#include <GL/glew.h>
#include <cassert>
#include <vector>
#include <string>
#include <boost/format.hpp>
#include <glm/vec3.hpp>
#include <glm/vec2.hpp>
#include <SDL_image.h>

#include "utils/texture.hpp"
#include "utils/logger.hpp"
#include "strutils/strutils.hpp"
#include "exceptions/sdlexception.hpp"
#include "exceptions/glexception.hpp"


using boost::format;
using strutils::split;
using std::vector;
using glm::vec3;
using glm::vec2;
using glm::vec;

SDL_Surface *utils::texture::loadSurface(const std::string &file, bool flip)
{
    SDL_Surface *surface = IMG_Load(file.c_str());

    if (!surface)
        throw SdlException((format("Unable to load image: %s"
                                   ". SDL Error: %s\n")
                            % file % SDL_GetError()).str());

    if (!flip)
        return surface;

    SDL_Surface *flipped = flipVertically(surface);
    SDL_FreeSurface(surface);

    if (!flipped)
        throw SdlException((format("Unable to flip surface %p\n") % surface).str());

    return flipped;
}

GLuint utils::texture::loadTexture(const std::string &file, GLuint *textureWidth,
                                   GLuint *textureHeight)
{
    using namespace utils::texture;

    SDL_Surface *surface = loadSurface(file);

    GLenum channels = getSurfaceFormatInfo(*surface);

    int tw, th;
    tw = surface->w;
    th = surface->h;

    auto *pixels = static_cast<GLuint *>(surface->pixels);

    if (textureWidth)
        *textureWidth = tw;
    if (textureHeight)
        *textureHeight = th;

    GLuint textureId = loadTextureFromPixels32(pixels, tw, th, channels, GL_UNSIGNED_BYTE);

    SDL_FreeSurface(surface);

    return textureId;
}

GLuint
utils::texture::loadTextureFromPixels32(const void *pixels, GLuint width, GLuint height,
                                        GLenum texture_format, GLenum type)
{
    assert(pixels);
    GLuint textureID;
    glGenTextures(1, &textureID);
    glBindTexture(GL_TEXTURE_2D, textureID);

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);

    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, texture_format, type, pixels);
    glGenerateMipmap(GL_TEXTURE_2D);

    glBindTexture(GL_TEXTURE_2D, 0);

    if (GLuint error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("Error loading texture from %1% pixels! %2%\n")
                           % pixels % gluErrorString(error)).str(),
                          program_log_file_name(), Category::INTERNAL_ERROR);

    return textureID;
}

GLuint utils::texture::genTexture(GLuint width, GLuint height,
                                  bool msaa, size_t samples)
{
    GLuint texture;
    glGenTextures(1, &texture);

    if (msaa) {
        glBindTexture(GL_TEXTURE_2D_MULTISAMPLE, texture);
        glTexImage2DMultisample(GL_TEXTURE_2D_MULTISAMPLE, samples, GL_RGB, width, height, GL_TRUE);
    } else {
        glBindTexture(GL_TEXTURE_2D, texture);
        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, nullptr);
    }

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

    if (msaa)
        glBindTexture(GL_TEXTURE_2D_MULTISAMPLE, 0);
    else
        glBindTexture(GL_TEXTURE_2D, 0);

    if (GLuint error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("Unable to generate texture! %1%\n")
                           % gluErrorString(error)).str(),
                          program_log_file_name(), Category::INTERNAL_ERROR);

    return texture;
}

GLuint utils::texture::genRbo(GLuint width, GLuint height, bool msaa, size_t samples)
{
    GLuint rbo;
    glGenRenderbuffers(1, &rbo);
    glBindRenderbuffer(GL_RENDERBUFFER, rbo);
    if (msaa)
        glRenderbufferStorageMultisample(GL_RENDERBUFFER, samples,
                                         GL_DEPTH24_STENCIL8, width, height);
    else
        glRenderbufferStorage(GL_RENDERBUFFER, GL_DEPTH24_STENCIL8, width, height);
    glBindRenderbuffer(GL_RENDERBUFFER, 0);

    return rbo;
}

GLuint utils::texture::loadCubemap(const vector<std::string> &faces)
{
    using namespace utils::texture;

    GLuint cubemap;
    glGenTextures(1, &cubemap);
    glBindTexture(GL_TEXTURE_CUBE_MAP, cubemap);

    for (size_t i = 0; i < faces.size(); ++i) {
        SDL_Surface *surface = loadSurface(faces[i], false);

        GLenum texture_format = getSurfaceFormatInfo(*surface);

        GLuint tw = surface->w;
        GLuint th = surface->h;

        glTexImage2D(GL_TEXTURE_CUBE_MAP_POSITIVE_X + i,
                     0, GL_RGB, tw, th, 0, texture_format,
                     GL_UNSIGNED_BYTE, surface->pixels);

        SDL_FreeSurface(surface);
    }

    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_WRAP_R, GL_CLAMP_TO_EDGE);

    return cubemap;
}

void utils::texture::generateFBO(bool isMsaa, GLuint width, GLuint height, GLuint* textureMSAA,
                                 GLuint* rbo, GLuint* texture, GLuint* scene_fb, GLuint* scene_fbms)
{
    if (isMsaa) {
        // Generate multisampled framebuffer
        glGenFramebuffers(1, scene_fbms);
        glBindFramebuffer(GL_FRAMEBUFFER, *scene_fbms);
        // Create multisampled texture attachment
        *textureMSAA = genTexture(width, height, true);
        *rbo = genRbo(width, height, true);
        glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
                               GL_TEXTURE_2D_MULTISAMPLE, *textureMSAA, 0);
        glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_STENCIL_ATTACHMENT,
                                  GL_RENDERBUFFER, *rbo);
        CHECK_FRAMEBUFFER_COMPLETE();
        glBindFramebuffer(GL_FRAMEBUFFER, 0);

        // Generate intermediate framebuffer
        glGenFramebuffers(1, scene_fb);
        glBindFramebuffer(GL_FRAMEBUFFER, *scene_fb);
        // Create color attachment texture
        *texture = genTexture(width, height);
        glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, *texture, 0);
    } else {
        // Generate not multisampled buffer
        glGenFramebuffers(1, scene_fb);
        glBindFramebuffer(GL_FRAMEBUFFER, *scene_fb);
        // Create color texture attachment
        *texture = genTexture(width, height);
        *rbo = genRbo(width, height);
        glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, *texture, 0);
        glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_STENCIL_ATTACHMENT,
                                  GL_RENDERBUFFER, *rbo);
    }

    CHECK_FRAMEBUFFER_COMPLETE();
}

void utils::texture::cleanFBO(GLuint* texture, GLuint* sceneBuffer, GLuint* rbo,
                              bool isMSAA, GLuint* sceneBufferMSAA, GLuint* textureMSAA)
{
    if (sceneBuffer != nullptr)
        glDeleteFramebuffers(1, sceneBuffer);
    if (texture != nullptr)
        glDeleteTextures(1, texture);
    if (rbo != nullptr)
        glDeleteRenderbuffers(1, rbo);
    if (isMSAA) {
        if (sceneBufferMSAA != nullptr)
            glDeleteFramebuffers(1, sceneBufferMSAA);
        if (textureMSAA != nullptr)
            glDeleteTextures(1, textureMSAA);
    }
}

SDL_Surface*
utils::texture::loadSurfaceFromPixels(GLubyte* pixels, int width, int height, bool rgba)
{
    Uint32 rmask, gmask, bmask, amask;
#if SDL_BYTEORDER == SDL_BIG_ENDIAN
    int shift = !rgba ? 8 : 0;
    rmask = 0xff000000 >> shift;
    gmask = 0x00ff0000 >> shift;
    bmask = 0x0000ff00 >> shift;
    amask = 0x000000ff >> shift;
#else // little endian, like x86
    rmask = 0x000000ff;
    gmask = 0x0000ff00;
    bmask = 0x00ff0000;
    amask = !rgba ? 0 : 0xff000000;
#endif

    int depth, pitch;
    if (!rgba) {
        depth = 24;
        pitch = 3 * width; // 3 bytes per pixel * pixels per row
    } else { // STBI_rgb_alpha (RGBA)
        depth = 32;
        pitch = 4 * width;
    }

    SDL_Surface* surf = SDL_CreateRGBSurfaceFrom((void*)pixels, width, height, depth, pitch,
                                                 rmask, gmask, bmask, amask);

    return surf;

}

void utils::texture::saveScreen(const std::string& file_name, GLsizei width, GLsizei height)
{
    GLubyte* pixels = new GLubyte[4 * width * height];
    glReadPixels(0, 0, width, height, GL_RGBA, GL_UNSIGNED_BYTE, pixels);

    SDL_Surface* surf = loadSurfaceFromPixels(pixels, width,  height, true);
    SDL_Surface* flipped = flipVertically(surf);
    SDL_SaveBMP(flipped, file_name.c_str());

    SDL_FreeSurface(surf);
    SDL_FreeSurface(flipped);

    delete[] pixels;
}
