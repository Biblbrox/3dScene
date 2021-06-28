#ifndef SCENECOMPONENT_HPP
#define SCENECOMPONENT_HPP

#include "ecs/component.hpp"

/**
 * Scene Component. Holds framebuffer id.
 */
struct SceneComponent: ecs::Component
{
    GLuint sceneBuffer;
    GLuint sceneBufferMSAA;

    // MSAA
    GLuint samples;
    bool isMsaa;
    GLuint textureMSAA;
    GLuint texture;
};

#endif //SCENECOMPONENT_HPP
