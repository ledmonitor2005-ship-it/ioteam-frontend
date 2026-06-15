import { Jimp } from 'jimp';

async function findInnerBounds() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  // Define a region inside the green border to scan for the actual diagram content
  let minX = image.width, maxX = 0, minY = image.height, maxY = 0;
  let found = false;
  
  for (let y = 100; y < 720; y++) {
    for (let x = 130; x < 1280; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      const a = pixel & 0xff;
      
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
    console.log(`Inner content bounds (excluding outer border):`);
    console.log(`X: ${minX}..${maxX} (width: ${maxX - minX + 1})`);
    console.log(`Y: ${minY}..${maxY} (height: ${maxY - minY + 1})`);
  } else {
    console.log("No inner content found");
  }
}

findInnerBounds().catch(console.error);
