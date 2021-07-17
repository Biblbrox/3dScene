#ifndef BVHCOMPONENT_HPP
#define BVHCOMPONENT_HPP

#include <bvh/bvh.hpp>

#include "ecs/component.hpp"
#include "utils/datastructs.hpp"
#include "base.hpp"

using Scalar = float;
using TreePtr = std::shared_ptr<bvh::Bvh<Scalar>>;

struct BVHComponent: ecs::Component
{
    TreePtr bvh_tree = nullptr;
    TreePtr bvh_tree_model = nullptr;
    std::shared_ptr<std::vector<Triangle>> triangles;
    vec3 min_rect = {0.1f, 0.1f, 0.1f};
};

#endif //BVHCOMPONENT_HPP
