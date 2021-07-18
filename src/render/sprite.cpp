#include <GL/glew.h>
#include <boost/format.hpp>
#include <iostream>

#include "exceptions/sdlexception.hpp"
#include "render/sprite.hpp"
#include "utils/texture.hpp"
#include "utils/collision.hpp"

using utils::log::Category;
using utils::log::program_log_file_name;
using utils::log::shader_log_file_name;
using boost::format;

Sprite::Sprite() : m_vao(nullptr)
{

}

void Sprite::addMesh(const std::string& objFile, const vec3& size)
{
    addMesh(objFile, size.x, size.y, size.z);
}

void Sprite::addMesh(const std::string &objFile,
                     GLfloat textureWidth, GLfloat textureHeight,
                     GLfloat textureDepth)
{
    using namespace utils::texture;

    std::string textureFile;
    std::vector<vec3> vertices;
    std::vector<vec2> uv;
    std::vector<vec3> normals;
    std::vector<vec3u> indices;
    auto v = loadObj(objFile, textureFile, vertices, uv, normals, indices);
    m_vertices.push_back(vertices);

    m_uv.push_back(uv);

    m_normals.push_back(normals);

    m_indices.push_back(indices);
    m_vertexData.push_back(v);

    if (!textureFile.empty()) {
        GLuint textureId = loadTexture(getResourcePath(textureFile), nullptr,
                                       nullptr);
        m_textureIds.push_back(textureId);
    }

    m_sizes.emplace_back(textureWidth, textureHeight, textureDepth);
    m_objFiles.push_back(objFile);

    std::vector<vec3> vertices_ordering;
    for (const glm::vec<3, GLuint>& data: m_indices[0])
        vertices_ordering.emplace_back(m_vertices[0][data[0]]); // Vertex coords

    m_triangles.emplace_back();
    for (size_t i = 0; i < vertices_ordering.size() - 2; i += 3) {
        vec3 p0 = vertices_ordering[i];
        vec3 p1 = vertices_ordering[i + 1];
        vec3 p2 = vertices_ordering[i + 2];
        m_triangles[0].push_back(Triangle(Vector3(p0.x, p0.y, p0.z),
                                          Vector3(p1.x, p1.y, p1.z),
                                          Vector3(p2.x, p2.y, p2.z)));
    }
}

vec3 Sprite::getClip(GLuint idx) noexcept
{
    assert(idx < m_sizes.size());
    return m_sizes[idx];
}

void Sprite::generateDataBuffer()
{
    size_t texCount = m_sizes.size();
    m_vao = new GLuint[texCount];

    glGenVertexArrays(texCount, m_vao);
    GLuint VBO;
    GLuint EBO;

    for (GLuint i = 0; i < texCount; ++i) {
        GLfloat *vertices = &m_vertexData[i][0];
        glBindVertexArray(m_vao[i]);
        glGenBuffers(1, &VBO);

//        glGenBuffers(1, &EBO);
//        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
//        glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(GLuint) * m_indices.size(), m_indices.data(),
//                     GL_STATIC_DRAW);

        size_t vertSize = m_vertexData[i].size() * sizeof(GLfloat);
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, vertSize, vertices, GL_STATIC_DRAW);

        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, // Pos of vertices
                              8 * sizeof(GLfloat), nullptr);
        glEnableVertexAttribArray(0);

        glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE,
                              8 * sizeof(GLfloat), // UV coords
                              (void *) (3 * sizeof(GLfloat)));
        glEnableVertexAttribArray(1);
        glVertexAttribPointer(2, 3, GL_FLOAT, GL_FALSE,
                              8 * sizeof(GLfloat), // normals
                              (void *) (5 * sizeof(GLfloat)));
        glEnableVertexAttribArray(2);

        glBindVertexArray(0);
        glBindBuffer(GL_ARRAY_BUFFER, 0);

        glDeleteBuffers(1, &VBO);
    }
}

void Sprite::freeVBO() noexcept
{
    if (m_vao) {
        glDeleteVertexArrays(m_sizes.size(), m_vao);
        delete[] m_vao;
        m_vao = nullptr;
    }

    m_sizes.clear();
}

Sprite::~Sprite()
{
    freeVBO();
    for (unsigned int & m_textureId : m_textureIds)
        glDeleteTextures(1, &m_textureId);
}

GLuint Sprite::getVAO() const
{
    return m_vao[m_textureId];
}

GLuint Sprite::getIdx() const noexcept
{
    return m_textureId;
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

GLuint Sprite::getTextureID() const
{
    return m_textureIds[m_textureId];
}

GLuint Sprite::getTriangleCount() const
{
    return m_vertexData[m_textureId].size() * 3;
}

const std::vector<std::vector<vec3>> &Sprite::getVertices() const
{
    return m_vertices;
}

const std::vector<std::vector<vec2>> &Sprite::getUv() const
{
    return m_uv;
}

const std::vector<std::vector<vec3u>> &Sprite::getIndices() const
{
    return m_indices;
}

const std::vector<std::vector<vec3>> &Sprite::getNormals() const
{
    return m_normals;
}

const std::vector<std::vector<GLfloat>> &Sprite::getVertexData() const
{
    return m_vertexData;
}

const std::vector<std::string> &Sprite::getObjFiles() const
{
    return m_objFiles;
}

const std::vector<vec3> &Sprite::getSizes() const
{
    return m_sizes;
}

vec3 Sprite::getSize() const noexcept
{
    return m_sizes[m_textureId];
}

std::vector<std::vector<Triangle>> Sprite::getTriangles() const
{
    return m_triangles;
}
