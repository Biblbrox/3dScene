#ifndef SPRITECOMPONENT_HPP
#define SPRITECOMPONENT_HPP

#include "render/sprite.hpp"
#include "ecs/component.hpp"

struct SpriteComponent : ecs::Component
{
    std::shared_ptr<Sprite> sprite = nullptr;
};

#endif //SPRITECOMPONENT_HPP
