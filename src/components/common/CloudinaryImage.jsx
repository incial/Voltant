import React from 'react';
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';
import { 
  quality, 
  format
} from '@cloudinary/url-gen/actions/delivery';
import { fill, scale } from '@cloudinary/url-gen/actions/resize';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';
import cld from '../../utils/cloudinary';

const CloudinaryImage = ({ 
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
    console.error("CloudinaryImage received undefined publicId");
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

  // Set up plugins
  const plugins = [];
  
  // Add lazy loading with improved settings for better cross-browser support
  if (useLazyLoading) {
    plugins.push(lazyload({ 
      rootMargin: '200px 0px', 
      threshold: 0.1,
      // Add data attributes for browsers that support native lazy loading
      attributePlugin: {
        loading: 'lazy'
      }
    }));
  }
  
  // Add responsive resizing based on viewport with better device coverage
  if (useResponsive) {
    plugins.push(responsive({ 
      steps: breakpoints,
      // Add support for high-DPI displays
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
        // Fallback handling for image loading errors
        console.warn(`Failed to load image: ${publicId}`);
        if (e.target) {
          e.target.style.opacity = '0.5';
        }
      }}
    />
  );
};

export default CloudinaryImage;