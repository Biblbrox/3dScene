#include <stack>

#include "utils/collision.hpp"
#include "utils/logger.hpp"
#include "utils/bvh/aabb.hpp"
#include "utils/bvh/obb.hpp"

using utils::RectPoints3D;
using utils::log::Logger;
using math::rotate_around;
using math::computeCentroid;
using math::build_covarience_matrix;
using math::findBounds;

using std::sort;
using glm::mat4;
using glm::vec4;
using glm::dot;

std::vector<vec3> coll::buildVerticesFromRect3D(RectPoints3D rect)
{
    auto[a, b, c, d, e, f, g, k] = rect;
    return {
            // Front plane
            a, b, c, a, c, d,
            // Right plane
            b, e, f, b, f, c,
            // Back plane
            e, k, g, e, g, f,
            // Top plane
            d, c, f, d, f, g,
            // Left plane
            k, a, d, k, d, g,
            // Bottom plane
            k, e, b, k, b, a
    };
}

std::array<std::vector<vec3>, 2>
coll::divideByLongestSize(const std::vector<vec3>& vertices)
{
    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findBounds(vertices);

    std::vector<vec3> sorted_x;
    std::vector<vec3> sorted_y;
    std::vector<vec3> sorted_z;

    sorted_y = sorted_z = sorted_x = vertices;
    sort(sorted_x.begin(), sorted_x.end(), [](const vec3& v1, const vec3& v2){
        return v1.x < v2.x;
    });
    sort(sorted_y.begin(), sorted_y.end(), [](const vec3& v1, const vec3& v2){
        return v1.y < v2.y;
    });
    sort(sorted_z.begin(), sorted_z.end(), [](const vec3& v1, const vec3& v2){
        return v1.z < v2.z;
    });


    // Divide by longest side
    GLfloat x_length = std::abs(max_x - min_x);
    GLfloat y_length = std::abs(max_y - min_y);
    GLfloat z_length = std::abs(max_z - min_z);
    int longest_side = (x_length > y_length && x_length > z_length)
                       ? 0
                       : ((y_length > x_length && y_length > z_length) ? 1 : 2);

    GLfloat x_border = min_x + x_length / 2.f;
    GLfloat y_border = min_y + y_length / 2.f;
    GLfloat z_border = min_z + z_length / 2.f;

    std::vector<vec3> left_part;
    std::vector<vec3> right_part;
    if (longest_side == 0) { // divide by x side
        for (auto & i : sorted_x) {
            if (i.x < x_border)
                left_part.push_back(i);
            else
                right_part.push_back(i);
        }
    } else if (longest_side == 1) { // divide by y side
        for (auto & i : sorted_y) {
            if (i.y < y_border)
                left_part.push_back(i);
            else
                right_part.push_back(i);
        }
    } else { // divide by z side
        for (auto & i : sorted_z) {
            if (i.z < z_border)
                left_part.push_back(i);
            else
                right_part.push_back(i);
        }
    }

    if (left_part.size() <= 1 && right_part.size() <= 1)
        return {left_part, right_part};

    if (longest_side == 0) {
        left_part[left_part.size() - 1].x = right_part[0].x;
    } else if (longest_side == 1) {
        left_part[left_part.size() - 1].y = right_part[0].y;
    } else {
        left_part[left_part.size() - 1].z = right_part[0].z;
    }

    return {left_part, right_part};
}

using NodeData = RectPoints3D;
using Node = utils::data::Node<size_t, NodeData>;
using NodePtr = std::shared_ptr<Node>;

using VertData = std::vector<GLfloat>;
using VertDataPtr = std::shared_ptr<VertData>;

/**
 * Build top-down BVH tree until min_rect condition not required in
 * one of axis.
 * division is step original mesh divided by
 * @param mesh_vertices
 * @return
 */
NodePtr coll::buildBVH(const VertData &mesh_vertices, vec3 min_rect) noexcept
{
    NodePtr node = std::make_shared<Node>();
    node->m_data = std::make_shared<NodeData>(buildAABB(mesh_vertices));

    auto[left_part, right_part] = divideByLongestSize(mesh_vertices);

    if (left_part.size() <= 1 && right_part.size() <= 1)
        return nullptr;

    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findBounds(
            mesh_vertices);

    // Divide by longest side
    GLfloat x_length = std::abs(max_x - min_x);
    GLfloat y_length = std::abs(max_y - min_y);
    GLfloat z_length = std::abs(max_z - min_z);
    int longest_side = (x_length > y_length && x_length > z_length)
                       ? 0
                       : ((y_length > x_length && y_length > z_length) ? 1 : 2);

    if ((longest_side == 0 && x_length <= min_rect.x)
        || (longest_side == 1 && y_length <= min_rect.y)
        || (longest_side == 2 && z_length <= min_rect.z))
        return nullptr;

    if (x_length > min_rect.x || y_length > min_rect.y
        || z_length > min_rect.z) {
        node->m_left = buildBVH(left_part, min_rect);
        node->m_right = buildBVH(right_part, min_rect);
        return node;
    }

    return nullptr;
}

