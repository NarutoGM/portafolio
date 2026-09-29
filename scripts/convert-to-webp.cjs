const sharp = require('C:\\Users\\Pantoja\\Documents\\portafolio\\node_modules\\.pnpm\\sharp@0.35.5_@types+node@20.19.43\\node_modules\\sharp');
const { readdirSync, statSync, unlinkSync, existsSync } = require('fs');
const { join, extname, basename } = require('path');

const TARGET_DIR = join(__dirname, '..', 'public', 'img');
const SUPPORTED = ['.png', '.jpg', '.jpeg'];

async function convertToWebP(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!SUPPORTED.includes(ext)) return;

  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  try {
    await sharp(filePath)
      .webp({ quality: 90 })
      .toFile(webpPath);

    const original = statSync(filePath).size;
    const converted = statSync(webpPath).size;
    const saved = (((original - converted) / original) * 100).toFixed(1);

    console.log(`OK: ${basename(filePath)} -> ${basename(webpPath)} (${(original / 1024).toFixed(0)}KB -> ${(converted / 1024).toFixed(0)}KB, -${saved}%)`);

    unlinkSync(filePath);
  } catch (err) {
    console.error(`ERROR: ${filePath}: ${err.message}`);
  }
}

async function walkDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      await walkDir(fullPath);
    } else {
      const ext = extname(fullPath).toLowerCase();
      if (SUPPORTED.includes(ext)) {
        const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        if (existsSync(webpPath)) {
          console.log(`SKIP: ${basename(webpPath)} ya existe, eliminando ${basename(fullPath)}`);
          unlinkSync(fullPath);
        } else {
          await convertToWebP(fullPath);
        }
      }
    }
  }
}

console.log('Iniciando conversion a WebP...\n');
walkDir(TARGET_DIR).then(() => {
  console.log('\nConversion completada!');
}).catch(err => {
  console.error('Error:', err);
});
