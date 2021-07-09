#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <imgui_impl_sdl.h>
#include <imgui.h>
#include <imgui_impl_opengl3.h>
#include <imgui_internal.h>

#include "systems/renderguisystem.hpp"
#include "components/lidarcomponent.hpp"
#include "components/spritecomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "utils/logger.hpp"
#include "sceneprogram.hpp"
#include "game.hpp"
#include "config.hpp"
#include "utils/math.hpp"
#include "utils/texture.hpp"
#include "view/fpscamera.hpp"
#include "view/lidar.hpp"

using utils::log::Logger;
using boost::format;
using utils::log::program_log_file_name;
using utils::log::Category;
using glm::mat4;
using glm::vec3;
using glm::vec4;
using glm::scale;
using utils::math::operator/;
using utils::texture::genRbo;
using utils::texture::genTexture;


RenderGuiSystem::RenderGuiSystem() : m_videoSettingsOpen(false),
                                     m_colorSettingsOpen(false)

{
    // Setup Dear ImGui context
    IMGUI_CHECKVERSION();
    ImGui::CreateContext();
    ImGuiIO &io = ImGui::GetIO();
    (void) io;
    io.ConfigFlags |= ImGuiConfigFlags_NavEnableKeyboard;     // Enable Keyboard Controls
    io.ConfigFlags |= ImGuiConfigFlags_NavEnableGamepad;      // Enable Gamepad Controls
    io.WantCaptureMouse = true;
    io.WantCaptureKeyboard = true;

    ImGuiStyle &style = ImGui::GetStyle();
    style.WindowRounding = 8.f;
    style.Alpha = 1.0f;
    style.AntiAliasedLines = false;

    io.Fonts->ClearFonts();
    m_font = io.Fonts->AddFontFromFileTTF(
            getResourcePath("fonts/NotoSans-hinted/NotoSans-Medium.ttf").c_str(), 15.f,
            NULL, ImGui::GetIO().Fonts->GetGlyphRangesCyrillic());
    io.Fonts->Build();

    // Setup Platform/Renderer backends
    ImGui_ImplSDL2_InitForOpenGL(Game::getWindow(), Game::getGLContext());
    ImGui_ImplOpenGL3_Init();

    int screen_width = utils::getWindowWidth<GLuint>(*Game::getWindow());
    int screen_height = utils::getWindowHeight<GLuint>(*Game::getWindow());

    m_aspectRatio = static_cast<GLfloat>(screen_width) / screen_height;
}

RenderGuiSystem::~RenderGuiSystem()
{
}

void RenderGuiSystem::update_state(size_t delta)
{
    auto screen_width = utils::getWindowWidth<GLfloat>(*Game::getWindow());
    auto screen_height = utils::getWindowHeight<GLfloat>(*Game::getWindow());

    auto program = SceneProgram::getInstance();
    auto sceneEnt = getEntitiesByTag<SceneComponent>().begin()->second;
    auto sceneComp = sceneEnt->getComponent<SceneComponent>();
    if (sceneComp->isMsaa) {
        // Render texture to window
        glBindFramebuffer(GL_READ_FRAMEBUFFER, sceneComp->sceneBufferMSAA);
        glBindFramebuffer(GL_DRAW_FRAMEBUFFER, sceneComp->sceneBuffer);
        glBlitFramebuffer(0, 0, screen_width, screen_height, 0, 0,
                          screen_width, screen_height,
                          GL_COLOR_BUFFER_BIT, GL_NEAREST);
    }

    glBindFramebuffer(GL_FRAMEBUFFER, 0);
    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);
    glDisable(GL_DEPTH_TEST);
    program->useScreenProgram();

