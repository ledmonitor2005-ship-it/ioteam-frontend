import { Jimp } from 'jimp';

async function scanTopRight() {
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const image = await Jimp.read(originalPath);
  
  console.log("Scanning top-right region in original 2.png...");
  
  // We scan X from 1200 to 1297, Y from 0 to 150
  // Let's print rows that have green pixels, or non-white pixels
  for (let y = 0; y < 150; y += 10) {
    let rowStr = `y=${y.toString().padStart(3, ' ')}: `;
    for (let x = 1200; x < image.width; x += 10) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      const isWhite = r > 250 && g > 250 && b > 250;
      const isGreen = g > 130 && r < 120 && b < 160;
      const isGrey = r === 240 && g === 241 && b === 245;
      
      let code = "."; // White
      if (isGreen) code = "G";
      else if (isGrey) code = "X";
      else if (!isWhite) code = "#"; // Content/Text/Icon
      
      rowStr += code;
    }
    console.log(rowStr);
  }
}

scanTopRight().catch(console.error);
