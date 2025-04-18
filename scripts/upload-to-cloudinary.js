import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { imageAssets, videoAssets } from '../src/utils/cloudinaryAssets.js';

// Load environment variables
dotenv.config();

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
  secure: true
});

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Cache object to store already checked assets
const checkedAssets = {
  uploaded: new Set(),
  notFound: new Set()
};

/**
 * Check if an asset already exists in Cloudinary
 * @param {string} publicId - The public ID to check in Cloudinary
 * @param {string} resourceType - The resource type ('image' or 'video')
 * @returns {Promise<boolean>} - Whether the asset exists
 */
async function checkAssetExists(publicId, resourceType = 'image') {
  // Check cache first
  const cacheKey = `${resourceType}:${publicId}`;
  if (checkedAssets.uploaded.has(cacheKey)) return true;
  if (checkedAssets.notFound.has(cacheKey)) return false;
  
  try {
    const result = await cloudinary.api.resource(publicId, { resource_type: resourceType });
    if (result && result.public_id) {
      checkedAssets.uploaded.add(cacheKey);
      return true;
    }
    return false;
  } catch (error) {
    // If the asset doesn't exist, Cloudinary API will return "not found" error
    if (error.error && error.error.http_code === 404) {
      checkedAssets.notFound.add(cacheKey);
      return false;
    }
    // For other errors, log and assume asset doesn't exist
    console.error(`Error checking if asset exists (${publicId}):`, error.message);
    return false;
  }
}

/**
 * Get the MD5 hash of a local file
 * @param {string} filePath - Path to the file
 * @returns {string} - MD5 hash of the file
 */
