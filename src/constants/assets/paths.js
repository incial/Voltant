/**
 * Base Asset Paths
 * @module constants/assets/paths
 */

/**
 * Base paths for different asset types
 * All paths are relative to the public folder
 */
export const ASSET_PATHS = {
  root: '',
  images: '/assets/images',
  icons: '/assets/icons',
  videos: '/Videos',
  pdfs: '/pdfs',
  
  // Image subcategories
  home: '/assets/images/home',
  hero: '/assets/images/home/hero',
  split: '/assets/images/home/split',
  clients: '/assets/images/home/clients',
  showcase: '/assets/images/showcase',
  evCharging: '/assets/images/ev-charging',
  wasteToEnergy: '/assets/images/waste-to-energy',
};

/**
 * Helper to build full asset path
 * @param {string} category - Asset category from ASSET_PATHS
 * @param {string} filename - File name with extension
 * @returns {string} Full asset path
 */
export const getAssetPath = (category, filename) => {
  const basePath = ASSET_PATHS[category] || ASSET_PATHS.images;
  return `${basePath}/${filename}`;
};

/**
 * Helper to get responsive image paths
 * @param {string} category - Asset category
 * @param {string} baseName - Base image name without extension
 * @param {string} ext - File extension (default: 'png')
 * @returns {Object} Object with different size paths
 */
export const getResponsiveImagePaths = (category, baseName, ext = 'png') => {
  const basePath = ASSET_PATHS[category] || ASSET_PATHS.images;
  
  return {
    original: `${basePath}/${baseName}.${ext}`,
    mobile: `${basePath}/${baseName}-480w.${ext}`,
    tablet: `${basePath}/${baseName}-768w.${ext}`,
    desktop: `${basePath}/${baseName}-1200w.${ext}`,
    large: `${basePath}/${baseName}-1600w.${ext}`,
    xl: `${basePath}/${baseName}-1920w.${ext}`,
  };
};
