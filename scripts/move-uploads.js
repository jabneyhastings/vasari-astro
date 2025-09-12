import fs from "fs";
import path from "path";

const publicUploads = path.resolve("public/uploads");
const assetUploads = path.resolve("src/assets/uploads");

// Ensure the target exists
fs.mkdirSync(assetUploads, { recursive: true });

// Copy everything from public/uploads → src/assets/uploads
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.readdirSync(src).forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyRecursive(publicUploads, assetUploads);

console.log("✅ Copied uploads into src/assets/uploads for Astro Image");
