#ifndef MOONLANDER_POSITIONCOMPONENT_HPP
#define MOONLANDER_POSITIONCOMPONENT_HPP

#include <GL/glew.h>

#include "ecs/component.hpp"

struct PositionComponent : ecs::Component
{
    GLfloat x;
    GLfloat y;
    GLfloat z;
    GLfloat angle = 0;
    glm::vec3 rot_axis = glm::vec3(1.f, 0.f, 0.f);
};

#endif //MOONLANDER_POSITIONCOMPONENT_HPP
