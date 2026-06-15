import { Jimp } from 'jimp';

async function findBlackLines() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  console.log(`Image dimensions: ${image.width}x${image.height}`);
  
  // Find dark pixels (R, G, B all < 50)
  // Let's print out rows and columns that have a continuous run of dark pixels.
  let darkPixels = [];
  
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      const a = pixel & 0xff;
      
      if (r < 50 && g < 50 && b < 50 && a > 200) {
        darkPixels.push({ x, y });
      }
    }
  }
  
  console.log(`Total dark pixels found: ${darkPixels.length}`);
  
  // Let's find the bounding box of these dark pixels
  if (darkPixels.length > 0) {
    const xs = darkPixels.map(p => p.x);
    const ys = darkPixels.map(p => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    console.log(`Dark pixels bounds: X: ${minX}..${maxX}, Y: ${minY}..${maxY}`);
  }
}

findBlackLines().catch(console.error);
