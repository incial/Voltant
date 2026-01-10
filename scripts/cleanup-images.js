/**
 * Image Cleanup Script
 * Removes duplicate and unnecessary image files, keeping only high-quality versions
 * 
 * Run with: node scripts/cleanup-images.js
 * 
 * For dry-run (preview only): node scripts/cleanup-images.js --dry-run
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

const isDryRun = process.argv.includes('--dry-run');

// Files to DELETE - duplicates, unused, or low-quality
const FILES_TO_DELETE = {
  // Showcase - remove duplicates
  'assets/images/showcaseimages': [
    'Image 13(1).png',  // Duplicate of Image 13.png
    'Image 18d.png',    // Duplicate/variant of Image 18.png
    'Image 26.png',     // Not used in code
    'image 27.png',     // Not used in code
  ],
  
  // EV Charging - remove duplicate/unused variants
  'assets/images/EV_charging': [
    'cpo_abou.png',     // Duplicate of cpo_abt.png
    // Keep responsive versions (-480w, -768w, -1200w, -1600w) for now
  ],
  
  // Waste to Energy - remove duplicate/similar images
  'assets/images/WateTOEnergy': [
    'Smart_Waste.png',      // Similar to SmartWaste.png
    'Smart_Waste-480w.png',
    'Smart_Waste-768w.png',
    'sw_abt.png',           // Similar to SW_about.png
    'sw_abt-480w.png',
    'sw_abt-768w.png',
    'smart_about.png',      // Similar to SW_about.png
    'smart_about-480w.png',
    'smart_about-768w.png',
  ],
  
  // Home - cleanup
  'assets/images/Home': [
    'About_section_sub_logo.png', // Duplicate of sub_logo.png
    'Connect.png',                // Not used (ConnecwithusBg.png is used)
  ],
};

// Images to KEEP (high quality, actively used)
const ESSENTIAL_IMAGES = {
  'assets/images/EV_charging': [
    'AC_about.png',
    'Ac_charger.png', 
    'AC_charger1.png',
    'AC_charger_image.png',
    'charger.png',
    'Cpo.png',
    'Cpo1.png',
    'CPO_about.png',
    'cpo_abt.png',
    'DC_about.png',
    'Dc_charger.png',
    'Dc_charger1.png',
    'DC_charger_image.png',
    'DC_fast.png',
    'DC_new.png',
    'Engineering_works.png',
    'Ev_charging.png',
    'Ev_main.png',
    'EV_main1.png',
    'EW_about.png',
    'More.png',
    'More_about.png',
    'wallbox.png',
  ],
  
  'assets/images/WateTOEnergy': [
    'bins.png',
    'biogas.png',
    'container.png',
    'Containerized_Plant.png',
    'CP_about.png',
    'Household.png',
    'HS_about.png',
    'Large_Scale_plant.png',
    'LS_about.png',
    'main.png',
    'smartbin.png',
    'SmartWaste.png',
    'SW_about.png',
    'smart_end.png',
  ],
  
  'assets/images/showcaseimages': [
    'Image 13.png',
    'Image 14.png',
    'Image 15.png',
    'Image 16.png',
    'Image 17.png',
    'Image 18.png',
    'Image 19.png',
    'Image 20.png',
    'Image 21.png',
    'Image 22.png',
    'Image 23.png',
    'Image 24.png',
  ],
  
  'assets/images/Home': [
    'About_Banner.png',
    'About_us.png',
    'Biogas.png',
    'ConnecwithusBg.png',
    'Descpition.png',
    'Footer.png',
    'large_scale_plant.png',
    'Logo.png',
    'logo1.png',
    'Logo_icon.png',
    'Logo_white.png',
    'sub_logo.png',
  ],
  
  'assets/icons': [
    'battery.png',
    'comet.png',
    'crop.png',
    'folder.png',
    'leaf.png',
    'like.png',
    'multi.png',
    'Power.png',
    'Scale.png',
    'Scale_money.png',
    'sheild.png',
    'star.png',
    'stat.png',
    'sun.png',
    'TIme.png',
    'water.png',
    'waterpure.png',
  ],
};

// Stats
let deletedCount = 0;
let savedBytes = 0;

function deleteFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  const stats = fs.statSync(filePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  
  if (isDryRun) {
    console.log(`[DRY-RUN] Would delete: ${filePath} (${sizeKB} KB)`);
  } else {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath} (${sizeKB} KB)`);
  }
  
  deletedCount++;
  savedBytes += stats.size;
}

function cleanupDirectory(relDir, filesToDelete) {
  const dir = path.join(publicDir, relDir);
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return;
  }
  
  for (const file of filesToDelete) {
    const filePath = path.join(dir, file);
    deleteFile(filePath);
  }
}

function removeUnusedResponsiveImages() {
  console.log('\n--- Checking for responsive images that can be removed ---\n');
  
  // For now, keep all responsive versions as they're used for srcset
  // Only remove if we decide to use a single high-quality image
  
  // Example: Remove 480w versions if we only need 768w and above
  // This is optional - uncomment if needed
  /*
  const dirs = [
    'assets/images/EV_charging',
    'assets/images/WateTOEnergy',
  ];
  
  for (const relDir of dirs) {
    const dir = path.join(publicDir, relDir);
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      // Remove 480w versions (smallest, often not needed on modern screens)
      if (file.includes('-480w.')) {
        deleteFile(path.join(dir, file));
      }
    }
  }
  */
}

async function main() {
  console.log('='.repeat(60));
  console.log('Image Cleanup Script');
  console.log(isDryRun ? 'MODE: DRY-RUN (no files will be deleted)' : 'MODE: LIVE');
  console.log('='.repeat(60));
  console.log('');
  
  // Delete explicitly marked files
  console.log('--- Deleting duplicate/unused files ---\n');
  for (const [dir, files] of Object.entries(FILES_TO_DELETE)) {
    cleanupDirectory(dir, files);
  }
  
  // Remove unused responsive images (optional)
  removeUnusedResponsiveImages();
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Files ${isDryRun ? 'to delete' : 'deleted'}: ${deletedCount}`);
  console.log(`Space ${isDryRun ? 'to save' : 'saved'}: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
  
  if (isDryRun) {
    console.log('\nRun without --dry-run to actually delete files.');
  }
}

main().catch(console.error);
