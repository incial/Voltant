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
  const resolvedSrc = useMemo(
    () => getPreferredImage(src, computedFallback, supportsWebP),
    [src, computedFallback, supportsWebP]
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
