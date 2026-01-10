/**
 * ResponsiveImage Component
 * Optimized image component with srcset, WebP support, and lazy loading
 * Provides fast loading on mobile (iPhone/Android) and desktop
 * 
 * @module components/ui/ResponsiveImage
 */

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { supportsWebp } from '../../utils/imageSupport';

/**
 * Standard breakpoints for responsive images
 */
const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1200,
  large: 1600,
  xl: 1920,
};

/**
 * Generate srcset string from image path
 * @param {string} basePath - Base image path without extension
 * @param {string} ext - File extension
 * @param {number[]} widths - Array of widths to include
 * @returns {string} srcset string
 */
const generateSrcSet = (basePath, ext, widths = [480, 768, 1200, 1600]) => {
  // Remove extension from basePath if present
  const pathWithoutExt = basePath.replace(/\.(png|jpg|jpeg|webp)$/i, '');
  
  return widths
    .map((w) => `${pathWithoutExt}-${w}w.${ext} ${w}w`)
    .join(', ');
};

/**
 * Get appropriate sizes attribute based on usage
 * @param {string} usage - Image usage context
 * @returns {string} sizes attribute value
 */
const getSizes = (usage = 'default') => {
  const sizesMap = {
    hero: '100vw',
    fullWidth: '100vw',
    halfWidth: '(max-width: 768px) 100vw, 50vw',
    card: '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw',
    thumbnail: '(max-width: 480px) 50vw, (max-width: 768px) 33vw, 150px',
    default: '(max-width: 480px) 100vw, (max-width: 768px) 80vw, 60vw',
  };
  return sizesMap[usage] || sizesMap.default;
};

/**
 * ResponsiveImage Component
 * 
 * @param {Object} props
 * @param {string} props.src - Primary image source
 * @param {string} [props.alt] - Alt text for accessibility
 * @param {string} [props.className] - CSS classes
 * @param {string} [props.usage] - Usage context: 'hero', 'fullWidth', 'halfWidth', 'card', 'thumbnail'
 * @param {string} [props.sizes] - Custom sizes attribute (overrides usage)
 * @param {number[]} [props.widths] - Custom widths for srcset
 * @param {string} [props.loading] - Loading strategy: 'lazy' | 'eager'
 * @param {string} [props.fetchPriority] - Fetch priority: 'high' | 'low' | 'auto'
 * @param {boolean} [props.preload] - Whether to preload the image
 * @param {Function} [props.onLoad] - Callback when image loads
 * @param {Function} [props.onError] - Callback on error
 * @param {Object} [props.style] - Inline styles
 * @param {string} [props.placeholderColor] - Background color while loading
 * @param {boolean} [props.enableBlur] - Enable blur-up effect
 */
const ResponsiveImage = ({
  src,
  alt = '',
  className = '',
  usage = 'default',
  sizes: customSizes,
  widths = [480, 768, 1200, 1600],
  loading = 'lazy',
  fetchPriority,
  preload = false,
  onLoad,
  onError,
  style = {},
  placeholderColor = '#f3f4f6',
  enableBlur = true,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  const webpSupported = useMemo(() => supportsWebp(), []);

  // Parse source path
  const parsedSrc = useMemo(() => {
    if (!src) return { basePath: '', ext: 'png', isResponsive: false };
    
    const srcStr = String(src);
    const match = srcStr.match(/^(.+)\.(png|jpg|jpeg|webp)$/i);
    
    if (match) {
      const [, basePath, ext] = match;
      // Check if responsive versions likely exist (path doesn't already have width suffix)
      const isResponsive = !/-\d+w$/.test(basePath);
      return { basePath, ext: ext.toLowerCase(), isResponsive };
    }
    
    return { basePath: srcStr, ext: 'png', isResponsive: false };
  }, [src]);

  // Generate srcset for WebP and fallback
  const srcSets = useMemo(() => {
    if (!parsedSrc.isResponsive || !parsedSrc.basePath) {
      return { webp: '', fallback: '' };
    }

    const webpSrcSet = generateSrcSet(parsedSrc.basePath, 'webp', widths);
    const fallbackSrcSet = generateSrcSet(parsedSrc.basePath, parsedSrc.ext, widths);

    return { webp: webpSrcSet, fallback: fallbackSrcSet };
  }, [parsedSrc, widths]);

  // Get sizes attribute
  const sizesAttr = customSizes || getSizes(usage);

  // Fallback source (original or PNG version)
  const fallbackSrc = useMemo(() => {
    if (!src) return '';
    return String(src).replace(/\.webp$/i, '.png');
  }, [src]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager' || isInView) return;

    const element = imgRef.current;
    if (!element) return;

    // Use native lazy loading as fallback
    if ('loading' in HTMLImageElement.prototype) {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before entering viewport
        threshold: 0.01,
      }
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading, isInView]);

  // Preload critical images
  useEffect(() => {
    if (!preload || !src) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    
    if (srcSets.webp && webpSupported) {
      link.type = 'image/webp';
    }
    
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [preload, src, srcSets.webp, webpSupported]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    console.warn(`ResponsiveImage: Failed to load ${src}`);
    onError?.(e);
  };

  // Build image props
  const imgProps = {
    alt,
    loading,
    decoding: 'async',
    className: `${className} ${enableBlur && !isLoaded ? 'blur-sm' : ''} transition-all duration-300`,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      backgroundColor: !isLoaded ? placeholderColor : 'transparent',
      ...style,
    },
    ...rest,
  };

  if (fetchPriority) {
    imgProps.fetchpriority = fetchPriority;
  }

  // Don't render until in view for lazy loading
  if (!isInView && loading === 'lazy') {
    return (
      <div
        ref={imgRef}
        className={className}
        style={{
          backgroundColor: placeholderColor,
          minHeight: '100px',
          ...style,
        }}
        aria-label={alt}
      />
    );
  }

  // Use picture element for WebP with PNG fallback
  if (srcSets.webp && srcSets.fallback && parsedSrc.isResponsive) {
    return (
      <picture ref={imgRef}>
        {/* WebP source for modern browsers */}
        <source
          type="image/webp"
          srcSet={srcSets.webp}
          sizes={sizesAttr}
        />
        {/* Fallback PNG/JPG source */}
        <source
          type={`image/${parsedSrc.ext === 'jpg' ? 'jpeg' : parsedSrc.ext}`}
          srcSet={srcSets.fallback}
          sizes={sizesAttr}
        />
        {/* Fallback img element */}
        <img
          src={fallbackSrc}
          srcSet={srcSets.fallback}
          sizes={sizesAttr}
          {...imgProps}
        />
      </picture>
    );
  }

  // Simple responsive image without picture element
  if (parsedSrc.isResponsive && srcSets.fallback) {
    return (
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSets.fallback}
        sizes={sizesAttr}
        {...imgProps}
      />
    );
  }

  // Simple image without srcset
  return (
    <img
      ref={imgRef}
      src={hasError ? fallbackSrc : src}
      {...imgProps}
    />
  );
};

export default ResponsiveImage;
