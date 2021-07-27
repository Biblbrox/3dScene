#ifndef KEYBOARDCOMPONENT_HPP
#define KEYBOARDCOMPONENT_HPP

#include <functional>
#include <SDL_quit.h>

#include "ecs/component.hpp"

struct KeyboardComponent : ecs::Component
{
    std::function<void(const Uint8*)> event_handler;
};

#endif //KEYBOARDCOMPONENT_HPP
