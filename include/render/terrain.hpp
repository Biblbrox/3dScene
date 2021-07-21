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
    explicit Terrain(GLuint width, GLuint depth, const std::string& height_image,
                     const std::string& texture, const vec3& scale);
    ~Terrain();

    GLuint getTextureID() const;
    GLuint getVAO() const;

    // Get heightmap dimensions
    GLfloat getWidth() const;
    GLfloat getHeight() const;

    // Get terrain width and height in world coordinates
    GLfloat getWorldWidth() const;
    GLfloat getWorldDepth() const;

    const vec3& getScale() const;
    const std::vector<GLuint>& getIndices() const;
    const std::vector<std::vector<vec3>> &getVertices() const;


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

    std::vector<std::vector<GLfloat>> m_heightMap;
    std::vector<GLuint> m_indices;
    std::vector<std::vector<vec3>> m_vertices;
    std::vector<std::vector<vec2>> m_uv;
    std::vector<std::vector<std::pair<vec3, vec3>>> m_quadNormals;
    std::vector<std::vector<vec3>> m_normals;

    std::vector<GLfloat> m_vertexData;

    GLuint m_vao;

    GLuint m_textureId;
    GLuint m_width;
    GLuint m_depth;
    vec3 m_scale;

    std::string m_textureFile;
    std::string m_heightImage;

    void computeIndices();
    void computeNormals();
    void generateBuffers();
    void generateMesh();
    void sampleHeightMapImage(const std::string& image_file);
};


#endif //HEIGHTMAP_HPP
