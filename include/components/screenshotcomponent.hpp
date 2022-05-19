#ifndef LIDARSCENE_SCREENSHOTCOMPONENT_HPP
#define LIDARSCENE_SCREENSHOTCOMPONENT_HPP

#include <cstddef>
#include <string>

#include "ecs/component.hpp"
#include "constants.hpp"

/**
 * Need to make screenshot in different systems
 */
struct ScreenshotComponent : ecs::Component
{
    std::string pathMakedScreenshot;
    std::string pathNextScreenshot;
    bool makeScreenshot;
    size_t curIdx = 0;

    ScreenshotComponent()
    {
        pathMakedScreenshot = getResourcePath("images/screenshot" + std::to_string(curIdx) + ".png");
        pathNextScreenshot = getResourcePath("images/screenshot" + std::to_string(curIdx) + ".png");
        makeScreenshot = false;
    }

    void delayScreenshot()
    {
        makeScreenshot = true;
        pathNextScreenshot = getResourcePath("images/screenshot" + std::to_string(curIdx) + ".png");
    }

    void doneScreenshot()
    {
        makeScreenshot = false;
        pathMakedScreenshot = getResourcePath("images/screenshot" + std::to_string(curIdx) + ".png");
        curIdx++;
    }
};

#endif // LIDARSCENE_SCREENSHOTCOMPONENT_HPP
