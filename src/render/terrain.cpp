#include <SDL_image.h>
#include <glm/glm.hpp>

#include "render/terrain.hpp"
#include "utils/texture.hpp"

using utils::texture::loadSurface;
using std::vector;
using std::pair;
using utils::log::Logger;

Terrain::Terrain(GLuint width, GLuint height,
                 const std::string& height_image,
                 const std::string& texture,
                 const vec3& scale) :
        m_vao(0), m_scale(scale), m_heightImage(height_image),
        m_textureFile(texture)
{
    sampleHeightMapImage(height_image);
    generateMesh();
    computeIndices();
    generateBuffers();

    m_textureId = utils::texture::loadTexture(texture, nullptr, nullptr);
}

void Terrain::sampleHeightMapImage(const std::string& height_image)
{
    SDL_Surface *image = loadSurface(height_image);
    uint8_t* pixels = (uint8_t *) image->pixels;

    m_width = image->w;
    m_depth = image->h;

    m_vertices = vector<vector<vec3>>(m_width, vector<vec3>(m_depth));
    m_normals = vector<vector<vec3>>(m_width, vector<vec3>(m_depth));
    m_uv = vector<vector<vec2>>(m_width, vector<vec2>(m_depth));
    m_heightMap = vector<vector<GLfloat>>(m_width, vector<GLfloat>(m_depth));
    unsigned byte_per_pixel = image->format->BytesPerPixel;
    for (size_t i = 0; i < m_width; ++i) {
        for (size_t j = 0; j < m_depth; ++j) {
            GLfloat h = pixels[j * image->pitch + i * byte_per_pixel];
            h = h / 255.f;
            m_heightMap.at(i).at(j) = h;
        }
    }

    SDL_FreeSurface(image);
}

void Terrain::generateMesh()
{
    GLfloat u_step = 0.1f * (float) m_width;
    GLfloat v_step = 0.1f * (float) m_depth;

    for (int i = 0; i < m_width; ++i) {
        for (int j = 0; j < m_depth; ++j) {
            GLfloat scale_x = float(j) / float(m_depth - 1);
            GLfloat scale_z = float(i) / float(m_width - 1);
            GLfloat h = m_heightMap.at(i).at(j);

            vec3 vertex = {-0.5f + scale_x, h, -0.5f + scale_z};
            // Need to repeat texture every 10 rows and 10 columns
            vec2 uv = {u_step * scale_x, v_step * scale_z};

            m_vertices[i][j] = vertex;
            m_uv[i][j] = uv;
        }
    }
}

void Terrain::computeIndices()
{
//    size_t min_col = 0, min_row = 0;
//    size_t max_row = m_depth - 2, max_col = m_width - 2;
    size_t prim_restart_idx = m_width * m_depth;

    for (size_t i = 0; i < m_width - 1; ++i) {
        for (size_t j = 0; j < m_depth; ++j) {
            size_t row = i + 1;
            size_t idx = row * m_depth + j;
            m_indices.push_back(idx);
            row = i;
            idx = row * m_depth + j;
            m_indices.push_back(idx);
        }
        m_indices.push_back(prim_restart_idx);
    }
}

void Terrain::computeNormals()
{
    using Quad = pair<vec3, vec3>; // Pair of normals
    m_quadNormals = vector<vector<Quad>>(m_width - 1, vector<Quad>(m_depth - 1));

    for (size_t i = 0; i < m_width - 1; ++i) {
        for (size_t j = 0; j < m_depth - 1; ++j) {
            vec3 tr0[] = {
                    m_vertices[i][j],
                    m_vertices[i + 1][j],
                    m_vertices[i + 1][j + 1]
            };
            vec3 tr1[] = {
                    m_vertices[i + 1][j + 1],
                    m_vertices[i][j + 1],
                    m_vertices[i][j]
            };

            vec3 norm_tr0 = glm::cross(tr0[0] - tr0[1], tr0[1] - tr0[2]);
            vec3 norm_tr1 = glm::cross(tr1[0] - tr1[1], tr1[1] - tr1[2]);

            m_quadNormals[i][j].first = glm::normalize(norm_tr0);
            m_quadNormals[i][j].second = glm::normalize(norm_tr1);
        }
    }

    for (size_t i = 0; i < m_width; ++i) {
        for (size_t j = 0; j < m_depth; ++j){
            vec3 normal = vec3(0.f);

            // Upper left
            if (i != 0 && j != 0)
                normal += m_quadNormals[i - 1][j - 1].first
                          + m_quadNormals[i - 1][j - 1].second;

            // Upper right
            if (i != 0 && j != m_depth - 1)
                normal += m_quadNormals[i - 1][j].first;

            // Bottom right
            if (i != m_width - 1 && j != m_depth - 1)
                normal += m_quadNormals[i + 1][j].first
                          + m_quadNormals[i + 1][j].second;

            // Bottom left
            if (i != m_width && j != 0)
                normal += m_quadNormals[i][j - 1].second;

            m_normals[i][j] = glm::normalize(normal);
        }
    }


}

