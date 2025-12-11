const fs = require('fs');
const path = require('path');

const basePath = '/FIGMAFRANCO1';
const outDir = path.join(__dirname, '..', 'out');

function fixImagePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix img tags with src attributes - must come first
  content = content.replace(
    /<img([^>]*)\ssrc=["'](\/images[^"']*)["']/g,
    (match, attrs, imgPath) => {
      // Skip if already has basePath
      if (imgPath.startsWith(basePath)) {
        return match;
      }
      return `<img${attrs} src="${basePath}${imgPath}"`;
    }
  );
  
  // Fix image src attributes in general (for other tags)
  content = content.replace(
    /src=["'](\/images[^"']*)["']/g,
    (match, imgPath) => {
      // Skip if already has basePath
      if (imgPath.startsWith(basePath)) {
        return match;
      }
      return `src="${basePath}${imgPath}"`;
    }
  );
  
  // Fix href attributes for images
  content = content.replace(
    /href=["'](\/images[^"']*)["']/g,
    (match, imgPath) => {
      // Skip if already has basePath
      if (imgPath.startsWith(basePath)) {
        return match;
      }
      return `href="${basePath}${imgPath}"`;
    }
  );
  
  // Fix background-image in style attributes
  content = content.replace(
    /background-image:\s*url\(["']?(\/images[^"')]*)["']?\)/g,
    (match, imgPath) => {
      // Skip if already has basePath
      if (imgPath.startsWith(basePath)) {
        return match;
      }
      return `background-image: url("${basePath}${imgPath}")`;
    }
  );
  
  // Only write if content changed
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      fixImagePaths(filePath);
    }
  }
}

if (fs.existsSync(outDir)) {
  console.log('Fixing image paths in HTML files...');
  processDirectory(outDir);
  console.log('✅ Image paths fixed!');
} else {
  console.error('❌ Out directory not found!');
  process.exit(1);
}
