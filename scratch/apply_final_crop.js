import { Jimp } from 'jimp';

async function applyFinalCrop() {
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const destPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  
  const image = await Jimp.read(originalPath);
  
  // Crop coordinates: X: 142..1285 (width: 1143), Y: 75..725 (height: 650)
  const cropX = 142;
  const cropY = 75;
  const cropW = 1143;
  const cropH = 650;
  
  const cropped = image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
  
  // Draw the 1px 20% faded black border around the edge of the cropped image
  const borderCol = 0x333333ff;
  for (let x = 0; x < cropW; x++) {
    cropped.setPixelColor(borderCol, x, 0);
    cropped.setPixelColor(borderCol, x, cropH - 1);
  }
  for (let y = 0; y < cropH; y++) {
    cropped.setPixelColor(borderCol, 0, y);
    cropped.setPixelColor(borderCol, cropW - 1, y);
  }
  
  await cropped.write(destPath);
  console.log("Successfully applied final crop to src/app/components/2.png");
}

applyFinalCrop().catch(console.error);
