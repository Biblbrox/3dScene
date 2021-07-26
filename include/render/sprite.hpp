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

    glm::vec3 getClip(GLuint idx) noexcept;

    void draw(ShaderProgram& program) const override;

    GLuint getTriangleCount() const;

    GLuint getWidth() const noexcept override;
    GLuint getHeight() const noexcept override;
    GLuint getDepth() const noexcept override;
    vec3 getSize() const noexcept override;
//    GLuint getTextureID() const override;

    glm::vec3 getCurrentClip() const noexcept;
    GLuint getIdx() const noexcept;
    GLuint getSpritesCount() const noexcept;
    const std::vector<Triangle>& getTriangles() const;
    void setIdx(GLuint idx);

    /*const std::vector<vec3>& getVertices() const noexcept override;
    const std::vector<vec2>& getUv() const noexcept override;
    const std::vector<vec3>& getNormals() const noexcept override;
    const std::vector<GLfloat>& getVertexData() const noexcept;
    const std::vector<std::string>& getObjFiles() const;*/
    const std::vector<vec3>& getSizes() const;

    std::vector<std::string> m_objFiles;
    std::vector<vec3> m_sizes;
protected:
//    std::vector<std::vector<GLfloat>> m_vertexData;
//
//    std::vector<std::vector<vec3>> m_vertices;
//    std::vector<std::vector<vec2>> m_uv;
//    std::vector<std::vector<vec3>> m_normals;
    std::vector<Triangle> m_triangles;
    Model m_model;
//    std::vector<GLuint> m_textureIds;


};

#endif //SPRITE_HPP
