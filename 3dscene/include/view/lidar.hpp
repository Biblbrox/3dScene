#ifndef LIDAR_HPP
#define LIDAR_HPP


#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <memory>

#include <vector>
#include <SDL_opengl.h>

// Defines several possible options for camera movement. Used as abstraction to stay away from window-system specific input methods
enum LidarMovement
{
    FORWARD,
    BACKWARD,
    LEFT,
    RIGHT
};

// Default camera values
const float YAW         = -90.0f;
const float PITCH       =  0.0f;
const float SPEED       =  2.5f;
const float SENSITIVITY =  0.1f;
const float ZOOM        =  45.0f;
// It is just length of line, not wavelength
const float RAY_LENGTH = 100.f;


// An abstract camera class that processes input and calculates the corresponding Euler Angles, Vectors and Matrices for use in OpenGL
class Lidar
{
protected:
    static std::shared_ptr<Lidar> instance;
public:					   
    static std::shared_ptr<Lidar> getInstance()
    {
        if (!instance)
            instance = std::make_shared<Lidar>();

        return instance;
    }

    // constructor with vectors
    Lidar(glm::vec3 position = glm::vec3(0.0f, 0.0f, 0.0f),
	  glm::vec3 up = glm::vec3(0.0f, 1.0f, 0.0f),
	  float yaw = YAW, float pitch = PITCH) :
	    m_front(glm::vec3(0.0f, 0.0f, -1.0f)),
	    m_movSpeed(SPEED), m_mouseSens(SENSITIVITY), m_zoom(ZOOM)
    {
        m_pos = position;
        m_worldUp = up;
        m_yaw = yaw;
        m_pitch = pitch;
        updateCameraVectors();
    }
    // constructor with scalar values
    Lidar(float posX, float posY, float posZ, float upX, float upY, float upZ,
	  float yaw, float pitch) :
	    m_front(glm::vec3(0.0f, 0.0f, -1.0f)), m_movSpeed(SPEED),
	    m_mouseSens(SENSITIVITY), m_zoom(ZOOM)
    {
        m_pos = glm::vec3(posX, posY, posZ);
        m_worldUp = glm::vec3(upX, upY, upZ);
        m_yaw = yaw;
        m_pitch = pitch;
        updateCameraVectors();
    }

    // returns the view matrix calculated using Euler Angles and the LookAt Matrix
    glm::mat4 getView()
    {
        return glm::lookAt(m_pos, m_pos + m_front, m_up);
    }

    glm::vec3 getPos() const
    {
        return m_pos;
    }

    // processes input received from any keyboard-like input system. Accepts input parameter in the form of camera defined ENUM (to abstract it from windowing systems)
    void processKeyboard(LidarMovement direction, float deltaTime)
    {
        float velocity = m_movSpeed * deltaTime;
        if (direction == FORWARD)
            m_pos += m_front * velocity;
        if (direction == BACKWARD)
            m_pos -= m_front * velocity;
        if (direction == LEFT)
            m_pos -= m_right * velocity;
        if (direction == RIGHT)
            m_pos += m_right * velocity;
    }

    // processes input received from a mouse input system. Expects the offset value in both the x and y direction.
    void processMouseMovement(float xoffset, float yoffset, GLboolean constrainPitch = true)
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

    // processes input received from a mouse scroll-wheel event. Only requires input on the vertical wheel-axis
    void processMouseScroll(float yoffset)
    {
        m_zoom -= (float)yoffset;
        if (m_zoom < 1.0f)
            m_zoom = 1.0f;
        if (m_zoom > 45.0f)
            m_zoom = 45.0f;
    }

	/**
	 ** Return normalized lidar direction
	 **/
	glm::vec3 getDirection() const
	{
		return m_front;
	}

	GLfloat getRayLength() const
    {
	    return RAY_LENGTH;
    }

    glm::vec3 getUp() const
    {
	    return m_up;
    }


private:
    // calculates the front vector from the Camera's (updated) Euler Angles
    void updateCameraVectors()
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

    // camera Attributes
    glm::vec3 m_pos;
    glm::vec3 m_front;
    glm::vec3 m_up;
    glm::vec3 m_right;
    glm::vec3 m_worldUp;
    // euler Angles
    GLfloat m_yaw;
    GLfloat m_pitch;
    // camera options
    GLfloat m_movSpeed;
    GLfloat m_mouseSens;
    GLfloat m_zoom;
};


#endif //LIDAR_HPP
