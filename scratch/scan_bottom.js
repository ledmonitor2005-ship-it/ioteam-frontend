import { Jimp } from 'jimp';

async function scanBottom() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/4.png';
  const image = await Jimp.read(imagePath);
  
  const midX = Math.floor(image.width / 2);
  console.log("Bottom middle pixels vertical (last 100 pixels):");
  for (let y = image.height - 100; y < image.height; y += 5) {
    const pixel = image.getPixelColor(midX, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    console.log(`y=${y}: R=${r}, G=${g}, B=${b} (hex: ${pixel.toString(16)})`);
  }
}

scanBottom().catch(console.error);
