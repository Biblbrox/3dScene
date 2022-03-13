#ifndef LIDARPROCESSING_TYPES_HPP
#define LIDARPROCESSING_TYPES_HPP

#include "base.hpp"
#include "json/json.hpp"
#include "utils/datastructs.hpp"

void
inline to_json(nlohmann::json& j, const utils::Rect3<Scalar>& r)
{
    j = nlohmann::json{ { "x1", r.x1 }, { "x2", r.x2 }, { "y1", r.y1 },
              { "y2", r.y2 }, { "z1", r.z1 }, { "z2", r.z2 } };
}

void
inline from_json(const nlohmann::json& j, utils::Rect3<Scalar>& r)
{
    j.at("x1").get_to(r.x1);
    j.at("x2").get_to(r.x2);
    j.at("y1").get_to(r.y1);
    j.at("y2").get_to(r.y2);
    j.at("z1").get_to(r.z1);
    j.at("z2").get_to(r.z2);
}

#endif // LIDARPROCESSING_TYPES_HPP
