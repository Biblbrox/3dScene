#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <imgui_impl_sdl.h>
#include <imgui.h>
#include <imgui_impl_opengl3.h>
#include <imgui_internal.h>

#include "systems/renderguisystem.hpp"
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

using utils::log::Logger;
using boost::format;
using utils::log::program_log_file_name;
using utils::log::Category;
using glm::mat4;
using glm::vec3;
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

    // Start the Dear ImGui frame
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
        ImGui::PushItemWidth(ImGui::GetFontSize() * -12);
        if (ImGui::BeginMenuBar())
        {
            if (ImGui::BeginMenu("View"))
            {
                if (ImGui::MenuItem("Show camera pos", "Ctrl+O")) {
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

            ImGui::Checkbox("Draw Textures",
                            &Config::getVal<bool>("DrawTextures"));
            ImGui::Checkbox("Draw Leafs",
                            &Config::getVal<bool>("DrawLeafs"));
            ImGui::Checkbox("Draw Rays",
                            &Config::getVal<bool>("DrawRays"));
            ImGui::Checkbox("Draw bounding boxes",
                            &Config::getVal<bool>("DrawBoundingBoxes"));
            ImGui::Checkbox("Check collision",
                            &Config::getVal<bool>("CheckCollision"));

            ImGui::Text("Minimal rect fraction size");
            ImGui::InputFloat3("##min_rect", glm::value_ptr(
                    Config::getVal<glm::vec3>("MinRectSize")));

            ImGui::Text("Laser position");
            ImGui::InputFloat3("##laser_pos", glm::value_ptr(
                    Config::getVal<glm::vec3>("LaserPos")));

            ImGui::Text("Prism frequencies");
            ImGui::InputFloat2("##prism_freq", glm::value_ptr(
                    Config::getVal<glm::vec2>("PrismFreq")));

            ImGui::Text("Prism start angle");
            ImGui::InputFloat2("##prism_start_angle", glm::value_ptr(
                    Config::getVal<glm::vec2>("PrismStartAngle")));

            ImGui::Text("Tree level show");
//            ImGui::SameLine();
            ImGui::SliderInt("##tree_level",
                             &Config::getVal<int>("TreeLevelShow"),
                             0, 100);

            ImGui::Checkbox("Inverse rotation",
                            &Config::getVal<bool>("InverseRotation"));

            if (ImGui::Checkbox("Edit mode", &Config::getVal<bool>("EditMode")))
                setGameState(GameStates::EDIT);

            if (ImGui::Button("Start simulation"))
                setGameState(GameStates::PLAY);

            if (ImGui::Button("Pause simulation"))
                setGameState(GameStates::PAUSE);

            if (ImGui::Button("Stop simulation"))
                setGameState(GameStates::STOP);

            if (ImGui::Button("Save config"))
                Config::save(Config::getVal<const char *>("ConfigFile"));

            if (ImGui::Button("Load config"))
                Config::load(Config::getVal<const char *>("ConfigFile"));

            if (ImGui::Button("Save simulation"));

            if (ImGui::Button("Load simulation"));

            if (ImGui::Button("Color Settings"))
                m_colorSettingsOpen = true;

            if (m_colorSettingsOpen) {
                ImGui::Begin("Color settings", &m_colorSettingsOpen);
                ImGui::Separator();
                ImGui::Text("Background color");
                ImGui::ColorPicker4("##Background color", glm::value_ptr(
                        Config::getVal<glm::vec4>("BackgroundColor")));
                ImGui::Separator();
                ImGui::Text("Cell color");
                ImGui::ColorPicker4("##Cell color", glm::value_ptr(
                        Config::getVal<glm::vec4>("CellColor")));
                ImGui::Separator();
                ImGui::Text("Cell border color");
                ImGui::ColorPicker4("##Cell border color", glm::value_ptr(
                        Config::getVal<glm::vec4>("CellBorderColor")));
                ImGui::Separator();
                ImGui::Checkbox("Enable color game(Need simulation restart)",
                                &Config::getVal<bool>("ColoredLife"));
                ImGui::End();
            }

            if (ImGui::Button("Video settings"))
                m_videoSettingsOpen = true;

            if (m_videoSettingsOpen) {
                const char *items[] = {"Light", "Classic", "Dark"};
                ImGui::Begin("Video settings", &m_videoSettingsOpen);
                bool msaaEnabled = Config::getVal<bool>("MSAA");
                if (ImGui::Checkbox("Enable antialiasing(Need game restart)",
                                    &Config::getVal<bool>("MSAA"))
                    || msaaEnabled) {
                    ImGui::Text("MSAA Samples");
                    ImGui::SameLine();
                    ImGui::InputInt("##msaa_samples",
                                    &Config::getVal<int>("MSAASamples"));
                }
                ImGui::Text("Application theme:");
                ImGui::SameLine();
                ImGui::ListBox("", &Config::getVal<int>("Theme"), items, 3);
                ImGui::Text("Drag sensitivity:");
                ImGui::SliderFloat("##mouse_sens",
                                   &Config::getVal<GLfloat>("MouseSens"),
                                   1, 100);
                ImGui::End();
            }

            ImGui::TableSetColumnIndex(1);
            ImGui::Text("Render");
            auto size = ImGui::GetContentRegionAvail();
            GLfloat image_height = size.x / m_aspectRatio;
            size.y = image_height;
            if (!Config::hasKey("ViewportSize"))
                Config::addVal<glm::vec2>("ViewportSize", {size.x, size.y}, "vec2");

            auto pos = ImGui::GetCursorPos();
            auto cur = utils::getMousePos<GLfloat>();

            if (!Config::hasKey("ViewportPos"))
                Config::addVal<glm::vec2>("ViewportPos", {pos.x, pos.y}, "vec2");

            if (getGameState() != GameStates::STOP)
                ImGui::Image((ImTextureID) sceneComp->texture, size, {0, 1}, {1, 0});
        }

        if (Config::getVal<bool>("ShowCameraPos")) {
            ImGui::TableNextRow();
            ImGui::TableSetColumnIndex(1);
            auto pos = FpsCamera::getInstance()->getPos();
            ImGui::Text((format("Camera position: %1$.2f, %2$.2f, %3$.2f")
                         % pos.x % pos.y % pos.z).str().c_str());
        }

        ImGui::EndTable();
    }
    ImGui::End();

    ImGui::Render();
    ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());
}
