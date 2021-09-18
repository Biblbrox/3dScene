#include <vector>
#include <string>

#include "strutils.hpp"

std::vector<std::string>
strutils::split(const std::string& str, const std::string& del)
{
    std::string s(str);
    size_t pos = 0;
    std::vector<std::string> res;
    while (s.rfind(del, 0) == 0) s.erase(0, del.length());
    while ((pos = s.find(del)) != std::string::npos) {
        res.emplace_back(s.substr(0, pos));
        s.erase(0, pos + del.length());
    }
    res.emplace_back(s);

    return res;
}

void strutils::padLine(std::string& line, size_t pad)
{
    line.insert(line.begin(), ' ', pad);
    line.insert(line.end(), ' ', pad);
}