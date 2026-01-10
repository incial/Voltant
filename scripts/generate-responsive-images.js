/**
 * Responsive Image Generator
 * 
 * Creates optimized WebP images at multiple breakpoints:
 * - 480w (mobile)
 * - 768w (tablet)
 * - 1200w (desktop)
 * - 1920w (large desktop, hero only)
 * 
 * Usage: node scripts/generate-responsive-images.js
 * Requires: npm install sharp
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const HERO_BREAKPOINTS = [
  { width: 480, suffix: '-480w', quality: 80 },
  { width: 768, suffix: '-768w', quality: 80 },
  { width: 1200, suffix: '-1200w', quality: 82 },
  { width: 1920, suffix: '-1920w', quality: 85 }
];

const SECTION_BREAKPOINTS = [
  { width: 480, suffix: '-480w', quality: 75 },
  { width: 768, suffix: '-768w', quality: 78 },
  { width: 1200, suffix: '-1200w', quality: 80 }
];

const CARD_BREAKPOINTS = [
  { width: 320, suffix: '-320w', quality: 70 },
  { width: 480, suffix: '-480w', quality: 75 }
];

// Size targets in KB
const SIZE_TARGETS = {
  hero: 300,
  section: 150,
  card: 60
};

// Source directories
const HERO_SOURCE = path.join(__dirname, '../public/assets/images/Home/Hero');
const OUTPUT_DIR = path.join(__dirname, '../public/images');

// Ensure output directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created: ${dir}`);
  }
}

// Get file size in KB
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

// Process a single image
async function processImage(inputPath, outputPath, width, quality, maxSizeKB) {
  let currentQuality = quality;
  let outputBuffer;
  let attempts = 0;
  const maxAttempts = 5;

  // Get original dimensions
  const metadata = await sharp(inputPath).metadata();
  const aspectRatio = metadata.height / metadata.width;
  const targetHeight = Math.round(width * aspectRatio);

  while (attempts < maxAttempts) {
    outputBuffer = await sharp(inputPath)
      .resize(width, targetHeight, {
        fit: 'cover',
        withoutEnlargement: true
      })
      .webp({ quality: currentQuality, effort: 6 })
      .toBuffer();

    const sizeKB = outputBuffer.length / 1024;
    
    if (sizeKB <= maxSizeKB || currentQuality <= 50) {
      break;
    }
    
    currentQuality -= 10;
    attempts++;
  }

  await fs.promises.writeFile(outputPath, outputBuffer);
  return {
    path: outputPath,
    size: (outputBuffer.length / 1024).toFixed(2),
    width,
    height: targetHeight,
    quality: currentQuality
  };
}

// Process hero images
async function processHeroImages() {
  console.log('\n🎯 Processing Hero Images...\n');
  
  const heroDir = path.join(OUTPUT_DIR, 'hero');
  ensureDir(heroDir);

  const sourceFiles = fs.readdirSync(HERO_SOURCE)
    .filter(f => f.endsWith('.jpg') && !f.includes('-mobile'));

  for (const file of sourceFiles) {
    const baseName = path.basename(file, '.jpg');
    const inputPath = path.join(HERO_SOURCE, file);
    
    console.log(`\n📷 ${file}:`);
    
    for (const bp of HERO_BREAKPOINTS) {
      const outputPath = path.join(heroDir, `${baseName}${bp.suffix}.webp`);
      const result = await processImage(
        inputPath,
        outputPath,
        bp.width,
        bp.quality,
        SIZE_TARGETS.hero
      );
      console.log(`   ✅ ${bp.width}w: ${result.size}KB (${result.width}x${result.height})`);
    }
  }
}

// Generate JPEG fallbacks for Safari
async function generateJPEGFallbacks() {
  console.log('\n🔄 Generating JPEG Fallbacks for Safari...\n');
  
  const heroDir = path.join(OUTPUT_DIR, 'hero');
  const sourceFiles = fs.readdirSync(HERO_SOURCE)
    .filter(f => f.endsWith('.jpg') && !f.includes('-mobile'));

  for (const file of sourceFiles) {
    const baseName = path.basename(file, '.jpg');
    const inputPath = path.join(HERO_SOURCE, file);
    
    // Only create 1200w JPEG fallback
    const outputPath = path.join(heroDir, `${baseName}-1200w.jpg`);
    
    const metadata = await sharp(inputPath).metadata();
    const aspectRatio = metadata.height / metadata.width;
    const targetHeight = Math.round(1200 * aspectRatio);
    
    await sharp(inputPath)
      .resize(1200, targetHeight, { fit: 'cover', withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);
    
    console.log(`   ✅ ${baseName}-1200w.jpg: ${getFileSizeKB(outputPath)}KB`);
  }
}

// Main execution
async function main() {
  console.log('🚀 Responsive Image Generator');
  console.log('================================\n');
  
  ensureDir(OUTPUT_DIR);
  
  try {
    await processHeroImages();
    await generateJPEGFallbacks();
    
    console.log('\n✨ Image generation complete!');
    console.log('\n📋 Generated files in /public/images/hero/');
    
    // List generated files
    const heroDir = path.join(OUTPUT_DIR, 'hero');
    const files = fs.readdirSync(heroDir).sort();
    console.log('\n📁 Files:');
    for (const file of files) {
      const size = getFileSizeKB(path.join(heroDir, file));
      console.log(`   ${file} (${size}KB)`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
