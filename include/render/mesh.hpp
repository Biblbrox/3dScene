#ifndef MESH_HPP
#define MESH_HPP

#include <vector>
#include <GL/glew.h>

#include "vertex.hpp"
#include "render/texture.hpp"
#include "render/shaderprogram.hpp"

struct Material
{
    glm::vec3 diffuse;
    glm::vec3 specular;
    glm::vec3 ambient;
    GLfloat shininess;
};

class Mesh
{
public:
    Mesh(std::vector<Vertex> vertices, std::vector<GLuint> indices,
         std::vector<Texture> textures);
    Mesh(std::vector<Vertex> vertices, std::vector<GLuint> indices,
         Material material);
    void draw(ShaderProgram& program) const;

    const std::vector<Vertex>& getVertices() const;
    const std::vector<GLuint>& getIndices() const;
    const std::vector<Texture>& getTextures() const;

private:
    std::vector<Vertex> m_vertices;
    std::vector<GLuint> m_indices;
    std::vector<Texture> m_textures;
    Material m_material;

    GLuint m_vao;
    GLuint m_vbo;
    GLuint m_ebo;

    bool m_colorMaterials;

    void setupMesh();
};

#endif //MESH_HPP
