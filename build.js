const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true, force: true });
}
fs.mkdirSync(publicDir, { recursive: true });

const itemsToCopy = ['index.html', 'demo.html', 'README.md', 'wireframe_design_assistant'];

for (const item of itemsToCopy) {
  const srcPath = path.join(__dirname, item);
  const destPath = path.join(publicDir, item);
  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
}

console.log('Build successful! Files in public:', fs.readdirSync(publicDir));
