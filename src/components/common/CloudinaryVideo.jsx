import React from 'react';
import { AdvancedVideo } from '@cloudinary/react';
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
  transformations = []
}) => {
  const videoUrl = cld.video(publicId);

  // Apply default optimizations
  videoUrl
    .delivery(quality(autoQuality()))
    .delivery(format(autoFormat()))
    .transcode(videoCodec(autoCodec()));

  // Apply any custom transformations
  transformations.forEach(transformation => {
    videoUrl.addTransformation(transformation);
  });

  return (
    <AdvancedVideo
      cldVid={videoUrl}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      poster={poster}
    />
  );
};

export default CloudinaryVideo;