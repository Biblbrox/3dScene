#include <boost/format.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <imgui_stdlib.h>
#include <imgui_impl_opengl3.h>
#include <imgui_internal.h>
#include <imgui_impl_sdl.h>
#include <ImGuiFileDialog.h>
#include <ImGuiFileDialogConfig.h>
#include <filesystem>

#include "systems/renderguisystem.hpp"
#include "components/lidarcomponent.hpp"
#include "components/bvhcomponent.hpp"
#include "components/scenecomponent.hpp"
#include "components/movablecomponent.hpp"
#include "utils/logger.hpp"
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

using utils::log::Logger;
using utils::log::program_log_file_name;
using utils::log::Category;
using math::operator/;
using utils::texture::genRbo;
using utils::texture::genTexture;

using boost::format;

using glm::mat4;
using glm::vec3;
using glm::vec4;
using glm::scale;


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
                getResourcePath(
                        "fonts/NotoSans-hinted/NotoSans-Medium.ttf").c_str(),
                15.f,
                NULL, ImGui::GetIO().Fonts->GetGlyphRangesCyrillic());
        io.Fonts->Build();
    } else {
        m_font = io.Fonts->Fonts[0];
    }

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
            ImGui::StyleColorsDark();
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
                if (MenuItem(_("Show camera pos"), _("Ctrl+O"))) {
                    Config::addVal("ShowCameraPos",
                                   !Config::getVal<bool>("ShowCameraPos"), "bool");
                }

                if (MenuItem(_("Show move speed"), _("Ctrl+E"))) {
                    Config::addVal("ShowMoveSpeed",
                                   !Config::getVal<bool>("ShowMoveSpeed"), "bool");
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
            Text(_("Settings"));
            Separator();

            Checkbox(_("Draw Vertices"),
                     &Config::getVal<bool>("DrawVertices"));
            Checkbox(_("Draw Leafs"),
                     &Config::getVal<bool>("DrawLeafs"));
            Checkbox(_("Draw Rays"),
                     &Config::getVal<bool>("DrawRays"));
            Checkbox(_("Draw bounding boxes"),
                     &Config::getVal<bool>("DrawBoundingBoxes"));
            if (Button(_("Check collision")))
                Config::getVal<bool>("CheckCollision") = true;
            Checkbox(_("Enable lighting"),
                     &Config::getVal<bool>("EnableLight"));

            if (ImGui::Button(_("Laser Settings")))
                m_laserSettingsOpen = true;

            if (m_laserSettingsOpen)
                laser_settings();

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
                utils::fs::saveSimJson(getResourcePath("pos.json"), en);
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
                Text(_("Background color"));
                ColorPicker4("##Background color", glm::value_ptr(
                        Config::getVal<vec4>("BackgroundColor")));
                End();
            }

            export_settings();

            video_settings();

            TableSetColumnIndex(1);
            Text(_("Render"));
            auto size = ImGui::GetContentRegionAvail();
            GLfloat image_height = size.x / m_aspectRatio;
            size.y = image_height;

            auto pos = ImGui::GetCursorPos();
            Config::getVal<vec2>("ViewportPos") = {pos.x, pos.y};
            Config::getVal<vec2>("ViewportSize") = {size.x, size.y};

            if (getGameState() != GameStates::STOP)
                ImGui::Image((ImTextureID) sceneComp->texture, size, {0, 1},
                             {1, 0});
        }

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
            Text(status_str.str().c_str());
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
        if (std::filesystem::exists(std::filesystem::absolute(out_file)))
            m_openExportDialog = true;
        else
            write_data(tmp_file, out_file, type);
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

void RenderGuiSystem::laser_settings()
{
    using namespace ImGui;

    auto lidarEn = getEntitiesByTag<LidarComponent>().begin()->second;
    auto lidarComp = lidarEn->getComponent<LidarComponent>();
    auto pos = lidarEn->getComponent<PositionComponent>();

    Begin(_("Laser settings"), &m_laserSettingsOpen);
    Text(_("Laser position"));
    if (InputFloat3("##laser_pos", glm::value_ptr(pos->pos))) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                    lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle,
                lidarComp->density);
    }

    Text(_("Laser yaw"));
    if (InputFloat("##laser_yaw", &lidarComp->yaw)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                    lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle,
                lidarComp->density);
    }

    Text(_("Laser pitch"));
    if (InputFloat("##laser_pitch", &lidarComp->pitch)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                    lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle,
                lidarComp->density);
    }

    Text(_("Prism frequencies"));
    if (InputFloat2("##prism_freq", value_ptr(lidarComp->freq))) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                    lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle,
                lidarComp->density);
    }

    Text(_("Prism start angle"));
    if (InputFloat2("##prism_start_angle", glm::value_ptr(lidarComp->start_angle))) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                    lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle,
                lidarComp->density);
    }

    Text(_("Object distance"));
    if (InputFloat("##obj_distance", &lidarComp->obj_distance)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                    lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle,
                lidarComp->density);
    }

    Text(_("Length of rays"));
    if (InputFloat("##ray_length", &lidarComp->length)) {
        Lidar lidar(lidarComp->length, pos->pos, {0.f, 1.f, 0.f},
                    lidarComp->yaw, lidarComp->pitch);

        lidarComp->pattern_points = lidar.risleyPattern2(
                lidarComp->freq, lidarComp->start_angle,
                lidarComp->density);
    }

    Text(_("Dots density"));
    if (InputFloat("##dot_dens", &lidarComp->density)) {
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
}

void RenderGuiSystem::add_model()
{
    using namespace ImGui;

    if (Button(_("Add model"))) {
        const char *filters = "Model files (*.fbx *.obj){.fbx,.obj}";
        ImGuiFileDialog::Instance()->OpenDialog("ChooseModelDlgKey",
                                                _("Choose model file"),
                                                filters, ".");
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
    auto sprite = spriteComp->sprite;

    if (InputFloat3("##sprite_scale", glm::value_ptr(sprite->getSize())))
        coll::updateBVH(selEn);

    bool flip_uv = sprite->isUvFlipped();
    bool old_flip = flip_uv;
    Text(_("Flip UV"));
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
            } else if (key == ecs::types::type_id<LightComponent>) {
                auto c = std::dynamic_pointer_cast<LightComponent>(comp);
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
//                auto c = std::dynamic_pointer_cast<BVHComponent>(comp);
//                copy->addComponent(*c);
                copy->addComponent<BVHComponent>();
                has_bvh = true;
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

    Text(_("Movable"));
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
        if (Button(_("Take control"))) {
            movComp->controlled = true;
        }

        Text(_("Speed"));
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
