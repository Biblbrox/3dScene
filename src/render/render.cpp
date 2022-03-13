#include "render/render.hpp"
#include "utils/math.hpp"
#include "logger/logger.hpp"
#include "render/terrain.hpp"
#include "config.hpp"
#include "shadernames.hpp"

using glm::vec2;
using glm::vec3;
using glm::vec4;
using glm::mat3;
using glm::mat4;
using math::rotate_around;
using math::operator/;
using logger::program_log_file_name;
using logger::Category;
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

void render::drawTriangles(const std::vector<vec3>& points)
{
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

    glDrawArrays(GL_TRIANGLES, 0, points.size());
    glDisableVertexAttribArray(0);

    glDeleteBuffers(1, &verticesID);
    glDeleteVertexArrays(1, &VAO);
}

void render::drawDots(const std::vector<vec3>& dots)
{
    GLuint VAO = 0;
    GLuint verticesID = 0;

    glGenVertexArrays(1, &VAO);
    glBindVertexArray(VAO);
    glGenBuffers(1, &verticesID);
    glBindBuffer(GL_ARRAY_BUFFER, verticesID);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vec3) * dots.size(), dots.data(), GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, nullptr);
    glEnableVertexAttribArray(0);
    glDrawArrays(GL_POINTS, 0, dots.size());
    glDisableVertexAttribArray(0);

    glDeleteBuffers(1, &verticesID);
    glDeleteVertexArrays(1, &VAO);
}

void render::drawTexture(ShaderProgram& program, const TextureBase &texture,
                         const glm::vec3& position, GLfloat angle,
                         glm::vec3 rot_axis, bool light, GLfloat sc)
{
    mat4 transform = math::createTransform(position, angle, rot_axis, texture.getSize());
    mat4 old_model = program.getMat4(U_MODEL_MATRIX);
    program.leftMult(U_MODEL_MATRIX, transform);
    if (light)
        program.setMat3(U_NORMAL_MATRIX, mat3(transpose(inverse(transform))));

    texture.draw(program);

    program.setMat4(U_MODEL_MATRIX, old_model);
}

void render::renderTerrain(ShaderProgram& program, const Terrain& terrain)
{
    program.setInt(U_DRAW_TERRAIN, true);
    program.setMat4(U_HEIGHT_MAP_SCALE_MATRIX, glm::scale(mat4(1.f), terrain.getScale()));

    glBindTexture(GL_TEXTURE_2D, terrain.getTextureID());
    glBindVertexArray(terrain.getVAO());
    if (Config::getVal<bool>("EnableLight"))
         program.setMat3(U_NORMAL_MATRIX, mat3(1.f));
    glEnable(GL_PRIMITIVE_RESTART);
    glPrimitiveRestartIndex(terrain.getWidth() * terrain.getHeight());
    glDrawElements(GL_TRIANGLE_STRIP, terrain.getIndices().size(), GL_UNSIGNED_INT, nullptr);
    glBindTexture(GL_TEXTURE_2D, 0);
    glBindVertexArray(0);
    glDisable(GL_PRIMITIVE_RESTART);

    program.setInt(U_DRAW_TERRAIN, false);
}

/*void render::drawVerticesTrans(ShaderProgram& program, const GLfloat* points,
                               size_t size, const TextureBase &texture,
                               const vec3& position,
                               GLfloat angle, vec3 rot_axis, GLfloat sc)
{
    vec3 pos = {position.x / texture.getWidth(),
                position.y / texture.getHeight(),
                position.z / texture.getDepth()};

    const GLfloat half = 1.f;
    const GLfloat centerX = pos.x + half;
    const GLfloat centerY = pos.y + half;
    const GLfloat centerZ = pos.z + half;

    const vec3 scale = vec3(texture.getWidth(), texture.getHeight(),
                            texture.getDepth());

    mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                  rot_axis);
    mat4 translation = translate(mat4(1.f), pos);
    mat4 scaling = glm::scale(mat4(1.f), scale);
    auto old_model = program.getMat4(U_MODEL_MATRIX);
    program.leftMult(U_MODEL_MATRIX, scaling * rotation * translation);

    GLuint verticesID = 0;
    GLuint VAO = 0;

    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &verticesID);
    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, verticesID);
    glBufferData(GL_ARRAY_BUFFER, sizeof(GLfloat) * size, points, GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, nullptr);
    glEnableVertexAttribArray(0);

    glDrawArrays(GL_TRIANGLES, 0, size);
    glDisableVertexAttribArray(0);

    glDeleteBuffers(1, &verticesID);
    glDeleteVertexArrays(1, &VAO);

    program.setMat4(U_MODEL_MATRIX, old_model);
} */

void render::drawVerticesVAO(ShaderProgram& program, const GLfloat* points,
                             size_t size, const TextureBase &texture,
                             const vec3& position, GLfloat angle,
                             vec3 rot_axis, GLfloat sc)
{
    mat4 transform = math::createTransform(position, angle, rot_axis, texture.getSize());
    auto old_model = program.getMat4(U_MODEL_MATRIX);
    program.leftMult(U_MODEL_MATRIX, transform);

    program.setMat4(U_MODEL_MATRIX, old_model);
}

void render::drawSkybox(GLuint skybox_vao, GLuint skybox_texture)
{
    glDepthFunc(GL_LEQUAL);
    glBindVertexArray(skybox_vao);
    glBindTexture(GL_TEXTURE_CUBE_MAP, skybox_texture);
    glDrawArrays(GL_TRIANGLES, 0, 36);
    glDepthFunc(GL_LESS);
}
