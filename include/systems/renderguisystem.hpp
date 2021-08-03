#ifndef RENDERGUISYSTEM_HPP
#define RENDERGUISYSTEM_HPP


#include <GL/glew.h>
#include <fstream>

#include "view/arcballcamera.hpp"
#include "ecs/system.hpp"
#include "components/positioncomponent.hpp"

/**
 * System that can handle level surface
 */
class RenderGuiSystem : public ecs::System<PositionComponent>
{
public:
    explicit RenderGuiSystem();
    ~RenderGuiSystem();
private:
    void update_state(size_t delta) override;

    void export_settings();
    void laser_settings();
    void video_settings();
    void selection_settings();
    void add_model();

    GLfloat m_aspectRatio;

    bool m_videoSettingsOpen;
    bool m_colorSettingsOpen;
    bool m_laserSettingsOpen;
    bool m_exportSettingsOpen;
    bool m_openExportDialog;
    bool m_selSettingsOpen;

    // Files to load simulation
    std::string m_simFile;
    std::string m_simPath;

    std::string m_modelFile;
    std::string m_modelPath;

    ImFont* m_font;
};

#endif //RENDERGUISYSTEM_HPP
