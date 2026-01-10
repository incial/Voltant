import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT_DIRS = [
  path.resolve('public/assets'),
  path.resolve('public/images')
];

const ensureDirExists = async (dirPath) => {
  try {
    const stats = await fs.stat(dirPath);
    if (!stats.isDirectory()) return false;
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
};

const convertWebpFile = async (filePath) => {
  const pngPath = filePath.replace(/\.webp$/i, '.png');
  try {
    await fs.access(pngPath);
    console.log(`Skipping existing PNG -> ${path.relative(process.cwd(), pngPath)}`);
    return;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  try {
    await sharp(filePath).png({ quality: 90, compressionLevel: 9 }).toFile(pngPath);
    console.log(`Converted ${path.relative(process.cwd(), filePath)} -> ${path.relative(process.cwd(), pngPath)}`);
  } catch (error) {
    console.error(`Failed to convert ${filePath}:`, error.message);
  }
};

const traverseAndConvert = async (dirPath) => {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      await traverseAndConvert(entryPath);
    } else if (/\.webp$/i.test(entry.name)) {
      await convertWebpFile(entryPath);
    }
  }
};

const run = async () => {
  for (const rootDir of ROOT_DIRS) {
    const exists = await ensureDirExists(rootDir);
    if (!exists) {
      console.warn(`Directory not found, skipping: ${rootDir}`);
      continue;
    }
    console.log(`Processing ${rootDir}`);
    await traverseAndConvert(rootDir);
  }
};

run().catch((error) => {
  console.error('Conversion failed:', error);
  process.exitCode = 1;
});
