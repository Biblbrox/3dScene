#include <SDL_image.h>

#include "render/terrain.hpp"
#include "utils/texture.hpp"

using utils::texture::loadSurface;
using std::vector;
using utils::log::Logger;

Terrain::Terrain(GLuint width, GLuint height, GLfloat step,
                 const std::string& height_image,
                 const std::string& texture,
                 GLfloat scale, const glm::vec3& center)
        : m_width(width), m_height(height), m_step(step),
          m_heightMap(vector<vector<GLfloat>>(height, vector<GLfloat>(width))),
          m_vao(0), m_scale(scale), m_centerPos(center)
{
    m_heightMap = std::vector<std::vector<GLfloat>>(height,
                                                    std::vector<GLfloat>(
                                                            width));

    sampleHeightMapImage(height_image);;
    generateMesh();
    computeIndices();
    generateBuffers();

    m_textureId = utils::texture::loadTexture(texture, nullptr, nullptr);
}

void Terrain::sampleHeightMapImage(const std::string& height_image)
{
    GLfloat m_offset = 1.f;

    SDL_Surface *image = loadSurface(height_image);
    uint8_t *pixels = (uint8_t *) image->pixels;

    GLfloat scale_x = (float) image->w / (float) (m_width - 1);
    GLfloat scale_y = (float) image->h / (float) (m_height - 1);

    for (size_t i = 0; i < m_width; ++i) {
        for (size_t j = 0; j < m_height; ++j) {
            int img_x = (int) truncf((float) i * scale_x);
            int img_y = (int) truncf((float) j * scale_y);
            // Assume rgba
            GLfloat h = pixels[img_y * image->pitch + img_x * 4];

            h = h / 127.5 - 1.f;

            h *= m_scale;

            h += m_offset;

            m_heightMap[i][j] = h;
        }
    }
}

void Terrain::generateMesh()
{
    GLfloat u_step = 1.f / (float) m_width;
    GLfloat v_step = 1.f / (float) m_height;

    for (int i = 0; i < m_width; ++i) {
        for (int j = 0; j < m_height; ++j) {
            GLfloat h = m_heightMap[i][j];

            glm::vec3 vertex = {(float) i * m_step, h, (float) j * m_step};
            vertex.x -= m_centerPos.x;
            vertex.z -= m_centerPos.z;
            glm::vec2 uv = {u_step * j, v_step * i};

            m_vertices.push_back(vertex.x);
            m_vertices.push_back(vertex.y);
            m_vertices.push_back(vertex.z);

            m_vertices.push_back(uv.x);
            m_vertices.push_back(uv.y);
        }
    }

    GLuint num_indices =
            (m_width - 1) * (m_height * 2) + (m_width - 2) + (m_height - 2);
    computeIndices();
    //assert(num_indices == m_indices.size());
}

void Terrain::computeIndices()
{
    size_t min_col = 0, min_row = 0;
    size_t max_row = m_height - 1, max_col = m_width - 1;

    for (size_t c = min_col; c <= max_col; ++c) {
        for (size_t r = min_row; r <= max_row; ++r) {
            if (c > min_col && r == min_row)
                m_indices.push_back(c * m_height + r);

            m_indices.push_back(c * m_height + r);
            m_indices.push_back((c + 1) * m_height + r);

            if (r == max_row && c < max_col)
                m_indices.push_back((c + 1) * m_height + r);
        }
    }
}

void Terrain::generateBuffers()
{
//    if (m_vao != 0)
//        return;

    glGenVertexArrays(1, &m_vao);
    GLuint vbo;
    GLuint ebo;

    GLfloat *vertices = &m_vertices[0];
    glBindVertexArray(m_vao);
    glGenBuffers(1, &vbo);

    size_t vertSize = m_vertices.size() * sizeof(GLfloat);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, vertSize, vertices, GL_STATIC_DRAW);

    glGenBuffers(1, &ebo);
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(GLuint) * m_indices.size(), m_indices.data(),
                 GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, // Pos of vertices
                          5 * sizeof(GLfloat), nullptr);
    glEnableVertexAttribArray(0);

    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE,
                          5 * sizeof(GLfloat), // UV coords
                          (void *) (3 * sizeof(GLfloat)));
    glEnableVertexAttribArray(1);

    glBindVertexArray(0);
    glBindBuffer(GL_ARRAY_BUFFER, 0);

    glDeleteBuffers(1, &vbo);
    glDeleteBuffers(1, &ebo);
}

GLuint Terrain::getTextureID() const
{
    return m_textureId;
}

GLuint Terrain::getVAO() const
{
    return m_vao;
}

GLfloat Terrain::getHeight() const
{
    return m_height;
}

GLfloat Terrain::getWidth() const
{
    return m_width;
}

const std::vector<GLuint>& Terrain::getIndices() const
{
    return m_indices;
}

GLfloat Terrain::getScale() const
{
    return m_scale;
}

GLfloat Terrain::getStep() const
{
    return m_step;
}

const glm::vec3 &Terrain::getCenterPos() const
{
    return m_centerPos;
}

GLfloat Terrain::getWorldWidth() const
{
    return m_width * m_step;
}

GLfloat Terrain::getWorldHeight() const
{
    return m_height * m_step;
}

GLfloat Terrain::getAltitude(const glm::vec2 &point) const
{
    // World coordinates to height map indices
    size_t x = round(point.x / m_step);
    size_t y = round(point.y / m_step);

    if (x >= m_heightMap.size() || y >= m_heightMap[0].size())
        throw new BaseGameException((boost::format("Terrain at coordinate %f, %f doesn't exists")
                                     % point.x % point.y).str());


    return m_heightMap[x][y];
}