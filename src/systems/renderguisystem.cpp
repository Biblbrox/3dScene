#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <imgui_stdlib.h>
#include <imgui_impl_opengl3.h>
#include <imgui_internal.h>
#include <imgui_impl_sdl.h>
#include <ImGuiFileDialog.h>
#include <imgui.h>
#include <filesystem>

#include "systems/renderguisystem.hpp"
#include "components/lidarcomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/movablecomponent.hpp"
#include "logger/logger.hpp"
#include "utils/fs.hpp"
#include "utils/collision.hpp"
#include "sceneprogram.hpp"
#include "game.hpp"
#include "config.hpp"
#include "utils/math.hpp"
#include "utils/texture.hpp"
#include "view/fpscamera.hpp"
#include "view/lidar.hpp"

using std::string;

using logger::Logger;
using logger::program_log_file_name;
using logger::Category;
using math::operator/;
using utils::texture::genRbo;
using utils::texture::genTexture;

using boost::format;

using glm::mat4;
using glm::vec3;
using glm::vec4;
using glm::scale;
using glm::epsilon;

// From https://github.com/ocornut/imgui/issues/707#issuecomment-468798935
inline void Style()
{
    ImGuiStyle & style = ImGui::GetStyle();
    ImVec4 * colors = style.Colors;

    /// 0 = FLAT APPEARENCE
    /// 1 = MORE "3D" LOOK
    int is3D = 1;

    colors[ImGuiCol_Text]                   = ImVec4(1.00f, 1.00f, 1.00f, 1.00f);
    colors[ImGuiCol_TextDisabled]           = ImVec4(0.40f, 0.40f, 0.40f, 1.00f);
    colors[ImGuiCol_ChildBg]                = ImVec4(0.25f, 0.25f, 0.25f, 1.00f);
    colors[ImGuiCol_WindowBg]               = ImVec4(0.25f, 0.25f, 0.25f, 1.00f);
    colors[ImGuiCol_PopupBg]                = ImVec4(0.25f, 0.25f, 0.25f, 1.00f);
    colors[ImGuiCol_Border]                 = ImVec4(0.12f, 0.12f, 0.12f, 0.71f);
    colors[ImGuiCol_BorderShadow]           = ImVec4(1.00f, 1.00f, 1.00f, 0.06f);
    colors[ImGuiCol_FrameBg]                = ImVec4(0.42f, 0.42f, 0.42f, 0.54f);
    colors[ImGuiCol_FrameBgHovered]         = ImVec4(0.42f, 0.42f, 0.42f, 0.40f);
    colors[ImGuiCol_FrameBgActive]          = ImVec4(0.56f, 0.56f, 0.56f, 0.67f);
    colors[ImGuiCol_TitleBg]                = ImVec4(0.19f, 0.19f, 0.19f, 1.00f);
    colors[ImGuiCol_TitleBgActive]          = ImVec4(0.22f, 0.22f, 0.22f, 1.00f);
    colors[ImGuiCol_TitleBgCollapsed]       = ImVec4(0.17f, 0.17f, 0.17f, 0.90f);
    colors[ImGuiCol_MenuBarBg]              = ImVec4(0.335f, 0.335f, 0.335f, 1.000f);
    colors[ImGuiCol_ScrollbarBg]            = ImVec4(0.24f, 0.24f, 0.24f, 0.53f);
    colors[ImGuiCol_ScrollbarGrab]          = ImVec4(0.41f, 0.41f, 0.41f, 1.00f);
    colors[ImGuiCol_ScrollbarGrabHovered]   = ImVec4(0.52f, 0.52f, 0.52f, 1.00f);
    colors[ImGuiCol_ScrollbarGrabActive]    = ImVec4(0.76f, 0.76f, 0.76f, 1.00f);
    colors[ImGuiCol_CheckMark]              = ImVec4(0.65f, 0.65f, 0.65f, 1.00f);
    colors[ImGuiCol_SliderGrab]             = ImVec4(0.52f, 0.52f, 0.52f, 1.00f);
    colors[ImGuiCol_SliderGrabActive]       = ImVec4(0.64f, 0.64f, 0.64f, 1.00f);
    colors[ImGuiCol_Button]                 = ImVec4(0.54f, 0.54f, 0.54f, 0.35f);
    colors[ImGuiCol_ButtonHovered]          = ImVec4(0.52f, 0.52f, 0.52f, 0.59f);
    colors[ImGuiCol_ButtonActive]           = ImVec4(0.76f, 0.76f, 0.76f, 1.00f);
    colors[ImGuiCol_Header]                 = ImVec4(0.38f, 0.38f, 0.38f, 1.00f);
    colors[ImGuiCol_HeaderHovered]          = ImVec4(0.47f, 0.47f, 0.47f, 1.00f);
    colors[ImGuiCol_HeaderActive]           = ImVec4(0.76f, 0.76f, 0.76f, 0.77f);
    colors[ImGuiCol_Separator]              = ImVec4(0.000f, 0.000f, 0.000f, 0.137f);
    colors[ImGuiCol_SeparatorHovered]       = ImVec4(0.700f, 0.671f, 0.600f, 0.290f);
    colors[ImGuiCol_SeparatorActive]        = ImVec4(0.702f, 0.671f, 0.600f, 0.674f);
    colors[ImGuiCol_ResizeGrip]             = ImVec4(0.26f, 0.59f, 0.98f, 0.25f);
    colors[ImGuiCol_ResizeGripHovered]      = ImVec4(0.26f, 0.59f, 0.98f, 0.67f);
    colors[ImGuiCol_ResizeGripActive]       = ImVec4(0.26f, 0.59f, 0.98f, 0.95f);
    colors[ImGuiCol_PlotLines]              = ImVec4(0.61f, 0.61f, 0.61f, 1.00f);
    colors[ImGuiCol_PlotLinesHovered]       = ImVec4(1.00f, 0.43f, 0.35f, 1.00f);
    colors[ImGuiCol_PlotHistogram]          = ImVec4(0.90f, 0.70f, 0.00f, 1.00f);
    colors[ImGuiCol_PlotHistogramHovered]   = ImVec4(1.00f, 0.60f, 0.00f, 1.00f);
    colors[ImGuiCol_TextSelectedBg]         = ImVec4(0.73f, 0.73f, 0.73f, 0.35f);
    colors[ImGuiCol_ModalWindowDimBg]       = ImVec4(0.80f, 0.80f, 0.80f, 0.35f);
    colors[ImGuiCol_DragDropTarget]         = ImVec4(1.00f, 1.00f, 0.00f, 0.90f);
    colors[ImGuiCol_NavHighlight]           = ImVec4(0.26f, 0.59f, 0.98f, 1.00f);
    colors[ImGuiCol_NavWindowingHighlight]  = ImVec4(1.00f, 1.00f, 1.00f, 0.70f);
    colors[ImGuiCol_NavWindowingDimBg]      = ImVec4(0.80f, 0.80f, 0.80f, 0.20f);

    style.PopupRounding = 3;

    style.WindowPadding = ImVec2(4, 4);
    style.FramePadding  = ImVec2(6, 4);
    style.ItemSpacing   = ImVec2(6, 2);

    style.ScrollbarSize = 18;

    style.WindowBorderSize = 1;
    style.ChildBorderSize  = 1;
    style.PopupBorderSize  = 1;
    style.FrameBorderSize  = is3D;

    style.WindowRounding    = 3;
    style.ChildRounding     = 3;
    style.FrameRounding     = 3;
    style.ScrollbarRounding = 2;
    style.GrabRounding      = 3;

	#ifdef IMGUI_HAS_DOCK
    style.TabBorderSize = is3D;
    style.TabRounding   = 3;

    colors[ImGuiCol_DockingEmptyBg]     = ImVec4(0.38f, 0.38f, 0.38f, 1.00f);
    colors[ImGuiCol_Tab]                = ImVec4(0.25f, 0.25f, 0.25f, 1.00f);
    colors[ImGuiCol_TabHovered]         = ImVec4(0.40f, 0.40f, 0.40f, 1.00f);
    colors[ImGuiCol_TabActive]          = ImVec4(0.33f, 0.33f, 0.33f, 1.00f);
    colors[ImGuiCol_TabUnfocused]       = ImVec4(0.25f, 0.25f, 0.25f, 1.00f);
    colors[ImGuiCol_TabUnfocusedActive] = ImVec4(0.33f, 0.33f, 0.33f, 1.00f);
    colors[ImGuiCol_DockingPreview]     = ImVec4(0.85f, 0.85f, 0.85f, 0.28f);

    if (ImGui::GetIO().ConfigFlags & ImGuiConfigFlags_ViewportsEnable)
    {
        style.WindowRounding = 0.0f;
        style.Colors[ImGuiCol_WindowBg].w = 1.0f;
    }
	#endif
}


