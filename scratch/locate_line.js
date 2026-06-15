import { Jimp } from 'jimp';

async function locateTopBlackLine() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  // Scan the top 150 lines and look for a long horizontal black line (e.g. at least 500 pixels wide)
  for (let y = 0; y < 150; y++) {
    let blackCount = 0;
    for (let x = 0; x < image.width; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      const a = pixel & 0xff;
      
      if (r < 50 && g < 50 && b < 50 && a > 200) {
        blackCount++;
      }
    }
    if (blackCount > 300) {
      console.log(`Line y=${y} has ${blackCount} dark pixels (likely the top horizontal black line!)`);
    }
  }
}

locateTopBlackLine().catch(console.error);
