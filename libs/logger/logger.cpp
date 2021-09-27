#include <iostream>
#include <boost/format.hpp>

#include "logger.hpp"

using logger::Logger;
using logger::program_log_file_name;
using logger::shader_log_file_name;
using logger::Category;
using boost::format;

std::unordered_map<std::string, std::shared_ptr<std::ofstream>> Logger::m_logFiles;

void logger::printShaderLog(GLuint shader)
{
    if (glIsShader(shader)) {
        int infoLength = 0;
        int maxLength = infoLength;

        glGetShaderiv(shader, GL_INFO_LOG_LENGTH, &maxLength);
        char *log_str = new char[maxLength];

        glGetShaderInfoLog(shader, maxLength, &infoLength, log_str);
        if (infoLength > 0)
            Logger::write(shader_log_file_name(), Category::SHADER_COMPILE_ERROR,
                          "Shader log:\n\n%s", log_str);

        delete[] log_str;
    } else {
        std::cerr << (format("Name %d is not a shader\n") % shader).str() << std::endl;
    }
}

void logger::printProgramLog(GLuint program)
{
    if (glIsProgram(program)) {
        int infoLength = 0;
        int maxLength = infoLength;

        glGetProgramiv(program, GL_INFO_LOG_LENGTH, &maxLength);
        char *log_str = new char[maxLength];

        glGetProgramInfoLog(program, maxLength, &infoLength, log_str);
        if (infoLength > 0)
            Logger::write(shader_log_file_name(), Category::INTERNAL_ERROR,
                          (format("Shader program log:\n\n%s") % log_str).str());

        delete[] log_str;
    } else {
        Logger::write(shader_log_file_name(),Category::INTERNAL_ERROR,
                      (format("Name %1% is not a program\n") % program).str());
    }
}

std::string logger::get_current_date()
{
    const int date_length = 80;

    time_t raw_time;
    struct tm* time_info;
    char time_buffer[date_length];

    std::time(&raw_time);
    time_info = std::localtime(&raw_time);

    std::strftime(time_buffer, date_length, "%c", time_info);

    return std::string(time_buffer);
}
