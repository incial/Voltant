/**
 * Image Optimization Script
 * Generates WebP versions and responsive sizes for all images
 * 
 * Usage: node scripts/optimize-images.js
 * 
 * This script:
 * 1. Creates WebP versions of all PNG/JPG images
 * 2. Generates responsive sizes (480w, 768w, 1200w, 1600w)
 * 3. Compresses images for faster loading on mobile devices
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../public/assets/images'),
  outputFormats: ['webp', 'png'], // Output both WebP and optimized PNG
  responsiveSizes: [480, 768, 1200, 1600, 1920],
  quality: {
    webp: 80,
    png: 85,
    jpeg: 85,
  },
  // Skip files that already have responsive suffixes
  skipPattern: /-\d+w\.(png|jpg|jpeg|webp)$/i,
  // Only process these extensions
  validExtensions: ['.png', '.jpg', '.jpeg'],
  // Minimum size to generate responsive versions
  minSizeForResponsive: 600,
  // Skip already processed files
  skipExisting: true,
};

// Statistics
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  webpCreated: 0,
  responsiveCreated: 0,
  totalSaved: 0,
};

/**
 * Get all image files recursively
 */
function getImageFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getImageFiles(fullPath, files);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      
      if (CONFIG.validExtensions.includes(ext) && !CONFIG.skipPattern.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Check if output file exists and is newer than source
 */
function shouldSkipFile(srcPath, destPath) {
  if (!CONFIG.skipExisting) return false;
  if (!fs.existsSync(destPath)) return false;
  
  const srcStat = fs.statSync(srcPath);
  const destStat = fs.statSync(destPath);
  
  return destStat.mtime >= srcStat.mtime;
}

/**
 * Process a single image file
 */
async function processImage(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  
  console.log(`\nProcessing: ${path.relative(CONFIG.inputDir, filePath)}`);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;
    const originalSize = fs.statSync(filePath).size;
    
    console.log(`  Original: ${originalWidth}x${originalHeight}, ${(originalSize / 1024).toFixed(1)}KB`);
    
    // Generate WebP version of original
    const webpPath = path.join(dir, `${baseName}.webp`);
    if (!shouldSkipFile(filePath, webpPath)) {
      await sharp(filePath)
        .webp({ quality: CONFIG.quality.webp })
        .toFile(webpPath);
      
      const webpSize = fs.statSync(webpPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      console.log(`  Created WebP: ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
      stats.webpCreated++;
      stats.totalSaved += (originalSize - webpSize);
    } else {
      console.log(`  Skipped WebP (up to date)`);
    }
    
    // Generate responsive sizes
    if (originalWidth >= CONFIG.minSizeForResponsive) {
      for (const width of CONFIG.responsiveSizes) {
        if (width >= originalWidth) continue; // Skip sizes larger than original
        
        const height = Math.round((width / originalWidth) * originalHeight);
        
        // Generate PNG responsive version
        const pngPath = path.join(dir, `${baseName}-${width}w${ext}`);
        if (!shouldSkipFile(filePath, pngPath)) {
          const resizedImage = sharp(filePath)
            .resize(width, height, { fit: 'inside', withoutEnlargement: true });
          
          if (ext === '.png') {
            await resizedImage
              .png({ quality: CONFIG.quality.png, compressionLevel: 9 })
              .toFile(pngPath);
          } else {
            await resizedImage
              .jpeg({ quality: CONFIG.quality.jpeg, progressive: true })
              .toFile(pngPath);
          }
          
          const pngSize = fs.statSync(pngPath).size;
          console.log(`  Created ${width}w PNG: ${(pngSize / 1024).toFixed(1)}KB`);
          stats.responsiveCreated++;
        }
        
        // Generate WebP responsive version
        const webpResponsivePath = path.join(dir, `${baseName}-${width}w.webp`);
        if (!shouldSkipFile(filePath, webpResponsivePath)) {
          await sharp(filePath)
            .resize(width, height, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: CONFIG.quality.webp })
            .toFile(webpResponsivePath);
          
          const webpRespSize = fs.statSync(webpResponsivePath).size;
          console.log(`  Created ${width}w WebP: ${(webpRespSize / 1024).toFixed(1)}KB`);
          stats.responsiveCreated++;
        }
      }
    }
    
    // Optimize original PNG/JPG (in-place compression)
    const optimizedPath = path.join(dir, `${baseName}-optimized${ext}`);
    if (!shouldSkipFile(filePath, optimizedPath)) {
      if (ext === '.png') {
        await sharp(filePath)
          .png({ quality: CONFIG.quality.png, compressionLevel: 9 })
          .toFile(optimizedPath);
      } else {
        await sharp(filePath)
          .jpeg({ quality: CONFIG.quality.jpeg, progressive: true, mozjpeg: true })
          .toFile(optimizedPath);
      }
      
      const optimizedSize = fs.statSync(optimizedPath).size;
      
      // Replace original only if optimized is smaller
      if (optimizedSize < originalSize) {
        fs.unlinkSync(filePath);
        fs.renameSync(optimizedPath, filePath);
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        console.log(`  Optimized original: ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
        stats.totalSaved += (originalSize - optimizedSize);
      } else {
        fs.unlinkSync(optimizedPath);
        console.log(`  Original already optimal`);
      }
    }
    
    stats.processed++;
  } catch (error) {
    console.error(`  Error: ${error.message}`);
    stats.errors++;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('='.repeat(60));
  console.log('Image Optimization Script');
  console.log('='.repeat(60));
  console.log(`\nInput directory: ${CONFIG.inputDir}`);
  console.log(`Responsive sizes: ${CONFIG.responsiveSizes.join(', ')}px`);
  console.log(`Quality: WebP ${CONFIG.quality.webp}%, PNG ${CONFIG.quality.png}%`);
  
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`\nError: Input directory not found: ${CONFIG.inputDir}`);
    process.exit(1);
  }
  
  const files = getImageFiles(CONFIG.inputDir);
  console.log(`\nFound ${files.length} images to process\n`);
  
  for (const file of files) {
    await processImage(file);
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  console.log(`Processed: ${stats.processed}`);
  console.log(`WebP created: ${stats.webpCreated}`);
  console.log(`Responsive versions created: ${stats.responsiveCreated}`);
  console.log(`Errors: ${stats.errors}`);
  console.log(`Total space saved: ${(stats.totalSaved / 1024 / 1024).toFixed(2)}MB`);
  console.log('='.repeat(60));
}

main().catch(console.error);
