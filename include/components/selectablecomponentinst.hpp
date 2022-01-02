#ifndef SELECTABLECOMPONENTINST_HPP
#define SELECTABLECOMPONENTINST_HPP

#include "ecs/component.hpp"

struct Selectable 
{
    // Is entity dragged
    bool dragged = false;

    bool selected = false;
};

struct SelectableComponentInst : ecs::Component
{
    std::vector<Selectable> selectable;
};


#endif //SELECTABLECOMPONENTINST_HPP
