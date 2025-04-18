import React from 'react';
import { AdvancedVideo, lazyload } from '@cloudinary/react';
import { 
  quality, 
  format
} from '@cloudinary/url-gen/actions/delivery';
import { videoCodec } from '@cloudinary/url-gen/actions/transcode';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { auto as autoCodec } from '@cloudinary/url-gen/qualifiers/videoCodec';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';
import cld from '../../utils/cloudinary';

const CloudinaryVideo = ({ 
  publicId,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  poster,
  useLazyLoading = true,
  startOffset = 0,
  width,
  height,
  transformations = [],
  sources
}) => {
  // Guard against undefined publicId
  if (!publicId) {
    console.error("CloudinaryVideo received undefined publicId");
    return null;
  }

  const videoUrl = cld.video(publicId);

  // Apply default optimizations
  videoUrl
    .delivery(quality(autoQuality()))
    .delivery(format(autoFormat()))
    .transcode(videoCodec(autoCodec()));

  // Apply responsive sizing if provided
  if (width) {
    videoUrl.resize(`w_${width}`);
  }
  
  if (height) {
    videoUrl.resize(`h_${height}`);
  }

  // Apply any custom transformations
  if (transformations && Array.isArray(transformations)) {
    transformations.forEach(transformation => {
      if (typeof transformation === 'string') {
        videoUrl.addTransformation(transformation);
      }
    });
  }

  // Set up plugins
  const plugins = [];
  
  // Add lazy loading
  if (useLazyLoading) {
    plugins.push(lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.1 }));
  }

  // Create poster URL from the video if none provided
  const posterUrl = poster || cld.image(publicId)
    .setAssetType('video')
    .delivery(format('auto'))
    .delivery(quality('auto'))
    .toURL();

  // Use default sources only if none are provided via props
  const defaultSources = [
    {
      type: 'mp4',
      transformations: ['vc_auto']  // Simplified to just one safe transformation
    }
  ];

  // Safely prepare sources, ensuring transformations are strings
  const safeSourcesArray = sources ? sources.map(source => {
    // Make sure transformations is an array of strings
    const safeTransformations = 
      source.transformations && Array.isArray(source.transformations) 
        ? source.transformations.filter(t => typeof t === 'string')
        : ['vc_auto']; // Default safe transformation
    
    return {
      ...source,
      transformations: safeTransformations
    };
  }) : defaultSources;

  return (
    <AdvancedVideo
      cldVid={videoUrl}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      poster={posterUrl}
      plugins={plugins}
      onPlay={(e) => {
        if (startOffset > 0) {
          e.target.currentTime = startOffset;
        }
      }}
      sources={safeSourcesArray}
    />
  );
};

export default CloudinaryVideo;