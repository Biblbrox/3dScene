#include <SDL2/SDL.h>
#include <boost/locale.hpp>
#include <glm/gtc/matrix_transform.hpp>

#include "base.hpp"
#include "config.hpp"
#include "exceptions/basegameexception.hpp"
#include "game.hpp"
#include "logger/logger.hpp"
#include "sceneprogram.hpp"
#include "utils/math.hpp"
#include "view/fpscamera.hpp"
#include "shadernames.hpp"

using boost::locale::generator;
using boost::locale::gettext;
using boost::locale::translate;
using logger::Category;
using logger::program_log_file_name;

using namespace boost::locale;

int main(int argc, char *args[])
{
    int ret_code = 0;
    try {
        Config::load("config.txt");
        Config::addVal("ConfigFile", "config.txt", "const char*");

        generator gen;
        // Specify location of dictionaries
        gen.add_messages_path(getLocalePath(""));
        gen.add_messages_domain("scene");
        // Generate locales and imbue them to iostream
        std::locale::global(gen(""));
        // Setup system locale
        std::cout.imbue(std::locale(""));
        Game game;
        game.initOnceSDL2();
        game.initGL();
        auto program = SceneProgram::getInstance();
        program->initPrograms();
        game.initGame();
        auto camera = FpsCamera::getInstance();

        int screen_width = utils::getWindowWidth<int>(*Game::getWindow());
        int screen_height = utils::getWindowHeight<int>(*Game::getWindow());
        program->useFramebufferProgram();
        glm::mat4 perspective =
            glm::perspective(45.f, (float)screen_width / (float)screen_height, 1.f, 10000.f);
        program->setMat4(U_PROJECTION_MATRIX, perspective);
        program->setMat4(U_MODEL_MATRIX, glm::mat4(1.f));
        program->setMat4(U_VIEW_MATRIX, glm::mat4(1.f));
        program->setInt(U_TEXTURE_NUM, 0);

        if (!Config::hasKey("ProjectiveMat"))
            Config::addVal("ProjectiveMat", perspective, "mat4");

        GLfloat delta_time = 0.f;
        GLfloat last_frame = 0.f;

        bool firstRun = true;
        while (isGameRunnable()) {
            GLfloat cur_time = SDL_GetTicks();
            delta_time = cur_time - last_frame;
            last_frame = cur_time;

            // Draw scene
            game.update(delta_time);
            game.flush();

            if (firstRun) {
                if (SDL_CaptureMouse(SDL_TRUE) != 0)
                    logger::Logger::write(program_log_file_name(), Category::INITIALIZATION_ERROR,
                                          "Warning: Unable to capture mouse. "
                                          "SDL Error: %s\n",
                                          SDL_GetError());
                firstRun = false;
            }
        }
    }
    catch (const BaseGameException &e) {
        logger::Logger::write(e.fileLog(), e.categoryError(), e.what());
        ret_code = EXIT_FAILURE;
    }
    catch (const std::exception &e) {
        logger::Logger::write(program_log_file_name(), Category::UNEXPECTED_ERROR, e.what());
        ret_code = EXIT_FAILURE;
    }
    quit();

    return ret_code;
}