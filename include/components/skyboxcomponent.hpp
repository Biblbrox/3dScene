#ifndef SKYBOXCOMPONENT_HPP
#define SKYBOXCOMPONENT_HPP

#include "ecs/component.hpp"

struct SkyboxComponent: ecs::Component
{
    GLuint vao;
    GLuint skybox_id;

    ~SkyboxComponent() override
    {
        if (glIsVertexArray(vao))
            glDeleteVertexArrays(1, &vao);
        if (glIsTexture(skybox_id))
            glDeleteTextures(1, &skybox_id);
    }
};

#endif //SKYBOXCOMPONENT_HPP