//     Start the Dear ImGui frame
    ImGui_ImplOpenGL3_NewFrame();
    ImGui_ImplSDL2_NewFrame(Game::getWindow());
    ImGui::NewFrame();

    switch (Config::getVal<int>("Theme")) {
        case 0:
            ImGui::StyleColorsLight();
            break;
        case 1:
            ImGui::StyleColorsClassic();
            break;
        case 2:
            ImGui::StyleColorsDark();
            break;
        default:
            break;
    }

    ImGui::PushFont(m_font);
    ImGui::SetNextWindowPos({0, 0});
    ImGui::SetNextWindowSize({static_cast<float>(screen_width),
                              static_cast<float>(screen_height)});
    bool open = true;
    ImGui::Begin("GameWindow", &open, ImGuiWindowFlags_NoResize
                                      | ImGuiWindowFlags_NoScrollbar
                                      | ImGuiWindowFlags_NoScrollWithMouse
                                      | ImGuiWindowFlags_NoTitleBar
                                      | ImGuiWindowFlags_NoBringToFrontOnFocus
                                      | ImGuiWindowFlags_MenuBar);
    {

        ImGui::GetStyle().WindowRounding = 0.0f;// <- Set this on init or use ImGui::PushStyleVar()
        ImGui::GetStyle().ChildRounding = 0.0f;
        ImGui::GetStyle().FrameRounding = 0.0f;
        ImGui::GetStyle().GrabRounding = 0.0f;
        ImGui::GetStyle().PopupRounding = 0.0f;
        ImGui::GetStyle().ScrollbarRounding = 0.0f;

        ImGui::PushItemWidth(ImGui::GetFontSize() * -12);
        if (ImGui::BeginMenuBar())
        {
            if (ImGui::BeginMenu(_("View")))
            {
                if (ImGui::MenuItem(_("Show camera pos"), _("Ctrl+O"))) {
                    Config::addVal("ShowCameraPos",
                                   !Config::getVal<bool>("ShowCameraPos"), "bool");
                }
                ImGui::EndMenu();
            }
            ImGui::EndMenuBar();
        }

        ImGui::Spacing();
        ImGui::BeginTable("table1", 2, ImGuiTableFlags_Borders
                                       | ImGuiTableFlags_Resizable
                                       | ImGuiTableFlags_NoHostExtendX
                                       | ImGuiTableFlags_NoHostExtendY,
                          {0, -1});
        {
            ImGui::TableNextRow();
            ImGui::TableSetColumnIndex(0);
            ImGui::Text("Settings");
            ImGui::Separator();

            ImGui::Checkbox(_("Draw Textures"),
                            &Config::getVal<bool>("DrawTextures"));
            ImGui::Checkbox(_("Draw Leafs"),
                            &Config::getVal<bool>("DrawLeafs"));
            ImGui::Checkbox(_("Draw Rays"),
                            &Config::getVal<bool>("DrawRays"));
            ImGui::Checkbox(_("Draw bounding boxes"),
                            &Config::getVal<bool>("DrawBoundingBoxes"));
            ImGui::Checkbox(_("Check collision"),
                            &Config::getVal<bool>("CheckCollision"));
            ImGui::Checkbox(_("Enable lighting"), &Config::getVal<bool>("EnableLight"));

            ImGui::Text(_("Minimal rect fraction size"));
            ImGui::InputFloat3("##min_rect", glm::value_ptr(
                    Config::getVal<glm::vec3>("MinRectSize")));


            if (ImGui::Button(_("Laser Settings")))
                m_laserSettingsOpen = true;

            if (m_laserSettingsOpen) {
                auto lidarEn = getEntitiesByTag<LidarComponent>().begin()->second;
                auto lidarComp = lidarEn->getComponent<LidarComponent>();
                auto pos = lidarEn->getComponent<PositionComponent>();

                ImGui::Begin(_("Laser settings"), &m_colorSettingsOpen);
                ImGui::Text(_("Laser position"));
                ImGui::InputFloat3("##laser_pos", glm::value_ptr(
                        Config::getVal<glm::vec3>("LaserPos")));

                ImGui::Text(_("Laser yaw"));
                if (ImGui::InputFloat("##laser_yaw", &Config::getVal<GLfloat>("LaserYaw"))) {
                    lidarComp->yaw = Config::getVal<GLfloat>("LaserYaw");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                ImGui::Text(_("Laser pitch"));
                if (ImGui::InputFloat("##laser_pitch", &Config::getVal<GLfloat>("LaserPitch"))) {
                    lidarComp->pitch = Config::getVal<GLfloat>("LaserPitch");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                ImGui::Text(_("Prism frequencies"));
                if (ImGui::InputFloat2("##prism_freq", value_ptr(
                        Config::getVal<vec2>("PrismFreq")))) {
                    lidarComp->freq = Config::getVal<vec2>("PrismFreq");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                ImGui::Text(_("Prism start angle"));
                if (ImGui::InputFloat2("##prism_start_angle", glm::value_ptr(
                        Config::getVal<vec2>("PrismStartAngle")))) {
                    lidarComp->start_angle = Config::getVal<vec2>("PrismStartAngle");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                ImGui::Text(_("Length of rays"));
                if (ImGui::InputFloat("##ray_length", &Config::getVal<GLfloat>("RayLength"))) {
                    lidarComp->length = Config::getVal<GLfloat>("RayLength");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                ImGui::Text(_("Dots density"));
                if (ImGui::InputFloat("##dot_dens", &Config::getVal<GLfloat>("DotDens"))) {
                    lidarComp->density = Config::getVal<GLfloat>("DotDens");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                ImGui::Text(_("Draw pattern"));
                ImGui::Checkbox("##draw_pattern", &Config::getVal<bool>("DrawPattern"));

                ImGui::End();
            }

            ImGui::Text(_("Light position"));
            ImGui::InputFloat3("##light_pos", glm::value_ptr(
                    Config::getVal<glm::vec3>("LightPos")));

            ImGui::Text(_("Tree level show"));
//            ImGui::SameLine();
            ImGui::SliderInt("##tree_level",
                             &Config::getVal<int>("TreeLevelShow"),
                             0, 100);

            ImGui::Checkbox(_("Inverse rotation"),
                            &Config::getVal<bool>("InverseRotation"));

            if (ImGui::Checkbox(_("Edit mode"), &Config::getVal<bool>("EditMode")))
                setGameState(GameStates::EDIT);

            if (ImGui::Button(_("Start simulation")))
                setGameState(GameStates::PLAY);

            if (ImGui::Button(_("Pause simulation")))
                setGameState(GameStates::PAUSE);

            if (ImGui::Button(_("Stop simulation")))
                setGameState(GameStates::STOP);

            if (ImGui::Button(_("Save config")))
                Config::save(Config::getVal<const char *>("ConfigFile"));

            if (ImGui::Button(_("Load config")))
                Config::load(Config::getVal<const char *>("ConfigFile"));

            if (ImGui::Button(_("Save simulation")));

            if (ImGui::Button(_("Load simulation")));

            if (ImGui::Button(_("Color Settings")))
                m_colorSettingsOpen = true;

            if (m_colorSettingsOpen) {
                ImGui::Begin(_("Color settings"), &m_colorSettingsOpen);
                ImGui::Separator();
                ImGui::Text(_("Background color"));
                ImGui::ColorPicker4("##Background color", glm::value_ptr(
                        Config::getVal<vec4>("BackgroundColor")));
                ImGui::Separator();
                ImGui::Text(_("Cell color"));
                ImGui::ColorPicker4("##Cell color", glm::value_ptr(
                        Config::getVal<vec4>("CellColor")));
                ImGui::Separator();
                ImGui::Text(_("Cell border color"));
                ImGui::ColorPicker4("##Cell border color", glm::value_ptr(
                        Config::getVal<vec4>("CellBorderColor")));
                ImGui::Separator();
                ImGui::Checkbox(_("Enable color game(Need simulation restart)"),
                                &Config::getVal<bool>("ColoredLife"));
                ImGui::End();
            }

            if (ImGui::Button(_("Video settings")))
                m_videoSettingsOpen = true;

            if (m_videoSettingsOpen) {
                const char *items[] = {"Light", "Classic", "Dark"};
                ImGui::Begin(_("Video settings"), &m_videoSettingsOpen);
                bool msaaEnabled = Config::getVal<bool>("MSAA");
                if (ImGui::Checkbox("Enable antialiasing(Need game restart)",
                                    &Config::getVal<bool>("MSAA"))
                    || msaaEnabled) {
                    ImGui::Text(_("MSAA Samples"));
                    ImGui::SameLine();
                    ImGui::InputInt("##msaa_samples",
                                    &Config::getVal<int>("MSAASamples"));
                }
                ImGui::Text(_("Application theme:"));
                ImGui::SameLine();
                ImGui::ListBox("", &Config::getVal<int>("Theme"), items, 3);
                ImGui::Text(_("Drag sensitivity:"));
                ImGui::SliderFloat("##mouse_sens",
                                   &Config::getVal<GLfloat>("MouseSens"),
                                   1, 100);
                ImGui::End();
            }

            ImGui::TableSetColumnIndex(1);
            ImGui::Text(_("Render"));
            auto size = ImGui::GetContentRegionAvail();
            GLfloat image_height = size.x / m_aspectRatio;
            size.y = image_height;
            if (!Config::hasKey("ViewportSize"))
                Config::addVal<vec2>("ViewportSize", {size.x, size.y}, "vec2");

            auto pos = ImGui::GetCursorPos();
            auto cur = utils::getMousePos<GLfloat>();

            if (!Config::hasKey("ViewportPos"))
                Config::addVal<vec2>("ViewportPos", {pos.x, pos.y}, "vec2");

            if (getGameState() != GameStates::STOP)
                ImGui::Image((ImTextureID) sceneComp->texture, size, {0, 1}, {1, 0});
        }

        if (Config::getVal<bool>("ShowCameraPos")) {
            ImGui::TableNextRow();
            ImGui::TableSetColumnIndex(1);
            auto pos = FpsCamera::getInstance()->getPos();
            std::string camera_pos = _("Camera position");
            ImGui::Text((format("%1$s: %2$.2f, %3$.2f, %4$.2f")
                         % camera_pos % pos.x % pos.y % pos.z).str().c_str());
        }

        ImGui::EndTable();
    }
    ImGui::End();

    ImGui::PopFont();

    ImGui::Render();
    ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());
}
