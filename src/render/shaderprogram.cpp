#include <GL/glew.h>
#include <boost/format.hpp>

#include "render/shaderprogram.hpp"
#include "utils/utils.hpp"
#include "utils/logger.hpp"
#include "exceptions/glexception.hpp"

using boost::format;
using utils::log::Logger;
using utils::log::Category;
using utils::log::program_log_file_name;
using utils::log::shader_log_file_name;


GLuint create_program(const std::string& vertex, const std::string& fragment,
                      const std::string& geometry = "")
{
    GLuint vertexShader, fragmentShader, geometryShader;

    GLuint program = glCreateProgram();
    if (program == 0)
        throw GLException((format("Unable to create program %d\n")
                           % program).str(),
                          program_log_file_name(),
                          Category::INITIALIZATION_ERROR);

    // Vertex shader
    vertexShader = utils::loadShaderFromFile(
            getShaderPath(vertex), GL_VERTEX_SHADER);
    // Vertex shader end

    // Fragment shader
    fragmentShader = utils::loadShaderFromFile(
            getShaderPath(fragment), GL_FRAGMENT_SHADER);
    // Fragment shader end

    if (!geometry.empty())
        geometryShader = utils::loadShaderFromFile(
                getShaderPath(geometry), GL_GEOMETRY_SHADER);

    glAttachShader(program, fragmentShader);
    glAttachShader(program, vertexShader);
    if (!geometry.empty())
        glAttachShader(program, geometryShader);
    if (GLenum error = glGetError(); error != GL_NO_ERROR) {
        utils::log::printProgramLog(program);
        throw GLException("Unable to attach shaders.\n",
                          program_log_file_name(),
                          Category::INITIALIZATION_ERROR);
    }

    glLinkProgram(program);
    GLint linkSuccess = GL_TRUE;
    glGetProgramiv(program, GL_LINK_STATUS, &linkSuccess);
    if (linkSuccess != GL_TRUE) {
        utils::log::printProgramLog(program);
        throw GLException((format("Unable to link program: %d, %s\n")
                           % program % glGetError()).str(),
                          program_log_file_name(),
                          Category::INITIALIZATION_ERROR);
    }

    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);
    if (!geometry.empty())
        glDeleteShader(geometryShader);

    return program;
}

ShaderProgram::ShaderProgram()
{
    m_programID = 0;
}

ShaderProgram::~ShaderProgram()
{
    freeProgram();
}

void ShaderProgram::freeProgram()
{
    for (auto& [key, program] : m_programs) {
        if (glIsProgram(program))
            glDeleteProgram(program);
    }
}

void ShaderProgram::bind() const
{
    glUseProgram(m_programID);
    if (GLenum error = glGetError(); error != GL_NO_ERROR) {
        utils::log::printProgramLog(m_programID);
        throw GLException((format("Unable to bind shader program! %s%\n") %
                           gluErrorString(error)).str(),
                          program_log_file_name(),
                          Category::INTERNAL_ERROR);
    }
}

void ShaderProgram::unbind()
{
    glUseProgram(0);
}

GLuint ShaderProgram::getProgramID()
{
    return m_programID;
}

void ShaderProgram::updateInt(const std::string& name)
{
    using utils::log::Logger;

    assert(!name.empty());
    GLint loc = glGetUniformLocation(m_programID, name.c_str());
    if (loc == -1)
        throw GLException((format("Unable to set uniform variable %1%\n") %
                           name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);

    glUniform1i(loc, m_intUniforms[m_programID][name]);
    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("Unable to set uniform variable \"%1%\"\n") % name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);
}

void ShaderProgram::updateFloat(const std::string &name)
{
    using utils::log::Logger;

    assert(!name.empty());
    GLint loc = glGetUniformLocation(m_programID, name.c_str());
    if (loc == -1)
        throw GLException(
                (format("Can't find location by name \"%1%\"\n") % name).str(),
                shader_log_file_name(),
                Category::INTERNAL_ERROR);

    glUniform1f(loc, m_flUniforms[m_programID][name]);
    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException(
                (format("Unable to set uniform variable \"%1%\"\n") % name).str(),
                shader_log_file_name(),
                Category::INTERNAL_ERROR);
}

void ShaderProgram::updateVec3(const std::string& name)
{
    using utils::log::Logger;

    assert(!name.empty());
    GLint loc = glGetUniformLocation(m_programID, name.c_str());
    if (loc == -1)
        throw GLException((format("Unable to set uniform variable %1%\n") %
                           name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);

    auto value = m_vec3Uniforms[m_programID][name];
    glUniform3f(loc, value.x, value.y, value.z);
    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("Unable to set uniform variable \"%1%\"\n") % name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);
}

