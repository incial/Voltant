import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { 
  quality, 
  format
} from '@cloudinary/url-gen/actions/delivery';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';
import cld from '../../utils/cloudinary';

const CloudinaryImage = ({ 
  publicId,
  alt,
  className,
  width,
  height,
  transformations = []
}) => {
  const imageUrl = cld.image(publicId);

  // Apply default transformations
  imageUrl
    .delivery(quality(autoQuality()))
    .delivery(format(autoFormat()));

  // Apply additional transformations if specified
  if (width && height) {
    imageUrl.resize(fill().width(width).height(height));
  }

  // Apply any custom transformations
  transformations.forEach(transformation => {
    imageUrl.addTransformation(transformation);
  });

  return (
    <AdvancedImage 
      cldImg={imageUrl} 
      alt={alt} 
      className={className} 
    />
  );
};

export default CloudinaryImage;