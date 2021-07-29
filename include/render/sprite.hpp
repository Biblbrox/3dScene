#ifndef SPRITE_HPP
#define SPRITE_HPP

#include <bvh/bvh.hpp>
#include <bvh/vector.hpp>
#include <bvh/triangle.hpp>
#include <bvh/ray.hpp>
#include <bvh/sweep_sah_builder.hpp>
#include <bvh/single_ray_traverser.hpp>
#include <bvh/primitive_intersectors.hpp>

#include "texturebase.hpp"
#include "utils/texture.hpp"
#include "utils/utils.hpp"
#include "render/model.hpp"

using Scalar   = float;
using Vector3  = bvh::Vector3<Scalar>;
using Triangle = bvh::Triangle<Scalar>;
//using Ray      = bvh::Ray<Scalar>;
using Bvh      = bvh::Bvh<Scalar>;

/**
 * Sprite class.
 * Can contain one big texture with multiple small clips.
 */
class Sprite: public TextureBase
{
public:
    explicit Sprite(const std::string& objFile,
                    GLfloat textureWidth,
                    GLfloat textureHeight, GLfloat textureDepth,
                    bool flip_uv = true);

    explicit Sprite(const std::string& objFile,
                    const vec3& size, bool flip_uv = true);
    ~Sprite();
//    Sprite(Sprite&& en) = default;
//    Sprite(Sprite& en) = default;
//    Sprite& operator=(Sprite&&) = default;
//    Sprite& operator=(const Sprite&) = default;

    void draw(ShaderProgram& program) const override;

    GLuint getTriangleCount() const;

    GLuint getWidth() const noexcept override;
    GLuint getHeight() const noexcept override;
    GLuint getDepth() const noexcept override;
    const vec3& getSize() const noexcept override;
    vec3& getSize() noexcept override;

    bool isUvFlipped() const noexcept;

    void flipUV();

    std::string getModelFile() const;

    const std::vector<Triangle>& getTriangles() const;
    void setIdx(GLuint idx);
protected:
    std::vector<Triangle> m_triangles;
    Model m_model;
    bool m_isUvFlipped;

private:
    void init_triangles();
};

#endif //SPRITE_HPP
