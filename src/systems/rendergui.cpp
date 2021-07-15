#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <imgui_stdlib.h>
#include <imgui_impl_opengl3.h>
#include <imgui_internal.h>
#include <imgui_impl_sdl.h>
#include <filesystem>

#include "systems/renderguisystem.hpp"
#include "components/lidarcomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "utils/logger.hpp"
#include "utils/fs.hpp"
#include "sceneprogram.hpp"
#include "game.hpp"
#include "config.hpp"
#include "utils/math.hpp"
#include "utils/texture.hpp"
#include "view/fpscamera.hpp"
#include "view/lidar.hpp"

using std::string;

using utils::log::Logger;
using utils::log::program_log_file_name;
using utils::log::Category;
using utils::math::operator/;
using utils::texture::genRbo;
using utils::texture::genTexture;

using boost::format;

using glm::mat4;
using glm::vec3;
using glm::vec4;
using glm::scale;


RenderGuiSystem::RenderGuiSystem() : m_videoSettingsOpen(false),
                                     m_colorSettingsOpen(false),
                                     m_exportSettingsOpen(false)

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
    using namespace ImGui;

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

    PushFont(m_font);
    SetNextWindowPos({0, 0});
    SetNextWindowSize({static_cast<float>(screen_width),
                              static_cast<float>(screen_height)});
    bool open = true;
    ImGui::Begin("GameWindow", &open, ImGuiWindowFlags_NoResize
                                      | ImGuiWindowFlags_NoScrollbar
                                      | ImGuiWindowFlags_NoScrollWithMouse
                                      | ImGuiWindowFlags_NoTitleBar
                                      | ImGuiWindowFlags_NoBringToFrontOnFocus
                                      | ImGuiWindowFlags_MenuBar);
    {

        GetStyle().WindowRounding = 0.0f;// <- Set this on init or use ImGui::PushStyleVar()
        GetStyle().ChildRounding = 0.0f;
        GetStyle().FrameRounding = 0.0f;
        GetStyle().GrabRounding = 0.0f;
        GetStyle().PopupRounding = 0.0f;
        GetStyle().ScrollbarRounding = 0.0f;

        PushItemWidth(ImGui::GetFontSize() * -12);
        if (BeginMenuBar())
        {
            if (BeginMenu(_("View")))
            {
                if (MenuItem(_("Show camera pos"), _("Ctrl+O"))) {
                    Config::addVal("ShowCameraPos",
                                   !Config::getVal<bool>("ShowCameraPos"), "bool");
                }
                EndMenu();
            }
            EndMenuBar();
        }

        Spacing();
        BeginTable("table1", 2, ImGuiTableFlags_Borders
                                       | ImGuiTableFlags_Resizable
                                       | ImGuiTableFlags_NoHostExtendX
                                       | ImGuiTableFlags_NoHostExtendY,
                          {0, -1});
        {
            TableNextRow();
            TableSetColumnIndex(0);
            Text("Settings");
            Separator();

            Checkbox(_("Draw Vertices"),
                     &Config::getVal<bool>("DrawVertices"));
            Checkbox(_("Draw Leafs"),
                     &Config::getVal<bool>("DrawLeafs"));
            Checkbox(_("Draw Rays"),
                     &Config::getVal<bool>("DrawRays"));
            Checkbox(_("Draw bounding boxes"),
                     &Config::getVal<bool>("DrawBoundingBoxes"));
            Checkbox(_("Check collision"),
                     &Config::getVal<bool>("CheckCollision"));
            Checkbox(_("Enable lighting"), &Config::getVal<bool>("EnableLight"));

            Text(_("Minimal rect fraction size"));
            InputFloat3("##min_rect", glm::value_ptr(
                    Config::getVal<glm::vec3>("MinRectSize")));


            if (ImGui::Button(_("Laser Settings")))
                m_laserSettingsOpen = true;

            if (m_laserSettingsOpen) {
                auto lidarEn = getEntitiesByTag<LidarComponent>().begin()->second;
                auto lidarComp = lidarEn->getComponent<LidarComponent>();
                auto pos = lidarEn->getComponent<PositionComponent>();

                Begin(_("Laser settings"), &m_laserSettingsOpen);
                Text(_("Laser position"));
                if (InputFloat3("##laser_pos", glm::value_ptr(
                        Config::getVal<vec3>("LaserPos")))) {
                    pos->pos = Config::getVal<vec3>("LaserPos");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                Text(_("Laser yaw"));
                if (InputFloat("##laser_yaw", &Config::getVal<GLfloat>("LaserYaw"))) {
                    lidarComp->yaw = Config::getVal<GLfloat>("LaserYaw");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                Text(_("Laser pitch"));
                if (InputFloat("##laser_pitch", &Config::getVal<GLfloat>("LaserPitch"))) {
                    lidarComp->pitch = Config::getVal<GLfloat>("LaserPitch");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                Text(_("Prism frequencies"));
                if (InputFloat2("##prism_freq", value_ptr(
                        Config::getVal<vec2>("PrismFreq")))) {
                    lidarComp->freq = Config::getVal<vec2>("PrismFreq");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                Text(_("Prism start angle"));
                if (InputFloat2("##prism_start_angle", glm::value_ptr(
                        Config::getVal<vec2>("PrismStartAngle")))) {
                    lidarComp->start_angle = Config::getVal<vec2>("PrismStartAngle");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                Text(_("Object distance"));
                if (InputFloat("##obj_distance",
                               &Config::getVal<GLfloat>("ObjDistance"))) {
                    lidarComp->obj_distance = Config::getVal<GLfloat>("ObjDistance");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                Text(_("Length of rays"));
                if (InputFloat("##ray_length", &Config::getVal<GLfloat>("RayLength"))) {
                    lidarComp->length = Config::getVal<GLfloat>("RayLength");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                Text(_("Dots density"));
                if (InputFloat("##dot_dens", &Config::getVal<GLfloat>("DotDens"))) {
                    lidarComp->density = Config::getVal<GLfloat>("DotDens");
                    Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                                lidarComp->yaw, lidarComp->pitch);

                    lidarComp->pattern_points = lidar.risleyPattern2(
                            lidarComp->freq, lidarComp->start_angle,
                            lidarComp->density);
                }

                Text(_("Draw pattern"));
                Checkbox("##draw_pattern", &Config::getVal<bool>("DrawPattern"));

                End();
            }

            Text(_("Light position"));
            InputFloat3("##light_pos", glm::value_ptr(
             Config::getVal<glm::vec3>("LightPos")));

            Text(_("Tree level show"));
            SliderInt("##tree_level",
                             &Config::getVal<int>("TreeLevelShow"),
                             0, 100);

            Checkbox(_("Inverse rotation"),
                     &Config::getVal<bool>("InverseRotation"));

            if (Checkbox(_("Edit mode"), &Config::getVal<bool>("EditMode")))
                setGameState(GameStates::EDIT);

            if (Button(_("Start simulation")))
                setGameState(GameStates::PLAY);

            if (Button(_("Pause simulation")))
                setGameState(GameStates::PAUSE);

            if (Button(_("Stop simulation")))
                setGameState(GameStates::STOP);

            if (Button(_("Save config")))
                Config::save(Config::getVal<const char *>("ConfigFile"));

            if (Button(_("Load config")))
                Config::load(Config::getVal<const char *>("ConfigFile"));

            if (Button(_("Save simulation"))) {
                auto en = m_ecsManager->getEntities();
                utils::fs::saveSimJson(getResourcePath("pos"), en);
            }

            if (Button(_("Load simulation"))) {
//                utils::fs::saveSimJson(getResourcePath("pos"));
            }

            if (Button(_("Color Settings")))
                m_colorSettingsOpen = true;

            if (m_colorSettingsOpen) {
                Begin(_("Color settings"), &m_colorSettingsOpen);
                Separator();
                Text(_("Background color"));
                ColorPicker4("##Background color", glm::value_ptr(
                        Config::getVal<vec4>("BackgroundColor")));
                End();
            }

            if (ImGui::Button(_("Export settings")))
                m_exportSettingsOpen = true;

            if (m_exportSettingsOpen)
                export_settings();

            if (Button(_("Video settings")))
                m_videoSettingsOpen = true;

            if (m_videoSettingsOpen) {
                const char *items[] = {"Light", "Classic", "Dark"};
                Begin(_("Video settings"), &m_videoSettingsOpen);
                bool msaaEnabled = Config::getVal<bool>("MSAA");
                if (Checkbox(_("Enable antialiasing(Need game restart)"),
                             &Config::getVal<bool>("MSAA"))
                    || msaaEnabled) {
                    Text(_("MSAA Samples"));
                    SameLine();
                    InputInt("##msaa_samples",
                                    &Config::getVal<int>("MSAASamples"));
                }
                Text(_("Application theme:"));
                SameLine();
                ListBox("", &Config::getVal<int>("Theme"), items, 3);
                Text(_("Drag sensitivity:"));
                SliderFloat("##mouse_sens", &Config::getVal<GLfloat>("MouseSens"),
                            1, 100);
                End();
            }

            TableSetColumnIndex(1);
            Text(_("Render"));
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
            TableNextRow();
            TableSetColumnIndex(1);
            auto pos = FpsCamera::getInstance()->getPos();
            std::string camera_pos = _("Camera position");
            Text((format("%1$s: %2$.2f, %3$.2f, %4$.2f")
                         % camera_pos % pos.x % pos.y % pos.z).str().c_str());
        }

        EndTable();
    }
    End();

    PopFont();

    Render();
    ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());
}

void RenderGuiSystem::export_settings()
{
    using namespace ImGui;

    Begin(_("Настройки экспорта"), &m_exportSettingsOpen);
    Text(_("Export file name"));
    auto& buffer = Config::getVal<string>("ExportFileName");
    InputText("##Export file name", &buffer);

    Text(_("Export data type"));
    const char* items[] = {"Cartesian", "Polar"};
    ListBox("##Export type", &Config::getVal<int>("ExportType"), items, 2);

    int type = Config::getVal<int>("ExportType");
    string tmp_file = getResourcePath(Config::getVal<string>("DataFileTmp"));
    string out_file = getResourcePath(Config::getVal<string>("ExportFileName"));

    auto write_data = [this](const string& tmp_file, const string& out_file, int type) {
        if (type == 0) {
            utils::fs::saveLidarDataCart(tmp_file, out_file);
        } else {
            auto lidarEn = getEntitiesByTag<LidarComponent>().begin()->second;
            auto pos = lidarEn->getComponent<PositionComponent>();
            utils::fs::saveLidarDataSphere(tmp_file, out_file, pos->pos);
        }
    };


    if (Button(_("Export"))) {
        if (std::filesystem::exists(std::filesystem::absolute(out_file))) {
            m_openExportDialog = true;
        } else {
            write_data(tmp_file, out_file, type);
        }
    }

    if (m_openExportDialog) {
        OpenPopup("Warning");
        if (BeginPopupModal(_("Warning"), nullptr)) {
            Text(_("File exists. Do you want to rewrite it?"));
            if (Button(_("Yes"))) {
                write_data(tmp_file, out_file, type);
                m_openExportDialog = false;
                ImGui::CloseCurrentPopup();
            }

            if (Button(_("No"))) {
                m_openExportDialog = false;
                ImGui::CloseCurrentPopup();
            }

            ImGui::EndPopup();
        }
    }

    End();
}
