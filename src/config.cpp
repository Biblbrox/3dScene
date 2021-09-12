#include "config.hpp"

std::unordered_map<std::string, std::any, string_hash, ConfigEqual> Config::m_values = {};
std::unordered_map<std::string, std::string, string_hash, ConfigEqual> Config::m_types = {};
