#include <stack>

#include "../include/utils/collision.hpp"

using utils::RectPoints3D;

std::vector<GLfloat>
coll::buildVerticesFromRect3D(utils::RectPoints3D rect)
{
    auto[a, b, c, d, e, f, g, k] = rect;
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

std::array<GLfloat, 6>
coll::findMeshBound(const std::vector<GLfloat> &mesh_vertices)
{
    GLfloat min_x, max_x, min_y, max_y, min_z, max_z;
    min_x = max_x = mesh_vertices[0];
    min_y = max_y = mesh_vertices[1];
    min_z = max_z = mesh_vertices[2];
    for (size_t i = 0; i < mesh_vertices.size(); i += 3) {
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

    return {min_x, max_x, min_y, max_y, min_z, max_z};
}

/**
 * Return rectangular bounding box for given vertices
 * Result contain vertices grouped to triangle primitives
 * @param mesh_vertices
 * @param angle
 * @param rot_axis
 * @return
 */
utils::RectPoints3D
coll::buildAABB(const std::vector<GLfloat> &mesh_vertices) noexcept
{
    assert(mesh_vertices.size() % 3 == 0
           && "Vertices count must be power of 3");
    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(
            mesh_vertices);

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

    return {a, b, c, d, e, f, g, k};
}


utils::RectPoints3D
coll::rebuildAABBinWorldSpace(const utils::RectPoints3D& rect) noexcept
{
    GLfloat min_x = std::min({rect.a.x, rect.b.x, rect.c.x, rect.d.x,
                              rect.e.x, rect.f.x, rect.g.x, rect.k.x});
    GLfloat max_x = std::max({rect.a.x, rect.b.x, rect.c.x, rect.d.x,
                              rect.e.x, rect.f.x, rect.g.x, rect.k.x});
    GLfloat min_y = std::min({rect.a.y, rect.b.y, rect.c.y, rect.d.y,
                              rect.e.y, rect.f.y, rect.g.y, rect.k.y});
    GLfloat max_y = std::max({rect.a.y, rect.b.y, rect.c.y, rect.d.y,
                              rect.e.y, rect.f.y, rect.g.y, rect.k.y});
    GLfloat min_z = std::min({rect.a.z, rect.b.z, rect.c.z, rect.d.z,
                              rect.e.z, rect.f.z, rect.g.z, rect.k.z});
    GLfloat max_z = std::max({rect.a.z, rect.b.z, rect.c.z, rect.d.z,
                              rect.e.z, rect.f.z, rect.g.z, rect.k.z});

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
utils::RectPoints3D
coll::AABBtoWorldSpace(utils::RectPoints3D rect,
                 const glm::vec3& rot_axis, GLfloat angle,
                 const glm::vec3& position, const Texture& texture) noexcept
{

    glm::vec3 pos = {2.f * position.x / texture.getWidth(),
                     2.f * position.y / texture.getHeight(),
                     2.f * position.z / texture.getDepth()};

    const GLfloat half = 1.f;
    const GLfloat centerX = pos.x + half;
    const GLfloat centerY = pos.y + half;
    const GLfloat centerZ = pos.z + half;

    const glm::vec3 scale = glm::vec3(texture.getWidth(), texture.getHeight(),
                                      texture.getDepth());

    mat4 rotation = utils::math::rotate_around(mat4(1.f), vec3(centerX, centerY, centerZ), angle,
                                               rot_axis);
    mat4 translation = translate(mat4(1.f), pos);
    mat4 scaling = glm::scale(mat4(1.f), scale);
    glm::mat4 transform = scaling * rotation * translation;

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
utils::RectPoints3D
coll::buildOBB(const std::vector<GLfloat> &mesh_vertices) noexcept
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

    return {a, b, c, d, e, f, g, k};
}

std::array<std::vector<GLfloat>, 2>
coll::divideByLongestSize(const std::vector<GLfloat>& mesh_vertices)
{
    auto[min_x, max_x, min_y, max_y, min_z, max_z] = findMeshBound(
            mesh_vertices);

    std::vector<glm::vec3> sorted_x;
    std::vector<glm::vec3> sorted_y;
    std::vector<glm::vec3> sorted_z;
    for (size_t i = 0; i < mesh_vertices.size(); i += 3)
        sorted_x.emplace_back(mesh_vertices[i], mesh_vertices[i + 1], mesh_vertices[i + 2]);

    sorted_y = sorted_z = sorted_x;
    std::sort(sorted_x.begin(), sorted_x.end(), [](const glm::vec3& v1,
                                                   const glm::vec3& v2){
        return v1.x < v2.x;
    });
    std::sort(sorted_y.begin(), sorted_y.end(), [](const glm::vec3& v1,
                                                   const glm::vec3& v2){
        return v1.y < v2.y;
    });
    std::sort(sorted_z.begin(), sorted_z.end(), [](const glm::vec3& v1,
                                                   const glm::vec3& v2){
        return v1.z < v2.z;
    });


    // Divide by longest side
    GLfloat x_length = std::abs(std::abs(max_x) - std::abs(min_x));
    GLfloat y_length = std::abs(std::abs(max_y) - std::abs(min_y));
    GLfloat z_length = std::abs(std::abs(max_z) - std::abs(min_z));
    int longest_side = (x_length > y_length && x_length > z_length)
                       ? 0
                       : (y_length > x_length && y_length > z_length) ? 1 : 2;

    GLfloat x_border = min_x + x_length / 2.f;
    GLfloat y_border = min_y + y_length / 2.f;
    GLfloat z_border = min_z + z_length / 2.f;

    std::vector<GLfloat> left_part;
    std::vector<GLfloat> right_part;
    if (longest_side == 0) { // divide by x side
        for (auto & i : sorted_x) {
            if (i.x < x_border) {
                left_part.push_back(i.x);
                left_part.push_back(i.y);
                left_part.push_back(i.z);
            } else {
                right_part.push_back(i.x);
                right_part.push_back(i.y);
                right_part.push_back(i.z);
            }
        }
    } else if (longest_side == 1) { // divide by y side
        for (auto & i : sorted_y) {
            if (i.y < y_border) {
                left_part.push_back(i.x);
                left_part.push_back(i.y);
                left_part.push_back(i.z);
            } else {
                right_part.push_back(i.x);
                right_part.push_back(i.y);
                right_part.push_back(i.z);
            }
        }
    } else if (longest_side == 2) { // divide by z side
        for (auto & i : sorted_z) {
            if (i.z < z_border) {
                left_part.push_back(i.x);
                left_part.push_back(i.y);
                left_part.push_back(i.z);
            } else {
                right_part.push_back(i.x);
                right_part.push_back(i.y);
                right_part.push_back(i.z);
            }
        }
    }

    if (left_part.size() <= 9 || right_part.size() <= 9)
        return {left_part, right_part};

    if (longest_side == 0) {
        left_part[left_part.size() - 3] = right_part[0];
    } else if (longest_side == 1) {
        left_part[left_part.size() - 2] = right_part[1];
    } else {
        left_part[left_part.size() - 1] = right_part[2];
    }

    return {left_part, right_part};
}

using NodeData = utils::RectPoints3D;
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
NodePtr
coll::buildBVH(const VertData &mesh_vertices, glm::vec3 min_rect) noexcept
{
    NodePtr node = std::make_shared<Node>();
    node->m_data = std::make_shared<NodeData>(
            coll::buildAABB(mesh_vertices));

    auto[left_part, right_part] = divideByLongestSize(mesh_vertices);

    if (left_part.size() <= 9 || right_part.size() <= 9)
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

using Node = utils::data::Node<size_t, utils::RectPoints3D>;
using NodePtr = std::shared_ptr<Node>;
using TreePtr = std::shared_ptr<utils::data::Node<size_t, utils::RectPoints3D>>;

/**
 * Find raycast intersection
 * @param ray_dir
 * @param ray_origin
 * @param rect
 * @return
 */
void
coll::BVHAABBTraversalRec(TreePtr tree,
                          const glm::vec3& ray_dir, const glm::vec3& ray_origin,
                          std::vector<glm::vec3>& intersections)
{
    bool isLeaf = !tree->m_left && !tree->m_right;
    if (isLeaf) {
        auto [instersect, pos] = raycastAABB(ray_dir, ray_origin, *tree->m_data);
        if (instersect)
            intersections.push_back(pos);
    } else {
        if (tree->m_left)
            BVHAABBTraversalRec(tree->m_left, ray_dir, ray_origin, intersections);
        if (tree->m_right)
            BVHAABBTraversalRec(tree->m_right, ray_dir, ray_origin, intersections);
    }
}

/**
* Find intersection of ray with aabb recursively.
* @param ray_dir
* @param ray_origin
* @param rect
* @return
*/
std::pair<bool, glm::vec3>
coll::BVHAABBTraversal(TreePtr tree,
                       const glm::vec3& ray_dir, const glm::vec3& ray_origin)
{
    std::vector<glm::vec3> intersections;
    BVHAABBTraversalRec(tree, ray_dir, ray_origin, intersections);

    if (intersections.empty())
        return {false, glm::vec3(0)};

    GLfloat closest_length = glm::length(intersections[0] - ray_origin);
    glm::vec3 closest_hit = intersections[0];
    for (const auto & pos: intersections) {
        if (glm::length(pos - ray_origin) < closest_length)
            closest_hit = pos;
    }

    return {true, closest_hit};
}