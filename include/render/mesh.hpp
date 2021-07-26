#ifndef MESH_HPP
#define MESH_HPP

#include <vector>
#include <GL/glew.h>

#include "vertex.hpp"
#include "render/texture.hpp"
#include "render/shaderprogram.hpp"

class Mesh
{
public:
    Mesh(const std::vector<Vertex>& vertices, const std::vector<GLuint>& indices,
         const std::vector<Texture>&  textures);
    void draw(ShaderProgram& program) const;

    const std::vector<Vertex>& getVertices() const;
    const std::vector<GLuint>& getIndices() const;
    const std::vector<Texture>& getTextures() const;

private:
    std::vector<Vertex> m_vertices;
    std::vector<GLuint> m_indices;
    std::vector<Texture> m_textures;

    GLuint m_vao;
    GLuint m_vbo;
    GLuint m_ebo;

    void setupMesh();
};

#endif //MESH_HPP
