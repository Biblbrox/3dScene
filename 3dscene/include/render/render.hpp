#ifndef RENDER_HPP
#define RENDER_HPP

#include <GL/glew.h>

#include "shaderprogram.hpp"
#include "sprite.hpp"

using glm::vec2;

namespace render
{
    /**
     * Render some subclass of Texture.
     * @param program
     * @param texture
     * @param x
     * @param y
     * @param angle
     * @param scale_factor
     */
    void drawTexture(ShaderProgram& program, const Texture &texture,
                     const glm::vec3& pos, GLfloat angle = 0,
                     glm::vec3 rot_axis = {1.f, 0, 0});
    
    void drawLinen(const std::vector<vec2>& points, bool adjacency = false);

    void drawDots(const std::vector<vec3>& dots);

    void drawTriangles(const std::vector<GLfloat> &points);

    void drawBoundingBox(ShaderProgram& program,
                         const std::vector<GLfloat>& points,
                         const Texture &texture,
                         const glm::vec3& position, GLfloat angle,
                         glm::vec3 rot_axis);
};

#endif //RENDER_HPP
