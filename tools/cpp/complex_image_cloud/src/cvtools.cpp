#include <opencv4/opencv2/opencv.hpp>
#include <opencv4/opencv2/core.hpp>
#include <fstream>
#include <glm/gtc/type_ptr.hpp>

#include "cvtools.hpp"

cv::Mat cvtools::readMatTxt(const std::string& fileName, int rows, int cols)
{
    double m;
    cv::Mat out = cv::Mat::zeros(rows, cols, CV_64FC1);

    std::ifstream fileStream(fileName);
    int cnt = 0;
    while (fileStream >> m)
    {
        int temprow = cnt / cols;
        int tempcol = cnt % cols;
        out.at<double>(temprow, tempcol) = m;
        cnt++;
    }

    return out;
}

void cvtools::fromCV2GLM(const cv::Mat &cvmat, glm::mat4 *glmmat)
{
    if (cvmat.cols != 4 || cvmat.rows != 4 || cvmat.type() != CV_32FC1) {
        std::cout << "Matrix conversion error!" << std::endl;
        // TODO: throw error
        return;
    }

    memcpy(glm::value_ptr(*glmmat), cvmat.data, 16 * sizeof(float));
}

void cvtools::fromGLM2CV(const glm::mat4 &glmmat, cv::Mat *cvmat)
{
    if (cvmat->cols != 4 || cvmat->rows != 4)
        (*cvmat) = cv::Mat(4, 4, CV_32F);

    memcpy(cvmat->data, glm::value_ptr(glmmat), 16 * sizeof(float));
}

cv::Vec3b cvtools::getImgColor(const cv::Mat &img, const cv::Point &p)
{
    if (p.x > img.cols || p.y > img.rows || p.x < 0 || p.y < 0)
        return {0, 0, 0};

    return img.at<cv::Vec3b>(p);
}

double cvtools::getIntensityAv(const cv::Vec3b& rgb)
{
    return rgb[0] / 3.0 + rgb[1] / 3.0 + rgb[2] / 3.0;
}

double cvtools::getIntensitySqrt(const cv::Vec3b& rgb)
{
    double max_val = std::sqrt(std::pow(255, 2) + std::pow(255, 2) + std::pow(255, 2));
    double val = std::sqrt(std::pow(rgb[0], 2) + std::pow(rgb[1], 2) + std::pow(rgb[2], 2));
    return val / max_val * 255;
}