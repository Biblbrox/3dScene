#ifndef COLLISION_HPP
#define COLLISION_HPP

#include <cmath>
#include <algorithm>
#include <glm/gtc/constants.hpp>
#include <glm/gtx/transform.hpp>
#include <glm/gtx/rotate_vector.hpp>
#include <GL/glew.h>

namespace coll
{
    /**
     * Build 2d rectangle from rect with corrected coords by
     * rotation angle
     * @param rect
     * @param alpha
     * @return
     */
    inline utils::RectPoints2D
    buildRectPoints2d(const utils::Rect2D &rect, GLfloat alpha) noexcept
    {
        GLfloat bx, by, cx, cy, dx, dy;
        const GLfloat x = rect.x;
        const GLfloat y = rect.y;
        const GLfloat width = rect.w;
        const GLfloat height = rect.h;
        // angle must be in range 0 - 2*pi
        alpha -= glm::two_pi<GLfloat>()
			* std::floor(alpha / glm::two_pi<GLfloat>());

        alpha = -alpha;

        GLfloat alpha_cos = std::cos(alpha);
        GLfloat alpha_sin = std::sin(alpha);

        bx = x + width * alpha_cos;
        by = y - width * alpha_sin;

        dx = x + height * alpha_sin;
        dy = y + height * alpha_cos;

        cx = bx + height * alpha_sin;
        cy = by + height * alpha_cos;

        return {{x,  y}, {bx, by}, {cx, cy}, {dx, dy}};
    }

    /**
     * Return rectangular bounding box for given vertices
     * Result contain vertices grouped to triangle primitives
     * @param mesh_vertices
     * @param angle
     * @param rot_axis
     * @return
     */
    inline std::vector<GLfloat>
    buildBoundingPoints3d(const std::vector<GLfloat>& mesh_vertices) noexcept
    {
        assert(mesh_vertices.size() % 3 == 0
               && "Vertices count must be power of 3");
        GLfloat min_x, max_x, min_y, max_y, min_z, max_z;
        min_x = max_x = mesh_vertices[0];
        min_y = max_y = mesh_vertices[1];
        min_z = max_z = mesh_vertices[2];
        for (size_t i; i < mesh_vertices.size(); i += 3) {
            if (mesh_vertices[i] < min_x)
                min_x = mesh_vertices[i];
            if (mesh_vertices[i] > max_x)
                max_x = mesh_vertices[i];

            if (mesh_vertices[i + 1] < min_y)
                min_y = mesh_vertices[i + 1];
            if (mesh_vertices[i + 1] > max_y)
                max_y = mesh_vertices[i + 1];

            if (mesh_vertices[i + 2] < min_z)
                min_z = mesh_vertices[i + 2];
            if (mesh_vertices[i + 2] > max_z)
                max_z = mesh_vertices[i + 2];
        }

//        max_x += 1;
//        max_y += 1;
//        max_z += 1;
//
//        min_x -= 1;
//        min_y -= 1;
//        min_z -= 1;

        // Front plane
        glm::vec3 a = {min_x, min_y, min_z};
        glm::vec3 b = {max_x, min_y, min_z};
        glm::vec3 c = {max_x, max_y, min_z};
        glm::vec3 d = {min_x, max_y, min_z};

        // Right plane
        glm::vec3 e = {max_x, min_y, max_z};
        glm::vec3 f = {max_x, max_y, max_z};

        // Back plane
        glm::vec3 g = {min_x, max_y, max_z};
        glm::vec3 k = {min_x, min_y, max_z};

        return {
                // Front plane
                a.x, a.y, a.z,
                b.x, b.y, b.z,
                c.x, c.y, c.z,
                a.x, a.y, a.z,
                c.x, c.y, c.z,
                d.x, d.y, d.z,
                // Right plane
                b.x, b.y, b.z,
                e.x, e.y, e.z,
                f.x, f.y, f.z,
                b.x, b.y, b.z,
                f.x, f.y, f.z,
                c.x, c.y, c.z,
                // Back plane
                e.x, e.y, e.z,
                k.x, k.y, k.z,
                g.x, g.y, g.z,
                e.x, e.y, e.z,
                g.x, g.y, g.z,
                f.x, f.y, f.z,
                // Top plane
                d.x, d.y, d.z,
                c.x, c.y, c.z,
                f.x, f.y, f.z,
                d.x, d.y, d.z,
                f.x, f.y, f.z,
                g.x, g.y, g.z,
                // Left plane
                k.x, k.y, k.z,
                a.x, a.y, a.z,
                d.x, d.y, d.z,
                k.x, k.y, k.z,
                d.x, d.y, d.z,
                g.x, g.y, g.z,
                // Bottom plane
                k.x, k.y, k.z,
                e.x, e.y, e.z,
                b.x, b.y, b.z,
                k.x, k.y, k.z,
                b.x, b.y, b.z,
                a.x, a.y, a.z,
        };
    }
   

    /**
     * Check whether first line (p11, p12) intersect with second (p21, p22)
     * @param p11
     * @param p12
     * @param p21
     * @param p22
     * @return
     */
    constexpr bool lineLine(const vec2 &p11, const vec2 &p12,
                            const vec2 &p21, const vec2 &p22) noexcept
    {
        GLfloat x1 = p11.x;
        GLfloat x2 = p12.x;
        GLfloat x3 = p21.x;
        GLfloat x4 = p22.x;

        GLfloat y1 = p11.y;
        GLfloat y2 = p12.y;
        GLfloat y3 = p21.y;
        GLfloat y4 = p22.y;

        // calculate the distance to intersection point
        GLfloat uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3))
                     / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
        GLfloat uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3))
                     / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

        // if uA and uB are between 0-1, lines are colliding
        return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1;
    }

	constexpr bool lineRect(const glm::vec3& x1, const glm::vec3& x2,
							const glm::vec3& y1, const glm::vec3& y2) noexcept
	{
		
	}
}

#endif //COLLISION_HPP
