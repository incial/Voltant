/**
 * Asset Loading Utilities
 * @module constants/assets/loaders
 */

/**
 * Preload a single image
 * @param {string} src - Image source URL
 * @returns {Promise<HTMLImageElement>}
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images
 * @param {string[]} sources - Array of image URLs
 * @returns {Promise<HTMLImageElement[]>}
 */
export const preloadImages = (sources) => {
  return Promise.all(sources.map(preloadImage));
};

/**
 * Preload images with progress callback
 * @param {string[]} sources - Array of image URLs
 * @param {Function} onProgress - Progress callback (loaded, total)
 * @returns {Promise<HTMLImageElement[]>}
 */
export const preloadImagesWithProgress = async (sources, onProgress) => {
  const images = [];
  let loaded = 0;
  
  for (const src of sources) {
    try {
      const img = await preloadImage(src);
      images.push(img);
    } catch (error) {
      console.warn(`Failed to preload image: ${src}`);
      images.push(null);
    }
    loaded++;
    onProgress?.(loaded, sources.length);
  }
  
  return images;
};

/**
 * Preload a video
 * @param {string} src - Video source URL
 * @returns {Promise<HTMLVideoElement>}
 */
export const preloadVideo = (src) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = () => resolve(video);
    video.onerror = reject;
    video.src = src;
    video.load();
  });
};

/**
 * Preload multiple videos
 * @param {string[]} sources - Array of video URLs
 * @returns {Promise<HTMLVideoElement[]>}
 */
export const preloadVideos = (sources) => {
  return Promise.all(sources.map(preloadVideo));
};

/**
 * Check if image exists at URL
 * @param {string} src - Image URL to check
 * @returns {Promise<boolean>}
 */
export const imageExists = async (src) => {
  try {
    await preloadImage(src);
    return true;
  } catch {
    return false;
  }
};

/**
 * Get image with fallback
 * @param {string} src - Primary image URL
 * @param {string} fallback - Fallback image URL
 * @returns {Promise<string>} The URL that loaded successfully
 */
export const getImageWithFallback = async (src, fallback) => {
  const exists = await imageExists(src);
  return exists ? src : fallback;
};

/**
 * Create srcset string for responsive images
 * @param {Object} images - Object with size keys and URL values
 * @returns {string} srcset attribute value
 */
export const createSrcSet = (images) => {
  const entries = [];
  
  if (images.mobile) entries.push(`${images.mobile} 480w`);
  if (images.tablet) entries.push(`${images.tablet} 768w`);
  if (images.desktop) entries.push(`${images.desktop} 1200w`);
  if (images.large) entries.push(`${images.large} 1600w`);
  if (images.xl) entries.push(`${images.xl} 1920w`);
  
  return entries.join(', ');
};

/**
 * Create sizes attribute for responsive images
 * @param {Object} options - Size options
 * @returns {string} sizes attribute value
 */
export const createSizes = (options = {}) => {
  const {
    mobile = '100vw',
    tablet = '100vw',
    desktop = '100vw',
  } = options;
  
  return `(max-width: 480px) ${mobile}, (max-width: 768px) ${tablet}, ${desktop}`;
};

/**
 * Asset loader object for backward compatibility
 */
export const AssetLoader = {
  preloadImage,
  preloadImages,
  preloadVideo,
  preloadVideos,
  imageExists,
  getImageWithFallback,
  createSrcSet,
  createSizes,
};
