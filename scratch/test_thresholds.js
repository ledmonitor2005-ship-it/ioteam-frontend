import { Jimp } from 'jimp';

async function testThresholds() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  // Test thresholds: 240, 245, 250, 254
  const thresholds = [240, 245, 250, 254];
  
  for (const t of thresholds) {
    let minX = image.width, maxX = 0, minY = image.height, maxY = 0;
    
    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        const pixel = image.getPixelColor(x, y);
        const r = (pixel >> 24) & 0xff;
        const g = (pixel >> 16) & 0xff;
        const b = (pixel >> 8) & 0xff;
        
        // If it's darker than the threshold, count it as content
        if (r < t || g < t || b < t) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    
    console.log(`Threshold ${t}: X: ${minX}..${maxX}, Y: ${minY}..${maxY} (${maxX - minX + 1}x${maxY - minY + 1})`);
  }
}

testThresholds().catch(console.error);
