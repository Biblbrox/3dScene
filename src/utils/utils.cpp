#include <ctime>
#include <boost/format.hpp>
#include <iostream>

#include "logger/logger.hpp"
#include "utils/utils.hpp"
#include "exceptions/glexception.hpp"
#include "exceptions/fsexception.hpp"

using logger::Logger;
using logger::Category;
using logger::program_log_file_name;
using logger::shader_log_file_name;
using boost::format;
using glm::vec2;
using std::find_if;

GLuint utils::loadShaderFromFile(const std::string &path, GLenum shaderType)
{
    assert(!path.empty() && "Empty file path");
    GLuint shaderID = 0;
    std::string shaderString;
    std::ifstream sourceFile(path);
    if (!sourceFile.is_open())
        throw FSException((format("Can't open shader source file %1%\n")
                           % path).str(), program_log_file_name(),
                          logger::Category::FS_ERROR);

    shaderString.assign(std::istreambuf_iterator<char>(sourceFile),
                        std::istreambuf_iterator<char>());

    shaderID = glCreateShader(shaderType);
    const GLchar *shaderSource = shaderString.c_str();
    glShaderSource(shaderID, 1, (const GLchar**) &shaderSource, NULL);
    glCompileShader(shaderID);

    GLint shaderCompiled = GL_FALSE;
    glGetShaderiv(shaderID, GL_COMPILE_STATUS, &shaderCompiled);
    if (shaderCompiled != GL_TRUE) {
        sourceFile.close();
        logger::printShaderLog(shaderID);
        glDeleteShader(shaderID);
        throw GLException(
                "Error while compiling shader(see shader log)!",
                program_log_file_name(),
                logger::Category::SHADER_COMPILE_ERROR);
    }

    sourceFile.close();
    return shaderID;
}