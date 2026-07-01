const fs = require('fs');
const path = require('path');

const replacements = {
  '#051424': 'var(--bg-canvas)',
  '#0b1326': 'var(--bg-canvas)',
  '#0d1c2d': 'var(--bg-surface)',
  '#131b2e': 'var(--bg-surface)',
  '#d5e4fa': 'var(--text-primary)',
  '#d4e4fa': 'var(--text-primary)',
  '#c7c5d0': 'var(--text-secondary)',
  '#c7c4d7': 'var(--text-secondary)',
  '#dae2fd': 'var(--text-primary)',
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'app'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    for (const [hex, cssVar] of Object.entries(replacements)) {
      // Replace both case-sensitive and case-insensitive
      const regex = new RegExp(hex, 'gi');
      content = content.replace(regex, cssVar);
    }
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
