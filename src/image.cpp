#include "image.hpp"
#include "utils/cvtools.hpp"

Image::Image(const std::string& imagePath)
{
    m_image = cv::imread(imagePath);
}

Image::Image(cv::Mat image)
  : m_image(std::move(image))
{}

Image::Image(cv::Rect size, const std::vector<cv::Mat>& channels)
{
    m_image = cv::Mat(size.width, size.height, CV_8UC3);
    cv::randu(m_image, cv::Scalar(0, 0, 0), cv::Scalar(255, 255, 255));
    cv::merge(channels, m_image);
}

cv::Mat
Image::channel(size_t idx)
{
    cv::Mat ch;
    std::vector<cv::Mat> channels;
    cv::split(m_image, channels);

    assert(idx < channels.size());

    return channels[idx];
}

void
Image::channel(size_t idx, const cv::Mat& channelData)
{
    std::vector<cv::Mat> channels;
    cv::split(m_image, channels);

    assert(idx < channels.size());
    assert(channelData.size == channels[idx].size);
    channels[idx] = channelData;
    cv::merge(channels, m_image);
}

void
Image::show()
{
    cv::namedWindow(m_name, cv::WINDOW_AUTOSIZE);
    cv::imshow(m_name, m_image);
    cv::waitKey(0);
}

Image::Image()
  : m_image(cv::Mat())
{}


void
Image::setName(std::string name)
{
    m_name = std::move(name);
}

void
Image::save(const std::string& path)
{
    cv::imwrite(path, m_image);
}

cv::Mat Image::getMat() const
{
    return m_image;
}
void Image::invert(int col)
{
    cv::flip(m_image, m_image, col);
}
