import { cloudinaryAssets } from './cloudinaryAssets';

/**
 * Get the Cloudinary asset information by the original filename (without extension)
 * @param {string} assetName - Original filename without extension
 * @returns {Object|null} Cloudinary asset information or null if not found
 */
export const getAssetByName = (assetName) => {
  if (!assetName) return null;
  
  return cloudinaryAssets[assetName] || null;
};

/**
 * Get the Cloudinary public ID for an asset by name
 * @param {string} assetName - Original filename without extension
 * @returns {string|null} Cloudinary public ID or null if not found
 */
export const getPublicId = (assetName) => {
  const asset = getAssetByName(assetName);
  return asset ? asset.public_id : null;
};

/**
 * Get the direct URL for an asset by name
 * @param {string} assetName - Original filename without extension
 * @returns {string|null} Direct Cloudinary URL or null if not found
 */
export const getAssetUrl = (assetName) => {
  const asset = getAssetByName(assetName);
  return asset ? asset.url : null;
};

/**
 * Get all assets of a specific type (image, video, raw)
 * @param {string} resourceType - Resource type ('image', 'video', or 'raw')
 * @returns {Object[]} Array of assets matching the resource type
 */
export const getAssetsByType = (resourceType) => {
  return Object.entries(cloudinaryAssets)
    .filter(([_, asset]) => asset.resource_type === resourceType)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
};

/**
 * Check if an asset exists in Cloudinary
 * @param {string} assetName - Original filename without extension
 * @returns {boolean} True if the asset exists, false otherwise
 */
export const assetExists = (assetName) => {
  return !!getAssetByName(assetName);
};

/**
 * Create props for CloudinaryImage component
 * @param {string} assetName - Original filename without extension
 * @param {Object} options - Additional props to merge
 * @returns {Object} Props object for CloudinaryImage
 */
export const getCloudinaryImageProps = (assetName, options = {}) => {
  const asset = getAssetByName(assetName);
  
  if (!asset) {
    console.warn(`Image asset not found: ${assetName}`);
    return options;
  }
  
  return {
    publicId: asset.public_id,
    ...options
  };
};

/**
 * Create props for CloudinaryVideo component
 * @param {string} assetName - Original filename without extension
 * @param {Object} options - Additional props to merge
 * @returns {Object} Props object for CloudinaryVideo
 */
export const getCloudinaryVideoProps = (assetName, options = {}) => {
  const asset = getAssetByName(assetName);
  
  if (!asset) {
    console.warn(`Video asset not found: ${assetName}`);
    return options;
  }
  
  return {
    publicId: asset.public_id,
    ...options
  };
};