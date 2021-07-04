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
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
    GLfloat shininess;
};


#endif //MATERIALCOMPONENT_HPP
