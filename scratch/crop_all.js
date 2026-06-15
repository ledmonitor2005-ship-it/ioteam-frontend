import { Jimp } from 'jimp';

async function cropAll() {
  const dir = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components';
  
  // 1. Image 1 (2.png): Crop to diagram content and add 1px black border
  // original: 1298x735, crop bounds: X: 130..1279, Y: 100..719
  const img1 = await Jimp.read(`${dir}/2.png`);
  const crop1 = img1.crop({ x: 130, y: 100, w: 1150, h: 620 });
  const borderCol1 = 0x000000ff;
  for (let x = 0; x < crop1.width; x++) {
    crop1.setPixelColor(borderCol1, x, 0);
    crop1.setPixelColor(borderCol1, x, crop1.height - 1);
  }
  for (let y = 0; y < crop1.height; y++) {
    crop1.setPixelColor(borderCol1, 0, y);
    crop1.setPixelColor(borderCol1, crop1.width - 1, y);
  }
  await crop1.write('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/test_crop1.png');
  console.log("Saved test_crop1.png");
  
  // 2. Image 2 (5.png): Crop to diagram content
  // original: 601x436, crop bounds: X: 37..585, Y: 4..428
  const img2 = await Jimp.read(`${dir}/5.png`);
  const crop2 = img2.crop({ x: 37, y: 4, w: 549, h: 425 });
  await crop2.write('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/test_crop2.png');
  console.log("Saved test_crop2.png");
  
  // 3. Image 3 (4.png): Crop to dashboard content (excluding top white bar)
  // original: 1634x889, crop bounds: X: 0..1633, Y: 170..888
  const img3 = await Jimp.read(`${dir}/4.png`);
  const crop3 = img3.crop({ x: 0, y: 170, w: 1634, h: 719 });
  await crop3.write('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/test_crop3.png');
  console.log("Saved test_crop3.png");
}

cropAll().catch(console.error);
