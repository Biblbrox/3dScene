#ifndef LOGGER_HPP
#define LOGGER_HPP

#include <string>
#include <GL/glew.h>
#include <unordered_map>
#include <memory>
#include <boost/format.hpp>
#include <fstream>
#include <iostream>
#include <utility>
#include <ctime>
#include <chrono>

#include "timer.hpp"

namespace utils::log {
    enum class Category {
        INFO,
        FS_ERROR,
        INITIALIZATION_ERROR,
        SHADER_COMPILE_ERROR,
        UNEXPECTED_ERROR,
        INTERNAL_ERROR
    };

    constexpr const char *shader_log_file_name()
    {
        return "shader_log.log";
    }

    constexpr const char *program_log_file_name()
    {
        return "scene_log.log";
    }

    /**
     * Writes shader log to shader log file and standard output
     * @param shader
     */
    void printShaderLog(GLuint shader);

    /**
     * Writes program log to shader log file and standard output
     * @param program
     */
    void printProgramLog(GLuint program);

    class Logger
    {
    public:
        template<typename ...Args>
        static void write(const std::string &file_name, Category category,
                          const std::string &format, Args &&... args) {

            std::string category_str;
            bool writeFile = true;
            switch (category) {
                case Category::INTERNAL_ERROR:
                    category_str = "Internal error";
                    break;
                case Category::FS_ERROR:
                    category_str = "File IO error";
                    break;
                case Category::UNEXPECTED_ERROR:
                    category_str = "Unexpected error";
                    break;
                case Category::INFO:
                    category_str = "Info";
                    writeFile = false;
                    break;
                case Category::SHADER_COMPILE_ERROR:
                    category_str = "Shader compile error";
                    break;
                default:
                    category_str = "Internal error";
                    break;
            }

            std::string date_str = utils::time::get_current_date();

            boost::format msg(format);
            std::initializer_list<char> {(static_cast<void>(
                    msg % args
            ), char{}) ...};
            std::string message = boost::str(msg);

            message = (boost::format("%s[%s]: %s") % category_str % date_str % message).str();

            if (writeFile) {
                std::shared_ptr<std::ofstream> file(new std::ofstream,
                                                    [](auto f) {
                                                        f->close();
                                                    });
                if (m_logFiles.contains(file_name)) {
                    file = m_logFiles[file_name];
                } else {
                    file->open(file_name, std::ios_base::app);
                    m_logFiles[file_name] = file;
                }

                *file << message;
                file->flush();
            }

            if (category == Category::INFO)
                std::cout << message << "\n";
            else
                std::cerr << message << "\n";
        }

        template<typename ...Args>
        static void info(const std::string &format, Args &&... args)
        {
            write("", Category::INFO, format, std::forward<Args>(args)...);
        }

    private:
        static std::unordered_map<std::string, std::shared_ptr<std::ofstream>> m_logFiles;
    };
}

#endif //LOGGER_HPP
