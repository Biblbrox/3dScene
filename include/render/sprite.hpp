#ifndef SPRITE_HPP
#define SPRITE_HPP

#include "texture.hpp"
#include "utils/texture.hpp"
#include "utils/utils.hpp"

/**
 * Sprite class.
 * Can contain one big texture with multiple small clips.
 */
class Sprite: public Texture
{
public:
    explicit Sprite();
    ~Sprite();
//    Sprite(Sprite&& en) = default;
//    Sprite(Sprite& en) = default;
//    Sprite& operator=(Sprite&&) = default;
//    Sprite& operator=(const Sprite&) = default;
    void addTexture(const std::string& objFile,
                      GLfloat textureWidth,
                      GLfloat textureHeight, GLfloat textureDepth);
    glm::vec3 getClip(GLuint idx) noexcept;

    GLuint getTriangleCount() const;

    GLuint getWidth() const noexcept override;
    GLuint getHeight() const noexcept override;
    GLuint getDepth() const noexcept override;
    GLuint getTextureID() const override;

    glm::vec3 getCurrentClip() const noexcept;
    GLuint getIdx() const noexcept;
    GLuint getSpritesCount() const noexcept;
    void setIdx(GLuint idx);

    const std::vector<std::vector<vec3>>& getVertices() const;
    const std::vector<std::vector<vec2>>& getUv() const;
    const std::vector<std::vector<vec3>>& getNormals() const;
    const std::vector<std::vector<vec3u>>& getIndices() const;

    void generateDataBuffer() override;
    void freeVBO() noexcept final;

    GLuint getVAO() const override;
protected:
    std::vector<glm::vec3> m_sizes;
    GLuint* m_vao;
//    GLuint m_texCount;
//    GLuint m_curIdx = 0;

    std::vector<std::vector<GLfloat>> m_vertexData;

    std::vector<std::vector<vec3>> m_vertices;
    std::vector<std::vector<vec2>> m_uv;
    std::vector<std::vector<vec3>> m_normals;
    std::vector<std::vector<vec3u>> m_indices;

    std::vector<GLuint> m_textureIds;
};

#endif //SPRITE_HPP
