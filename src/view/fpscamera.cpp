#include <memory>
#include <vector>
#include <SDL_opengl.h>
#include <glm/gtc/matrix_transform.hpp>

#include "view/fpscamera.hpp"

std::shared_ptr<FpsCamera> FpsCamera::instance = nullptr;

FpsCamera::FpsCamera(float posX, float posY, float posZ, float upX, float upY,
                     float upZ, float yaw, float pitch) :
        m_front(glm::vec3(0.0f, 0.0f, -1.0f)), m_movSpeed(SPEED),
        m_mouseSens(SENSITIVITY), m_zoom(ZOOM),
        m_pos(posX, posY, posZ),
        m_worldUp(upX, upY, upZ),
        m_yaw(yaw),
        m_pitch(pitch)
{
    updateCameraVectors();
}

FpsCamera::FpsCamera(glm::vec3 position, glm::vec3 up, float yaw, float pitch) :
        FpsCamera(position.x, position.y, position.z, up.x, up.y, up.z,
                  yaw, pitch) {}


void FpsCamera::setPos(const glm::vec3& pos) noexcept
{
    m_pos = pos;
}

void FpsCamera::setMovSpeed(GLfloat mov_speed) noexcept
{
    if (mov_speed < 0.f)
        m_movSpeed = 0.f;
    else
        m_movSpeed = mov_speed;
}

glm::mat4 FpsCamera::getView() const noexcept
{
    return glm::lookAt(m_pos, m_pos + m_front, m_up);
}

glm::vec3 FpsCamera::getPos() const noexcept
{
    return m_pos;
}

void FpsCamera::processKeyboard(Movement direction, float deltaTime)
{
    float velocity = m_movSpeed * deltaTime;
    if (direction == Movement::FORWARD)
        m_pos += m_front * velocity;
    if (direction == Movement::BACKWARD)
        m_pos -= m_front * velocity;
    if (direction == Movement::LEFT)
        m_pos -= m_right * velocity;
    if (direction == Movement::RIGHT)
        m_pos += m_right * velocity;
}

GLfloat FpsCamera::getMovSpeed() const noexcept
{
    return m_movSpeed;
}

void FpsCamera::processMouseMovement(float xoffset, float yoffset, GLboolean constrainPitch)
{
    xoffset *= m_mouseSens;
    yoffset *= m_mouseSens;

    m_yaw   += xoffset;
    m_pitch += yoffset;

    // make sure that when pitch is out of bounds, screen doesn't get flipped
    if (constrainPitch)
    {
        if (m_pitch > 89.0f)
            m_pitch = 89.0f;
        if (m_pitch < -89.0f)
            m_pitch = -89.0f;
    }

    // update Front, Right and Up Vectors using the updated Euler angles
    updateCameraVectors();
}

void FpsCamera::processMouseScroll(float yoffset)
{
    m_zoom -= (float)yoffset;
    if (m_zoom < 1.0f)
        m_zoom = 1.0f;
    if (m_zoom > 45.0f)
        m_zoom = 45.0f;
}

glm::vec3 FpsCamera::getDirection() const
{
    return m_front;
}

void FpsCamera::updateCameraVectors()
{
    // calculate the new Front vector
    glm::vec3 front;
    front.x = cos(glm::radians(m_yaw)) * cos(glm::radians(m_pitch));
    front.y = sin(glm::radians(m_pitch));
    front.z = sin(glm::radians(m_yaw)) * cos(glm::radians(m_pitch));
    m_front = glm::normalize(front);
    // also re-calculate the Right and Up vector
    m_right = glm::normalize(glm::cross(m_front, m_worldUp));  // normalize the vectors, because their length gets closer to 0 the more you look up or down which results in slower movement.
    m_up    = glm::normalize(glm::cross(m_right, m_front));
}

glm::vec3 FpsCamera::getUp() const
{
    return m_up;
}
