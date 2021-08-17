#ifndef BVHCOMPONENT_HPP
#define BVHCOMPONENT_HPP

#include <bvh/bvh.hpp>

#include "ecs/component.hpp"
#include "utils/datastructs.hpp"
#include "base.hpp"

struct BVHComponent: ecs::Component
{
    BvhPtr bvh_tree = nullptr;
    BvhPtr bvh_tree_model = nullptr;
    std::shared_ptr<std::vector<Triangle>> triangles = nullptr;
    vec3 min_rect = {0.1f, 0.1f, 0.1f};
};

#endif //BVHCOMPONENT_HPP
