# Cloudinary Media Integration Guide

This document provides instructions for using Cloudinary to optimize images and videos in the Voltant Energy website.

## Overview

Cloudinary is a cloud-based service that provides an end-to-end image and video management solution. We use Cloudinary to:

1. Store and manage all media assets
2. Optimize images and videos for faster loading
3. Apply responsive design to media based on device type
4. Implement lazy loading for better performance
5. Provide fallback options for different browsers

## Quick Start

### Environment Setup

Ensure your `.env` file contains the necessary Cloudinary configuration:

```
VITE_CLOUDINARY_CLOUD_NAME=drzpgff2h
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
```

### Asset Upload

To upload assets to Cloudinary, use the upload script:

```bash
# Upload all assets, skipping those already in Cloudinary
node scripts/upload-to-cloudinary.js

# Check which assets exist in Cloudinary without uploading
node scripts/upload-to-cloudinary.js --verify

# Upload specific assets only
node scripts/upload-to-cloudinary.js "public/Logo_icon.svg" "src/assets/images/Logo.png"
```

## Implementation Guide

### 1. Using CloudinaryImage Component

Replace standard `<img>` tags with the `CloudinaryImage` component:

```jsx
import CloudinaryImage from '../common/CloudinaryImage';
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper';

// Replace this:
<img src="/path/to/image.jpg" alt="Description" />

// With this:
<CloudinaryImage 
  {...getOptimizedAssetProps('src/assets/images/image.jpg', 'section-type')}
  alt="Description" 
/>
```

### 2. Using CloudinaryVideo Component

Replace standard `<video>` tags with the `CloudinaryVideo` component:

```jsx
import CloudinaryVideo from '../common/CloudinaryVideo';
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper';

// Replace this:
<video src="/path/to/video.mp4" autoPlay loop muted />

// With this:
<CloudinaryVideo
  {...getOptimizedAssetProps('public/Videos/video.mp4', 'hero', 'video')}
  autoPlay={true}
  loop={true}
  muted={true}
/>
```

### 3. Section-Specific Optimizations

The `getOptimizedAssetProps` helper function provides optimal settings based on where the asset appears:

- `'hero'` - For hero section videos and images (largest size)
- `'banner'` - For banner sections (mid-size)
- `'thumbnail'` - For thumbnail images (smaller size)
- `'icon'` - For icons (smallest size)
- `'general'` - Default settings

Example:

```jsx
// For hero section:
getOptimizedAssetProps('src/assets/images/Household_hero.png', 'hero', 'image')

// For icons:
getOptimizedAssetProps('src/assets/icons/fb.svg', 'icon', 'image')
```

## Asset Management

### Adding New Assets

1. Upload the asset to the appropriate folder in the project
2. Add the asset mapping to `src/utils/cloudinaryAssets.js`:

```javascript
export const imageAssets = {
  // Add your new image:
  'src/assets/images/new-image.jpg': 'voltant-energy/section/image-name',
};

export const videoAssets = {
  // Add your new video:
  'public/Videos/new-video.mp4': 'voltant-energy/videos/video-name',
};
```

3. Upload the asset to Cloudinary using the script

### Managing Cloudinary Assets

All assets are organized in Cloudinary using the following folder structure:

- `voltant-energy/logos/` - Logo files
- `voltant-energy/about/` - About section images
- `voltant-energy/charging/` - Charging section images
- `voltant-energy/waste/` - Waste management section images
- `voltant-energy/cpo/` - CPO section images
- `voltant-energy/engineering/` - Engineering works section images
- `voltant-energy/household/` - Household section images
- `voltant-energy/layout/` - Layout-related images
- `voltant-energy/clients/` - Client logos
- `voltant-energy/icons/` - Icons (with sub-folders)
- `voltant-energy/videos/` - All videos

## Advanced Features

### Image Transformations

You can apply additional transformations to images:

```jsx
<CloudinaryImage
  publicId="voltant-energy/about/about_us_section"
  transformations={[
    'c_fill,g_auto,w_800,h_600', // Crop to 800x600 with automatic gravity
    'e_sharpen:80' // Sharpen effect at 80% strength
  ]}
/>
```

### Video Optimizations

Optimize videos further with additional options:

```jsx
<CloudinaryVideo
  publicId="voltant-energy/videos/hero_section_1"
  startOffset={2} // Start 2 seconds into the video
  transformations={[
    'ac_none' // Remove audio track
  ]}
/>
```

## Troubleshooting

### Missing Assets

If an asset isn't displaying properly:

1. Check if it's correctly mapped in `cloudinaryAssets.js`
2. Verify it was uploaded to Cloudinary
3. Run the upload script again for that specific asset

### Performance Issues

If media loading is slow:

1. Check browser console for Cloudinary-related errors
2. Verify transformations are correct and not too resource-intensive
3. Make sure lazy loading is enabled for non-critical assets

## Further Reading

- [Cloudinary React SDK Documentation](https://cloudinary.com/documentation/react_integration)
- [Cloudinary Transformation Reference](https://cloudinary.com/documentation/transformation_reference)
- [Image Optimization Best Practices](https://cloudinary.com/documentation/image_optimization)
- [Video Optimization Best Practices](https://cloudinary.com/documentation/video_optimization)
