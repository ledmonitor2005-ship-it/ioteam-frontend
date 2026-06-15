import { Jimp } from 'jimp';
import path from 'path';

async function analyze() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  console.log(`Image 1 dimensions: ${image.width}x${image.height}`);
  
  // Find boundaries of non-white content
  let minX = image.width, maxX = 0, minY = image.height, maxY = 0;
  
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const pixel = image.getPixelColor(x, y); // RGBA hex number
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      const a = pixel & 0xff;
      
      // If not transparent and not white (allow some tolerance, say r/g/b < 254 or a < 50)
      const isWhite = r > 250 && g > 250 && b > 250;
      const isTransparent = a < 10;
      
      if (!isWhite && !isTransparent) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  console.log(`Non-white content box: X: ${minX} to ${maxX}, Y: ${minY} to ${maxY}`);
  console.log(`Width of content: ${maxX - minX + 1}, Height of content: ${maxY - minY + 1}`);
}

analyze().catch(console.error);
