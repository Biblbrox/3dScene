#include <imgui_impl_sdl.h>
#include <iostream>

#include "base.hpp"
#include "systems/keyboardsystem.hpp"
#include "game.hpp"
#include "lifeprogram.hpp"
#include "view/lidar.hpp"

void KeyboardSystem::update_state(size_t delta)
{
    int screen_width = utils::getWindowWidth<int>(*Game::getWindow());
    int screen_height = utils::getWindowHeight<int>(*Game::getWindow());

    GLfloat x_offset = 0.f;
    GLfloat y_offset = 0.f;
    SDL_Event e;
	
    auto camera = Lidar::getInstance();
    auto program = LifeProgram::getInstance();
    bool stopped = getGameState() == GameStates::STOP;
    while (SDL_PollEvent(&e)) {
        program->useFramebufferProgram();
        ImGui_ImplSDL2_ProcessEvent(&e);
        switch (e.type) {
            case SDL_QUIT:
                setGameRunnable(false);
                break;
            case SDL_MOUSEMOTION:
                if (!stopped) {
                    x_offset = e.motion.xrel;
                    y_offset = e.motion.yrel;

                    camera->processMouseMovement(x_offset, -y_offset);
                }
                break;
            case SDL_MOUSEBUTTONDOWN:
                if (e.button.button == SDL_BUTTON_MIDDLE && !stopped)
                    m_middlePressed = true;

                break;
            case SDL_MOUSEBUTTONUP:
                if (e.button.button == SDL_BUTTON_MIDDLE && !stopped)
                    m_middlePressed = false;
                break;
            case SDL_MOUSEWHEEL:
                if (!stopped) {
                    camera->processMouseScroll(e.wheel.y / 10.f);
                    program->setMat4(VIEW, camera->getView());
                    program->updateMat4(VIEW);
                }
                break;
            case SDL_WINDOWEVENT:
                if (e.window.event == SDL_WINDOWEVENT_RESIZED) {
                    glViewport(0.f, 0.f, screen_width, screen_height);
                }
                break;
            case SDL_KEYDOWN:
                if (!stopped) {
                    switch (e.key.keysym.sym)
                    {
                        case SDLK_w:
                            camera->processKeyboard(FORWARD, delta);
                            break;
                        case SDLK_s:
                            camera->processKeyboard(BACKWARD, delta);
                            break;
                        case SDLK_a:
                            camera->processKeyboard(LEFT, delta);
                            break;
                        case SDLK_d:
                            camera->processKeyboard(RIGHT, delta);
                            break;
                    }
                }
                break;
            default:
                break;
        }

		if (m_middlePressed) {
			std::cout << camera->getDirection().x << ", "
					  << camera->getDirection().y << ", "
					  << camera->getDirection().z << ";\n";
		}
		
		
        if (!stopped) {
//            camera->processKeyboard(x_offset, y_offset);
            program->setMat4(VIEW, camera->getView());
            program->updateMat4(VIEW);
        }
    }
}

KeyboardSystem::KeyboardSystem() : m_middlePressed(false)
{

}
