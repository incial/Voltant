import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const heroImagesPath = path.join(__dirname, '../public/assets/images/Home/Hero');

async function optimizeHeroImages() {
  console.log('Starting hero image optimization...\n');
  
  const images = ['hero1.webp', 'hero2.webp', 'hero3.webp'];
  
  for (const imageName of images) {
    const inputPath = path.join(heroImagesPath, imageName);
    const baseName = path.parse(imageName).name;
    
    // Check if file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${imageName} - file not found`);
      continue;
    }
    
    const originalSize = fs.statSync(inputPath).size;
    console.log(`Processing ${imageName} (${(originalSize / 1024).toFixed(2)} KB)`);
    
    try {
      // Optimize WebP with better compression
      const webpOptimizedPath = path.join(heroImagesPath, `${baseName}-optimized.webp`);
      await sharp(inputPath)
        .resize(1920, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: 80,
          effort: 6
        })
        .toFile(webpOptimizedPath);
      
      const optimizedSize = fs.statSync(webpOptimizedPath).size;
      console.log(`  ✓ WebP optimized: ${(optimizedSize / 1024).toFixed(2)} KB (${((1 - optimizedSize/originalSize) * 100).toFixed(1)}% reduction)`);
      
      // Create JPEG fallback for iOS compatibility
      const jpgPath = path.join(heroImagesPath, `${baseName}.jpg`);
      await sharp(inputPath)
        .resize(1920, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(jpgPath);
      
      const jpgSize = fs.statSync(jpgPath).size;
      console.log(`  ✓ JPEG fallback created: ${(jpgSize / 1024).toFixed(2)} KB`);
      
      // Create mobile-optimized versions
      const mobileWebpPath = path.join(heroImagesPath, `${baseName}-mobile.webp`);
      await sharp(inputPath)
        .resize(768, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: 75,
          effort: 6
        })
        .toFile(mobileWebpPath);
      
      const mobileSize = fs.statSync(mobileWebpPath).size;
      console.log(`  ✓ Mobile WebP created: ${(mobileSize / 1024).toFixed(2)} KB`);
      
      // Create mobile JPEG fallback
      const mobileJpgPath = path.join(heroImagesPath, `${baseName}-mobile.jpg`);
      await sharp(inputPath)
        .resize(768, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: 80,
          progressive: true,
          mozjpeg: true
        })
        .toFile(mobileJpgPath);
      
      const mobileJpgSize = fs.statSync(mobileJpgPath).size;
      console.log(`  ✓ Mobile JPEG created: ${(mobileJpgSize / 1024).toFixed(2)} KB`);
      
      // Replace original WebP with optimized version
      fs.unlinkSync(inputPath);
      fs.renameSync(webpOptimizedPath, inputPath);
      console.log(`  ✓ Replaced original with optimized version\n`);
      
    } catch (err) {
      console.error(`  ✗ Error processing ${imageName}:`, err.message);
    }
  }
  
  console.log('✅ Hero image optimization complete!');
}

optimizeHeroImages().catch(console.error);
