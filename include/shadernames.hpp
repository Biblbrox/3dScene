#ifndef INC_3DSCENE_SHADERNAMES_HPP
#define INC_3DSCENE_SHADERNAMES_HPP

// Shader uniforms
// Framebuffer shader
#define U_MODEL_MATRIX "m_modelMatrix"
#define U_VIEW_MATRIX  "m_viewMatrix"
#define U_PROJECTION_MATRIX "m_projectionMatrix"
#define U_TEXTURE_NUM "m_textureNum"
#define U_IS_PRIMITIVE "m_isPrimitive"
#define U_PRIM_COLOR "m_primColor"
#define U_VIEW_POS "m_viewPos"
#define U_LIGHTING "m_lighting"
#define U_ALPHA "m_alpha"
#define U_FOG_COLOR "m_fogColor"
#define U_TEXTURE_MATERIAL "m_textureMaterial"
#define U_COLOR_MATERIAL "m_colorMaterial"
#define U_IS_COLOR_MATERIAL "m_isColorMaterial"

#define U_DRAW_TERRAIN "m_drawTerrain"
#define U_NORMAL_MATRIX "m_normalMatrix"
#define U_HEIGHT_MAP_SCALE_MATRIX "m_heightMapScaleMatrix"


#define U_DIR_LIGHT "m_dirLight"
#define U_DIR_LIGHT_DIRECTION U_DIR_LIGHT".direction"
#define U_DIR_LIGHT_AMBIENT U_DIR_LIGHT".ambient"
#define U_DIR_LIGHT_DIFFUSE U_DIR_LIGHT".diffuse"
#define U_DIR_LIGHT_SPECULAR U_DIR_LIGHT".specular"

#endif // INC_3DSCENE_SHADERNAMES_HPP
