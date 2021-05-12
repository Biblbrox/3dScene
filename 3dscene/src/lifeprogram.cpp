#include <GL/glew.h>
#include <glm/gtc/type_ptr.hpp>

#include "utils/utils.hpp"
#include "boost/format.hpp"
#include "exceptions/glexception.hpp"
#include "utils/logger.hpp"
#include "lifeprogram.hpp"

using utils::loadShaderFromFile;
using glm::mat4;
using glm::vec3;
using glm::vec4;
using utils::log::Logger;
using utils::log::Category;
using utils::log::program_log_file_name;
using utils::log::shader_log_file_name;
using boost::format;

const int gl_bool_size = 4;
const int gl_int_size = 4;
const int gl_float_size = 4;

std::shared_ptr<LifeProgram> LifeProgram::instance = nullptr;

constexpr int next_offset(int cur_offset, int base_alignment)
{
    if (cur_offset % base_alignment == 0)
        return cur_offset;

    return cur_offset + base_alignment - cur_offset % base_alignment;
}

const char* textureNumberGL = "TextureNum";

LifeProgram::LifeProgram()
{
}

void LifeProgram::initPrograms()
{
    // Create framebuffer program
    addProgram("framebuffer", "framebuffer/LifeGame.glvs",
               "framebuffer/LifeGame.glfs");

    // Create screen program
    addProgram("screen", "screen/LifeGame.glvs",
               "screen/LifeGame.glfs");

    useFramebufferProgram();
}

LifeProgram::~LifeProgram()
{
    free_buffers();
}

void LifeProgram::free_buffers()
{
    glDeleteBuffers(1, &m_matricesUBO);
    glDeleteBuffers(1, &m_textureDataUBO);

    m_matricesUBO = m_textureDataUBO = 0;
}

void LifeProgram::useScreenProgram()
{
    if (m_programID != m_programs["screen"]) {
        glUseProgram(m_programs["screen"]);
        m_programID = m_programs["screen"];
    }
}

void LifeProgram::useFramebufferProgram()
{
    if (m_programID != m_programs["framebuffer"]) {
        glUseProgram(m_programs["framebuffer"]);
        m_programID = m_programs["framebuffer"];
    }
}