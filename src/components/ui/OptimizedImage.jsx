/**
 * OptimizedImage Component
 * Enhanced image component with WebP support, responsive srcset, and lazy loading
 * Optimized for fast loading on mobile (iOS/Android) and desktop
 * 
 * @module components/ui/OptimizedImage
 */

import React, { useMemo, useEffect, useState, useRef } from "react";
import {
  getPreferredImage,
  preloadImage,
  supportsWebp,
  generateSrcSet,
  getWebpSrc,
  isSlowConnection,
} from "../../utils/imageSupport";

/**
 * Standard responsive widths
 */
const RESPONSIVE_WIDTHS = [480, 768, 1200, 1600];

/**
 * Get sizes attribute based on usage context
 */
const getSizesAttr = (usage) => {
  const sizesMap = {
    hero: '100vw',
    fullWidth: '100vw',
    halfWidth: '(max-width: 768px) 100vw, 50vw',
    card: '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw',
    thumbnail: '(max-width: 480px) 50vw, 150px',
    default: '(max-width: 480px) 100vw, (max-width: 768px) 80vw, 60vw',
  };
  return sizesMap[usage] || sizesMap.default;
};

const OptimizedImage = ({
  src,
  fallbackSrc,
  alt,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  preload = false,
  className,
  usage = 'default',
  sizes: customSizes,
  enableResponsive = true,
  enableWebp = true,
  placeholderColor = '#f3f4f6',
  onLoad,
  onError,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  
  const supportsWebP = useMemo(() => supportsWebp(), []);
  const slowConnection = useMemo(() => isSlowConnection(), []);
  
  // Parse source and generate paths
  const imagePaths = useMemo(() => {
    if (!src) return { primary: '', fallback: '', srcSet: '', webpSrcSet: '' };
    
    const srcStr = String(src);
    const match = srcStr.match(/^(.+)\.(png|jpg|jpeg|webp)$/i);
    
    if (!match) {
      return { primary: srcStr, fallback: srcStr, srcSet: '', webpSrcSet: '' };
    }
    
    const [, basePath, ext] = match;
    const extLower = ext.toLowerCase();
    
    // Check if this is already a responsive variant
    const isResponsiveVariant = /-\d+w$/.test(basePath);
    
    // Compute fallback
    const computedFallback = fallbackSrc || 
      (extLower === 'webp' ? srcStr.replace(/\.webp$/i, '.png') : srcStr);
    
    // Generate srcSets for responsive images
    let srcSet = '';
    let webpSrcSet = '';
    
    if (enableResponsive && !isResponsiveVariant) {
      // Use smaller widths on slow connections
      const widths = slowConnection 
        ? RESPONSIVE_WIDTHS.slice(0, 2) 
        : RESPONSIVE_WIDTHS;
      
      srcSet = generateSrcSet(basePath, extLower, widths);
      
      if (enableWebp && extLower !== 'webp') {
        webpSrcSet = generateSrcSet(basePath, 'webp', widths);
      }
    }
    
    return {
      primary: srcStr,
      fallback: computedFallback,
      srcSet,
      webpSrcSet,
    };
  }, [src, fallbackSrc, enableResponsive, enableWebp, slowConnection]);

  // Determine final source based on WebP support
  const resolvedSrc = useMemo(() => {
    if (enableWebp && supportsWebP && imagePaths.primary) {
      return getWebpSrc(imagePaths.primary);
    }
    return getPreferredImage(imagePaths.primary, imagePaths.fallback, supportsWebP);
  }, [imagePaths, supportsWebP, enableWebp]);

  // Get sizes attribute
  const sizesAttr = customSizes || getSizesAttr(usage);

  // Preload effect
  useEffect(() => {
    if (preload && resolvedSrc) {
      preloadImage(resolvedSrc, { 
        priority: fetchPriority === 'high' ? 'high' : 'auto',
        type: supportsWebP ? 'image/webp' : 'image/png'
      });
    }
  }, [preload, resolvedSrc, fetchPriority, supportsWebP]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    console.warn(`OptimizedImage: Failed to load ${src}`);
    onError?.(e);
  };

  // Build common image props
  const imgProps = {
    ref: imgRef,
    alt,
    loading,
    decoding,
    className: `${className || ''} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      backgroundColor: !isLoaded ? placeholderColor : 'transparent',
      ...rest.style,
    },
    ...rest,
  };

  if (fetchPriority) {
    imgProps.fetchpriority = fetchPriority;
  }

  // Use <picture> element for WebP with fallback
  if (imagePaths.webpSrcSet && imagePaths.srcSet && !hasError) {
    return (
      <picture>
        {/* WebP source for modern browsers */}
        <source
          type="image/webp"
          srcSet={imagePaths.webpSrcSet}
          sizes={sizesAttr}
        />
        {/* Fallback PNG/JPG source */}
        <source
          srcSet={imagePaths.srcSet}
          sizes={sizesAttr}
        />
        {/* Fallback img element */}
        <img
          src={resolvedSrc}
          srcSet={imagePaths.srcSet}
          sizes={sizesAttr}
          {...imgProps}
        />
      </picture>
    );
  }

  // Responsive image without WebP
  if (imagePaths.srcSet && !hasError) {
    return (
      <img
        src={resolvedSrc}
        srcSet={imagePaths.srcSet}
        sizes={sizesAttr}
        {...imgProps}
      />
    );
  }

  // Simple image without srcset
  return (
    <img 
      src={hasError ? imagePaths.fallback : resolvedSrc} 
      {...imgProps} 
    />
  );
};

export default OptimizedImage;
