#include <assimp/Importer.hpp>
#include <assimp/scene.h>
#include <assimp/postprocess.h>
#include <filesystem>
#include <boost/format.hpp>

#include "render/model.hpp"
#include "utils/texture.hpp"
#include "utils/logger.hpp"
#include "constants.hpp"

using glm::vec3;
using glm::vec2;
using std::vector;
using std::filesystem::absolute;
using std::filesystem::canonical;
using utils::log::Logger;
using utils::log::Category;
using boost::format;

Model::Model(const std::string& path, bool flip_uv) : m_modelFile(path)
{
    loadModel(path, flip_uv);
}

void Model::draw(ShaderProgram& program) const
{
    for (auto& mesh: m_meshes)
        mesh.draw(program);
}

void Model::loadModel(const std::string& path, bool flip_uv)
{
    Assimp::Importer import;

    // Remove trailing dots
    std::string model_path = path;
    if (std::filesystem::path(model_path).is_relative())
        model_path = canonical(absolute(model_path));

    GLuint import_params = aiProcess_Triangulate
                           | (flip_uv ? aiProcess_FlipUVs : 1ul);
    const aiScene* scene = import.ReadFile(model_path, import_params);
    if (!scene || (scene->mFlags & AI_SCENE_FLAGS_INCOMPLETE) || !scene->mRootNode) {
        Logger::write("assimp.log", Category::INITIALIZATION_ERROR,
                      (format("Error while load assimp model: %s") % import.GetErrorString()).str());
        return;
    }

    std::filesystem::path p(model_path);
    m_directory = p.remove_filename();

    processNode(scene->mRootNode, scene);
}

void Model::processNode(aiNode* node, const aiScene* scene)
{
    for (size_t i = 0; i < node->mNumMeshes; ++i) {
        aiMesh* mesh = scene->mMeshes[node->mMeshes[i]];
        m_meshes.push_back(processMesh(mesh, scene));
    }

    for (size_t i = 0; i < node->mNumChildren; ++i)
        processNode(node->mChildren[i], scene);
}

Mesh Model::processMesh(aiMesh *mesh, const aiScene *scene)
{
    vector<Vertex> vertices;
    vector<GLuint> indices;
    vector<Texture> textures;

    for (size_t i = 0; i < mesh->mNumVertices; ++i) {
        Vertex vertex;

        vertex.pos = {mesh->mVertices[i].x, mesh->mVertices[i].y, mesh->mVertices[i].z};
        vertex.normal = {mesh->mNormals[i].x, mesh->mNormals[i].y, mesh->mNormals[i].z};
        if (mesh->mTextureCoords[0]) {
            vec2 uv;
            uv.x = mesh->mTextureCoords[0][i].x;
            uv.y = mesh->mTextureCoords[0][i].y;
            vertex.uv = uv;
        } else {
            vertex.uv = {0.f, 0.f};
        }

        vertices.push_back(vertex);
    }

    for (size_t i = 0; i < mesh->mNumFaces; ++i) {
        aiFace face = mesh->mFaces[i];
        for (size_t j = 0; j < face.mNumIndices; ++j)
            indices.push_back(face.mIndices[j]);
    }

    if (mesh->mMaterialIndex >= 0) {
        aiMaterial* material = scene->mMaterials[mesh->mMaterialIndex];
        vector<Texture> diffuseMaps =
                loadMaterialsTextures(material,
                                      aiTextureType_DIFFUSE, "texture_diffuse");
        textures.insert(textures.end(), diffuseMaps.begin(), diffuseMaps.end());
        vector<Texture> specularMaps =
                loadMaterialsTextures(material,
                                      aiTextureType_SPECULAR, "texture_specular");
        textures.insert(textures.end(), specularMaps.begin(), specularMaps.end());
    }

    return Mesh(vertices, indices, textures);
}

std::vector<Texture>
Model::loadMaterialsTextures(aiMaterial *mat, aiTextureType type,
                             const std::string& typeName)
{
    vector<Texture> textures;
    for (size_t i = 0; i < mat->GetTextureCount(type); ++i) {
        aiString str;
        mat->GetTexture(type, i, &str);
        bool skip = false;
        for (auto& texture : m_textureLoaded) {
            if (std::strcmp(texture.path.data(), str.C_Str()) == 0) {
                textures.push_back(texture);
                skip = true;
                break;
            }
        }
        if (!skip) {
            Texture texture;
            texture.id = utils::texture::loadTexture(m_directory + str.C_Str());
            texture.type = typeName;
            texture.path = str.C_Str();
            textures.push_back(texture);
            m_textureLoaded.push_back(texture);
        }

        return textures;
    }
}

const std::vector<Mesh> &Model::getMeshes() const
{
    return m_meshes;
}

std::string Model::getModelFile() const
{
    return m_modelFile;
}
