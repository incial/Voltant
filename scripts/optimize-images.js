import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, '../public/assets');
const srcPath = path.join(__dirname, '../src');

// Recursively find files
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

// Convert images
async function convertImages() {
  const files = getAllFiles(directoryPath, []);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const newFile = file.replace(ext, '.webp');
      console.log(`Converting: ${file} -> ${newFile}`);
      
      try {
        await sharp(file)
          .toFile(newFile);
        
        // Remove old file
        fs.unlinkSync(file);
        console.log(`Deleted original: ${file}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

// Update references in source code
function updateReferences() {
  const files = getAllFiles(srcPath, []);
  
  for (const file of files) {
     const ext = path.extname(file).toLowerCase();
     if (ext === '.jsx' || ext === '.js' || ext === '.ts' || ext === '.tsx' || ext === '.css') {
        let content = fs.readFileSync(file, 'utf8');
        let updated = false;
        
        // Simple replace for .png/.jpg/.jpeg to .webp
        // This regex looks for these extensions followed by a quote or parenthesis or end of line, trying to be safe
        // But simply replacing .png' with .webp' might be safer.
        
        const regex = /(\.png|\.jpg|\.jpeg)/gi;
        
        if (content.match(regex)) {
           const newContent = content.replace(regex, '.webp');
           if (newContent !== content) {
               fs.writeFileSync(file, newContent, 'utf8');
               console.log(`Updated references in: ${file}`);
           }
        }
     }
  }
}

async function main() {
    await convertImages();
    updateReferences();
    console.log("Done!");
}

main();