RenderGuiSystem::RenderGuiSystem() : m_videoSettingsOpen(false),
                                     m_colorSettingsOpen(false),
                                     m_exportSettingsOpen(false),
                                     m_laserSettingsOpen(false),
                                     m_openExportDialog(false),
                                     m_selSettingsOpen(false)

{
    ImGuiIO &io = ImGui::GetIO();
    (void) io;
    io.ConfigFlags |= ImGuiConfigFlags_NavEnableKeyboard;     // Enable Keyboard Controls
    io.ConfigFlags |= ImGuiConfigFlags_NavEnableGamepad;      // Enable Gamepad Controls
    io.WantCaptureMouse = true;
    io.WantCaptureKeyboard = false;

    ImGuiStyle &style = ImGui::GetStyle();
    style.WindowRounding = 8.f;
    style.Alpha = 1.0f;
    style.AntiAliasedLines = false;

    // Add custom text for .gif files (the default value is [File]
    ImGuiFileDialog::Instance()->SetExtentionInfos(".gif", ImVec4(0, 1, 0.5, 0.9), "[GIF]");

    if (!io.Fonts->IsBuilt()) {
        io.Fonts->ClearFonts();
        m_font = io.Fonts->AddFontFromFileTTF(
                getResourcePath("fonts/NotoSans-hinted/NotoSans-Medium.ttf").c_str(),
                15.f, NULL, ImGui::GetIO().Fonts->GetGlyphRangesCyrillic());
        io.Fonts->Build();
    } else {
        m_font = io.Fonts->Fonts[0];
    }

    auto window_width = utils::getWindowWidth<GLuint>(*Game::getWindow());
    auto window_height = utils::getWindowHeight<GLuint>(*Game::getWindow());

    m_aspectRatio = static_cast<GLfloat>(window_width) / static_cast<GLfloat>(window_height);
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
        vec2i size = Config::getVal<vec2i>("ViewportSize"); // TODO: change viewport size here
        glBlitFramebuffer(0, 0, size.x, size.y, 0, 0, size.x, size.y,
                          GL_COLOR_BUFFER_BIT, GL_NEAREST);
    }
    program->setInt(U_TEXTURE_NUM, 0);

    glBindFramebuffer(GL_FRAMEBUFFER, 0);
    glClearColor(0.f, 0.0f, 0.0f, 1.0f);
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
//            ImGui::StyleColorsDark();
            Style();
            break;
        default:
            break;
    }

    PushFont(m_font);
    SetNextWindowPos({0, 0});
    SetNextWindowSize({screen_width, screen_height});
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
                if (MenuItem(_("Show camera pos"), _("Ctrl+O")))
                    Config::addVal("ShowCameraPos", !Config::getVal<bool>("ShowCameraPos"), "bool");

                if (MenuItem(_("Show move speed"), _("Ctrl+E")))
                    Config::addVal("ShowMoveSpeed", !Config::getVal<bool>("ShowMoveSpeed"), "bool");

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
            TextUnformatted(_("Settings"));
            Separator();

            Checkbox(_("Draw Vertices"), &Config::getVal<bool>("DrawVertices"));
            Checkbox(_("Draw Leafs"), &Config::getVal<bool>("DrawLeafs"));
            Checkbox(_("Draw Rays"), &Config::getVal<bool>("DrawRays"));
            Checkbox(_("Draw bounding boxes"), &Config::getVal<bool>("DrawBoundingBoxes"));

            if (Button(_("Check collision")))
                Config::getVal<bool>("CheckCollision") = true;

            Checkbox(_("Enable lighting"), &Config::getVal<bool>("EnableLight"));

            if (ImGui::Button(_("Laser Settings")))
                m_laserSettingsOpen = true;

            if (m_laserSettingsOpen)
                laser_settings();

            TextUnformatted(_("Light position"));
            InputFloat3("##light_pos", glm::value_ptr(Config::getVal<glm::vec3>("LightPos")));

            TextUnformatted(_("Tree level show"));
            SliderInt("##tree_level", &Config::getVal<int>("TreeLevelShow"), 0, 100);

            Checkbox(_("Inverse rotation"), &Config::getVal<bool>("InverseRotation"));

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
                utils::fs::saveSimJson(getSavePath("sim.json"), en);
            }

            if (Button(_("Load simulation")))
                ImGuiFileDialog::Instance()->OpenDialog("ChooseFileDlgKey",
                                                        _("Choose simulation file"),
                                                        ".json", ".");

            add_model();

            // Load simulation from file dialog
            if (ImGuiFileDialog::Instance()->Display("ChooseFileDlgKey")) {
                if (ImGuiFileDialog::Instance()->IsOk()) {
                    m_simFile = ImGuiFileDialog::Instance()->GetFilePathName();
                    m_simPath = ImGuiFileDialog::Instance()->GetCurrentPath();

                    m_ecsManager->init(m_simFile);
                }

                ImGuiFileDialog::Instance()->Close();
            }

            if (Button(_("Color Settings")))
                m_colorSettingsOpen = true;

            if (m_colorSettingsOpen) {
                Begin(_("Color settings"), &m_colorSettingsOpen);
                Separator();
                TextUnformatted(_("Background color"));
                ColorPicker4("##Background color", glm::value_ptr(
                        Config::getVal<vec4>("BackgroundColor")));
                End();
            }

            export_settings();

            video_settings();

            TableSetColumnIndex(1);
            TextUnformatted(_("Render"));
            vec2i size{round(ImGui::GetContentRegionAvail().x),
                        round(ImGui::GetContentRegionAvail().y)};

            GLfloat image_height = size.x / m_aspectRatio;
            size.y = round(image_height);

            auto pos = ImGui::GetCursorPos();
            // If render window resized
            vec2i viewport_size = Config::getVal<vec2i>("ViewportSize");
            if (viewport_size != size)
                getEntitiesByTag<SceneComponent>().begin()->second
                        ->getComponent<SceneComponent>()->dirty = true;

            Config::getVal<vec2>("ViewportPos") = {pos.x, pos.y};
            Config::getVal<vec2i>("ViewportSize") = {size.x, size.y};

            if (getGameState() != GameStates::STOP)
                Image((ImTextureID)sceneComp->texture, ImVec2(size.x, size.y), {0, 1}, {1, 0});
        }

        if (Button(_("Make screenshot")))
            Config::getVal<bool>("MakeScreenshot") = true;

        std::stringstream status_str;
        bool draw_status = false;
        if (Config::getVal<bool>("ShowCameraPos")) {
            auto pos = FpsCamera::getInstance()->getPos();
            std::string camera_pos = _("Camera position");
            status_str << (format("%1$s: %2$.2f, %3$.2f, %4$.2f")
                           % camera_pos % pos.x % pos.y % pos.z).str();
            draw_status = true;
        }

        if (Config::getVal<bool>("ShowMoveSpeed")) {
            auto camera = FpsCamera::getInstance();
            GLfloat move_speed = camera->getMovSpeed();
            std::string speed_msg = _("Move speed");
            if (Config::getVal<bool>("ShowCameraPos"))
                status_str << (format(", %1$s: %2$.2f") % speed_msg % move_speed).str();
            else
                status_str << (format("%1$s: %2$.2f") % speed_msg % move_speed).str();
            draw_status = true;
        }

        if (draw_status) {
            TableNextRow();
            TableSetColumnIndex(1);
            Text("%s", status_str.str().c_str());
        }

        if (Config::getVal<bool>("IsSelected"))
            selection_settings();

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

    if (ImGui::Button(_("Export settings")))
        m_exportSettingsOpen = true;

    if (!m_exportSettingsOpen)
        return;

    Begin(_("Настройки экспорта"), &m_exportSettingsOpen);
    TextUnformatted(_("Export file name"));
    auto& buffer = Config::getVal<string>("ExportFileName");
    InputText("##Export file name", &buffer);

    TextUnformatted(_("Export data type"));
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
        if (std::filesystem::exists(std::filesystem::absolute(out_file)))
            m_openExportDialog = true;
        else
            write_data(tmp_file, out_file, type);
    }

    if (m_openExportDialog) {
        OpenPopup("Warning");
        if (BeginPopupModal(_("Warning"), nullptr)) {
            TextUnformatted(_("File exists. Do you want to rewrite it?"));
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

void RenderGuiSystem::laser_settings()
{
    using namespace ImGui;

    auto lidarEn = getEntitiesByTag<LidarComponent>().begin()->second;
    auto lidarComp = lidarEn->getComponent<LidarComponent>();
    auto pos = lidarEn->getComponent<PositionComponent>();

    Begin(_("Laser settings"), &m_laserSettingsOpen);
    TextUnformatted(_("Laser position"));
    if (InputFloat3("##laser_pos", glm::value_ptr(pos->pos))) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle, lidarComp->density);
    }

    TextUnformatted(_("Laser yaw"));
    if (InputFloat("##laser_yaw", &lidarComp->yaw)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(lidarComp->freq, lidarComp->start_angle,
                                                         lidarComp->density);
    }

    TextUnformatted(_("Laser pitch"));
    if (InputFloat("##laser_pitch", &lidarComp->pitch)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle, lidarComp->density);
    }

    TextUnformatted(_("Prism frequencies"));
    if (InputFloat2("##prism_freq", value_ptr(lidarComp->freq))) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(lidarComp->freq, lidarComp->start_angle,
                                                         lidarComp->density);
    }

    TextUnformatted(_("Prism start angle"));
    if (InputFloat2("##prism_start_angle", glm::value_ptr(lidarComp->start_angle))) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(lidarComp->freq, lidarComp->start_angle,
                                                         lidarComp->density);
    }

    TextUnformatted(_("Refractive index"));
    if (InputFloat2("##prism_refractive_index", &lidarComp->refractive_index)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(lidarComp->freq, lidarComp->start_angle,
                                                         lidarComp->density, lidarComp->refractive_index);
    }

    TextUnformatted(_("Object distance"));
    if (InputFloat("##obj_distance", &lidarComp->obj_distance)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(lidarComp->freq, lidarComp->start_angle,
                                                         lidarComp->density);
    }

    TextUnformatted(_("Length of rays"));
    if (InputFloat("##ray_length", &lidarComp->length)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(lidarComp->freq, lidarComp->start_angle,
                                                         lidarComp->density);
    }

    TextUnformatted(_("Dots density"));
    if (InputFloat("##dot_dens", &lidarComp->density)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f}, lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(lidarComp->freq, lidarComp->start_angle,
                                                         lidarComp->density);
    }

    TextUnformatted(_("Draw pattern"));
    Checkbox("##draw_pattern", &Config::getVal<bool>("DrawPattern"));

    End();
}

