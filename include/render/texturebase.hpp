#ifndef TEXTUREBASE_HPP
#define TEXTUREBASE_HPP

#include <string>
#include <vector>
#include <GL/glew.h>
#include <glm/vec3.hpp>
#include <glm/vec2.hpp>

#include "base.hpp"
#include "shaderprogram.hpp"

using glm::vec3;
using glm::vec2;

/**
 * Texture class.
 * This is only base methods. You can't create instance of this class
 */
class TextureBase
{
public:
    virtual ~TextureBase();

    virtual GLuint getTextureID() const;

    virtual GLuint getWidth() const noexcept;
    virtual GLuint getHeight() const noexcept;
    virtual GLuint getDepth() const noexcept;
    virtual vec3 getSize() const noexcept;
    virtual void draw(ShaderProgram& program) const = 0;

//    virtual GLuint getTriangleCount() const = 0;
//    virtual const std::vector<vec3>& getVertices() const noexcept = 0;
//    virtual const std::vector<vec2>& getUv() const noexcept = 0;
//    virtual const std::vector<vec3>& getNormals() const noexcept = 0;

    virtual void freeTexture() final;

protected:
    explicit TextureBase();

    GLuint m_textureId;

    GLuint m_textureWidth;
    GLuint m_textureHeight;
    GLuint m_textureDepth;
};

#endif //TEXTUREBASE_HPP
