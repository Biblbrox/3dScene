#include "image.hpp"
#include "include/utils/cvtools.hpp"

Image::Image(const std::string &imagePath, const std::string &calMatPath)
{
    m_image = cv::imread(imagePath);
    m_calMatrix = cvtools::readMatTxt(calMatPath, 4, 4);
}

Image::Image(const std::string &imagePath, Mat4 calMatrix) : m_calMatrix(std::move(calMatrix))
{
    m_image = cv::imread(imagePath);
}

Image::Image(Mat4 image, Mat4 calMatrix) : m_image(std::move(image)),
                                           m_calMatrix(std::move(calMatrix))
{

}

void Image::show()
{
    cv::namedWindow("Display Image", cv::WINDOW_AUTOSIZE );
    cv::imshow("Display Image", m_image);
    cv::waitKey(0);
}

Mat4 Image::getCalMatrix() const
{
    return m_calMatrix;
}

cv::Mat Image::getInnerMat() const
{
    return m_image;
}

