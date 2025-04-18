import React from 'react';
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';
import { 
  quality, 
  format
} from '@cloudinary/url-gen/actions/delivery';
import { fill, scale } from '@cloudinary/url-gen/actions/resize';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';
import { predominant } from '@cloudinary/url-gen/qualifiers/background';
import { blur } from '@cloudinary/url-gen/actions/effect';
import cld from '../../utils/cloudinary';

const CloudinaryImage = ({ 
  publicId,
  alt,
  className,
  width,
  height,
  breakpoints = [640, 768, 1024, 1280, 1536],
  useLazyLoading = true,
  useResponsive = true,
  usePlaceholder = true,
  transformations = []
}) => {
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
  transformations.forEach(transformation => {
    imageUrl.addTransformation(transformation);
  });

  // Set up plugins
  const plugins = [];
  
  // Add lazy loading
  if (useLazyLoading) {
    plugins.push(lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 }));
  }
  
  // Add responsive resizing based on viewport
  if (useResponsive) {
    plugins.push(responsive({ steps: breakpoints }));
  }
  
  // Add low-quality image placeholder
  if (usePlaceholder) {
    plugins.push(placeholder({ mode: 'blur' }));
  }

  return (
    <AdvancedImage 
      cldImg={imageUrl} 
      alt={alt} 
      className={className} 
      plugins={plugins}
      loading="lazy"
    />
  );
};

export default CloudinaryImage;