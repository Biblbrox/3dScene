#include <SDL2/SDL.h>
#include <boost/format.hpp>

#include "base.hpp"
#include "game.hpp"
#include "utils/logger.hpp"
#include "exceptions/basegameexception.hpp"
#include "lifeprogram.hpp"
#include "config.hpp"

#ifndef NDEBUG // use callgrind profiler
#include <valgrind/callgrind.h>
#endif

using utils::log::program_log_file_name;
using utils::log::Category;

int main(int argc, char *args[])
{
#ifndef NDEBUG
    CALLGRIND_START_INSTRUMENTATION;
    CALLGRIND_TOGGLE_COLLECT;
#endif

    int ret_code = 0;
    try {
        Config::load("config.txt");
        Config::addVal("ConfigFile", "config.txt", "const char*");
        Game game;
        game.initOnceSDL2();
        game.initGL();
        auto program = LifeProgram::getInstance();
        program->initPrograms();
        game.initGame();
        auto camera = ArcballCamera::getInstance();

        int screen_width = utils::getWindowWidth<int>(*Game::getWindow());
        int screen_height = utils::getWindowHeight<int>(*Game::getWindow());
        program->useFramebufferProgram();
        glm::mat4 perspective = camera->getProjection(screen_width, screen_height);
        program->setMat4(PROJECTION, perspective);
        program->setMat4(MODEL, glm::mat4(1.f));
        program->setMat4(VIEW, glm::mat4(1.f));
        program->updateMat4(PROJECTION);
        program->updateMat4(MODEL);
        program->updateMat4(VIEW);
        program->setInt(TEXTURE_NUM, 0);

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
                    utils::log::Logger::write(program_log_file_name(),
                                              Category::INITIALIZATION_ERROR,
                                              (boost::format(
                                                      "Warning: Unable to capture mouse. "
                                                      "SDL Error: %s\n")
                                               % SDL_GetError()).str());
                firstRun = false;
            }
        }
    } catch (const BaseGameException& e) {
        utils::log::Logger::write(e.fileLog(), e.categoryError(), e.what());
        ret_code = EXIT_FAILURE;
    } catch (const std::exception& e) {
        utils::log::Logger::write(program_log_file_name(),
                                  Category::UNEXPECTED_ERROR, e.what());
        ret_code = EXIT_FAILURE;
    }
    quit();

#ifndef NDEBUG
    CALLGRIND_TOGGLE_COLLECT;
    CALLGRIND_STOP_INSTRUMENTATION;
#endif

    return ret_code;
}