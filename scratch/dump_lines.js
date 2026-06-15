import { Jimp } from 'jimp';
import fs from 'fs';

async function dumpLines() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  const midX = Math.floor(image.width / 2);
  const midY = Math.floor(image.height / 2);
  
  let output = `Image size: ${image.width}x${image.height}\n\n`;
  
  output += `--- Horizontal Line at Y = ${midY} ---\n`;
  for (let x = 0; x < image.width; x++) {
    const pixel = image.getPixelColor(x, midY);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    output += `x=${x}: #${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}\n`;
  }
  
  output += `\n--- Vertical Line at X = ${midX} ---\n`;
  for (let y = 0; y < image.height; y++) {
    const pixel = image.getPixelColor(midX, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    output += `y=${y}: #${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}\n`;
  }
  
  fs.writeFileSync('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/line_pixels.txt', output);
  console.log("Dumped pixel data to scratch/line_pixels.txt");
}

dumpLines().catch(console.error);
