const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

const itemsToCopy = ['index.html', 'demo.html', 'README.md', 'wireframe_design_assistant'];

for (const item of itemsToCopy) {
  const srcPath = path.join(__dirname, item);
  const destPath = path.join(dist, item);
  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
}

console.log('Build successful! Files in dist:', fs.readdirSync(dist));
