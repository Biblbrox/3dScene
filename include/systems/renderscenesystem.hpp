#ifndef RENDERSCENESYSTEM_HPP
#define RENDERSCENESYSTEM_HPP

#include <GL/glew.h>
#include <fstream>

#include "view/arcballcamera.hpp"
#include "components/textcomponent.hpp"
#include "ecs/system.hpp"
#include "components/positioncomponent.hpp"

/**
 * System that can handle level surface
 */
class RenderSceneSystem : public ecs::System<PositionComponent, TextComponent>
{
public:
    explicit RenderSceneSystem();
    ~RenderSceneSystem();

	void drawLidarIntersect();
private:
    void drawSprites();
    void drawBoundingBoxes();
    void drawToFramebuffer();
    void update_state(size_t delta) override;

    std::ofstream col_stream;
};

#endif //RENDERSCENESYSTEM_HPP
