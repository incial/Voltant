import React, { useMemo, useEffect } from 'react';
import {
  getPreferredImage,
  preloadImage,
  supportsWebp
} from '../../utils/imageSupport';

const OptimizedImage = ({
  src,
  fallbackSrc,
  srcSet,
  fallbackSrcSet,
  alt,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  preload = false,
  className,
  ...rest
}) => {
  const supportsWebP = useMemo(() => supportsWebp(), []);
  const computedFallback = useMemo(() => {
    if (fallbackSrc) return fallbackSrc;
    if (typeof src === 'string' && src.toLowerCase().endsWith('.webp')) {
      return src.replace(/\.webp$/i, '.jpg');
    }
    return undefined;
  }, [src, fallbackSrc]);
  const resolvedSrc = useMemo(
    () => getPreferredImage(src, computedFallback, supportsWebP),
    [src, computedFallback, supportsWebP]
  );
  const resolvedSrcSet = useMemo(() => {
    if (!srcSet) return undefined;
    if (!supportsWebP) {
      if (fallbackSrcSet) return fallbackSrcSet;
      // When falling back to PNG/JPG, drop WebP srcSet to avoid unsupported candidates.
      return undefined;
    }
    return srcSet;
  }, [srcSet, fallbackSrcSet, supportsWebP]);

  useEffect(() => {
    if (preload && resolvedSrc) preloadImage(resolvedSrc);
  }, [preload, resolvedSrc]);

  const imgProps = {
    src: resolvedSrc,
    srcSet: resolvedSrcSet,
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
