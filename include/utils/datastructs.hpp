#ifndef DATASTRUCTS_HPP
#define DATASTRUCTS_HPP

#include <GL/glew.h>
#include <glm/glm.hpp>
#include <memory>

using glm::vec2;
using glm::vec3;
using glm::vec4;
using glm::mat4;

namespace utils::data {
    template<typename K, typename T>
    struct Node {
        K m_key;
        std::shared_ptr<T> m_data;
        std::shared_ptr<Node> m_left;
        std::shared_ptr<Node> m_right;
    };

	template<typename K, typename V, typename Functor>
	void mapBinaryTree(std::shared_ptr<Node<K, V>> node, Functor func) {
		if (node->m_left)
			mapBinaryTree<K, V, Functor>(node->m_left, func);
		if (node->m_right)
			mapBinaryTree<K, V, Functor>(node->m_right, func);

		func(node->m_data);
	}

    template<typename K, typename V, typename Functor>
    void mapBinaryTreeAtLevel(std::shared_ptr<Node<K, V>> node, Functor func, size_t level) {
        if (node->m_left)
            mapBinaryTreeAtLevel<K, V, Functor>(node->m_left, func, level - 1);
        if (node->m_right)
            mapBinaryTreeAtLevel<K, V, Functor>(node->m_right, func, level - 1);

        if (!level)
            func(node->m_data);
    }

	template<typename K, typename V, typename Functor>
	void mapBinaryTreeLeafs(std::shared_ptr<Node<K, V>> node, Functor func) {
		if (node->m_left)
			mapBinaryTreeLeafs<K, V, Functor>(node->m_left, func);
		if (node->m_right)
			mapBinaryTreeLeafs<K, V, Functor>(node->m_right, func);

		if (!node->m_left || !node->m_right) // Leaf case
			func(node->m_data);
	}
}

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
		vec3 a;
		vec3 b;
		vec3 c;
		vec3 d;
		vec3 e;
		vec3 f;
		vec3 g;
		vec3 k;
	};

    inline RectPoints3D rectTransform(const RectPoints3D& in, const mat4& transform)
    {
        RectPoints3D rect = in;

        rect.a = transform * vec4(rect.a, 1.f);
        rect.b = transform * vec4(rect.b, 1.f);
        rect.c = transform * vec4(rect.c, 1.f);
        rect.d = transform * vec4(rect.d, 1.f);
        rect.e = transform * vec4(rect.e, 1.f);
        rect.f = transform * vec4(rect.f, 1.f);
        rect.g = transform * vec4(rect.g, 1.f);
        rect.k = transform * vec4(rect.k, 1.f);

        return rect;
    }
};

#endif // DATASTRUCTS_HPP