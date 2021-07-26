#ifndef SKYBOXCOMPONENT_HPP
#define SKYBOXCOMPONENT_HPP

#include "ecs/component.hpp"

struct SkyboxComponent: ecs::Component
{
    GLuint vao;
    GLuint skybox_id;
};

#endif //SKYBOXCOMPONENT_HPP
