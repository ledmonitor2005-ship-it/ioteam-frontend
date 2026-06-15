import { Jimp } from 'jimp';

async function analyzeImage3() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/4.png';
  const image = await Jimp.read(imagePath);
  console.log(`Image 3 dimensions: ${image.width}x${image.height}`);
  
  console.log("Top-left pixel:", image.getPixelColor(0, 0).toString(16));
  console.log("Top-right pixel:", image.getPixelColor(image.width - 1, 0).toString(16));
  console.log("Bottom-left pixel:", image.getPixelColor(0, image.height - 1).toString(16));
  console.log("Bottom-right pixel:", image.getPixelColor(image.width - 1, image.height - 1).toString(16));
  
  // Sample middle row vertical top pixels
  const midX = Math.floor(image.width / 2);
  console.log("Top middle pixels vertical:");
  let foundStart = -1;
  for (let y = 0; y < 300; y++) {
    const pixel = image.getPixelColor(midX, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    const isWhite = r > 250 && g > 250 && b > 250;
    if (!isWhite && foundStart === -1) {
      foundStart = y;
      console.log(`First non-white pixel at y=${y}: R=${r}, G=${g}, B=${b} (hex: ${pixel.toString(16)})`);
      break;
    }
  }
}

analyzeImage3().catch(console.error);
