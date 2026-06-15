import { Jimp } from 'jimp';

async function testSafeCrop() {
  // Read from the backup of the original image
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const image = await Jimp.read(originalPath);
  
  // Previous: X: 130..1279, Y: 100..719 (Width: 1150, Height: 620)
  // Let's add 15 pixels of padding all around
  const padding = 15;
  const cropX = Math.max(0, 130 - padding);
  const cropY = Math.max(0, 100 - padding);
  const cropW = 1150 + 2 * padding;
  const cropH = 620 + 2 * padding;
  
  console.log(`New crop dimensions: X=${cropX}, Y=${cropY}, W=${cropW}, H=${cropH}`);
  
  const cropped = image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
  
  // Draw the 1px black border around the new outer edge
  const borderCol = 0x000000ff;
  for (let x = 0; x < cropW; x++) {
    cropped.setPixelColor(borderCol, x, 0);
    cropped.setPixelColor(borderCol, x, cropH - 1);
  }
  for (let y = 0; y < cropH; y++) {
    cropped.setPixelColor(borderCol, 0, y);
    cropped.setPixelColor(borderCol, cropW - 1, y);
  }
  
  await cropped.write('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/test_crop1_safe.png');
  console.log("Saved test crop to scratch/test_crop1_safe.png");
}

testSafeCrop().catch(console.error);
