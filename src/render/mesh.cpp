#include <cstddef>
#include <glm/gtc/constants.hpp>
#include <utility>

#include "base.hpp"
#include "render/mesh.hpp"

Mesh::Mesh(std::vector<Vertex> vertices, std::vector<GLuint> indices, std::vector<Texture> textures)
    : m_vertices(std::move(vertices)), m_indices(std::move(indices)),
      m_textures(std::move(textures)), m_vao(0), m_ebo(0), m_vbo(0)
{
    setupMesh();
}

Mesh::Mesh(std::vector<Vertex> vertices, std::vector<GLuint> indices,
           std::optional<Material> material)
    : m_vertices(std::move(vertices)), m_indices(std::move(indices)), m_material(material),
      m_vao(0), m_ebo(0), m_vbo(0)
{
    setupMesh();
}

void Mesh::setupMesh()
{
    glGenVertexArrays(1, &m_vao);
    glGenBuffers(1, &m_vbo);
    glGenBuffers(1, &m_ebo);

    glBindVertexArray(m_vao);
    glBindBuffer(GL_ARRAY_BUFFER, m_vbo);
    glBufferData(GL_ARRAY_BUFFER, m_vertices.size() * sizeof(Vertex), &m_vertices[0],
                 GL_STATIC_DRAW);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, m_ebo);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, m_indices.size() * sizeof(GLuint), &m_indices[0],
                 GL_STATIC_DRAW);

    // vertex positions
    glEnableVertexAttribArray(0);
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, sizeof(Vertex), nullptr);
    // vertex texture coords
    glEnableVertexAttribArray(1);
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, sizeof(Vertex), (void *)offsetof(Vertex, uv));
    // vertex normals
    glEnableVertexAttribArray(2);
    glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, sizeof(Vertex),
                          (void *)offsetof(Vertex, normal));

    glBindVertexArray(0);

    glDeleteBuffers(1, &m_vbo);
    glDeleteBuffers(1, &m_ebo);
}

void Mesh::draw(ShaderProgram &program) const
{
    glBindVertexArray(m_vao);

    // Texture materials
    if (!m_material) {
        GLuint diffuseNr = 1;
        GLuint specularNr = 1;
        for (size_t i = 0; i < m_textures.size(); ++i) {
            glActiveTexture(GL_TEXTURE0 + i);
            std::string number;
            std::string name = m_textures[i].type;
            std::string texture;
            if (name == "texture_diffuse")
                number = std::to_string(diffuseNr++);
            else if (name == "texture_specular")
                number = std::to_string(specularNr++);

            texture += U_TEXTURE_MATERIAL ".";
            texture += name;
            texture += number;
            program.setInt(texture, i);
            glBindTexture(GL_TEXTURE_2D, m_textures[i].id);
        }
        program.setFloat(U_TEXTURE_MATERIAL ".shininess", 32.f);
        glActiveTexture(GL_TEXTURE0);
        glDrawElements(GL_TRIANGLES, m_indices.size(), GL_UNSIGNED_INT, nullptr);
    } else { // Color materials
        program.setVec3(U_COLOR_MATERIAL ".ambient", m_material->ambient);
        program.setVec3(U_COLOR_MATERIAL ".diffuse", m_material->diffuse);
        program.setVec3(U_COLOR_MATERIAL ".specular", m_material->specular);
        if (std::abs(m_material->shininess) < glm::epsilon<GLfloat>())
            program.setFloat(U_COLOR_MATERIAL ".shininess", 32.f);
        else
            program.setFloat(U_COLOR_MATERIAL ".shininess", m_material->shininess);
        program.setInt(U_IS_COLOR_MATERIAL, true);
        glDrawElements(GL_TRIANGLES, m_indices.size(), GL_UNSIGNED_INT, nullptr);
        program.setInt(U_IS_COLOR_MATERIAL, false);
    }

    glBindVertexArray(0);
}

const std::vector<Vertex> &Mesh::getVertices() const
{
    return m_vertices;
}

const std::vector<GLuint> &Mesh::getIndices() const
{
    return m_indices;
}

const std::vector<Texture> &Mesh::getTextures() const
{
    return m_textures;
}
