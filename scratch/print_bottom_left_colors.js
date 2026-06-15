import { Jimp } from 'jimp';

async function printBottomLeft() {
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const image = await Jimp.read(originalPath);
  
  // Scan X: 130..180, Y: 680..725
  for (let y = 680; y < 725; y += 5) {
    let rowStr = `y=${y}: `;
    for (let x = 130; x < 180; x += 5) {
      const pixel = image.getPixelColor(x, y);
      rowStr += `[${x}:${pixel.toString(16).substring(0, 6)}] `;
    }
    console.log(rowStr);
  }
}

printBottomLeft().catch(console.error);
