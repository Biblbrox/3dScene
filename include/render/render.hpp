#ifndef RENDER_HPP
#define RENDER_HPP

#include <GL/glew.h>

#include "shaderprogram.hpp"
#include "sprite.hpp"
#include "render/terrain.hpp"

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
    void drawTexture(ShaderProgram& program, const TextureBase &texture,
                     const vec3& pos, GLfloat angle = 0,
                     vec3 rot_axis = {1.f, 0.f, 0.f}, bool light = false, GLfloat scale = 1.f);
    
    void drawLinen(const std::vector<vec3>& points, bool adjacency = false);

    void drawDots(const std::vector<vec3>& dots);

    void drawTriangles(const std::vector<vec3> &points);

    void drawSkybox(GLuint skybox_vao, GLuint skybox_texture);

    /**
     * Draw vertices with transformation
     * @param program
     * @param points
     * @param size
     * @param texture
     * @param position
     * @param angle
     * @param rot_axis
     * @param scale
     */
    /*void drawVerticesTrans(ShaderProgram& program, const GLfloat* points,
                           size_t size, const TextureBase &texture,
                           const vec3& position, GLfloat angle = 0.f,
                           vec3 rot_axis = {1.f, 0.f, 0.f}, GLfloat scale = 1.f);*/


    /**
     * Draw vertices
     * @param program
     * @param points
     * @param size
     * @param texture
     * @param position
     * @param angle
     * @param rot_axis
     * @param scale
     */
    void drawVerticesVAO(ShaderProgram& program, const GLfloat* points,
                         size_t size, const TextureBase &texture,
                         const vec3& position,
                         GLfloat angle = 0.f,
                         vec3 rot_axis = {1.f, 0.f, 0.f}, GLfloat scale = 1.f);

    /**
     * Render terrain
     * @param program
     * @param terrain
     */
    void renderTerrain(ShaderProgram& program, const Terrain& terrain);
};

#endif //RENDER_HPP
