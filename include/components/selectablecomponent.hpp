#ifndef SELECTABLECOMPONENT_HPP
#define SELECTABLECOMPONENT_HPP

#include "ecs/component.hpp"

struct SelectableComponent : ecs::Component
{
    // Is entity dragged
    bool dragged;
};


#endif //SELECTABLECOMPONENT_HPP
