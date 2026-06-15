import { Jimp } from 'jimp';

async function scanVertical() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  const midX = Math.floor(image.width / 2);
  console.log(`Scanning vertical line at X = ${midX}`);
  
  // Print colors at intervals of 10 pixels
  for (let y = 0; y < image.height; y += 10) {
    const pixel = image.getPixelColor(midX, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    console.log(`y=${y}: R=${r}, G=${g}, B=${b} (hex: ${pixel.toString(16)})`);
  }
}

scanVertical().catch(console.error);
