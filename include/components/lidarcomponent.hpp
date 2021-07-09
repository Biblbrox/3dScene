#ifndef LIDARCOMPONENT_HPP
#define LIDARCOMPONENT_HPP

#include <glm/vec3.hpp>

#include "ecs/component.hpp"

using glm::vec3;
using std::vector;

/**
 * Lidar component
 */
struct LidarComponent: ecs::Component
{
    GLfloat yaw;
    GLfloat pitch;

    vec2 freq;

    // Prism start angles
    vec2 start_angle;

    GLfloat length;

    // Dots density
    GLfloat density;

    vector<vec3> pattern_points;
};


#endif //LIDARCOMPONENT_HPP
