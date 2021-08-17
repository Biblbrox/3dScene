#include <stack>
#include <bvh/locally_ordered_clustering_builder.hpp>
#include <bvh/leaf_collapser.hpp>
#include <ecs/entity.hpp>
#include <bvh/bvh.hpp>
#include <bvh/hierarchy_refitter.hpp>

#include "utils/collision.hpp"
#include "utils/logger.hpp"
#include "components/bvhcomponent.hpp"
#include "components/positioncomponent.hpp"
#include "components/spritecomponent.hpp"
#include "base.hpp"

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
        builder.refit([&](Bvh::Node& node) {
            auto bbox = bvh::BoundingBox<Scalar>::empty();
            for (size_t i = 0; i < node.primitive_count; ++i) {
                auto& triangle = tr_triangles[
                        bvh->bvh_tree->primitive_indices[node.first_child_or_primitive + i]];
                bbox.extend(triangle.bounding_box());
            }
            node.bounding_box_proxy() = bbox;
        });

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
BvhPtr coll::buildBVH(const std::vector<Triangle>& triangles) noexcept
{
    BvhPtr bvh = std::make_shared<Tree>();

    // Create an acceleration data structure on those triangles
    bvh::SweepSahBuilder<Bvh> builder(*bvh);
    auto [bboxes, centers] = bvh::compute_bounding_boxes_and_centers(triangles.data(), triangles.size());
    auto global_bbox = bvh::compute_bounding_boxes_union(bboxes.get(), triangles.size());
    builder.build(global_bbox, bboxes.get(), centers.get(), triangles.size());

    return bvh;
}
