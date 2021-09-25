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

    void fromCV2GLM(const cv::Mat& cvmat, glm::mat4* glmmat);

    void fromGLM2CV(const glm::mat4& glmmat, cv::Mat* cvmat);


}

#endif //CVTOOLS_HPP