void ShaderProgram::updateVec4(const std::string& name)
{
    using utils::log::Logger;

    assert(!name.empty());
    GLint loc = glGetUniformLocation(m_programID, name.c_str());
    if (loc == -1)
        throw GLException((format("Unable to set uniform variable %1%\n") %
                           name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);

    auto value = m_vec4Uniforms[m_programID][name];
    glUniform4f(loc, value.x, value.y, value.z, value.w);
    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("Unable to set uniform variable \"%1%\"\n") % name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);
}

void ShaderProgram::updateMat3(const std::string &name)
{
    using utils::log::Logger;

    assert(!name.empty());
    GLint loc = glGetUniformLocation(m_programID, name.c_str());
    if (loc == -1)
        throw GLException((format("Unable to set uniform variable %1%\n") %
                           name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);

    glUniformMatrix3fv(loc, 1, false, &m_mat3Uniforms[m_programID][name][0][0]);
    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("Unable to set uniform variable \"%1%\"\n") % name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);
}

void ShaderProgram::updateMat4(const std::string &name)
{
    using utils::log::Logger;

    assert(!name.empty());
    GLint loc = glGetUniformLocation(m_programID, name.c_str());
    if (loc == -1)
        throw GLException((format("Unable to set uniform variable %1%\n") %
                           name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);

    glUniformMatrix4fv(loc, 1, false, &m_mat4Uniforms[m_programID][name][0][0]);
    if (GLenum error = glGetError(); error != GL_NO_ERROR)
        throw GLException((format("Unable to set uniform variable \"%1%\"\n") % name).str(),
                          shader_log_file_name(),
                          Category::INTERNAL_ERROR);
}

void ShaderProgram::setFloat(const std::string &str, GLfloat value)
{
    m_flUniforms[m_programID][str] = value;
}

void ShaderProgram::setInt(const std::string &name, GLint value)
{
    m_intUniforms[m_programID][name] = value;
}

void ShaderProgram::setVec3(const std::string &name, const vec3 &value)
{
    m_vec3Uniforms[m_programID][name] = value;
}

void ShaderProgram::setVec4(const std::string &name, const glm::vec4 &value)
{
    m_vec4Uniforms[m_programID][name] = value;
}

void ShaderProgram::setMat3(const std::string &name, const glm::mat3 &value)
{
    m_mat3Uniforms[m_programID][name] = value;
}

void ShaderProgram::setMat4(const std::string &name, const glm::mat4 &value)
{
    m_mat4Uniforms[m_programID][name] = value;
}


void ShaderProgram::useProgram(const std::string &programName)
{
    if (!m_programs.contains(programName)) {
        // TODO: throw error
        return;
    }
    GLuint programID = m_programs[programName];
    if (m_programID != programID) {
        glUseProgram(programID);
        m_programID = programID;
    }
}

void
ShaderProgram::addProgram(const std::string &programName, const std::string& vertex,
                          const std::string& fragment,
                          const std::string& geometry)
{
    GLuint program = create_program(vertex, fragment, geometry);
    // TODO: check errors
    m_programs.emplace(programName, program);
}

void ShaderProgram::leftMult(const std::string &name, const glm::mat4 &matrix)
{
    m_mat4Uniforms[m_programID][name] = matrix * m_mat4Uniforms[m_programID][name];
}

void ShaderProgram::mult(const std::string& name, const glm::vec4 &vec)
{
    m_mat4Uniforms[m_programID][name] *= vec;
}

GLfloat ShaderProgram::getFloat(const std::string &name)
{
    return m_flUniforms[m_programID][name];
}

int ShaderProgram::getInt(const std::string &name)
{
    return m_intUniforms[m_programID][name];
}

glm::vec3 ShaderProgram::getVec3(const std::string &name)
{
    return m_vec3Uniforms[m_programID][name];
}

glm::vec4 ShaderProgram::getVec4(const std::string &name)
{
    return m_vec4Uniforms[m_programID][name];
}

glm::mat3 ShaderProgram::getMat3(const std::string &name)
{
    return m_mat3Uniforms[m_programID][name];
}

glm::mat4 ShaderProgram::getMat4(const std::string &name)
{
    return m_mat4Uniforms[m_programID][name];
}