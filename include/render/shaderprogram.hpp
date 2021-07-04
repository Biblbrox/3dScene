#ifndef SHADERPROGRAM_HPP
#define SHADERPROGRAM_HPP

#include <GL/glew.h>
#include <string>
#include <glm/mat4x4.hpp>
#include <unordered_map>

class ShaderProgram
{
public:
    explicit ShaderProgram();

    virtual ~ShaderProgram();
    virtual void initPrograms() = 0;

    void addProgram(const std::string& programName, const std::string& vertex,
                    const std::string& fragment,
                    const std::string& geometry = "");
    void useProgram(const std::string& programName);
    virtual void freeProgram() final;

    /**
     * Write data to uniforms
     * @param str
     * @param value
     */
    virtual void setFloat(const std::string& str, GLfloat value);
    virtual void setInt(const std::string &name, GLint value);
    virtual void setVec3(const std::string &name, const glm::vec3& value);
    virtual void setVec4(const std::string &name, const glm::vec4& value);
    virtual void setMat3(const std::string &name, const glm::mat3& value);
    virtual void setMat4(const std::string &name, const glm::mat4& value);

    virtual GLfloat getFloat(const std::string &name);
    virtual int getInt(const std::string &name);
    virtual glm::vec3 getVec3(const std::string &name);
    virtual glm::vec4 getVec4(const std::string &name);
    virtual glm::mat3 getMat3(const std::string &name);
    virtual glm::mat4 getMat4(const std::string &name);

    virtual void leftMult(const std::string& name, const glm::mat4& matrix);
    virtual void mult(const std::string& name, const glm::vec4& vec);

    void bind() const;
    void unbind();

    /**
     * Get current program ID
     * @return
     */
    GLuint getProgramID();

protected:
    // Point to current program
    GLuint m_programID;
    // Store program name and corresponding id
    std::unordered_map<std::string, GLuint> m_programs;
    // Store uniforms for each program
    std::unordered_map<GLuint, std::unordered_map<std::string, GLfloat>> m_flUniforms;
    std::unordered_map<GLuint, std::unordered_map<std::string, int>> m_intUniforms;
    std::unordered_map<GLuint, std::unordered_map<std::string, glm::vec3>> m_vec3Uniforms;
    std::unordered_map<GLuint, std::unordered_map<std::string, glm::vec4>> m_vec4Uniforms;
    std::unordered_map<GLuint, std::unordered_map<std::string, glm::mat3>> m_mat3Uniforms;
    std::unordered_map<GLuint, std::unordered_map<std::string, glm::mat4>> m_mat4Uniforms;
};

#endif //SHADERPROGRAM_HPP
