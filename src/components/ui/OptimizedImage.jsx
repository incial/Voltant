import React, { useMemo, useEffect } from 'react';
import {
  getPreferredImage,
  preloadImage,
  supportsWebp
} from '../../utils/imageSupport';

const OptimizedImage = ({
  src,
  fallbackSrc,
  alt,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  preload = false,
  className,
  ...rest
}) => {
  const supportsWebP = useMemo(() => supportsWebp(), []);
<<<<<<< HEAD
  const computedFallback = useMemo(() => {
    if (fallbackSrc) return fallbackSrc;
    if (typeof src === 'string' && src.toLowerCase().endsWith('.webp')) {
      return src.replace(/\.webp$/i, '.png');
    }
    if (typeof src === 'string' && src.toLowerCase().endsWith('.png')) {
      return src;
    }
    return undefined;
  }, [src, fallbackSrc]);
=======
>>>>>>> parent of 1d60c50 (Add JPEG fallback generation for WebP images and update OptimizedImage component to support fallbacks)
  const resolvedSrc = useMemo(
    () => getPreferredImage(src, fallbackSrc, supportsWebP),
    [src, fallbackSrc, supportsWebP]
  );

  useEffect(() => {
    if (preload && resolvedSrc) preloadImage(resolvedSrc);
  }, [preload, resolvedSrc]);

  const imgProps = {
    src: resolvedSrc,
    alt,
    loading,
    decoding,
    className,
    ...rest
  };

  if (fetchPriority) {
    imgProps.fetchpriority = fetchPriority;
  }

  return <img {...imgProps} />;
};

export default OptimizedImage;
