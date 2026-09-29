import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync, existsSync } from 'fs';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
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

    console.log(`✅ ${basename(filePath)} → ${basename(webpPath)} (${(original/1024).toFixed(0)}KB → ${(converted/1024).toFixed(0)}KB, -${saved}%)`);

    // Eliminar original
    unlinkSync(filePath);
  } catch (err) {
    console.error(`❌ Error al convertir ${filePath}:`, err.message);
  }
}

function walkDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else {
      const ext = extname(fullPath).toLowerCase();
      if (SUPPORTED.includes(ext)) {
        // Si ya existe la versión webp, solo borrar el original
        const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        if (existsSync(webpPath)) {
          console.log(`⚠️  Ya existe ${basename(webpPath)}, eliminando original ${basename(fullPath)}`);
          unlinkSync(fullPath);
        } else {
          convertToWebP(fullPath);
        }
      }
    }
  }
}

console.log('🚀 Iniciando conversión a WebP...\n');
walkDir(TARGET_DIR);
console.log('\n✨ Conversión completada!');
