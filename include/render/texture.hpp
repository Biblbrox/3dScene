#ifndef TEXTURE_HPP
#define TEXTURE_HPP

#include <GL/glew.h>
#include <string>

struct Texture
{
    GLuint id;
    std::string type;
    std::string path;
};

#endif //TEXTURE_HPP
