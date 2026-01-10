import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_ROOT = path.join(__dirname, '../public/assets/images');
const TARGET_CONFIG = [
  {
    label: 'EV Charging',
    directory: path.join(SOURCE_ROOT, 'EV_charging'),
    widths: [480, 768, 1200, 1600],
    quality: 70
  },
  {
    label: 'Waste To Energy',
    directory: path.join(SOURCE_ROOT, 'WateTOEnergy'),
    widths: [480, 768, 1200, 1600],
    quality: 70
  }
];

const VARIANT_SUFFIX_PATTERN = /-\d+w\.webp$/i;

async function ensureVariant(filePath, width, quality) {
  const directory = path.dirname(filePath);
  const baseName = path.basename(filePath, '.webp');
  const targetName = `${baseName}-${width}w.webp`;
  const targetPath = path.join(directory, targetName);

  try {
    await fs.access(targetPath);
    return null; // already exists
  } catch (err) {
    // continue to create variant
  }

  const image = sharp(filePath);
  const metadata = await image.metadata();

  if (metadata.width && metadata.width <= width) {
    return null; // avoid upscaling small sources
  }

  await image
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(targetPath);

  const stats = await fs.stat(targetPath);
  return {
    path: targetPath,
    sizeKb: Math.round(stats.size / 102.4) / 10,
    width
  };
}

async function processDirectory(directory, widths, quality) {
  const created = [];
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      const nested = await processDirectory(fullPath, widths, quality);
      created.push(...nested);
      continue;
    }

    if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.webp')) continue;
    if (VARIANT_SUFFIX_PATTERN.test(entry.name)) continue;

    for (const width of widths) {
      const variant = await ensureVariant(fullPath, width, quality);
      if (variant) created.push(variant);
    }
  }

  return created;
}

async function main() {
  console.log('Generating responsive WebP variants...');
  for (const config of TARGET_CONFIG) {
    console.log(`-> ${config.label}`);
    const results = await processDirectory(config.directory, config.widths, config.quality);
    if (!results.length) {
      console.log('  No new variants required.');
      continue;
    }

    results
      .sort((a, b) => a.width - b.width)
      .forEach((variant) => {
        const rel = path.relative(SOURCE_ROOT, variant.path);
        console.log(`  ${rel} [${variant.width}w] ~${variant.sizeKb} KB`);
      });
  }
  console.log('Responsive generation complete.');
}

main().catch((error) => {
  console.error('Failed to generate responsive variants:', error);
  process.exit(1);
});
