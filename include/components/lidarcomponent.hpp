#ifndef LIDARCOMPONENT_HPP
#define LIDARCOMPONENT_HPP

#include <glm/vec3.hpp>

#include "ecs/component.hpp"

using glm::vec3;
using glm::vec2;
using std::vector;

/**
 * Lidar component
 */
struct LidarComponent: ecs::Component
{
    GLfloat yaw = 0.f;
    GLfloat pitch = 0.f;

    vec2 freq = vec2(0.f);

    // Prism start angles
    vec2 start_angle = vec2(0.f);

    GLfloat refractive_index = 1.5f;

    GLfloat length = 0.f;

    // Dots density
    GLfloat density = 0.f;

    vector<vec3> pattern_points;
    vector<vec3> coll_points;

    // Distance to the object
    GLfloat obj_distance = 0.f;
};


#endif //LIDARCOMPONENT_HPP
