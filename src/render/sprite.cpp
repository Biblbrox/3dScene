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
        : m_model(modelFile, flip_uv),
          TextureBase({textureWidth, textureHeight, textureDepth}),
          m_isUvFlipped(flip_uv)
{
    init_triangles();
}

Sprite::Sprite(const std::string &modelFile, const vec3& size,
               bool flip_uv)
        : Sprite(modelFile, size.x, size.y, size.z, flip_uv) {}

Sprite::~Sprite()
{

}

GLuint Sprite::getWidth() const noexcept
{
    return m_size.x;
}

GLuint Sprite::getHeight() const noexcept
{
    return m_size.y;
}

GLuint Sprite::getDepth() const noexcept
{
    return m_size.z;
}

GLuint Sprite::getTriangleCount() const
{
    return m_triangles.size();
}

const vec3& Sprite::getSize() const noexcept
{
    return m_size;
}

vec3& Sprite::getSize() noexcept
{
    return m_size;
}


const std::vector<Triangle>& Sprite::getTriangles() const
{
    return m_triangles;
}

std::vector<Triangle>& Sprite::getTriangles()
{
    return m_triangles;
}

void Sprite::draw(ShaderProgram& program) const
{
    m_model.draw(program);
}

std::string Sprite::getModelFile() const
{
    return m_model.getModelFile();
}

void Sprite::flipUV()
{
    m_triangles.clear();

    m_isUvFlipped = !m_isUvFlipped;
    m_model.loadModel(m_model.getModelFile(), m_isUvFlipped);
    init_triangles();
}

void Sprite::init_triangles()
{
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
        m_triangles.emplace_back(Vector3(p0.x, p0.y, p0.z),
                                 Vector3(p1.x, p1.y, p1.z),
                                 Vector3(p2.x, p2.y, p2.z));
    }
}

bool Sprite::isUvFlipped() const noexcept
{
    return m_isUvFlipped;
}
