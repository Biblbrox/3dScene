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

    GLuint rbo = 0;
};

#endif //SCENECOMPONENT_HPP
