#ifndef SELECTABLECOMPONENT_HPP
#define SELECTABLECOMPONENT_HPP

#include "ecs/component.hpp"

struct SelectableComponent : ecs::Component
{
    // Is entity dragged
    bool dragged = false;

    bool selected = false;
};


#endif //SELECTABLECOMPONENT_HPP
