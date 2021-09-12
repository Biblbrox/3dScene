#ifndef POSITIONCOMPONENTINST_HPP
#define POSITIONCOMPONENTINST_HPP

#include <GL/glew.h>

#include "ecs/component.hpp"

struct Position
{
    glm::vec3 pos = {0.f, 0.f, 0.f};
    GLfloat angle = 0;
    glm::vec3 rot_axis = {1.f, 0.f, 0.f};
};

struct PositionComponentInst : ecs::Component
{
    std::vector<Position> position;
};

#endif //POSITIONCOMPONENTINST_HPP
