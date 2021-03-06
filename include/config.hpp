#ifndef CONFIG_HPP
#define CONFIG_HPP

#include <any>
#include <fstream>
#include <glm/glm.hpp>
#include <glm/gtx/string_cast.hpp>
#include <iostream>
#include <unordered_map>

#include "base.hpp"
#include "strutils/strutils.hpp"
#include "utils/math.hpp"

// TODO: make error handling in Config class
struct ConfigEqual : public std::equal_to<> {
    using is_transparent = void;
};

struct string_hash {
    using is_transparent = void;
    using key_equal = std::equal_to<>;
    using hash_type = std::hash<std::string_view>;

    size_t operator()(std::string_view txt) const
    {
        return hash_type{}(txt);
    }

    size_t operator()(const std::string &txt) const
    {
        return hash_type{}(txt);
    }

    size_t operator()(const char *txt) const
    {
        return hash_type{}(txt);
    }
};

static std::string as_string(std::any val, std::string_view type)
{
    if (type == "int") {
        return std::to_string(std::any_cast<int>(val));
    }
    else if (type == "float") {
        return std::to_string(std::any_cast<float>(val));
    }
    else if (type == "double") {
        return std::to_string(std::any_cast<double>(val));
    }
    else if (type == "char") {
        return std::to_string(std::any_cast<char>(val));
    }
    else if (type == "bool") {
        return std::to_string(std::any_cast<bool>(val));
    }
    else if (type == "long") {
        return std::to_string(std::any_cast<long>(val));
    }
    else if (type == "string") {
        return std::any_cast<std::string>(val);
    }
    else if (type == "const char*") {
        return std::any_cast<const char *>(val);
    }
    else if (type == "long long") {
        return std::to_string(std::any_cast<long long>(val));
    }
    else if (type == "vec4") {
        auto value = std::any_cast<glm::vec4>(val);
        return math::to_string(value);
    }
    else if (type == "vec3") {
        auto value = std::any_cast<glm::vec3>(val);
        return math::to_string(value);
    }
    else if (type == "vec2") {
        auto value = std::any_cast<glm::vec2>(val);
        return math::to_string(value);
    }
    else if (type == "vec2i") {
        auto value = std::any_cast<vec2i>(val);
        return math::to_string(value);
    }
    else if (type == "mat4") {
        auto value = std::any_cast<glm::mat4>(val);
        return math::to_string(value);
    }

    return "";
}

class Config {
  public:
    template <class T> static void addVal(const std::string &key, T val, const std::string &type)
    {
        auto const res = m_values.insert({key, val});
        auto const type_res = m_types.insert({key, type});
        if (!res.second) {
            res.first->second = val;
            type_res.first->second = type;
        }
    }

    static bool hasKey(const std::string &key)
    {
        return m_values.find(key) != m_values.cend();
    }

    static void removeKey(const std::string &key)
    {
        m_values.erase(key);
    }

    template <class T> static T &getVal(const std::string &key)
    {
        return std::any_cast<T &>(m_values[key]);
    }

    static void save(const std::string &file)
    {
        std::ofstream out(file);
        for (const auto &[key, val] : m_values)
            out << key << ":" << m_types[key] << ":" << as_string(val, m_types[key]) << "\n";
        out.close();
    }

    static void load(const std::string &file)
    {
        using strutils::split;
        std::ifstream in(file);
        std::string line;
        while ((std::getline(in, line))) {
            auto parts = split(line, ":");
            std::string key = parts[0];
            std::string_view type = parts[1];
            if (type == "int") {
                int val = std::stoi(parts[2]);
                addVal(key, val, "int");
            }
            else if (type == "float") {
                float val = std::stof(parts[2]);
                addVal(key, val, "float");
            }
            else if (type == "double") {
                double val = std::stod(parts[2]);
                addVal(key, val, "double");
            }
            else if (type == "char") {
                char val = std::stoi(parts[2]);
                addVal(key, val, "char");
            }
            else if (type == "bool") {
                bool val = std::stoi(parts[2]) == 1;
                addVal(key, val, "bool");
            }
            else if (type == "long") {
                long val = std::stol(parts[2]);
                addVal(key, val, "long");
            }
            else if (type == "long long") {
                long long val = std::stoll(parts[2]);
                addVal(key, val, "long long");
            }
            else if (type == "string") {
                addVal(key, parts[2], "string");
            }
            else if (type == "const char*") {
                addVal(key, parts[2], "const char*");
            }
            else if (type == "vec4") {
                auto vec = split(parts[2], " ");
                glm::vec4 val = {std::stof(vec[0]), std::stof(vec[1]), std::stof(vec[2]),
                                 std::stof(vec[3])};
                addVal(key, val, "vec4");
            }
            else if (type == "vec3") {
                auto vec = split(parts[2], " ");
                glm::vec3 val = {std::stof(vec[0]), std::stof(vec[1]), std::stof(vec[2])};
                addVal(key, val, "vec3");
            }
            else if (type == "vec2") {
                auto vec = split(parts[2], " ");
                glm::vec2 val{std::stof(vec[0]), std::stof(vec[1])};
                addVal(key, val, "vec2");
            }
            else if (type == "vec2i") {
                auto vec = split(parts[2], " ");
                vec2i val{std::stof(vec[0]), std::stof(vec[1])};
                addVal(key, val, "vec2i");
            }
            else if (type == "mat4") {
                auto mat = split(parts[2], " ");
                glm::mat4 val(
                    std::stof(mat[0]), std::stof(mat[1]), std::stof(mat[2]), std::stof(mat[3]),
                    std::stof(mat[4]), std::stof(mat[5]), std::stof(mat[6]), std::stof(mat[7]),
                    std::stof(mat[8]), std::stof(mat[9]), std::stof(mat[10]), std::stof(mat[11]),
                    std::stof(mat[12]), std::stof(mat[13]), std::stof(mat[14]), std::stof(mat[15]));
                addVal(key, val, "mat4");
            }
        }

        in.close();
    }

  private:
    static std::unordered_map<std::string, std::any, string_hash, ConfigEqual> m_values;
    static std::unordered_map<std::string, std::string, string_hash, ConfigEqual> m_types;
};

#endif // CONFIG_HPP
