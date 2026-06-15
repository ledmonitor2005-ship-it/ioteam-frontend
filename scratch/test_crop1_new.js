import { Jimp } from 'jimp';

async function cropNew() {
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const image = await Jimp.read(originalPath);
  
  // Crop coordinates: X: 140..1285 (width: 1145), Y: 75..725 (height: 650)
  const cropX = 140;
  const cropY = 75;
  const cropW = 1145;
  const cropH = 650;
  
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
  
  await cropped.write('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/test_crop1_new.png');
  console.log("Saved test crop to scratch/test_crop1_new.png");
}

cropNew().catch(console.error);
