#ifndef KEYBOARDSYSTEM_HPP
#define KEYBOARDSYSTEM_HPP

#include <ecs/system.hpp>
#include <ecs/entity.hpp>
#include <glm/vec2.hpp>

#include "components/keyboardcomponent.hpp"

using glm::vec3;

class KeyboardSystem : public ecs::System<KeyboardComponent>
{
public:
    explicit KeyboardSystem();
private:
    void update_state(size_t delta) override;

    std::pair<bool, std::shared_ptr<ecs::Entity>>
    findUnderPointer(const glm::vec2& pointer_pos);
    void processMouseDrag();
    void processMouseSelect();

    bool m_middlePressed;
    bool m_leftMousePressed;

    bool m_dragEnabled;
    bool m_isSelected;

    vec3 m_dragStartPos;

    std::shared_ptr<ecs::Entity> m_draggedObj;
};

#endif //KEYBOARDSYSTEM_HPP
