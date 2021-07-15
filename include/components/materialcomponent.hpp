#ifndef MATERIALCOMPONENT_HPP
#define MATERIALCOMPONENT_HPP

#include <glm/vec3.hpp>

#include "ecs/component.hpp"

using glm::vec3;

/**
 * Material component
 */
struct MaterialComponent: ecs::Component
{
    vec3 ambient = vec3(0.f);
    vec3 diffuse = vec3(0.f);
    vec3 specular = vec3(0.f);
    GLfloat shininess = 0.f;
};


#endif //MATERIALCOMPONENT_HPP
