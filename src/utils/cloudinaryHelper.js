import { imageAssets, videoAssets } from './cloudinaryAssets';
import cld from './cloudinary';
import { getCloudinaryId } from './cloudinaryAssets';

// Create a combined assets object for use in helper functions
const cloudinaryAssets = { ...imageAssets, ...videoAssets };

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
    .filter(([, asset]) => asset.resource_type === resourceType)
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

/**
 * Get Cloudinary URL for an image with optimizations
 * @param {string} localPath - Local path to the image asset
 * @param {object} options - Transformation options
 * @returns {string} - Optimized Cloudinary URL
 */
export const getOptimizedImageUrl = (localPath, options = {}) => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    effects = []
  } = options;

  const publicId = getCloudinaryId(localPath, 'image');
  
  if (!publicId) {
    console.warn(`No Cloudinary mapping found for: ${localPath}`);
    return localPath; // Return local path as fallback
  }

  const img = cld.image(publicId);
  
  // Apply transformations
  img.delivery(quality(quality)).delivery(format(format));

  // Apply resize if dimensions provided
  if (width || height) {
    img.resize(`${crop},w_${width || 'auto'},h_${height || 'auto'}`);
  }
  
  // Apply any additional effects
  effects.forEach(effect => {
    img.addTransformation(effect);
  });
  
  return img.toURL();
};

/**
 * Get Cloudinary URL for a video with optimizations
 * @param {string} localPath - Local path to the video asset
 * @param {object} options - Transformation options
 * @returns {string} - Optimized Cloudinary URL
 */
export const getOptimizedVideoUrl = (localPath, options = {}) => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    videoCodecOptions = { codec: 'auto' },
    startOffset = 0,
    endOffset = null,
    effects = []
  } = options;

  const publicId = getCloudinaryId(localPath, 'video');
  
  if (!publicId) {
    console.warn(`No Cloudinary mapping found for: ${localPath}`);
    return localPath; // Return local path as fallback
  }

  const video = cld.video(publicId);
  
  // Apply transformations
  video.delivery(quality(quality)).delivery(format(format));

  // Apply resize if dimensions provided
  if (width || height) {
    video.resize(`${crop},w_${width || 'auto'},h_${height || 'auto'}`);
  }
  
  // Apply codec option
  if (videoCodecOptions.codec) {
    // Use codec transformation string directly instead of undefined videoCodec function
    video.addTransformation(`vc_${videoCodecOptions.codec}`);
  }
  
  // Apply time range if provided
  if (startOffset > 0 || endOffset) {
    video.addTransformation(`so_${startOffset}${endOffset ? `,eo_${endOffset}` : ''}`);
  }
  
  // Apply any additional effects
  effects.forEach(effect => {
    video.addTransformation(effect);
  });
  
  return video.toURL();
};

/**
 * Get responsive srcSet for an image
 * @param {string} localPath - Local path to the image asset
 * @param {Array} breakpoints - Width breakpoints for srcSet
 * @param {object} options - Additional transformation options
 * @returns {string} - srcSet string for responsive images
 */
export const getImageSrcSet = (localPath, breakpoints = [320, 640, 768, 1024, 1280, 1536], options = {}) => {
  const publicId = getCloudinaryId(localPath, 'image');
  
  if (!publicId) {
    console.warn(`No Cloudinary mapping found for: ${localPath}`);
    return ''; // Return empty string as fallback
  }
  
  return breakpoints.map(width => {
    const url = getOptimizedImageUrl(localPath, { ...options, width });
    return `${url} ${width}w`;
  }).join(', ');
};

/**
 * Convert local image/video paths to Cloudinary component props
 * @param {string} localPath - Local path to the asset
 * @param {string} type - 'image' or 'video'
 * @returns {object} - Props for CloudinaryImage or CloudinaryVideo components
 */
export const getCloudinaryComponentProps = (localPath, type = 'image') => {
  const publicId = getCloudinaryId(localPath, type);
  
  if (!publicId) {
    console.warn(`No Cloudinary mapping found for: ${localPath}`);
    return { src: localPath }; // Return local path as fallback
  }
  
  return {
    publicId,
    alt: localPath.split('/').pop().split('.')[0], // Generate alt from filename
  };
};

/**
 * Helper to get Cloudinary component props with proper settings based on page section
 * @param {string} localPath - Local path to the asset
 * @param {string} section - Section name ('hero', 'banner', 'thumbnail', etc.)
 * @param {string} type - 'image' or 'video'
 * @returns {object} - Optimized props for CloudinaryImage or CloudinaryVideo component
 */
export const getOptimizedAssetProps = (localPath, section = 'general', type = 'image') => {
  // Preset configurations based on section
  const presets = {
    hero: {
      image: { usePlaceholder: true, useResponsive: true, breakpoints: [640, 1024, 1536, 1920] },
      video: { 
        useLazyLoading: false, 
        autoPlay: true, 
        loop: true, 
        muted: true,
        sources: [
          {
            type: 'mp4',
            transformations: ['vc_auto']
          }
        ]
      }
    },
    banner: {
      image: { usePlaceholder: true, useResponsive: true },
      video: { 
        useLazyLoading: true, 
        autoPlay: true, 
        loop: true, 
        muted: true,
        sources: [
          {
            type: 'mp4',
            transformations: ['vc_auto']
          }
        ]
      }
    },
    thumbnail: {
      image: { width: 300, height: 200, usePlaceholder: true },
      video: { 
        width: 300, 
        height: 200, 
        useLazyLoading: true, 
        autoPlay: false, 
        controls: true,
        sources: [
          {
            type: 'mp4',
            transformations: ['vc_auto']
          }
        ]
      }
    },
    icon: {
      image: { width: 64, height: 64 },
    },
    general: {
      image: { useResponsive: true, usePlaceholder: true },
      video: { 
        useLazyLoading: true,
        sources: [
          {
            type: 'mp4',
            transformations: ['vc_auto']
          }
        ]
      }
    }
  };
  
  const defaultProps = presets[section]?.[type] || presets.general[type] || {};
  
  // Get basic component props (publicId, etc.)
  const baseProps = getCloudinaryComponentProps(localPath, type);
  
  // If no publicId is found, log an error
  if (!baseProps.publicId) {
    console.error(`No Cloudinary mapping found for: ${localPath}`);
  }
  
  // Combine default and base props
  return { ...defaultProps, ...baseProps };
};