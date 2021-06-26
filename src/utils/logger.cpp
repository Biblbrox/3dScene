#include <fstream>
#include <iostream>
#include <boost/format.hpp>

#include "utils/logger.hpp"

using utils::log::Logger;
using utils::log::program_log_file_name;
using utils::log::shader_log_file_name;
using utils::log::Category;
using boost::format;

std::unordered_map<std::string, std::shared_ptr<std::ofstream>> Logger::m_logFiles;

void utils::log::printShaderLog(GLuint shader)
{
    if (glIsShader(shader)) {
        int infoLength = 0;
        int maxLength = infoLength;

        glGetShaderiv(shader, GL_INFO_LOG_LENGTH, &maxLength);
        char *log_str = new char[maxLength];

        glGetShaderInfoLog(shader, maxLength, &infoLength, log_str);
        if (infoLength > 0)
            Logger::write(shader_log_file_name(),
                          Category::SHADER_COMPILE_ERROR,
                          "Shader log:\n\n%s", log_str);

        delete[] log_str;
    } else {
        std::cerr << (format("Name %d is not a shader\n")
                      % shader).str() << std::endl;
    }
}

void utils::log::printProgramLog(GLuint program)
{
    if (glIsProgram(program)) {
        int infoLength = 0;
        int maxLength = infoLength;

        glGetProgramiv(program, GL_INFO_LOG_LENGTH, &maxLength);
        char *log_str = new char[maxLength];

        glGetProgramInfoLog(program, maxLength, &infoLength, log_str);
        if (infoLength > 0)
            Logger::write(shader_log_file_name(),
                          Category::INTERNAL_ERROR,
                          (format("Shader program log:\n\n%s") % log_str).str());

        delete[] log_str;
    } else {
        Logger::write(shader_log_file_name(),Category::INTERNAL_ERROR,
                      (format("Name %1% is not a program\n")
                       % program).str());
    }
}