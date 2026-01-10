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
