/**
 * Device Detection Utilities
 * Provides device-specific optimizations for mobile and desktop
 * 
 * @module utils/device
 */

const hasNavigator = typeof navigator !== 'undefined';
const userAgent = hasNavigator ? navigator.userAgent : '';
const platform = hasNavigator ? navigator.platform : '';
const maxTouchPoints = hasNavigator ? navigator.maxTouchPoints : 0;

/**
 * Detect iOS devices (iPhone, iPad, iPod)
 */
export const isIOS =
  typeof window !== 'undefined' && (
    /iPad|iPhone|iPod/.test(userAgent) ||
    (platform === 'MacIntel' && maxTouchPoints > 1)
  );

/**
 * Detect Android devices
 */
export const isAndroid = 
  typeof window !== 'undefined' && /Android/i.test(userAgent);

/**
 * Detect any mobile device
 */
export const isMobileDevice = 
  typeof window !== 'undefined' && (
    isIOS || 
    isAndroid || 
    /webOS|BlackBerry|Opera Mini|IEMobile/i.test(userAgent)
  );

/**
 * Detect if device has touch capability
 */
export const isTouchDevice = 
  typeof window !== 'undefined' && (
    'ontouchstart' in window ||
    maxTouchPoints > 0
  );

/**
 * Get device pixel ratio (capped for performance)
 * @returns {number}
 */
export const getDevicePixelRatio = () => {
  if (typeof window === 'undefined') return 1;
  return Math.min(window.devicePixelRatio || 1, 3);
};

/**
 * Check if the device is in portrait orientation
 * @returns {boolean}
 */
export const isPortrait = () => {
  if (typeof window === 'undefined') return true;
  return window.innerHeight > window.innerWidth;
};

/**
 * Get viewport dimensions
 * @returns {{ width: number, height: number }}
 */
export const getViewport = () => {
  if (typeof window === 'undefined') {
    return { width: 1200, height: 800 };
  }
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  };
};

/**
 * Detect Safari browser (important for WebP fallback)
 */
export const isSafari =
  typeof window !== 'undefined' &&
  /^((?!chrome|android).)*safari/i.test(userAgent);

/**
 * Check if reduced motion is preferred
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
};

/**
 * Check if user prefers dark mode
 * @returns {boolean}
 */
export const prefersDarkMode = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
};

/**
 * Check connection quality for adaptive loading
 * @returns {'4g' | '3g' | '2g' | 'slow-2g' | 'unknown'}
 */
export const getConnectionType = () => {
  if (typeof navigator === 'undefined') return 'unknown';
  
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return 'unknown';
  
  return connection.effectiveType || 'unknown';
};

/**
 * Check if data saver mode is enabled
 * @returns {boolean}
 */
export const isDataSaverEnabled = () => {
  if (typeof navigator === 'undefined') return false;
  
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  return connection?.saveData ?? false;
};

/**
 * Get recommended image quality based on device and connection
 * @returns {'high' | 'medium' | 'low'}
 */
export const getRecommendedImageQuality = () => {
  if (isDataSaverEnabled()) return 'low';
  
  const connectionType = getConnectionType();
  
  if (connectionType === 'slow-2g' || connectionType === '2g') return 'low';
  if (connectionType === '3g') return 'medium';
  
  return 'high';
};
