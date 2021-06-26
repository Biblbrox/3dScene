#ifndef MOONLANDER_MOONLANDERPROGRAM_HPP
#define MOONLANDER_MOONLANDERPROGRAM_HPP

#include <glm/mat4x4.hpp>
#include <memory>

#include "render/shaderprogram.hpp"

class SceneProgram: public ShaderProgram
{
protected:
    static std::shared_ptr<SceneProgram> instance;
public:
    SceneProgram();

    //TODO: fix public constructor and make_shared problem
    //TODO: fix ugly design
    static std::shared_ptr<SceneProgram> getInstance()
    {
        if (!instance)
            instance = std::make_shared<SceneProgram>();

        return instance;
    }

    ~SceneProgram() override;

    void useScreenProgram();
    void useFramebufferProgram();

    /**
     * Init programs
     */
    void initPrograms() override;

private:
    GLuint m_matricesUBO;
    GLuint m_textureDataUBO;

    /**
     * Utility cleanup functions
     */
    void free_buffers();
};

#endif //MOONLANDER_MOONLANDERPROGRAM_HPP
