#ifndef SCENEPROGRAM_HPP
#define SCENEPROGRAM_HPP

#include <glm/mat4x4.hpp>
#include <memory>

#include "render/shaderprogram.hpp"

class SceneProgram: public ShaderProgram
{
protected:
    static std::shared_ptr<SceneProgram> instance;
public:
    SceneProgram();

    static std::shared_ptr<SceneProgram> getInstance()
    {
        if (!instance)
            instance = std::make_shared<SceneProgram>();

        return instance;
    }

    ~SceneProgram() override;

    void useScreenProgram();
    void useFramebufferProgram();
    void useSkyboxProgram();

    glm::mat4 getMVP();
    glm::mat4 getPVM();


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

#endif //SCENERPROGRAM_HPP
