#ifndef LIGHTCOMPONENT_HPP
#define LIGHTCOMPONENT_HPP

#include <glm/vec3.hpp>

#include "ecs/component.hpp"

using glm::vec3;

/**
 * Light source component
 */
struct LightComponent: ecs::Component
{
    vec3 pos = vec3(0.f);
    vec3 ambient = vec3(0.f);
    vec3 diffuse = vec3(0.f);
    vec3 specular = vec3(0.f);
};

#endif //LIGHTCOMPONENT_HPP
