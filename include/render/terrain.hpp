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
                     GLfloat scale);

    GLuint getTextureID() const;
    GLuint getVAO() const;

    // Get heightmap dimensions
    GLfloat getWidth() const;
    GLfloat getHeight() const;

    // Get terrain width and height in world coordinates
    GLfloat getWorldWidth() const;
    GLfloat getWorldHeight() const;

    GLfloat getScale() const;
    GLfloat getStep() const;
    const std::vector<GLuint>& getIndices() const;
    const std::vector<GLfloat>& getVertices() const;


    const std::string& getTextureFile() const;
    const std::string& getHeightImage() const;
    /**
     * Return altitude at point in world coordinates
     * @param point
     * @return
     */
    GLfloat getAltitude(const vec2& point) const;
    bool isUnderGround(const vec3& point) const;

private:
    GLuint m_width;

    GLuint m_height;
    GLfloat m_step;
    GLfloat m_scale;

    std::vector<std::vector<GLfloat>> m_heightMap;
    std::vector<GLuint> m_indices;
    std::vector<GLfloat> m_vertices;

    std::vector<GLfloat> m_vertexData;

    GLuint m_vao;

    GLuint m_textureId;

    std::string m_heightImage;
    std::string m_textureFile;

    void computeIndices();
    vec3 computeNormal(int x, int z);
    void generateBuffers();
    void generateMesh();
    void sampleHeightMapImage(const std::string& image_file);
};


#endif //HEIGHTMAP_HPP
