#ifndef MOONLANDER_MOONLANDERPROGRAM_HPP
#define MOONLANDER_MOONLANDERPROGRAM_HPP

#include <glm/mat4x4.hpp>
#include <memory>

#include "render/shaderprogram.hpp"

class LifeProgram: public ShaderProgram
{
protected:
    static std::shared_ptr<LifeProgram> instance;
public:
    LifeProgram();

    //TODO: fix public constructor and make_shared problem
    //TODO: fix ugly design
    static std::shared_ptr<LifeProgram> getInstance()
    {
        if (!instance)
            instance = std::make_shared<LifeProgram>();

        return instance;
    }

    ~LifeProgram() override;

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
