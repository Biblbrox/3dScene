#include <GL/glew.h>

#include "render/texturebase.hpp"

TextureBase::TextureBase() : m_textureId(0),
                             m_size(0, 0, 0)
{
}

TextureBase::TextureBase(glm::vec3 size) : m_textureId(0),
                                           m_size(std::move(size))
{
}

GLuint TextureBase::getWidth() const noexcept
{
    return m_size.x;
}

GLuint TextureBase::getHeight() const noexcept
{
    return m_size.y;
}

GLuint TextureBase::getDepth() const noexcept
{
    return m_size.z;
}

GLuint TextureBase::getTextureID() const
{
    return m_textureId;
}

void TextureBase::freeTexture()
{
    if (m_textureId != 0) {
        glDeleteTextures(1, &m_textureId);
        m_textureId = 0;
    }
}

TextureBase::~TextureBase()
{
    freeTexture();
}

const vec3& TextureBase::getSize() const noexcept
{
    return m_size;
}

vec3& TextureBase::getSize() noexcept
{
    return m_size;
}

