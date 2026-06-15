import fs from 'fs';

const content = fs.readFileSync('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/line_pixels.txt', 'utf8');
const lines = content.split('\n');

const hLines = lines.filter(l => l.startsWith('x='));
const vLines = lines.filter(l => l.startsWith('y='));

console.log("--- HORIZONTAL TRANSITIONS (Y=367) ---");
console.log("Start transitions:");
let lastColor = "";
for (let i = 0; i < 150; i++) {
  const parts = hLines[i].split(': ');
  const x = parts[0];
  const color = parts[1];
  if (color !== lastColor) {
    console.log(`${x}: ${color}`);
    lastColor = color;
  }
}

console.log("\nEnd transitions:");
lastColor = "";
for (let i = hLines.length - 150; i < hLines.length; i++) {
  const parts = hLines[i].split(': ');
  const x = parts[0];
  const color = parts[1];
  if (color !== lastColor) {
    console.log(`${x}: ${color}`);
    lastColor = color;
  }
}

console.log("\n--- VERTICAL TRANSITIONS (X=649) ---");
console.log("Start transitions:");
lastColor = "";
for (let i = 0; i < 150; i++) {
  const parts = vLines[i].split(': ');
  const y = parts[0];
  const color = parts[1];
  if (color !== lastColor) {
    console.log(`${y}: ${color}`);
    lastColor = color;
  }
}

console.log("\nEnd transitions:");
lastColor = "";
for (let i = vLines.length - 150; i < vLines.length; i++) {
  const parts = vLines[i].split(': ');
  const y = parts[0];
  const color = parts[1];
  if (color !== lastColor) {
    console.log(`${y}: ${color}`);
    lastColor = color;
  }
}
