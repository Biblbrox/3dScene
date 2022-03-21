#ifndef FPS_CAMERA_HPP
#define FPS_CAMERA_HPP

#include <glm/glm.hpp>

// Defines several possible options for camera movement. Used as abstraction to stay away from window-system specific input methods
enum class Movement
{
    FORWARD,
    BACKWARD,
    LEFT,
    RIGHT
};

// Default camera values
constexpr float YAW         = -90.0f;
constexpr float PITCH       =  0.0f;
constexpr float SPEED       =  0.2f;
constexpr float SENSITIVITY =  0.1f;
constexpr float ZOOM        =  45.0f;


/**
 * Class that processes input and calculates the corresponding
 * Euler Angles, Vectors and Matrices for use in OpenGL.
 */
class FpsCamera
{
protected:
    static std::shared_ptr<FpsCamera> instance;
public:
    static std::shared_ptr<FpsCamera> getInstance()
    {
        if (!instance)
            instance = std::make_shared<FpsCamera>();

        return instance;
    }

    virtual ~FpsCamera() = default;

    explicit FpsCamera(glm::vec3 position = glm::vec3(0.0f, 0.0f, 0.0f),
                       glm::vec3 up = glm::vec3(0.0f, 1.0f, 0.0f),
                       float yaw = YAW, float pitch = PITCH);


    explicit FpsCamera(float posX, float posY, float posZ, float upX, float upY, float upZ,
                       float yaw, float pitch);

    /**
     * Returns the view matrix calculated using Euler Angles and the LookAt Matrix
     * @return
     */
    glm::mat4 getView() const noexcept;

    /**
     *
     * @return
     */
    glm::vec3 getPos() const noexcept;

    /**
     *
     * @return
     */
    GLfloat getMovSpeed() const noexcept;

    /**
     *
     * @param mov_speed
     */
    void setMovSpeed(GLfloat mov_speed) noexcept;

    /**
     *
     * @param pos
     */
    void setPos(const glm::vec3& pos) noexcept;

    /**
     * Set view matrix
     * @param view
     */
    void setView(glm::mat4 view);

    // processes input received from any keyboard-like input system. Accepts input parameter in the form of camera defined ENUM (to abstract it from windowing systems)
    void processKeyboard(Movement direction, float deltaTime);

    // processes input received from a mouse input system. Expects the offset value in both the x and y direction.
    void processMouseMovement(float xoffset, float yoffset, GLboolean constrainPitch = true);

    // processes input received from a mouse scroll-wheel event. Only requires input on the vertical wheel-axis
    void processMouseScroll(float yoffset);

    /**
     * Return normalized lidar direction
     * @return
     */
    glm::vec3 getDirection() const;

    void setDirection(glm::vec3 dir);

    /**
     *
     * @return
     */
    glm::vec3 getUp() const;

    void setYaw(GLfloat yaw);
    void setPitch(GLfloat pitch);

    GLfloat getYaw() const;
    GLfloat getPitch() const;


private:
    // calculates the front vector from the Camera's (updated) Euler Angles
    void updateCameraVectors();
protected:
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



#endif //FPSCAMEAR_HPP
