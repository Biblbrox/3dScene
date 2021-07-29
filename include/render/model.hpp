#ifndef MODEL_HPP
#define MODEL_HPP

#include <assimp/scene.h>

#include "render/shaderprogram.hpp"
#include "render/mesh.hpp"

class Model
{
public:
    explicit Model(const std::string &path, bool flip_uv = true);

    void draw(ShaderProgram &program) const;

    const std::vector<Mesh>& getMeshes() const;

    std::string getModelFile() const;

    void loadModel(const std::string &path, bool flip_uv);
private:

    std::vector<Mesh> m_meshes;
    std::vector<Texture> m_textureLoaded;
    std::string m_directory;
    std::string m_modelFile;

    void processNode(aiNode *node, const aiScene *scene);
    Mesh processMesh(aiMesh *mesh, const aiScene *scene);
    std::vector<Texture> loadMaterialsTextures(aiMaterial* mat, aiTextureType type,
                                               const std::string& typeName);
};


#endif //MODEL_HPP
