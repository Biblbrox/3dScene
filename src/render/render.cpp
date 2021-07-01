#include "render/render.hpp"
#include "utils/math.hpp"
#include "utils/logger.hpp"
#include "render/terrain.hpp"

using glm::vec2;
using glm::mat4;
using glm::vec3;
using utils::math::rotate_around;
using utils::math::operator/;
using utils::log::program_log_file_name;
using utils::log::Category;
using boost::format;

void render::drawLinen(const std::vector<vec3>& points, bool adjacency)
{
    if (adjacency)
        assert(points.size() % 2 == 0);

    auto vertices = points.data();

    GLuint verticesID = 0;
    GLuint VAO = 0;

    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &verticesID);
    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, verticesID);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vec3) * points.size(), vertices,
                 GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, nullptr);
    glEnableVertexAttribArray(0);

    glDrawArrays(adjacency ? GL_LINE_STRIP_ADJACENCY : GL_LINES, 0, points.size());

    glDisableVertexAttribArray(0);

    glDeleteBuffers(1, &verticesID);
    glDeleteVertexArrays(1, &VAO);
}

void render::drawTriangles(const std::vector<GLfloat>& points)
{
    assert(points.size() % 3 == 0);
    auto vertices = points.data();

    GLuint verticesID = 0;
    GLuint VAO = 0;

    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &verticesID);
    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, verticesID);
    glBufferData(GL_ARRAY_BUFFER, sizeof(GLfloat) * points.size(), vertices,
                 GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, nullptr);
    glEnableVertexAttribArray(0);

    glDrawArrays(GL_TRIANGLES, 0, points.size() * 3);
    glDisableVertexAttribArray(0);

    glDeleteBuffers(1, &verticesID);
    glDeleteVertexArrays(1, &VAO);
}

void render::drawDots(const std::vector<vec3>& dots)
{
    auto vertices = dots.data();

    GLuint VAO = 0;
    GLuint verticesID = 0;

    glGenVertexArrays(1, &VAO);
    glBindVertexArray(VAO);
    glGenBuffers(1, &verticesID);
    glBindBuffer(GL_ARRAY_BUFFER, verticesID);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vec3) * dots.size(), vertices,
                 GL_DYNAMIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, nullptr);
    glEnableVertexAttribArray(0);
    glDrawArrays(GL_POINTS, 0, dots.size());
    glDisableVertexAttribArray(0);

    glDeleteBuffers(1, &verticesID);
    glDeleteVertexArrays(1, &VAO);
}

void render::drawTexture(ShaderProgram& program, const Texture &texture,
                         const glm::vec3& position, GLfloat angle,
                         glm::vec3 rot_axis)
{
    assert(texture.getVAO() != 0);

    glm::vec3 pos = {2.f * position.x / texture.getWidth(),
                     2.f * position.y / texture.getHeight(),
                     2.f * position.z / texture.getDepth()};
    const GLfloat half = 1.f;
    const GLfloat centerX = pos.x + half;
    const GLfloat centerY = pos.y + half;
    const GLfloat centerZ = pos.z + half;

    const glm::vec3 scale = glm::vec3(texture.getWidth(), texture.getHeight(),
                                      texture.getDepth());

    mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                  rot_axis);
    mat4 translation = translate(mat4(1.f), pos);
    mat4 scaling = glm::scale(mat4(1.f), scale);
    program.leftMult("ModelMatrix", scaling * rotation * translation);
    program.updateMat4("ModelMatrix");

    glBindTexture(GL_TEXTURE_2D, texture.getTextureID());
    glBindVertexArray(texture.getVAO());
    glDrawArrays(GL_TRIANGLES, 0, texture.getTriangleCount());
    glBindTexture(GL_TEXTURE_2D, 0);
    glBindVertexArray(0);

    translation[3] = glm::vec4(-pos.x,  -pos.y, -pos.z, 1);
    rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), -angle,
                             rot_axis);
    scaling = glm::scale(mat4(1.f), 1 / scale);
    program.leftMult("ModelMatrix", translation * rotation * scaling);
    program.updateMat4("ModelMatrix");
}

