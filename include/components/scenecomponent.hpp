#ifndef SCENECOMPONENT_HPP
#define SCENECOMPONENT_HPP

#include "ecs/component.hpp"

/**
 * Scene Component. Holds framebuffer id.
 */
struct SceneComponent: ecs::Component
{
    GLuint sceneBuffer = 0;
    GLuint sceneBufferMSAA = 0;

    // MSAA
    GLuint samples = 0;
    bool isMsaa = false;
    GLuint textureMSAA = 0;
    GLuint texture = 0;
    bool dirty = true;

    GLuint rbo = 0;

    ~SceneComponent() override
    {
        if (sceneBuffer != 0)
            glDeleteFramebuffers(1, &sceneBuffer);
        if (texture != 0)
            glDeleteTextures(1, &texture);
        if (rbo != 0)
            glDeleteRenderbuffers(1, &rbo);
        if (isMsaa) {
            if (sceneBufferMSAA != 0)
                glDeleteFramebuffers(1, &sceneBufferMSAA);
            if (textureMSAA != 0)
                glDeleteTextures(1, &textureMSAA);
        }
    }
};

#endif //SCENECOMPONENT_HPP
