#include <stack>
#include <bvh/locally_ordered_clustering_builder.hpp>
#include <bvh/leaf_collapser.hpp>
#include <ecs/entity.hpp>
#include <bvh/hierarchy_refitter.hpp>

#include "utils/collision.hpp"
#include "utils/logger.hpp"
#include "components/bvhcomponent.hpp"
#include "components/positioncomponent.hpp"
#include "components/spritecomponent.hpp"

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

void coll::updateBVH(std::shared_ptr<ecs::Entity> en)
{
    auto bvh = en->getComponent<BVHComponent>();
    if (bvh) {
        auto sprite = en->getComponent<SpriteComponent>()->sprite;
        auto pos = en->getComponent<PositionComponent>();
        const auto& triangles = sprite->getTriangles();
        mat4 transform = math::createTransform(pos->pos,
                                               pos->angle,
                                               pos->rot_axis,
                                               sprite->getSize());
        std::vector<Triangle> tr_triangles
                = math::transformTriangles(triangles, transform);

        bvh::HierarchyRefitter<Tree> builder(*bvh->bvh_tree);
        builder.refit([&](Bvh::Node& node){
            assert(node.is_leaf());
            auto bbox = bvh::BoundingBox<Scalar>::empty();
            for (size_t i = 0; i < node.primitive_count; ++i) {
                auto& triangle =
                        tr_triangles[
                                bvh->bvh_tree->primitive_indices[
                                        node.first_child_or_primitive + i]];
                bbox.extend(triangle.bounding_box());
            }
            node.bounding_box_proxy() = bbox;
//            vec3 min = {node.bounds[0], node.bounds[2], node.bounds[4]};
//            vec3 max = {node.bounds[1], node.bounds[3], node.bounds[5]};
//
//            min = transform * vec4(min, 1.f);
//            max = transform * vec4(max, 1.f);
//
//            bvh::BoundingBox<Scalar> bbox(Vector3(min.x, min.y, min.z),
//                                          Vector3(max.x, max.y, max.z));
//
//            node.bounds[0] = bbox.min[0];
//            node.bounds[1] = bbox.max[0];
//            node.bounds[2] = bbox.min[1];
//            node.bounds[3] = bbox.max[1];
//            node.bounds[4] = bbox.min[2];
//            node.bounds[5] = bbox.max[2];
        });

//        bvh->bvh_tree = coll::buildBVH(tr_triangles);
        bvh->triangles = std::make_shared<std::vector<Triangle>>(tr_triangles);
    }
}

/**
 * Build top-down BVH tree until min_rect condition not required in
 * one of axis.
 * division is step original mesh divided by
 * @param mesh_vertices
 * @return
 */
TreePtr coll::buildBVH(const std::vector<Triangle>& triangles) noexcept
{
    TreePtr bvh = std::make_shared<Tree>();

    // Create an acceleration data structure on those triangles
    bvh::SweepSahBuilder<Tree> builder(*bvh);
    auto [bboxes, centers] = bvh::compute_bounding_boxes_and_centers(triangles.data(), triangles.size());
    auto global_bbox = bvh::compute_bounding_boxes_union(bboxes.get(), triangles.size());
    builder.build(global_bbox, bboxes.get(), centers.get(), triangles.size());

    return bvh;
}


/**
* Find intersection of ray with aabb recursively.
* @param ray_dir
* @param ray_origin
* @param rect
* @return
*/
std::pair<bool, vec3> coll::BVHCollision(TreePtr tree, const Ray& ray,
                                         const std::vector<Triangle>& triangles)
{
    bvh::ClosestPrimitiveIntersector<Tree, Triangle> primitive_intersector(*tree, triangles.data());
    bvh::SingleRayTraverser<Tree> traverser(*tree);
    auto hit = traverser.traverse(ray, primitive_intersector);

    if (hit) {
        auto triangle_index = hit->primitive_index;
        auto intersection = hit->intersection;
        std::cout << "Hit triangle " << triangle_index << "\n"
                  << "distance: "    << intersection.t << "\n"
                  << "u: "           << intersection.u << "\n"
                  << "v: "           << intersection.v << std::endl;
        Vector3 p = ray.origin + ray.direction * intersection.t;

        return {true, {p[0], p[1], p[2]}};
    }

    return {false, vec3(0.f)};
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
    if (!interInRange(terrain, start, end, ray))
        return {false, {0.f, 0.f, 0.f}};

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
