import { Jimp } from 'jimp';

async function sampleEdges() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  console.log("Top-left pixel:", image.getPixelColor(0, 0).toString(16));
  console.log("Top-right pixel:", image.getPixelColor(image.width - 1, 0).toString(16));
  console.log("Bottom-left pixel:", image.getPixelColor(0, image.height - 1).toString(16));
  console.log("Bottom-right pixel:", image.getPixelColor(image.width - 1, image.height - 1).toString(16));
  
  // Sample a few pixels along the top, bottom, left, and right borders
  console.log("Top row middle pixels:");
  for (let x = 0; x < 10; x++) {
    const px = Math.floor(image.width * x / 10);
    console.log(`x=${px}, y=0:`, image.getPixelColor(px, 0).toString(16));
  }
}

sampleEdges().catch(console.error);
