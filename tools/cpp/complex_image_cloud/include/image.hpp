#ifndef IMAGE_HPP
#define IMAGE_HPP

#include <opencv4/opencv2/opencv.hpp>
#include <opencv4/opencv2/core.hpp>

#include "types.hpp"

class Image
{
public:
    explicit Image(const std::string& imagePath, const std::string& calMatPath);
    explicit Image(const std::string& imagePath, Mat4 calMatrix);
    explicit Image(Mat4 image, Mat4 calMatrix);

    void show();

    Mat4 getCalMatrix() const;
    cv::Mat getInnerMat() const;
private:
    cv::Mat m_image;

    // Calibration matrix
    Mat4 m_calMatrix;
};

#endif //IMAGE_HPP
