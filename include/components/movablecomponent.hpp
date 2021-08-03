#ifndef MOVABLECOMPONENT_HPP
#define MOVABLECOMPONENT_HPP

#include <ecs/component.hpp>
#include <glm/vec3.hpp>

struct MovableComponent: ecs::Component
{
    bool controlled = false;
    GLfloat speed = 0.f;
    glm::vec3 direction = {1.f, 0.f, 0.f};
};

#endif //MOVABLECOMPONENT_HPP
