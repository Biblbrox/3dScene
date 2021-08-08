#ifndef LIDARSYSTEM_HPP
#define LIDARSYSTEM_HPP

#include <GL/glew.h>
#include <fstream>

#include "ecs/system.hpp"
#include "view/lidar.hpp"

class LidarSystem: public ecs::System<>
{
public:
    ~LidarSystem();
    LidarSystem();
private:
    void update_state(size_t delta) override;

    void drawLidarIntersect();

    std::ofstream col_stream;
    bool m_posChanged;
    glm::vec3 m_prevPos;
};


#endif //LIDARSYSTEM_HPP
