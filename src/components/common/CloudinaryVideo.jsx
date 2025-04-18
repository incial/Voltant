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
  transformations = []
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
      playsInline={true}
      onPlay={(e) => {
        if (startOffset > 0) {
          e.target.currentTime = startOffset;
        }
      }}
    />
  );
};

export default CloudinaryVideo;