void render::renderTerrain(ShaderProgram& program, const Terrain& terrain)
{
    glBindTexture(GL_TEXTURE_2D, terrain.getTextureID());
    glBindVertexArray(terrain.getVAO());
    glDrawElements(GL_TRIANGLE_STRIP, terrain.getIndices().size(), GL_UNSIGNED_INT, nullptr);
    glBindTexture(GL_TEXTURE_2D, 0);
    glBindVertexArray(0);
}

void render::drawBoundingBox(ShaderProgram& program,
                             const std::vector<GLfloat>& points,
                             const Texture &texture,
                             const glm::vec3& position, GLfloat angle,
                             glm::vec3 rot_axis)
{
    assert(texture.getVAO() != 0);

    glm::vec3 pos = {2.f * position.x / texture.getWidth(),
                     2.f * position.y / texture.getHeight(),
                     2.f * position.z / texture.getDepth()};
    const GLfloat half = 1.f;
    const GLfloat centerX = pos.x + half;
    const GLfloat centerY = pos.y + half;
    const GLfloat centerZ = pos.z + half;

    const glm::vec3 scale = glm::vec3(texture.getWidth(), texture.getHeight(),
                                      texture.getDepth());

    mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                  rot_axis);
    mat4 translation = translate(mat4(1.f), pos);
    mat4 scaling = glm::scale(mat4(1.f), scale);
    program.leftMult("ModelMatrix", scaling * rotation * translation);
    program.updateMat4("ModelMatrix");

//    glBindTexture(GL_TEXTURE_2D, texture.getTextureID());
//    glBindVertexArray(texture.getVAO());

    GLuint verticesID = 0;
    GLuint VAO = 0;

    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &verticesID);
    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, verticesID);
    glBufferData(GL_ARRAY_BUFFER, sizeof(GLfloat) * points.size(), points.data(),
                 GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, nullptr);
    glEnableVertexAttribArray(0);

    glDrawArrays(GL_TRIANGLES, 0, points.size());
    glDisableVertexAttribArray(0);

    glDeleteBuffers(1, &verticesID);
    glDeleteVertexArrays(1, &VAO);

//    glBindTexture(GL_TEXTURE_2D, 0);
//    glBindVertexArray(0);

    translation[3] = glm::vec4(-pos.x,  -pos.y, -pos.z, 1);
    rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), -angle,
                             rot_axis);
    scaling = glm::scale(mat4(1.f), 1 / scale);
    program.leftMult("ModelMatrix", translation * rotation * scaling);
    program.updateMat4("ModelMatrix");
}


/*void render::drawPolygonModel(ShaderProgram& program, const Texture &texture,
                              const glm::vec3& position, GLfloat angle,
                              glm::vec3 rot_axis)
{
    assert(texture.getVAO() != 0);

    glm::vec3 pos = {2.f * position.x / texture.getWidth(),
                     2.f * position.y / texture.getHeight(),
                     2.f * position.z / texture.getDepth()};
    const GLfloat half = 1.f;
    const GLfloat centerX = pos.x + half;
    const GLfloat centerY = pos.y + half;
    const GLfloat centerZ = pos.z + half;

    const glm::vec3 scale = glm::vec3(texture.getWidth(), texture.getHeight(),
                                      texture.getDepth());

    mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                  rot_axis);
    mat4 translation = translate(mat4(1.f), pos);
    mat4 scaling = glm::scale(mat4(1.f), scale);
    program.leftMult("ModelMatrix", scaling * rotation * translation);
    program.updateMat4("ModelMatrix");

//    glBindTexture(GL_TEXTURE_2D, texture.getTextureID());
    glBindVertexArray(texture.getVAO());
    glDrawArrays(GL_TRIANGLES, 0, texture.getTriangleCount());
    glBindTexture(GL_TEXTURE_2D, 0);
    glBindVertexArray(0);

    translation[3] = glm::vec4(-pos.x,  -pos.y, -pos.z, 1);
    rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), -angle,
                             rot_axis);
    scaling = glm::scale(mat4(1.f), 1 / scale);
    program.leftMult("ModelMatrix", translation * rotation * scaling);
    program.updateMat4("ModelMatrix");
}
 */
