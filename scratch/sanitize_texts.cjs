const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      // Exclude node_modules, dist, etc.
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('dist')) {
        results = results.concat(walk(file));
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
      results.push(file);
    }
  });
  return results;
}

const srcDir = path.resolve(__dirname, '../src');
const files = walk(srcDir);

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Normalize to NFC (composed)
  const normalized = content.normalize('NFC');
  
  // Replace non-breaking spaces U+00A0 with standard space U+0020
  // in normal text but NOT in HTML entities like &nbsp;
  const cleaned = normalized.replace(/\u00a0/g, ' ');
  
  if (content !== cleaned) {
    fs.writeFileSync(file, cleaned, 'utf8');
    console.log(`Sanitized: ${path.relative(srcDir, file)}`);
  }
});
console.log('Sanitization complete!');