/**
* Build top-down BVH tree until min_rect condition not required in
* one of axis.
* division is step original mesh divided by
* @param mesh_vertices
* @return
*/
NodePtr coll::buildBVHOBB(const VertData &mesh_vertices, vec3 min_rect) noexcept
{
    NodePtr node = std::make_shared<Node>();
    node->m_data = std::make_shared<NodeData>(buildOBB(mesh_vertices));

    auto[left_part, right_part] = divideByLongestSize(mesh_vertices);

    if (left_part.size() <= 1 && right_part.size() <= 1)
        return nullptr;

    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findBounds(
            mesh_vertices);

    // Divide by longest side
    GLfloat x_length = std::abs(max_x - min_x);
    GLfloat y_length = std::abs(max_y - min_y);
    GLfloat z_length = std::abs(max_z - min_z);
    int longest_side = (x_length > y_length && x_length > z_length)
                       ? 0
                       : ((y_length > x_length && y_length > z_length) ? 1 : 2);

    if ((longest_side == 0 && x_length <= min_rect.x)
        || (longest_side == 1 && y_length <= min_rect.y)
        || (longest_side == 2 && z_length <= min_rect.z))
        return nullptr;

    if (x_length > min_rect.x || y_length > min_rect.y
        || z_length > min_rect.z) {
        node->m_left = buildBVHOBB(left_part, min_rect);
        node->m_right = buildBVHOBB(right_part, min_rect);
        return node;
    }

    return nullptr;
}

using Node = utils::data::Node<size_t, RectPoints3D>;
using NodePtr = std::shared_ptr<Node>;
using TreePtr = std::shared_ptr<utils::data::Node<size_t, RectPoints3D>>;

/**
 * Find raycast intersection
 * @param ray_dir
 * @param ray_origin
 * @param rect
 * @return
 */
void
coll::BVHAABBTraversalRec(TreePtr tree, const Ray& ray,
                          std::vector<vec3>& intersections)
{
    bool isLeaf = !tree->m_left && !tree->m_right;
    if (isLeaf) {
        auto [instersect, pos] = raycastAABB(ray, *tree->m_data);
        if (instersect)
            intersections.push_back(pos);
    } else {
        if (tree->m_left && raycastAABB(ray, *tree->m_left->m_data).first)
            BVHAABBTraversalRec(tree->m_left, ray, intersections);
        if (tree->m_right && raycastAABB(ray, *tree->m_right->m_data).first)
            BVHAABBTraversalRec(tree->m_right, ray, intersections);
    }
}

/**
* Find intersection of ray with aabb recursively.
* @param ray_dir
* @param ray_origin
* @param rect
* @return
*/
std::pair<bool, vec3> coll::BVHAABBTraversal(TreePtr tree, const Ray& ray)
{
    std::vector<vec3> intersections;
    BVHAABBTraversalRec(tree, ray, intersections);

    if (intersections.empty())
        return {false, vec3(0)};

    vec3 ray_origin = ray.origin;
    GLfloat closest_length = glm::length(intersections[0] - ray_origin);
    vec3 closest_hit = intersections[0];
    for (const auto & pos: intersections)
        if (glm::length(pos - ray_origin) < closest_length)
            closest_hit = pos;

    return {true, closest_hit};
}

bool
coll::interInRange(const Terrain& terrain, GLfloat start, GLfloat end, const Ray& ray)
{
    vec3 start_p = ray_point(ray, start);
    vec3 end_p = ray_point(ray, end);

    return !terrain.isUnderGround(start_p) && terrain.isUnderGround(end_p);
}

std::pair<bool, vec3>
coll::rayTerrainIntersection(const Terrain &terrain, const Ray &ray,
                             GLfloat start, GLfloat end, size_t num_iter)
{
    size_t iter = 0;
    GLfloat mid = 0;
    while (++iter <= num_iter) {
        mid = start + (end - start) / 2.f;

        if (interInRange(terrain, start, mid, ray))
            end = mid;
        else
            start = mid;
    }

    vec3 inter = ray_point(ray, mid);
    return {true, inter};
}
