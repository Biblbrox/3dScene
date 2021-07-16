#ifndef BVHCOMPONENT_HPP
#define BVHCOMPONENT_HPP

#include "ecs/component.hpp"
#include "utils/datastructs.hpp"

using Tree = std::shared_ptr<utils::data::Node<size_t, utils::RectPoints3D>>;

struct BVHComponent: ecs::Component
{
    Tree vbh_tree = nullptr;
    Tree vbh_tree_model = nullptr;
    vec3 min_rect = {0.1f, 0.1f, 0.1f};
};

#endif //BVHCOMPONENT_HPP
