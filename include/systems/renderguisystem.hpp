#ifndef RENDERGUISYSTEM_HPP
#define RENDERGUISYSTEM_HPP


#include <GL/glew.h>
#include <fstream>

#include "view/arcballcamera.hpp"
#include "components/textcomponent.hpp"
#include "ecs/system.hpp"
#include "components/positioncomponent.hpp"

/**
 * System that can handle level surface
 */
class RenderGuiSystem : public ecs::System<PositionComponent, TextComponent>
{
public:
    explicit RenderGuiSystem();
    ~RenderGuiSystem();
private:
    void update_state(size_t delta) override;
    void export_settings();

    GLfloat m_aspectRatio;

    bool m_videoSettingsOpen;
    bool m_colorSettingsOpen;
    bool m_laserSettingsOpen;
    bool m_exportSettingsOpen;
    bool m_openExportDialog;

    ImFont* m_font;
};

#endif //RENDERGUISYSTEM_HPP
