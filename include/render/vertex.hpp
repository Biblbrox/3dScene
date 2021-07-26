#ifndef VERTEX_HPP
#define VERTEX_HPP

#include <GL/glew.h>
#include <glm/glm.hpp>

struct Vertex
{
    glm::vec3 pos;
    glm::vec2 uv;
    glm::vec3 normal;
};

#endif //VERTEX_HPP
