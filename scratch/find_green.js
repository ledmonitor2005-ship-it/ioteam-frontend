import { Jimp } from 'jimp';

async function findGreenPixels() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  let greenPixels = [];
  
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      // Green border color is typically close to hex 10B981 or similar.
      // Let's search for green: g > 130, r < 100, b < 150
      if (g > 130 && r < 120 && b < 160) {
        greenPixels.push({ x, y });
      }
    }
  }
  
  console.log(`Total green pixels: ${greenPixels.length}`);
  if (greenPixels.length > 0) {
    const xs = greenPixels.map(p => p.x);
    const ys = greenPixels.map(p => p.y);
    console.log(`Green pixels bounds: X: ${Math.min(...xs)}..${Math.max(...xs)}, Y: ${Math.min(...ys)}..${Math.max(...ys)}`);
  }
}

findGreenPixels().catch(console.error);
