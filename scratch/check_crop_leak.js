import { Jimp } from 'jimp';

async function checkLeak() {
  const image = await Jimp.read('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/test_crop1_new2.png');
  
  // Scan the borders of the cropped image (excluding the black border itself at x=0, y=0 etc.)
  // Let's print out if there are any green or grey pixels near the edges (x=1..10, y=1..10, and near right/bottom edges)
  let foundGreen = 0;
  let foundGrey = 0;
  
  for (let y = 1; y < image.height - 1; y++) {
    for (let x = 1; x < image.width - 1; x++) {
      // Check only within 10 pixels of the borders
      if (x < 10 || x > image.width - 11 || y < 10 || y > image.height - 11) {
        const pixel = image.getPixelColor(x, y);
        const r = (pixel >> 24) & 0xff;
        const g = (pixel >> 16) & 0xff;
        const b = (pixel >> 8) & 0xff;
        
        // Green border check (7fcb4c or similar)
        if (g > 130 && r < 120 && b < 160) {
          foundGreen++;
          console.log(`Green leak at (${x}, ${y}): R=${r}, G=${g}, B=${b}`);
        }
        // Grey background check
        if (r === 240 && g === 241 && b === 245) {
          foundGrey++;
        }
      }
    }
  }
  
  console.log(`Green border leak pixels: ${foundGreen}`);
  console.log(`Grey background leak pixels: ${foundGrey}`);
}

checkLeak().catch(console.error);