void RenderGuiSystem::video_settings()
{
    using namespace ImGui;

    if (Button(_("Video settings")))
        m_videoSettingsOpen = true;

    if (m_videoSettingsOpen) {
        const char *items[] = {"Light", "Classic", "Dark"};
        Begin(_("Video settings"), &m_videoSettingsOpen);
        bool msaaEnabled = Config::getVal<bool>("MSAA");
        if (Checkbox(_("Enable antialiasing(Need game restart)"),
                     &Config::getVal<bool>("MSAA")) || msaaEnabled) {
            TextUnformatted(_("MSAA Samples"));
            SameLine();
            InputInt("##msaa_samples", &Config::getVal<int>("MSAASamples"));
        }
        TextUnformatted(_("Application theme:"));
        SameLine();
        ListBox("", &Config::getVal<int>("Theme"), items, 3);
        TextUnformatted(_("Drag sensitivity:"));
        SliderFloat("##mouse_sens", &Config::getVal<GLfloat>("MouseSens"), 1, 100);
        End();
    }
}

void RenderGuiSystem::add_model()
{
    using namespace ImGui;

    if (Button(_("Add model"))) {
        const char *filters = "Model files (*.fbx *.obj *.blend){.fbx,.obj,.blend}";
        ImGuiFileDialog::Instance()->OpenDialog("ChooseModelDlgKey",
                                                _("Choose model file"), filters, ".");
    }

    // Load model from file dialog
    if (ImGuiFileDialog::Instance()->Display("ChooseModelDlgKey")) {
        if (ImGuiFileDialog::Instance()->IsOk()) {
            m_modelFile = ImGuiFileDialog::Instance()->GetFilePathName();
            m_modelPath = ImGuiFileDialog::Instance()->GetCurrentPath();

            m_ecsManager->addEntityFromFile(m_modelFile);
        }

        ImGuiFileDialog::Instance()->Close();
    }
}

