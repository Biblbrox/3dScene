#ifndef MOONLANDER_KEYBOARDSYSTEM_HPP
#define MOONLANDER_KEYBOARDSYSTEM_HPP

#include <ecs/system.hpp>
#include <ecs/entity.hpp>

#include "components/keyboardcomponent.hpp"

class KeyboardSystem : public ecs::System<KeyboardComponent>
{
public:
    explicit KeyboardSystem();
private:
    void update_state(size_t delta) override;
    void processMouseDrag();

    bool m_middlePressed;
    bool m_leftMousePressed;
    bool m_dragEnabled;

    std::shared_ptr<ecs::Entity> m_draggedObj;
};

#endif //MOONLANDER_KEYBOARDSYSTEM_HPP
