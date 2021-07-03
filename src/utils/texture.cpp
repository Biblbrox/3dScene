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
                        vector<vec3>& normals, vector<vec3u> indices)
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
    for (const glm::vec<3, GLuint>& data: indices) {
        res.emplace_back(vertices[data[0]].x); // Vertex coords
        res.emplace_back(vertices[data[0]].y);
        res.emplace_back(vertices[data[0]].z);

        res.emplace_back(uv[data[1]].x); // UV coords
        res.emplace_back(uv[data[1]].y);

        res.emplace_back(indices[data[2]].x);
        res.emplace_back(indices[data[2]].y);
        res.emplace_back(indices[data[2]].z);
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

SDL_Surface* utils::texture::loadSurface(const std::string& file)
{
    SDL_Surface* surface = IMG_Load(file.c_str());
    if (!surface)
        throw SdlException((format("Unable to load image: %s"
                                   ". SDL Error: %s\n")
                            % file % SDL_GetError()).str());

    SDL_Surface* flipped = flipVertically(surface);
    SDL_FreeSurface(surface);

    if (!flipped)
        throw SdlException((format("Unable to flip surface %p\n") % surface).str());

    return flipped;
}

GLuint utils::texture::loadTexture(const std::string &file,
                                   GLuint *textureWidth,
                                   GLuint *textureHeight) {
    using namespace utils::texture;

    static std::string old_file;
    static GLuint old_texture;
    if (!old_file.empty() && old_file == file)
        return old_texture;

    SDL_Surface* surface = loadSurface(file);

    GLenum texture_format = getSurfaceFormatInfo(*surface);

    GLuint tw = surface->w;
    GLuint th = surface->h;

    if (textureWidth)
        *textureWidth = tw;
    if (textureHeight)
        *textureHeight = th;

    GLuint textureId = loadTextureFromPixels32(
            static_cast<GLuint*>(surface->pixels),
            tw, th, texture_format);

    SDL_FreeSurface(surface);

    old_file = file;
    old_texture = textureId;

    return textureId;
}

GLuint
utils::texture::loadTextureFromPixels32(const GLuint *pixels, GLuint width, GLuint height,
                                        GLenum texture_format)
{
    assert(pixels);
    GLuint textureID;
    glGenTextures(1, &textureID);
    glBindTexture(GL_TEXTURE_2D, textureID);

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);

    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, texture_format,
                 GL_UNSIGNED_BYTE, pixels);
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
        glRenderbufferStorage(GL_RENDERBUFFER, GL_DEPTH24_STENCIL8, width,
                              height);
    glBindRenderbuffer(GL_RENDERBUFFER, 0);

    return rbo;
}