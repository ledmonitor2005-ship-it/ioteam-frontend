import { Jimp } from 'jimp';

async function scanProposedBox() {
  const originalPath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/backup/2.png';
  const image = await Jimp.read(originalPath);
  
  // Proposed bounds
  const x1 = 145;
  const x2 = 1285;
  const y1 = 75;
  const y2 = 718;
  
  console.log(`Scanning borders of box X: ${x1}..${x2}, Y: ${y1}..${y2}`);
  
  let leaks = 0;
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      // Check borders (outer 5 pixels of this box)
      if (x < x1 + 5 || x > x2 - 5 || y < y1 + 5 || y > y2 - 5) {
        const pixel = image.getPixelColor(x, y);
        const r = (pixel >> 24) & 0xff;
        const g = (pixel >> 16) & 0xff;
        const b = (pixel >> 8) & 0xff;
        
        // Green border check (7fcb4c or similar)
        const isGreen = g > 150 && r < 150 && b < 150;
        // Grey background check (f0f1f5 or similar)
        const isGrey = r > 235 && r < 245 && g > 235 && g < 245 && b > 240 && b < 250;
        
        if (isGreen || isGrey) {
          leaks++;
          if (leaks < 20) {
            console.log(`Leak at (${x}, ${y}): R=${r}, G=${g}, B=${b} (${isGreen ? 'GREEN' : 'GREY'})`);
          }
        }
      }
    }
  }
  
  console.log(`Total leak pixels: ${leaks}`);
}

scanProposedBox().catch(console.error);
