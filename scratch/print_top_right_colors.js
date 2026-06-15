import { Jimp } from 'jimp';

async function printColors() {
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const image = await Jimp.read(originalPath);
  
  console.log(`Original image size: ${image.width}x${image.height}`);
  
  // Let's print a grid of colors at the top-right corner
  for (let y = 0; y < 80; y += 10) {
    let rowStr = `y=${y.toString().padStart(2, ' ')}: `;
    for (let x = 1240; x < image.width; x += 10) {
      const pixel = image.getPixelColor(x, y);
      const hex = pixel.toString(16).substring(0, 6);
      rowStr += `[${x}:${hex}] `;
    }
    console.log(rowStr);
  }
}

printColors().catch(console.error);
