import { Jimp } from 'jimp';

async function findWhiteBox() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  const midX = Math.floor(image.width / 2);
  const midY = Math.floor(image.height / 2);
  
  console.log(`Image center: (${midX}, ${midY})`);
  
  // Scan Left
  let leftEdge = 0;
  for (let x = midX; x >= 0; x--) {
    const pixel = image.getPixelColor(x, midY);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    
    // The grey background is around 240, 241, 245. The green border is green.
    // If it's grey or green (not white and not diagram content):
    // Let's print transition
    if (g > 200 && r < 150 && b < 200) { // Green
      leftEdge = x;
      console.log(`Found green border (left) at X=${x}, Y=${midY}: R=${r}, G=${g}, B=${b}`);
      break;
    }
    if (r === 240 && g === 241 && b === 245) { // Grey
      leftEdge = x;
      console.log(`Found grey background (left) at X=${x}, Y=${midY}: R=${r}, G=${g}, B=${b}`);
      break;
    }
  }
  
  // Scan Right
  let rightEdge = image.width - 1;
  for (let x = midX; x < image.width; x++) {
    const pixel = image.getPixelColor(x, midY);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    
    if (g > 200 && r < 150 && b < 200) { // Green
      rightEdge = x;
      console.log(`Found green border (right) at X=${x}, Y=${midY}: R=${r}, G=${g}, B=${b}`);
      break;
    }
    if (r === 240 && g === 241 && b === 245) { // Grey
      rightEdge = x;
      console.log(`Found grey background (right) at X=${x}, Y=${midY}: R=${r}, G=${g}, B=${b}`);
      break;
    }
  }
  
  // Scan Top
  let topEdge = 0;
  for (let y = midY; y >= 0; y--) {
    const pixel = image.getPixelColor(midX, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    
    if (g > 200 && r < 150 && b < 200) { // Green
      topEdge = y;
      console.log(`Found green border (top) at X=${midX}, Y=${y}: R=${r}, G=${g}, B=${b}`);
      break;
    }
    if (r === 240 && g === 241 && b === 245) { // Grey
      topEdge = y;
      console.log(`Found grey background (top) at X=${midX}, Y=${y}: R=${r}, G=${g}, B=${b}`);
      break;
    }
  }
  
  // Scan Bottom
  let bottomEdge = image.height - 1;
  for (let y = midY; y < image.height; y++) {
    const pixel = image.getPixelColor(midX, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    
    if (g > 200 && r < 150 && b < 200) { // Green
      bottomEdge = y;
      console.log(`Found green border (bottom) at X=${midX}, Y=${y}: R=${r}, G=${g}, B=${b}`);
      break;
    }
    if (r === 240 && g === 241 && b === 245) { // Grey
      bottomEdge = y;
      console.log(`Found grey background (bottom) at X=${midX}, Y=${y}: R=${r}, G=${g}, B=${b}`);
      break;
    }
  }
  
  console.log(`Inferred box of diagram: X: ${leftEdge + 1}..${rightEdge - 1}, Y: ${topEdge + 1}..${bottomEdge - 1}`);
}

findWhiteBox().catch(console.error);
