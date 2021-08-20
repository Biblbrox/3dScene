#ifndef SPRITECOMPONENT_HPP
#define SPRITECOMPONENT_HPP

#include "render/sprite.hpp"
#include "ecs/component.hpp"

struct SpriteComponent : ecs::Component
{

    SpriteComponent() : sprite(nullptr)
    {

    }

    SpriteComponent(SpriteComponent&& spriteComp)
    {
        sprite = std::make_shared<Sprite>(spriteComp.sprite->getModelFile(),
                                          spriteComp.sprite->getSize(),
                                          spriteComp.sprite->isUvFlipped());
    }

    SpriteComponent(const SpriteComponent& spriteComp)
    {
        if (!spriteComp.sprite)
            return;

        sprite = std::make_shared<Sprite>(spriteComp.sprite->getModelFile(),
                                          spriteComp.sprite->getSize(),
                                          spriteComp.sprite->isUvFlipped());
    }

    SpriteComponent& operator=(SpriteComponent&& spriteComp)
    {
        sprite = std::make_shared<Sprite>(spriteComp.sprite->getModelFile(),
                                          spriteComp.sprite->getSize(),
                                          spriteComp.sprite->isUvFlipped());
        return *this;
    }

    SpriteComponent& operator=(const SpriteComponent& spriteComp)
    {
        sprite = std::make_shared<Sprite>(spriteComp.sprite->getModelFile(),
                                          spriteComp.sprite->getSize(),
                                          spriteComp.sprite->isUvFlipped());

        return *this;
    }

    std::shared_ptr<Sprite> sprite = nullptr;
};

#endif //SPRITECOMPONENT_HPP
