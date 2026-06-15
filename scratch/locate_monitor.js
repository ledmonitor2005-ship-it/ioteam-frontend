import { Jimp } from 'jimp';

async function locateMonitor() {
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const image = await Jimp.read(originalPath);
  
  // Scan top-right quadrant (X: 900..1280, Y: 20..350)
  // Let's find the bounds of dark pixels (R, G, B < 60) that represent the monitor screen
  let minX = image.width, maxX = 0, minY = image.height, maxY = 0;
  let found = false;
  
  for (let y = 20; y < 350; y++) {
    for (let x = 900; x < 1280; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      if (r < 60 && g < 60 && b < 60) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        found = true;
      }
    }
  }
  
  if (found) {
    console.log(`Monitor screen bounds: X: ${minX}..${maxX}, Y: ${minY}..${maxY}`);
  } else {
    console.log("Monitor screen not found");
  }
}

locateMonitor().catch(console.error);
