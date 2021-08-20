#ifndef GLOBALLIGHTCOMPONENT_HPP
#define GLOBALLIGHTCOMPONENT_HPP

#include <glm/vec3.hpp>

#include "ecs/component.hpp"

using glm::vec3;

/**
 * Direction light componentx
 */
struct GlobalLightComponent: ecs::Component
{
    vec3 direction = {0.f, 1.f, 0.f};
    vec3 ambient = vec3(0.f);
    vec3 diffuse = vec3(0.f);
    vec3 specular = vec3(0.f);
};

#endif //GLOBALLIGHTCOMPONENT_HPP
