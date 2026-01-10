/**
 * Image Support Utilities
 * Provides WebP detection, responsive image handling, and preloading
 * Optimized for mobile (iOS/Android) and desktop browsers
 * 
 * @module utils/imageSupport
 */

let webpSupportCache = null;
let avifSupportCache = null;
const preloadedImages = new Set();

/**
 * Detect WebP support using canvas method
 */
const detectWebpSupport = () => {
  if (typeof document === 'undefined') return false;
  if (typeof document.createElement !== 'function') return false;

  try {
    const canvas = document.createElement('canvas');
    if (!canvas.getContext) return false;

    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } catch (error) {
    console.warn('WebP detection failed, defaulting to fallback assets.', error);
    return false;
  }
};

/**
 * Detect AVIF support (next-gen format)
 */
const detectAvifSupport = () => {
  if (typeof document === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    if (!canvas.getContext) return false;
    
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  } catch {
    return false;
  }
};

/**
 * Check if WebP is supported
 * @returns {boolean}
 */
export const supportsWebp = () => {
  if (webpSupportCache !== null) return webpSupportCache;
  webpSupportCache = detectWebpSupport();
  return webpSupportCache;
};

/**
 * Check if AVIF is supported
 * @returns {boolean}
 */
export const supportsAvif = () => {
  if (avifSupportCache !== null) return avifSupportCache;
  avifSupportCache = detectAvifSupport();
  return avifSupportCache;
};

/**
 * Get preferred image format based on browser support
 * @param {string} primarySrc - Primary image source
 * @param {string} fallbackSrc - Fallback source
 * @param {boolean} [forceSupport] - Force WebP support
 * @returns {string}
 */
export const getPreferredImage = (primarySrc, fallbackSrc, forceSupport) => {
  if (!primarySrc) return fallbackSrc || '';
  const canUsePrimary =
    typeof forceSupport === 'boolean' ? forceSupport : supportsWebp();
  if (!canUsePrimary && fallbackSrc) return fallbackSrc;
  return primarySrc;
};

/**
 * Get device pixel ratio for high-DPI displays
 * @returns {number}
 */
export const getDevicePixelRatio = () => {
  if (typeof window === 'undefined') return 1;
  return Math.min(window.devicePixelRatio || 1, 3); // Cap at 3x for performance
};

/**
 * Get optimal image size based on container and device
 * @param {number} containerWidth - Container width in CSS pixels
 * @returns {number} - Recommended image width
 */
export const getOptimalImageWidth = (containerWidth) => {
  const dpr = getDevicePixelRatio();
  const sizes = [480, 768, 1200, 1600, 1920];
  const targetWidth = containerWidth * dpr;
  
  // Find the smallest size that covers the target
  for (const size of sizes) {
    if (size >= targetWidth) return size;
  }
  
  return sizes[sizes.length - 1];
};

/**
 * Generate responsive image srcset
 * @param {string} basePath - Base image path without extension
 * @param {string} ext - File extension
 * @param {number[]} widths - Array of widths
 * @returns {string}
 */
export const generateSrcSet = (basePath, ext = 'png', widths = [480, 768, 1200, 1600]) => {
  const pathWithoutExt = basePath.replace(/\.(png|jpg|jpeg|webp)$/i, '');
  
  return widths
    .map((w) => `${pathWithoutExt}-${w}w.${ext} ${w}w`)
    .join(', ');
};

/**
 * Get WebP version of an image path
 * @param {string} src - Original image source
 * @returns {string}
 */
export const getWebpSrc = (src) => {
  if (!src) return '';
  return src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
};

/**
 * Get responsive image path for a specific width
 * @param {string} src - Original image source
 * @param {number} width - Target width
 * @returns {string}
 */
export const getResponsiveSrc = (src, width) => {
  if (!src) return '';
  const match = src.match(/^(.+)\.(png|jpg|jpeg|webp)$/i);
  if (!match) return src;
  
  const [, basePath, ext] = match;
  return `${basePath}-${width}w.${ext}`;
};

/**
 * Preload a single image with high priority
 * @param {string} src - Image source
 * @param {Object} options - Preload options
 */
export const preloadImage = (src, options = {}) => {
  if (!src || preloadedImages.has(src)) return;
  if (typeof window === 'undefined') return;

  const { priority = 'auto', type, as = 'image' } = options;

  // Use link preload for critical images
  if (priority === 'high' && typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = src;
    if (type) link.type = type;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
    preloadedImages.add(src);
    return;
  }

  // Use Image object for standard preloading
  if (typeof Image !== 'undefined') {
    const img = new Image();
    img.decoding = 'async';
    img.loading = 'eager';
    img.src = src;
    preloadedImages.add(src);
  }
};

/**
 * Preload multiple images
 * @param {string[]} sources - Array of image sources
 * @param {Object} options - Preload options
 */
export const preloadImages = (sources = [], options = {}) => {
  sources.forEach((src) => preloadImage(src, options));
};

/**
 * Preload critical hero images with responsive versions
 * @param {string} src - Hero image source
 */
export const preloadHeroImage = (src) => {
  if (!src) return;
  
  const webpSupported = supportsWebp();
  const dpr = getDevicePixelRatio();
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const optimalWidth = getOptimalImageWidth(viewportWidth);
  
  // Preload optimal size
  const basePath = src.replace(/\.(png|jpg|jpeg|webp)$/i, '');
  const ext = webpSupported ? 'webp' : 'png';
  const responsiveSrc = `${basePath}-${optimalWidth}w.${ext}`;
  
  preloadImage(responsiveSrc, { 
    priority: 'high',
    type: webpSupported ? 'image/webp' : 'image/png'
  });
  
  // Also preload original as fallback
  preloadImage(src, { priority: 'high' });
};

/**
 * Check if connection is slow (for adaptive loading)
 * @returns {boolean}
 */
export const isSlowConnection = () => {
  if (typeof navigator === 'undefined') return false;
  
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return false;
  
  // Consider slow if saveData is enabled or effectiveType is slow
  if (connection.saveData) return true;
  if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') return true;
  
  return false;
};

/**
 * Get appropriate image quality based on connection
 * @returns {'high' | 'medium' | 'low'}
 */
export const getAdaptiveQuality = () => {
  if (isSlowConnection()) return 'low';
  
  const connection = navigator?.connection;
  if (connection?.effectiveType === '3g') return 'medium';
  
  return 'high';
};
