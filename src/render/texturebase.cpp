#include <GL/glew.h>

#include "render/texturebase.hpp"

TextureBase::TextureBase() : m_textureId(0), m_textureWidth(0),
                     m_textureHeight(0),
                     m_textureDepth(0)
{
}

GLuint TextureBase::getWidth() const noexcept
{
    return m_textureWidth;
}

GLuint TextureBase::getHeight() const noexcept
{
    return m_textureHeight;
}

GLuint TextureBase::getDepth() const noexcept
{
    return m_textureDepth;
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

    m_textureWidth = m_textureHeight = 0;
}

TextureBase::~TextureBase()
{
    freeTexture();
}

vec3 TextureBase::getSize() const noexcept
{
    return {m_textureWidth, m_textureHeight, m_textureDepth};
}

