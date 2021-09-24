#ifndef RENDERSCENESYSTEM_HPP
#define RENDERSCENESYSTEM_HPP

#include <GL/glew.h>
#include <fstream>

#include "view/arcballcamera.hpp"
#include "ecs/system.hpp"
#include "components/positioncomponent.hpp"

/**
 * System that can handle level surface
 */
class RenderSceneSystem : public ecs::System<PositionComponent>
{
public:
    explicit RenderSceneSystem();
    ~RenderSceneSystem();

private:
    void renderScene();
    void drawSprites();
    void drawBoundingBoxes();
    void drawToFramebuffer();
    void drawTerrain();
    void makeScreenshot();
    void update_state(size_t delta) override;
};

#endif //RENDERSCENESYSTEM_HPP
