#ifndef SPRITE_HPP
#define SPRITE_HPP

#include "texturebase.hpp"
#include "utils/texture.hpp"
#include "utils/utils.hpp"
#include "render/model.hpp"
#include "base.hpp"

/**
 * Sprite class.
 * Can contain one big texture with multiple small clips.
 */
class Sprite: public TextureBase
{
public:
    explicit Sprite(std::string objFile,
                    GLfloat textureWidth,
                    GLfloat textureHeight, GLfloat textureDepth,
                    bool flip_uv = true);

    explicit Sprite(std::string objFile, const vec3& size, bool flip_uv = true);
    ~Sprite() = default;
//    Sprite(Sprite&& en) = default;
//    Sprite(Sprite& en) = default;
//    Sprite& operator=(Sprite&&) = default;
//    Sprite& operator=(const Sprite&) = default;

    void draw(ShaderProgram& program) const override;

    GLuint getTriangleCount() const;

    GLfloat getWidth() const noexcept override;
    GLfloat getHeight() const noexcept override;
    GLfloat getDepth() const noexcept override;
    const vec3& getSize() const noexcept override;
    vec3& getSize() noexcept override;

    bool isUvFlipped() const noexcept;

    void flipUV();

    const std::string& getModelFile() const;

    const std::vector<Triangle>& getTriangles() const;
    std::vector<Triangle>& getTriangles();
protected:
    std::vector<Triangle> m_triangles;
    Model m_model;
    bool m_isUvFlipped;

private:
    void init_triangles();
};

#endif //SPRITE_HPP
