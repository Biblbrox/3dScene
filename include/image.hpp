#ifndef IMAGE_HPP
#define IMAGE_HPP

#include "Eigen/Dense"

#include "base.hpp"
#include "cvutils/cvtools.hpp"
#include "cvutils/opencv.hpp"

typedef Eigen::Matrix<unsigned char, Eigen::Dynamic, Eigen::Dynamic> MatrixXuc;

class Image
{
  public:
    explicit Image();

    template<typename T, int N, int K>
    explicit Image(const Eigen::Matrix<T, N, K>& mat)
    {
        MatrixXuc eig_image = mat.template cast<unsigned char>();
        cv::eigen2cv(eig_image, m_image);
    }

    explicit Image(const std::vector<Eigen::MatrixXi>& channels)
    {
        std::vector<cv::Mat> cv_channels(channels.size());
        for (size_t i = 0; i < channels.size(); ++i) {
            MatrixXuc uchannel = channels[i].template cast<unsigned char>();
            cv::eigen2cv(uchannel, cv_channels[i]);
        }

        m_image = cv::Mat(
          cv_channels[0].rows, cv_channels[0].cols, CV_8UC(channels.size()));
        cv::merge(cv_channels, m_image);
    }

    explicit Image(const std::string& imagePath);
    explicit Image(cv::Mat image);
    explicit Image(cv::Rect size, const std::vector<cv::Mat>& channels);

    /**
     * @brief Get channel
     * @param channel
     * @return
     */
    cv::Mat channel(size_t channel);

    /**
     * @brief Set channel data
     * @param channel
     * @param channelData
     * @return
     */
    void channel(size_t channel, const cv::Mat& channelData);

    void setName(std::string name);

    void show();
    void save(const std::string& path);

    void invert(int dim);

    cv::Mat getMat() const;

  protected:
    cv::Mat m_image;
    cv::Mat m_grayscaleImage;
    std::string m_name = "Display Image";
};

#endif // IMAGE_HPP
