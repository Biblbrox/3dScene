#include <GL/glew.h>
#include <glm/vec2.hpp>
#include <glm/vec3.hpp>

using glm::vec2;
using glm::vec3;

namespace utils
{
	struct Rect2D
	{
		GLfloat x;
		GLfloat y;
		GLfloat z;
		GLfloat w;
		GLfloat h;
		GLfloat d;
	};

	struct RectPoints2D
	{
		vec2 a;
		vec2 b;
		vec2 c;
		vec2 d;
	};

	struct Rect3D
	{
		GLfloat x;
		GLfloat y;
		GLfloat z;
		GLfloat w;
		GLfloat h;
		GLfloat d;
	};

	struct RectPoints3D
	{
		vec2 a;
		vec2 b;
		vec2 c;
		vec2 d;
		vec2 e;
		vec2 f;
		vec2 g;
		vec2 k;
	};
};
