#include <GL/glew.h>
#include <cassert>
#include <vector>
#include <string>
#include <filesystem>
#include <boost/format.hpp>
#include <glm/vec3.hpp>
#include <glm/vec2.hpp>
#include <boost/algorithm/string/trim.hpp>
#include <SDL_image.h>
#include <fstream>

#include "utils/texture.hpp"
#include "utils/logger.hpp"
#include "utils/string.hpp"
#include "constants.hpp"
#include "sceneprogram.hpp"
#include "exceptions/fsexception.hpp"
#include "exceptions/sdlexception.hpp"
#include "exceptions/glexception.hpp"


using boost::format;
using utils::string::split;
using std::vector;
using glm::vec3;
using glm::vec2;
using glm::vec;

vector<GLfloat>
utils::texture::loadObj(const std::string& file,
                        std::string& textureFile,
                        vector<vec3>& vertices, vector<vec2>& uv,
                        vector<vec3>& normals, vector<vec3u>& indices)
{
    if (!std::filesystem::exists(file))
        throw FSException((format("File %s doesn't exists") % file).str(),
                          program_log_file_name(),
                          utils::log::Category::FS_ERROR);

    std::ifstream obj(file);
    std::string line;
    std::string mtlFile;
    while (std::getline(obj, line)) {
        if (line.starts_with("vt")) {
            GLfloat x, y;
            std::string data = line.substr(line.find(' ')); // Skip "vt"
            std::istringstream s(data);
            s >> x >> y;
            uv.emplace_back(x, y);
        } else if (line.starts_with("v") && !line.starts_with("vn")) {
            GLfloat x, y, z;
            std::string data = line.substr(line.find(' ')); // Skip "v"
            std::istringstream s(data);
            s >> x >> y >> z;
            vertices.emplace_back(x, y, z);
        } else if (line.starts_with("vn")) {
            GLfloat x, y, z;
            std::string data = line.substr(line.find(' ')); // Skip "v"
            std::istringstream s(data);
            s >> x >> y >> z;
            normals.emplace_back(x, y, z);
        } else if (line.starts_with("f")) {
            std::string data = line.substr(line.find(' ')); // Skip "f"
            boost::trim(data);
            std::vector<std::string> parts = split(data, " ");
            for (auto& str: parts) {
                std::vector<std::string> idx = split(str, "/");
                size_t vertexIdx = std::stol(idx[0]);
                size_t textureIdx = std::stol(idx[1]);
                size_t normalIdx = std::stol(idx[2]);
                indices.emplace_back(vertexIdx - 1, textureIdx - 1, normalIdx - 1);
            }
        } else if (line.starts_with("mtllib")) {
            mtlFile = line.substr(line.find(' '));
            boost::trim(mtlFile);
        }
    }
    obj.close();

    std::vector<GLfloat> res;
    for (const vec3u& data: indices) {
        res.emplace_back(vertices[data[0]].x); // Vertex coords
        res.emplace_back(vertices[data[0]].y);
        res.emplace_back(vertices[data[0]].z);

        res.emplace_back(uv[data[1]].x); // UV coords
        res.emplace_back(uv[data[1]].y);

        res.emplace_back(normals[data[2]].x);
        res.emplace_back(normals[data[2]].y);
        res.emplace_back(normals[data[2]].z);
    }

    // Extract texture file name from mtl file
    const std::string mtlPath = getResourcePath(mtlFile);
    if (!std::filesystem::exists(getResourcePath(mtlPath)))
        throw FSException((format("File: %s doesn't exists") % mtlPath).str(),
                          program_log_file_name(),
                          utils::log::Category::FS_ERROR);

    std::ifstream mtl(getResourcePath(mtlPath));
    while (std::getline(mtl, line)) {
        if (line.starts_with("map_Kd")) {
            textureFile = line.substr(line.find("map_Kd") + 6);
            boost::trim(textureFile);
            break;
        }
    }
    mtl.close();

    return res;
}

SDL_Surface* utils::texture::loadSurface(const std::string& file, bool flip)
{
    SDL_Surface* surface = IMG_Load(file.c_str());
    if (!surface)
        throw SdlException((format("Unable to load image: %s"
                                   ". SDL Error: %s\n")
                            % file % SDL_GetError()).str());

    if (!flip)
        return surface;

    SDL_Surface* flipped = flipVertically(surface);
    SDL_FreeSurface(surface);

    if (!flipped)
        throw SdlException((format("Unable to flip surface %p\n") % surface).str());

    return flipped;
}

GLuint utils::texture::loadTexture(const std::string &file,
                                   GLuint *textureWidth,
                                   GLuint *textureHeight)
{
    using namespace utils::texture;

    SDL_Surface* surface = loadSurface(file);

    GLenum channels = getSurfaceFormatInfo(*surface);

    int tw, th;
    tw = surface->w;
    th = surface->h;

    auto* pixels = static_cast<GLuint*>(surface->pixels);

    SDL_FreeSurface(surface);

    if (textureWidth)
        *textureWidth = tw;
    if (textureHeight)
        *textureHeight = th;

    GLuint textureId = loadTextureFromPixels32(pixels, tw, th,
                                               channels,
                                               GL_UNSIGNED_BYTE);

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

//    glPixelStorei(GL_UNPACK_ALIGNMENT, 1);
//    glPixelStorei(GL_UNPACK_ROW_LENGTH, 0);
//    glPixelStorei(GL_UNPACK_SKIP_PIXELS, 0);
//    glPixelStorei(GL_UNPACK_SKIP_ROWS, 0);
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, texture_format,
                 type, pixels);
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
        glTexImage2DMultisample(GL_TEXTURE_2D_MULTISAMPLE, samples,
                                GL_RGB, width, height, GL_TRUE);
    } else {
        glBindTexture(GL_TEXTURE_2D, texture);
        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB,
                     GL_UNSIGNED_BYTE, nullptr);
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

GLuint utils::texture::genRbo(GLuint width, GLuint height,
                              bool msaa, size_t samples)
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

GLuint utils::texture::loadCubemap(const vector<std::string>& faces)
{
    using namespace utils::texture;

    GLuint cubemap;
    glGenTextures(1, &cubemap);
    glBindTexture(GL_TEXTURE_CUBE_MAP, cubemap);

    for (size_t i = 0; i < faces.size(); ++i) {
        SDL_Surface* surface = loadSurface(faces[i], false);

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
