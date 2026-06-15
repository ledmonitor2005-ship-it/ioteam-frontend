import { Jimp } from 'jimp';

async function scanCol100() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  console.log("X=100 vertical column top pixels:");
  for (let y = 0; y < 150; y += 5) {
    const pixel = image.getPixelColor(100, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    console.log(`y=${y}: R=${r}, G=${g}, B=${b} (hex: ${pixel.toString(16)})`);
  }
}

scanCol100().catch(console.error);
