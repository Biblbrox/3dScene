#ifndef MOONLANDER_CONSTANTS_HPP
#define MOONLANDER_CONSTANTS_HPP

#include <string>

const std::string RESOURCE_PATH = "../res/";
const std::string LOCALE_PATH = "../locale/";
const std::string SHADER_PATH = "../src/shaders/";

const std::string GAME_NAME = "AutoNet";

/**
 * Return full path to resource fileName
 * @param fileName
 * @return
 */
inline std::string getResourcePath(const std::string &fileName)
{
    return std::string(RESOURCE_PATH + fileName);
}

/**
 * Return full path to locale fileName
 * @param fileName
 * @return
 */
inline std::string getLocalePath(const std::string& fileName)
{
    return std::string(LOCALE_PATH + fileName);
}

/**
 * Return full path to shader fileName
 * @param fileName
 * @return
 */
inline std::string getShaderPath(const std::string &fileName)
{
    return std::string(SHADER_PATH + fileName);
}

#endif //MOONLANDER_CONSTANTS_HPP