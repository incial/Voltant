import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../public/assets/images');

async function ensureJpgFallback(webpPath) {
  const jpgPath = webpPath.replace(/\.webp$/i, '.jpg');
  try {
    await fs.promises.access(jpgPath, fs.constants.F_OK);
    return; // already exists
  } catch (err) {
    // continue to create fallback
  }

  await sharp(webpPath)
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(jpgPath);

  const rel = path.relative(SOURCE_DIR, jpgPath);
  console.log(`Created JPEG fallback: ${rel}`);
}

async function traverse(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await traverse(fullPath);
    } else if (/\.webp$/i.test(entry.name)) {
      await ensureJpgFallback(fullPath);
    }
  }
}

async function main() {
  console.log('Generating JPEG fallbacks for WebP assets...');
  await traverse(SOURCE_DIR);
  console.log('Done creating JPEG fallbacks.');
}

main().catch((err) => {
  console.error('Failed to create JPEG fallbacks:', err);
  process.exit(1);
});