void Terrain::generateBuffers()
{
    for (size_t i = 0; i < m_width; ++i) {
        for (size_t j = 0; j < m_depth; ++j) {
            m_vertexData.push_back(m_vertices[i][j].x);
            m_vertexData.push_back(m_vertices[i][j].y);
            m_vertexData.push_back(m_vertices[i][j].z);

            m_vertexData.push_back(m_uv[i][j].x);
            m_vertexData.push_back(m_uv[i][j].y);

            m_vertexData.push_back(m_normals[i][j].x);
            m_vertexData.push_back(m_normals[i][j].y);
            m_vertexData.push_back(m_normals[i][j].z);
        }
    }

    glGenVertexArrays(1, &m_vao);
    GLuint vbo;
    GLuint ebo;

    GLfloat *vertices = &m_vertexData[0];
    glBindVertexArray(m_vao);
    glGenBuffers(1, &vbo);

    size_t vertSize = m_vertexData.size() * sizeof(GLfloat);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, vertSize, vertices, GL_STATIC_DRAW);

    glGenBuffers(1, &ebo);
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(GLuint) * m_indices.size(), m_indices.data(),
                 GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, // Pos of vertices
                          8 * sizeof(GLfloat), nullptr);
    glEnableVertexAttribArray(0);

    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE,
                          8 * sizeof(GLfloat), // UV coords
                          (void *) (3 * sizeof(GLfloat)));
    glEnableVertexAttribArray(1);

    glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE,
                          8 * sizeof(GLfloat), // Normals
                          (void *) (5 * sizeof(GLfloat)));
    glEnableVertexAttribArray(2);

    glBindVertexArray(0);
    glBindBuffer(GL_ARRAY_BUFFER, 0);
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, 0);

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
    return m_depth;
}

GLfloat Terrain::getWidth() const
{
    return m_width;
}

const std::vector<GLuint>& Terrain::getIndices() const
{
    return m_indices;
}

const vec3& Terrain::getScale() const
{
    return m_scale;
}

GLfloat Terrain::getWorldWidth() const
{
    return m_width * m_scale.x;
}

GLfloat Terrain::getWorldDepth() const
{
    return m_depth * m_scale.z;
}

GLfloat Terrain::getAltitude(const glm::vec2 &point) const
{
    GLfloat z = point.y;
    GLfloat x = point.x;

    if (x > m_width / 2.f || z > m_depth / 2.f
        || x < -m_width / 2.f || z < -m_depth / 2.f)
        return 0;

    /* Find offsets of the coords into a terrain quad */
    GLfloat m_step = m_scale.x;
    float offx = fmodf(x, m_step);
    float offz = fmodf(z, m_step);

    /* Compute the plane equation for the triangle we are in */
    glm::vec3 p1, p2, p3;
    float A, B, C, D;
    if (offx + offz <= m_step) {
        /* First triangle in the quad */
        p1.x = trunc(x / m_step);
        p1.z = trunc(z / m_step);
        p1.y = m_heightMap[p1.x][p1.z];

        p2.x = trunc(x /m_step) + 1;
        p2.z = trunc(z /m_step);
        p2.y = m_heightMap[p2.x][p2.z];

        p3.x = trunc(x / m_step);
        p3.z = trunc(z / m_step) + 1;
        p3.y = m_heightMap[p3.x][p3.z];
    } else {
        /* Second triangle in the quad */
        p1.x = trunc(x / m_step) + 1;
        p1.z = trunc(z / m_step);
        p1.y = m_heightMap[p1.x][p1.z];

        p2.x = trunc(x / m_step);
        p2.z = trunc(z / m_step) + 1;
        p2.y = m_heightMap[p2.x][p2.z];

        p3.x = trunc(x / m_step) + 1;
        p3.z = trunc(z / m_step) + 1;
        p3.y = m_heightMap[p3.x][p3.z];

    }

    /* Above we compute X,Z coords as vertex indices so we could use TERRAIN()
     * to compute heights at specific vertices, but to apply the plane equation
     * we need to turn the coordinates into world units
     */
    p1.x *= m_step;
    p1.z *= m_step;
    p2.x *= m_step;
    p2.z *= m_step;
    p3.x *= m_step;
    p3.z *= m_step;

    /* FIXME: we probably want to pre-compute plane equations for each
     * triangle in the terrain rather than recomputing them all the time
     */
    A = (p2.y - p1.y) * (p3.z - p1.z) - (p3.y - p1.y) * (p2.z - p1.z);
    B = (p2.z - p1.z) * (p3.x - p1.x) - (p3.z - p1.z) * (p2.x - p1.x);
    C = (p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y);
    D = -(A * p1.x + B * p1.y + C * p1.z);

    /* Use the plane equation to find Y given (X,Z) */
    return (-D - C * z - A * x) / B;
}

const std::vector<std::vector<vec3>> &Terrain::getVertices() const
{
    return m_vertices;
}

bool Terrain::isUnderGround(const vec3 &point) const
{
    GLfloat height = getAltitude({point.x, point.z});

    return point.y < height;
}

const std::string &Terrain::getHeightImage() const
{
    return m_heightImage;
}

const std::string &Terrain::getTextureFile() const
{
    return m_textureFile;
}

Terrain::~Terrain()
{
    glDeleteVertexArrays(1, &m_vao);
}
