#ifndef PHYSICSSYSTEM_HPP
#define PHYSICSSYSTEM_HPP

#include "ecs/system.hpp"

class PhysicsSystem : public ecs::System <>
{
public:
    void update_state(size_t delta) override;
};

#endif //PHYSICSSYSTEM_HPP