void RenderGuiSystem::selection_settings()
{
    using namespace ImGui;

    Begin(_("Selected settings"), &m_selSettingsOpen);
    Text("Selected settings");

    auto selEn = m_ecsManager->getEntities()[Config::getVal<int>("SelectedObj")];
    auto spriteComp = selEn->getComponent<SpriteComponent>();
    auto posComp = selEn->getComponent<PositionComponent>();
    auto sprite = spriteComp->sprite;

    TextUnformatted(_("Sprite scale"));
    if (InputFloat3("##sprite_scale", glm::value_ptr(sprite->getSize())))
        coll::updateBVH(selEn);

    TextUnformatted(_("Sprite angle"));
    if (InputFloat("##sprite_angle", &posComp->angle)) {
        posComp->rot_axis = {0.f, 1.f, 0.f};
        coll::updateBVH(selEn);
    }

    bool flip_uv = sprite->isUvFlipped();
    bool old_flip = flip_uv;
    TextUnformatted(_("Flip UV"));
    Checkbox("##flip_uv", &flip_uv);

    bool movable = false;
    bool hasMovComp = true;
    auto movComp = selEn->getComponent<MovableComponent>();
    if (movComp)
        movable = true;
    else
        hasMovComp = false;

    if (Button(_("Copy"))) {
        auto copy = m_ecsManager->createEntity(m_ecsManager->genUniqueId());
        copy->activate();
        bool has_bvh = false;
        for (auto [key, comp]: selEn->getComponents()) {
            if (key == ecs::types::type_id<LidarComponent>) {
                auto c = std::dynamic_pointer_cast<LidarComponent>(comp);
                copy->addComponent(*c);
            } else if (key == ecs::types::type_id<GlobalLightComponent>) {
                auto c = std::dynamic_pointer_cast<GlobalLightComponent>(comp);
                copy->addComponent(*c);
            } else if (key == ecs::types::type_id<PositionComponent>) {
                auto c = std::dynamic_pointer_cast<PositionComponent>(comp);
                copy->addComponent(*c);
            } else if (key == ecs::types::type_id<SelectableComponent>) {
                auto c = std::dynamic_pointer_cast<SelectableComponent>(comp);
                copy->addComponent(*c);
            } else if (key == ecs::types::type_id<SpriteComponent>) {
                auto c = std::dynamic_pointer_cast<SpriteComponent>(comp);
                copy->addComponent(*c);
            } else if (key == ecs::types::type_id<BVHComponent>) {
                copy->addComponent<BVHComponent>();
                has_bvh = true;
            } else if (key == ecs::types::type_id<MovableComponent>) {
                copy->addComponent<MovableComponent>();
            }
        }

        if (has_bvh) {
            auto triangles = copy->getComponent<SpriteComponent>()->sprite->getTriangles();
            auto bvh = coll::buildBVH(triangles);
            auto bvhComp = copy->getComponent<BVHComponent>();
            bvhComp->bvh_tree = bvh;
            bvhComp->triangles = std::make_shared<std::vector<Triangle>>(triangles);
        }
    }

    TextUnformatted(_("Movable"));
    if (Checkbox("##movable", &movable)) {
        if (movable && !hasMovComp) {
            selEn->addComponent<MovableComponent>();
            movComp = selEn->getComponent<MovableComponent>();
            hasMovComp = true;
        }

        if (!movable && hasMovComp) {
            selEn->removeComponent<MovableComponent>();
            hasMovComp = false;
        }
    }

    if (hasMovComp) {
        if (Button(_("Take control")))
            movComp->controlled = true;

        TextUnformatted(_("Speed"));
        InputFloat("##speed", &movComp->speed);
    }

    if (flip_uv != old_flip)
        sprite->flipUV();

    if (Button(_("Remove"))) {
        selEn->kill();
        Config::getVal<bool>("IsSelected") = false;
    }

    End();
}
