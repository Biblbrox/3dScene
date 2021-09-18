#ifndef STRUTILS_HPP
#define STRUTILS_HPP

#include <vector>
#include <string>

namespace strutils
{
    /**
     * Split lines to vector of words
     * @param str
     * @param del
     * @return
     */
    std::vector<std::string>
    split(const std::string& str, const std::string& del);


    /**
     * Add padding to line
     * @param line
     * @param pad
     */
    void padLine(std::string& line, size_t pad);
}

#endif //STRUTILS_HPP
