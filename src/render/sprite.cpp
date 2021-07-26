#include <GL/glew.h>
#include <boost/format.hpp>
#include <iostream>
#include <glm/gtc/type_ptr.hpp>

#include "exceptions/sdlexception.hpp"
#include "render/sprite.hpp"
#include "utils/collision.hpp"

using utils::log::Category;
using utils::log::program_log_file_name;
using utils::log::shader_log_file_name;
using boost::format;
using std::vector;

Sprite::Sprite(const std::string &modelFile, GLfloat textureWidth,
               GLfloat textureHeight, GLfloat textureDepth,
               bool flip_uv)
        : m_model(modelFile, flip_uv)
{
    m_sizes.emplace_back(textureWidth, textureHeight, textureDepth);

    m_triangles.emplace_back();
    vector<Mesh> meshes = m_model.getMeshes();
    std::vector<vec3> vertices_ordering;
    for (const Mesh& mesh: meshes) {
        vector<Vertex> vertices = mesh.getVertices();
        for (GLuint idx: mesh.getIndices())
            vertices_ordering.emplace_back(vertices[idx].pos);
    }

    for (size_t i = 0; i < vertices_ordering.size() - 2; i += 3) {
        vec3 p0 = vertices_ordering[i];
        vec3 p1 = vertices_ordering[i + 1];
        vec3 p2 = vertices_ordering[i + 2];
        m_triangles.push_back(Triangle(Vector3(p0.x, p0.y, p0.z),
                                          Vector3(p1.x, p1.y, p1.z),
                                          Vector3(p2.x, p2.y, p2.z)));
    }
}

Sprite::Sprite(const std::string &modelFile, const vec3& size,
               bool flip_uv)
        : Sprite(modelFile, size.x, size.y, size.z, flip_uv) {}

vec3 Sprite::getClip(GLuint idx) noexcept
{
    assert(idx < m_sizes.size());
    return m_sizes[idx];
}

Sprite::~Sprite()
{
//    freeVBO();
//    for (unsigned int & m_textureId : m_textureIds)
//        glDeleteTextures(1, &m_textureId);
}

vec3 Sprite::getCurrentClip() const noexcept
{
    return m_sizes[m_textureId];
}

void Sprite::setIdx(GLuint idx)
{
    assert(idx < m_sizes.size());
    m_textureId = idx;
}

GLuint Sprite::getWidth() const noexcept
{
    return m_sizes[m_textureId].x;
}

GLuint Sprite::getHeight() const noexcept
{
    return m_sizes[m_textureId].y;
}

GLuint Sprite::getDepth() const noexcept
{
    return m_sizes[m_textureId].z;
}

GLuint Sprite::getSpritesCount() const noexcept
{
    return m_sizes.size();
}

GLuint Sprite::getTriangleCount() const
{
    return m_triangles.size();
}

/*const std::vector<vec3> &Sprite::getVertices() const noexcept
{
    return m_vertices[m_textureId];
}

const std::vector<vec2>& Sprite::getUv() const noexcept
{
    return m_uv[m_textureId];
}

const std::vector<vec3> &Sprite::getNormals() const noexcept
{
    return m_normals[m_textureId];
}

const std::vector<GLfloat>& Sprite::getVertexData() const noexcept
{
    return m_vertexData[m_textureId];
}

const std::vector<std::string>& Sprite::getObjFiles() const
{
    return m_objFiles;
}*/

const std::vector<vec3>& Sprite::getSizes() const
{
    return m_sizes;
}

vec3 Sprite::getSize() const noexcept
{
    return m_sizes[m_textureId];
}

const std::vector<Triangle>& Sprite::getTriangles() const
{
    return m_triangles;
}

void Sprite::draw(ShaderProgram& program) const
{
    m_model.draw(program);
}

