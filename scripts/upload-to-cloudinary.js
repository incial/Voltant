import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import process from 'process';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Define asset directories
const ASSET_DIRS = [
  { path: path.join(__dirname, '../src/assets/images'), folder: 'voltant-energy/images' },
  { path: path.join(__dirname, '../src/assets/icons'), folder: 'voltant-energy/icons' },
  { path: path.join(__dirname, '../public/Videos'), folder: 'voltant-energy/videos' }
];

// Function to recursively get all files in a directory with their relative paths
function getAllFiles(dirPath, baseDir, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, baseDir, arrayOfFiles);
    } else {
      // Store the full path and the path relative to the base directory
      arrayOfFiles.push({
        fullPath,
        relativePath: path.relative(baseDir, fullPath)
      });
    }
  });

  return arrayOfFiles;
}

// Function to upload a file to Cloudinary
async function uploadToCloudinary(fileInfo, baseFolder) {
  const { fullPath, relativePath } = fileInfo;
  
  // Create a public ID that preserves the folder structure
  // Remove the file extension for the public ID
  const relativePathWithoutExt = relativePath.replace(path.extname(relativePath), '');
  const publicId = `${baseFolder}/${relativePathWithoutExt}`.replace(/\\/g, '/');
  
  try {
    console.log(`Uploading ${fullPath} to Cloudinary...`);
    
    // Determine resource type
    const ext = path.extname(fullPath).toLowerCase();
    let resourceType = 'image';
    
    if (['.mp4', '.webm', '.mov'].includes(ext)) {
      resourceType = 'video';
    } else if (ext === '.svg') {
      // Special handling for SVGs
      resourceType = 'raw';
    }
    
    const result = await cloudinary.uploader.upload(fullPath, {
      public_id: publicId,
      resource_type: resourceType,
      overwrite: true,
      use_filename: false,
      unique_filename: false
    });
    
    console.log(`✅ Uploaded ${fullPath} to Cloudinary as ${result.public_id}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to upload ${fullPath}: ${error.message}`);
    return null;
  }
}

// Function to create a mapping between local paths and Cloudinary paths
function generateMappingFile(uploadResults, outputPath) {
  const mapping = {};
  
  uploadResults.forEach(result => {
    if (result && result.original_filename && result.public_id) {
      mapping[result.original_filename] = {
        public_id: result.public_id,
        url: result.secure_url,
        resource_type: result.resource_type
      };
    }
  });
  
  fs.writeFileSync(
    outputPath,
    `// Generated on ${new Date().toISOString()}\n` +
    `// This file maps local file names to Cloudinary public IDs\n` +
    `export const cloudinaryAssets = ${JSON.stringify(mapping, null, 2)};`
  );
  
  console.log(`Asset mapping saved to ${outputPath}`);
}

// Main function to upload all assets
async function uploadAllAssets() {
  console.log('Starting upload of all assets to Cloudinary...');
  const allResults = [];
  
  for (const dir of ASSET_DIRS) {
    console.log(`Processing directory: ${dir.path}`);
    
    try {
      // Get all files with their relative paths
      const baseDir = dir.path;
      const files = getAllFiles(baseDir, baseDir);
      console.log(`Found ${files.length} files in ${dir.path}`);
      
      for (const fileInfo of files) {
        // Skip files that aren't media
        const ext = path.extname(fileInfo.fullPath).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.gif', '.svg', '.mp4', '.webm', '.mov'].includes(ext)) {
          console.log(`Skipping non-media file: ${fileInfo.fullPath}`);
          continue;
        }
        
        const result = await uploadToCloudinary(fileInfo, dir.folder);
        if (result) {
          allResults.push(result);
        }
      }
    } catch (error) {
      console.error(`Error processing directory ${dir.path}: ${error.message}`);
    }
  }
  
  // Generate a mapping file for easy reference in the app
  generateMappingFile(allResults, path.join(__dirname, '../src/utils/cloudinaryAssets.js'));
  
  console.log('Upload process completed!');
}

// Run the upload function
uploadAllAssets()
  .then(() => console.log('All done!'))
  .catch(err => console.error('Error in main process:', err));