const fs = require('fs');
const path = require('path');

const basePath = '/FIGMAFRANCO1';
const outDir = path.join(__dirname, '..', 'out');

function fixImagePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix image src attributes that start with /images
  content = content.replace(
    /src="(\/images[^"]*)"/g,
    `src="${basePath}$1"`
  );
  
  // Fix href attributes for images
  content = content.replace(
    /href="(\/images[^"]*)"/g,
    `href="${basePath}$1"`
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
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

