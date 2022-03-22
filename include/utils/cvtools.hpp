#ifndef CVTOOLS_HPP
#define CVTOOLS_HPP

#include <glm/fwd.hpp>

namespace cvtools
{
    /**
     * Read matrix from text file
     * @param fileName
     * @param rows
     * @param cols
     * @return
     */
    cv::Mat readMatTxt(const std::string& fileName, int rows, int cols);

    template <typename T, int C, int R>
    void fromCV2GLM(const cv::Mat& cvmat, glm::mat<C, R, T>* glmmat)
    {
        if (cvmat.cols != C || cvmat.rows != R || cvmat.type() != CV_32FC1) {
            std::cout << "Matrix conversion error!" << std::endl;
            // TODO: throw error
            return;
        }

        memcpy(glm::value_ptr(*glmmat), cvmat.data, C * R * sizeof(float));
        *glmmat = glm::transpose(*glmmat);
    }

    void fromGLM2CV(const glm::mat4& glmmat, cv::Mat* cvmat);

    /**
     * Get image color at pixel p.
     * If p.x > img.width or p.y > img.height zero will be returned
     * @param p
     * @return
     */
    cv::Vec3b getImgColor(const cv::Mat& img, const cv::Point& p);

    /**
     * Get average intensity of rgb data
     * @param rgb
     * @return
     */
    double getIntensityAv(const cv::Vec3b& rgb);

    /**
     * Get average intensity of rgb data
     * @param rgb
     * @return
     */
    double getIntensitySqrt(const cv::Vec3b& rgb);

}

#endif //CVTOOLS_HPP
