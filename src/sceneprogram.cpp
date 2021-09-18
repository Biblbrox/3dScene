#include <GL/glew.h>
#include <filesystem>

#include "boost/format.hpp"
#include "sceneprogram.hpp"
#include "utils/logger.hpp"
#include "utils/utils.hpp"

using boost::format;
using glm::mat4;
using glm::vec3;
using glm::vec4;
using utils::loadShaderFromFile;
using utils::log::Category;
using utils::log::Logger;
using utils::log::program_log_file_name;
using utils::log::shader_log_file_name;
using std::filesystem::absolute;
using std::filesystem::canonical;

std::shared_ptr<SceneProgram> SceneProgram::instance = nullptr;

constexpr int next_offset(int cur_offset, int base_alignment)
{
    if (cur_offset % base_alignment == 0)
        return cur_offset;

    return cur_offset + base_alignment - cur_offset % base_alignment;
}

SceneProgram::SceneProgram() {}

void SceneProgram::initPrograms()
{
    // Create framebuffer program
    addProgram("framebuffer", "framebuffer/Scene.glvs", "framebuffer/Scene.glfs");

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
//    if (m_programID != m_programs["screen"]) {
//        glUseProgram(m_programs["screen"]);
//        m_programID = m_programs["screen"];
//    }
}

void SceneProgram::useFramebufferProgram()
{
    useProgram("framebuffer");
//    if (m_programID != m_programs["framebuffer"]) {
//        glUseProgram(m_programs["framebuffer"]);
//        m_programID = m_programs["framebuffer"];
//    }
}

void SceneProgram::useSkyboxProgram()
{
    useProgram("skybox");
//    if (m_programID != m_programs["skybox"]) {
//        glUseProgram(m_programs["skybox"]);
//        m_programID = m_programs["skybox"];
//    }
}
