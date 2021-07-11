#include <stack>

#include "utils/collision.hpp"
#include "utils/logger.hpp"

using utils::RectPoints3D;
using utils::log::Logger;
using utils::math::rotate_around;
using std::sort;

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

std::array<GLfloat, 6>
coll::findMeshBound(const std::vector<vec3> &mesh_vertices)
{
    GLfloat min_x, max_x, min_y, max_y, min_z, max_z;
    min_x = max_x = mesh_vertices[0].x;
    min_y = max_y = mesh_vertices[0].y;
    min_z = max_z = mesh_vertices[0].z;
    for (auto vert: mesh_vertices) {
        if (vert.x < min_x)
            min_x = vert.x;
        if (vert.x > max_x)
            max_x = vert.x;

        if (vert.y < min_y)
            min_y = vert.y;
        if (vert.y > max_y)
            max_y = vert.y;

        if (vert.z < min_z)
            min_z = vert.z;
        if (vert.z > max_z)
            max_z = vert.z;
    }

    return {min_x, max_x, min_y, max_y, min_z, max_z};
}

/**
 * Return rectangular bounding box for given vertices
 * Result contain vertices grouped to triangle primitives
 * @param vertices
 * @param angle
 * @param rot_axis
 * @return
 */
RectPoints3D coll::buildAABB(const std::vector<vec3> &vertices) noexcept
{
    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(vertices);

    // Front plane
    vec3 a = {min_x, min_y, min_z};
    vec3 b = {max_x, min_y, min_z};
    vec3 c = {max_x, max_y, min_z};
    vec3 d = {min_x, max_y, min_z};

    // Right plane
    vec3 e = {max_x, min_y, max_z};
    vec3 f = {max_x, max_y, max_z};

    // Back plane
    vec3 g = {min_x, max_y, max_z};
    vec3 k = {min_x, min_y, max_z};

    return {a, b, c, d, e, f, g, k};
}

/**
* Return rectangular bounding box for given vertices
* Result contain vertices grouped to triangle primitives
* @param mesh_vertices
* @param angle
* @param rot_axis
* @return
*/
RectPoints3D
coll::AABBtoWorldSpace(RectPoints3D rect,
                       const vec3& rot_axis, GLfloat angle,
                       const vec3& position, const Texture& texture) noexcept
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
    mat4 transform = scaling * rotation * translation;

    rect.a = transform * vec4(rect.a, 1.f);
    rect.b = transform * vec4(rect.b, 1.f);
    rect.c = transform * vec4(rect.c, 1.f);
    rect.d = transform * vec4(rect.d, 1.f);
    rect.e = transform * vec4(rect.e, 1.f);
    rect.f = transform * vec4(rect.f, 1.f);
    rect.g = transform * vec4(rect.g, 1.f);
    rect.k = transform * vec4(rect.k, 1.f);

    return rebuildAABBinWorldSpace(rect);
}

RectPoints3D
coll::AABBTransform(RectPoints3D rect,
                    const vec3& rot_axis, GLfloat angle,
                    const vec3& position, const Texture& texture) noexcept
{

    vec3 pos = {position.x / texture.getWidth(),
                position.y / texture.getHeight(),
                position.z / texture.getDepth()};

    const GLfloat half = 1.f;
    const GLfloat centerX = position.x + half;
    const GLfloat centerY = position.y + half;
    const GLfloat centerZ = position.z + half;

    mat4 rotation = rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                  rot_axis);
    mat4 translation = translate(mat4(1.f), position);
    mat4 transform = rotation * translation;

    rect.a = transform * vec4(rect.a, 1.f);
    rect.b = transform * vec4(rect.b, 1.f);
    rect.c = transform * vec4(rect.c, 1.f);
    rect.d = transform * vec4(rect.d, 1.f);
    rect.e = transform * vec4(rect.e, 1.f);
    rect.f = transform * vec4(rect.f, 1.f);
    rect.g = transform * vec4(rect.g, 1.f);
    rect.k = transform * vec4(rect.k, 1.f);

    return rebuildAABBinWorldSpace(rect);
}

/**
 * Return rectangular oriented bounding box for given vertices
 * Result contain vertices grouped to triangle primitives
 * @param mesh_vertices
 * @param angle
 * @param rot_axis
 * @return
 */
RectPoints3D coll::buildOBB(const std::vector<vec3> &mesh_vertices) noexcept
{
    assert(mesh_vertices.size() % 3 == 0
           && "Vertices count must be power of 3");
    // Build covarience matrix
    glm::mat3 cov_glm = utils::math::build_covarience_matrix(mesh_vertices);
    Eigen::Matrix3f cov;
    cov << cov_glm[0][0], cov_glm[0][1], cov_glm[0][2],
            cov_glm[1][0], cov_glm[1][1], cov_glm[1][2],
            cov_glm[2][0], cov_glm[2][1], cov_glm[2][2];
    // Find eigen vectors
    Eigen::SelfAdjointEigenSolver<Eigen::Matrix3f> eigensolver(cov);
    if (eigensolver.info() != Eigen::Success) {
        // TODO: throw error
    }
    auto eigen_vectors = eigensolver.eigenvectors();
    //std::cout << eigen_vectors;

    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(
            mesh_vertices);

    // Front plane
    vec3 a = {min_x, min_y, min_z};
    vec3 b = {max_x, min_y, min_z};
    vec3 c = {max_x, max_y, min_z};
    vec3 d = {min_x, max_y, min_z};

    // Right plane
    vec3 e = {max_x, min_y, max_z};
    vec3 f = {max_x, max_y, max_z};

    // Back plane
    vec3 g = {min_x, max_y, max_z};
    vec3 k = {min_x, min_y, max_z};

    return {a, b, c, d, e, f, g, k};
}

std::array<std::vector<vec3>, 2>
coll::divideByLongestSize(const std::vector<vec3>& vertices)
{
    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(vertices);

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
                       : (y_length > x_length && y_length > z_length) ? 1 : 2;

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
    } else if (longest_side == 2) { // divide by z side
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
    node->m_data = std::make_shared<NodeData>(coll::buildAABB(mesh_vertices));

    auto[left_part, right_part] = divideByLongestSize(mesh_vertices);

    if (left_part.size() <= 1 && right_part.size() <= 1)
        return nullptr;

    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(
            mesh_vertices);

    // Divide by longest side
    GLfloat x_length = std::abs(std::abs(max_x) - std::abs(min_x));
    GLfloat y_length = std::abs(std::abs(max_y) - std::abs(min_y));
    GLfloat z_length = std::abs(std::abs(max_z) - std::abs(min_z));

    if (x_length > min_rect.x || y_length > min_rect.y
        || z_length > min_rect.z) {
        node->m_left = buildBVH(left_part, min_rect);
        node->m_right = buildBVH(right_part, min_rect);
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
