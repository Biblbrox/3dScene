#ifndef RENDERSCENESYSTEM_HPP
#define RENDERSCENESYSTEM_HPP

#include <GL/glew.h>
#include <fstream>

#include "components/positioncomponent.hpp"
#include "ecs/system.hpp"
#include "view/arcballcamera.hpp"

/**
 * System that can handle level surface
 */
class RenderSceneSystem : public ecs::System<PositionComponent> {
  public:
    explicit RenderSceneSystem();
    ~RenderSceneSystem();

  private:
    void renderScene();
    void drawSprites();
    void drawSpritesInstancing();
    void drawBoundingBoxes();
    void drawToFramebuffer();
    void drawTerrain();
    void makeScreenshot(const glm::mat4 &perspective, const glm::mat4 &view,
                        const std::string &path, const vec2i &size);
    void setupLighting();
    void drawAxis();

    /**
     * Calculate intrinsic parameters for opengl camera by using checkerboard pattern
     */
    void calibrateCamera(unsigned int num, const std::string &dir);

    /**
     * Make multiple screenshots of checkerboard pattern and save them to directory dir
     * @param num
     * @param dir
     */
    void makeCheckerboardPhotos(const std::vector<glm::mat4> &transforms, std::string dir);
    void drawSkybox();
    void fillInstanceAttributes();

    void update_state(size_t delta) override;
};

#endif // RENDERSCENESYSTEM_HPP
