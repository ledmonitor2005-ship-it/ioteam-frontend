import { Jimp } from 'jimp';

async function analyzeImage2() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/5.png';
  const image = await Jimp.read(imagePath);
  console.log(`Image 2 dimensions: ${image.width}x${image.height}`);
  
  // Print pixel colors around borders
  console.log("Top-left pixel:", image.getPixelColor(0, 0).toString(16));
  console.log("Top-right pixel:", image.getPixelColor(image.width - 1, 0).toString(16));
  console.log("Bottom-left pixel:", image.getPixelColor(0, image.height - 1).toString(16));
  console.log("Bottom-right pixel:", image.getPixelColor(image.width - 1, image.height - 1).toString(16));
}

analyzeImage2().catch(console.error);
