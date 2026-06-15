const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/app/components/Hero.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('tối') || line.includes('tô') || line.includes('thiê') || line.includes('vấn') || line.includes('vâ') || line.includes('yêu')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
    // Print hex codes of characters in the line
    const hex = Array.from(line.trim()).map(c => {
      const code = c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
      return `${c} (U+${code})`;
    }).join(' | ');
    console.log(`Hex: ${hex}\n`);
  }
});
