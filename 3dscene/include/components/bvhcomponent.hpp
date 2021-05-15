#ifndef BVHCOMPONENT_HPP
#define BVHCOMPONENT_HPP

#include "ecs/component.hpp"
#include "utils/datastructs.hpp"

using Tree = std::shared_ptr<utils::data::Node<size_t, utils::RectPoints3D>>;

struct BVHComponent: ecs::Component
{
    Tree vbh_tree;
};

#endif //BVHCOMPONENT_HPP
