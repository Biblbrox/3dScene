#include <GL/glew.h>
#include <filesystem>

#include "base.hpp"
#include "boost/format.hpp"
#include "logger/logger.hpp"
#include "sceneprogram.hpp"
#include "shadernames.hpp"
#include "utils/utils.hpp"

using boost::format;
using glm::mat4;
using glm::vec3;
using glm::vec4;
using logger::Category;
using logger::Logger;
using logger::program_log_file_name;
using logger::shader_log_file_name;
using std::filesystem::absolute;
using std::filesystem::canonical;
using utils::loadShaderFromFile;

std::shared_ptr<SceneProgram> SceneProgram::instance = nullptr;

constexpr int next_offset(int cur_offset, int base_alignment)
{
    if (cur_offset % base_alignment == 0)
        return cur_offset;

    return cur_offset + base_alignment - cur_offset % base_alignment;
}

SceneProgram::SceneProgram()
{
}

void SceneProgram::initPrograms()
{
    // Create framebuffer program
    addProgram("framebuffer", "framebuffer/Scene.glvs", "framebuffer/Scene.glfs");
    addProgram("framebuffer_instance", "framebuffer/SceneInstance.glvs", "framebuffer/Scene.glfs");

    // Create screen program
    addProgram("screen", "screen/Scene.glvs", "screen/Scene.glfs");
    addProgram("skybox", "skybox/Scene.glvs", "skybox/Scene.glfs");

    useFramebufferProgram();
}

SceneProgram::~SceneProgram()
{
    free_buffers();
}

void SceneProgram::free_buffers()
{
    glDeleteBuffers(1, &m_matricesUBO);
    glDeleteBuffers(1, &m_textureDataUBO);

    m_matricesUBO = m_textureDataUBO = 0;
}

void SceneProgram::useScreenProgram()
{
    useProgram("screen");
}

void SceneProgram::useFramebufferProgram()
{
    useProgram("framebuffer");
}

void SceneProgram::useSkyboxProgram()
{
    useProgram("skybox");
}

glm::mat4 SceneProgram::getMVP()
{
    return m_mat4Uniforms[m_programID][U_PROJECTION_MATRIX] *
           m_mat4Uniforms[m_programID][U_VIEW_MATRIX] * m_mat4Uniforms[m_programID][U_MODEL_MATRIX];
}

glm::mat4 SceneProgram::getPVM()
{
    return m_mat4Uniforms[m_programID][U_MODEL_MATRIX] *
           m_mat4Uniforms[m_programID][U_VIEW_MATRIX] *
           m_mat4Uniforms[m_programID][U_PROJECTION_MATRIX];
}

glm::mat4 SceneProgram::getPV()
{
    return m_mat4Uniforms[m_programID][U_VIEW_MATRIX] *
           m_mat4Uniforms[m_programID][U_PROJECTION_MATRIX];
}
