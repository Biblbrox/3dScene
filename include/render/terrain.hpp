#ifndef HEIGHTMAP_HPP
#define HEIGHTMAP_HPP

#include <GL/glew.h>
#include <vector>
#include <glm/vec3.hpp>
#include <glm/vec2.hpp>
#include <string>

using glm::vec3;
using glm::vec2;

class Terrain
{
public:
    explicit Terrain(GLuint width, GLuint height, GLfloat step,
                     const std::string& height_image, const std::string& texture,
                     GLfloat scale, const glm::vec3& center);

    GLuint getTextureID() const;
    GLuint getVAO() const;

    // Get heightmap dimensions
    GLfloat getWidth() const;
    GLfloat getHeight() const;

    // Get terrain width and height in world coordinates
    GLfloat getWorldWidth() const;
    GLfloat getWorldHeight() const;

    GLfloat getScale() const;
    const glm::vec3& getCenterPos() const;
    GLfloat getStep() const;
    const std::vector<GLuint>& getIndices() const;


    /**
     * Return altitude at point in world coordinates
     * @param point
     * @return
     */
    GLfloat getAltitude(const glm::vec2& point) const;

private:
    GLuint m_width;

    GLuint m_height;
    GLfloat m_step;
    GLfloat m_scale;

    // Center of terrain in world coordinates
    glm::vec3 m_centerPos;

    std::vector<std::vector<GLfloat>> m_heightMap;
    std::vector<GLfloat> m_vertices;
    std::vector<GLuint> m_indices;

    GLuint m_vao;

    GLuint m_textureId;

    void computeIndices();
    void generateBuffers();
    void generateMesh();
    void sampleHeightMapImage(const std::string& image_file);
};


#endif //HEIGHTMAP_HPP
