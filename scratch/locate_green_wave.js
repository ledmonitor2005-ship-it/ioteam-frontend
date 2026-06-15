import { Jimp } from 'jimp';

async function locateGreenWave() {
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const image = await Jimp.read(originalPath);
  
  // Scan bottom-left quadrant (X: 130..300, Y: 600..735)
  // Let's find the bounds of green pixels
  let minX = image.width, maxX = 0, minY = image.height, maxY = 0;
  let found = false;
  
  for (let y = 600; y < 735; y++) {
    for (let x = 130; x < 300; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      // Green color check
      if (g > 130 && r < 120 && b < 160) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        found = true;
      }
    }
  }
  
  if (found) {
    console.log(`Green wave bounds: X: ${minX}..${maxX}, Y: ${minY}..${maxY}`);
  } else {
    console.log("Green wave not found");
  }
}

locateGreenWave().catch(console.error);
