import { Jimp } from 'jimp';

async function cropImage1() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  // Crop coordinates: X: 130..1279, Y: 100..719
  // Width: 1150, Height: 620
  const cropX = 130;
  const cropY = 100;
  const cropW = 1150;
  const cropH = 620;
  
  const cropped = image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
  
  // Draw a 1px black border around the edge of the cropped image
  // Set the border pixels to black (#000000ff)
  const borderCol = 0x000000ff;
  
  // Top and bottom borders
  for (let x = 0; x < cropW; x++) {
    cropped.setPixelColor(borderCol, x, 0);
    cropped.setPixelColor(borderCol, x, cropH - 1);
  }
  // Left and right borders
  for (let y = 0; y < cropH; y++) {
    cropped.setPixelColor(borderCol, 0, y);
    cropped.setPixelColor(borderCol, cropW - 1, y);
  }
  
  await cropped.write('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/test_crop1.png');
  console.log("Saved cropped Image 1 to scratch/test_crop1.png");
}

cropImage1().catch(console.error);
