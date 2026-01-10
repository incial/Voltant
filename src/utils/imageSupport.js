let webpSupportCache = null;
const preloadedImages = new Set();

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

export const supportsWebp = () => {
  if (webpSupportCache !== null) return webpSupportCache;
  webpSupportCache = detectWebpSupport();
  return webpSupportCache;
};

export const getPreferredImage = (primarySrc, fallbackSrc, forceSupport) => {
  if (!primarySrc) return fallbackSrc || '';
  const canUsePrimary =
    typeof forceSupport === 'boolean' ? forceSupport : supportsWebp();
  if (!canUsePrimary && fallbackSrc) return fallbackSrc;
  return primarySrc;
};

export const preloadImage = (src) => {
  if (!src || preloadedImages.has(src)) return;
  if (typeof Image === 'undefined') return;

  const img = new Image();
  img.decoding = 'async';
  img.loading = 'eager';
  img.src = src;
  preloadedImages.add(src);
};

export const preloadImages = (sources = []) => {
  sources.forEach(preloadImage);
};