function getFileHash(filePath) {
  try {
    const crypto = require('crypto');
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('md5');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
  } catch (error) {
    console.error(`Error getting file hash for ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Upload a file to Cloudinary
 * @param {string} localPath - The local path to the file
 * @param {string} publicId - The public ID to use in Cloudinary
 * @param {string} resourceType - The resource type ('image' or 'video')
 */
async function uploadFile(localPath, publicId, resourceType = 'image') {
  try {
    const fullPath = path.join(rootDir, localPath);
    
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return null;
    }

    // Check if asset already exists in Cloudinary
    const assetExists = await checkAssetExists(publicId, resourceType);
    
    if (assetExists) {
      console.log(`✓ Asset already exists in Cloudinary: ${publicId} (${resourceType})`);
      return { public_id: publicId, existing: true };
    }

    console.log(`Uploading ${resourceType}: ${localPath} as ${publicId}`);
    
    const options = {
      resource_type: resourceType,
      public_id: publicId,
      overwrite: true,
      use_filename: false,
      unique_filename: false
    };

    // Add specific options based on resource type
    if (resourceType === 'image') {
      options.eager = [
        { quality: "auto", fetch_format: "auto" },
        { width: 800, height: 600, crop: "fill", quality: "auto", fetch_format: "auto" },
        { width: 400, height: 300, crop: "fill", quality: "auto", fetch_format: "auto" }
      ];
      options.eager_async = true;
    } else if (resourceType === 'video') {
      options.eager = [
        { format: "mp4", transformation: [{ quality: "auto" }] },
        { format: "webm", transformation: [{ quality: "auto" }] }
      ];
      options.eager_async = true;
      options.resource_type = 'video';
      options.chunk_size = 6000000; // 6MB chunks for videos
      options.timeout = 600000; // Longer timeout for video uploads (10 minutes)
    }
    
    const result = await cloudinary.uploader.upload(fullPath, options);
    console.log(`✅ Successfully uploaded: ${result.public_id}`);
    
    // Add to cache
    checkedAssets.uploaded.add(`${resourceType}:${publicId}`);
    
    return result;
  } catch (error) {
    console.error(`Failed to upload ${localPath}:`, error.message);
    return null;
  }
}

/**
 * Upload all assets from the mapping
 */
async function uploadAllAssets() {
  const results = {
    successful: [],
    skipped: [],
    failed: []
  };

  // Upload images
  console.log('------- UPLOADING IMAGES -------');
  for (const [localPath, publicId] of Object.entries(imageAssets)) {
    const result = await uploadFile(localPath, publicId, 'image');
    if (result) {
      if (result.existing) {
        results.skipped.push({ localPath, publicId, type: 'image' });
      } else {
        results.successful.push({ localPath, publicId, type: 'image' });
      }
    } else {
      results.failed.push({ localPath, publicId, type: 'image' });
    }
  }

  // Upload videos
  console.log('------- UPLOADING VIDEOS -------');
  for (const [localPath, publicId] of Object.entries(videoAssets)) {
    const result = await uploadFile(localPath, publicId, 'video');
    if (result) {
      if (result.existing) {
        results.skipped.push({ localPath, publicId, type: 'video' });
      } else {
        results.successful.push({ localPath, publicId, type: 'video' });
      }
    } else {
      results.failed.push({ localPath, publicId, type: 'video' });
    }
  }

  // Summary
  console.log('\n------- UPLOAD SUMMARY -------');
  console.log(`Total assets: ${Object.keys(imageAssets).length + Object.keys(videoAssets).length}`);
  console.log(`Successfully uploaded: ${results.successful.length}`);
  console.log(`Skipped (already uploaded): ${results.skipped.length}`);
  console.log(`Failed: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log('\nFailed uploads:');
    results.failed.forEach(({ localPath, publicId, type }) => {
      console.log(`- ${type}: ${localPath} (${publicId})`);
    });
  }

  return results;
}

/**
 * Upload a specific asset by local path
 * @param {string} localPath - The local path of the asset
 */
async function uploadSpecificAsset(localPath) {
  let publicId;
  let resourceType;

  if (imageAssets[localPath]) {
    publicId = imageAssets[localPath];
    resourceType = 'image';
  } else if (videoAssets[localPath]) {
    publicId = videoAssets[localPath];
    resourceType = 'video';
  } else {
    console.error(`No mapping found for ${localPath}`);
    return null;
  }

  return await uploadFile(localPath, publicId, resourceType);
}

/**
 * Verify all assets exist in Cloudinary
 */
async function verifyAllAssets() {
  console.log('------- VERIFYING ASSETS IN CLOUDINARY -------');
  
  const results = {
    found: [],
    notFound: []
  };

  // Verify images
  console.log('Checking images...');
  for (const [localPath, publicId] of Object.entries(imageAssets)) {
    const exists = await checkAssetExists(publicId, 'image');
    if (exists) {
      results.found.push({ localPath, publicId, type: 'image' });
    } else {
      results.notFound.push({ localPath, publicId, type: 'image' });
    }
  }

  // Verify videos
  console.log('Checking videos...');
  for (const [localPath, publicId] of Object.entries(videoAssets)) {
    const exists = await checkAssetExists(publicId, 'video');
    if (exists) {
      results.found.push({ localPath, publicId, type: 'video' });
    } else {
      results.notFound.push({ localPath, publicId, type: 'video' });
    }
  }

  // Summary
  console.log('\n------- VERIFICATION SUMMARY -------');
  console.log(`Total assets: ${Object.keys(imageAssets).length + Object.keys(videoAssets).length}`);
  console.log(`Found in Cloudinary: ${results.found.length}`);
  console.log(`Not found in Cloudinary: ${results.notFound.length}`);

  if (results.notFound.length > 0) {
    console.log('\nAssets not found in Cloudinary:');
    results.notFound.forEach(({ localPath, publicId, type }) => {
      console.log(`- ${type}: ${localPath} (${publicId})`);
    });
  }

  return results;
}

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0] && args[0].startsWith('--') ? args[0] : null;
const assetPaths = command ? args.slice(1) : args;

// Execute based on command
if (command === '--verify') {
  // Verify assets exist in Cloudinary
  console.log('Verifying all assets in Cloudinary...');
  verifyAllAssets();
} else if (assetPaths.length > 0) {
  // Upload specific asset(s)
  console.log(`Uploading specific asset(s): ${assetPaths.join(', ')}`);
  (async () => {
    for (const assetPath of assetPaths) {
      await uploadSpecificAsset(assetPath);
    }
  })();
} else {
  // Upload all assets
  console.log('Uploading all assets...');
  uploadAllAssets();
}