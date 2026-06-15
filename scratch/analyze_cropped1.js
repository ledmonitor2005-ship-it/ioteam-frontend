import { Jimp } from 'jimp';

async function analyzeCropped1() {
  const image = await Jimp.read('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/test_crop1.png');
  console.log(`Cropped Image size: ${image.width}x${image.height}`);
  
  let minX = image.width, maxX = 0, minY = image.height, maxY = 0;
  let found = false;
  
  // We ignore the border pixels (x = 0, x = width - 1, y = 0, y = height - 1)
  for (let y = 1; y < image.height - 1; y++) {
    for (let x = 1; x < image.width - 1; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      const isWhite = r > 250 && g > 250 && b > 250;
      if (!isWhite) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        found = true;
      }
    }
  }
  
  if (found) {
    console.log(`Content bounds in cropped image:`);
    console.log(`X: ${minX}..${maxX} (padding left: ${minX}, padding right: ${image.width - 1 - maxX})`);
    console.log(`Y: ${minY}..${maxY} (padding top: ${minY}, padding bottom: ${image.height - 1 - maxY})`);
  } else {
    console.log("No content found");
  }
}

analyzeCropped1().catch(console.error);
