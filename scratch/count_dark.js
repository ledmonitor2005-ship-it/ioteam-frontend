import { Jimp } from 'jimp';

async function countDarkPerRow() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  for (let y = 0; y < 150; y++) {
    let darkCount = 0;
    for (let x = 0; x < image.width; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      // Let's use a wider threshold for dark pixels (r, g, b < 100)
      if (r < 100 && g < 100 && b < 100) {
        darkCount++;
      }
    }
    if (darkCount > 10) {
      console.log(`y=${y}: ${darkCount} dark pixels`);
    }
  }
}

countDarkPerRow().catch(console.error);
