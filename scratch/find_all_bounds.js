import { Jimp } from 'jimp';

async function findDarkBounds() {
  const dir = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components';
  
  for (const file of ['2.png', '4.png', '5.png']) {
    const imagePath = `${dir}/${file}`;
    const image = await Jimp.read(imagePath);
    
    let minX = image.width, maxX = 0, minY = image.height, maxY = 0;
    let found = false;
    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        const pixel = image.getPixelColor(x, y);
        const r = (pixel >> 24) & 0xff;
        const g = (pixel >> 16) & 0xff;
        const b = (pixel >> 8) & 0xff;
        const a = pixel & 0xff;
        
        // Find non-white, non-transparent, non-bg pixels
        const isWhite = r > 250 && g > 250 && b > 250;
        const isTransparent = a < 10;
        if (!isWhite && !isTransparent) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
          found = true;
        }
      }
    }
    
    if (found) {
      console.log(`${file} content bounds: X: ${minX}..${maxX} (${maxX - minX + 1}px wide), Y: ${minY}..${maxY} (${maxY - minY + 1}px high)`);
    } else {
      console.log(`${file} has no dark pixels`);
    }
  }
}

findDarkBounds().catch(console.error);
