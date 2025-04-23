import React, { memo } from 'react';
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';
import { 
  quality, 
  format
} from '@cloudinary/url-gen/actions/delivery';
import { fill, scale } from '@cloudinary/url-gen/actions/resize';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';
import cld from '../../utils/cloudinary';

// Memoized CloudinaryImage component to prevent unnecessary re-renders
const CloudinaryImage = memo(({ 
  publicId,
  alt,
  className,
  width,
  height,
  breakpoints = [375, 640, 768, 1024, 1280, 1536],
  useLazyLoading = true,
  useResponsive = true,
  usePlaceholder = true,
  transformations = [],
  loading = "lazy"
}) => {
  if (!publicId) {
    // Avoid console error in production to reduce JavaScript overhead
    if (process.env.NODE_ENV !== 'production') {
      console.error("CloudinaryImage received undefined publicId");
    }
    return null;
  }

  const imageUrl = cld.image(publicId);

  // Apply default transformations
  imageUrl
    .delivery(quality(autoQuality()))
    .delivery(format(autoFormat()));

  // Apply responsive sizing if width and height are provided 
  if (width && height) {
    imageUrl.resize(fill().width(width).height(height));
  } else {
    // Default to scale mode if only one dimension is provided
    if (width) imageUrl.resize(scale().width(width));
    if (height) imageUrl.resize(scale().height(height));
  }

  // Apply any custom transformations
  if (Array.isArray(transformations)) {
    transformations.forEach(transformation => {
      if (transformation) {
        imageUrl.addTransformation(transformation);
      }
    });
  }

  // Set up plugins - only include what's needed to reduce bundle size
  const plugins = [];
  
  // Add lazy loading with improved settings for better cross-browser support
  if (useLazyLoading) {
    plugins.push(lazyload({ 
      rootMargin: '200px 0px', 
      threshold: 0.1,
      attributePlugin: {
        loading: 'lazy'
      }
    }));
  }
  
  // Add responsive resizing based on viewport with better device coverage
  if (useResponsive) {
    plugins.push(responsive({ 
      steps: breakpoints,
      highDPI: true 
    }));
  }
  
  // Add low-quality image placeholder with improved settings
  if (usePlaceholder) {
    plugins.push(placeholder({ 
      mode: 'predominant-color' 
    }));
  }

  return (
    <AdvancedImage 
      cldImg={imageUrl} 
      alt={alt || ''} 
      className={className} 
      plugins={plugins}
      loading={loading}
      onError={(e) => {
        // Simplified error handling for production
        // Check for development mode without relying on process directly
        if (process.env.NODE_ENV !== 'production' && e.target) {
          console.warn(`Failed to load image: ${publicId}`);
        }
        if (e.target) {
          e.target.style.opacity = '0.5';
        }
      }}
    />
  );
}, (prevProps, nextProps) => {
  // Custom comparison function to prevent unnecessary re-renders
  return prevProps.publicId === nextProps.publicId &&
    prevProps.className === nextProps.className &&
    prevProps.width === nextProps.width &&
    prevProps.height === nextProps.height;
});

export default CloudinaryImage;