import { Jimp } from 'jimp';

async function scanBorders() {
  const imagePath = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components/2.png';
  const image = await Jimp.read(imagePath);
  
  console.log(`Image size: ${image.width}x${image.height}`);
  
  // Let's find the vertical boundaries of the green border.
  // The green border has color around (127, 203, 76) or similar.
  // Let's scan along X = 100 from top to bottom and print non-white and non-grey pixels.
  const x = 100;
  console.log(`Scanning vertical at X = ${x}`);
  let greenTop = -1;
  let greenBottom = -1;
  let diagramTop = -1;
  let diagramBottom = -1;
  
  for (let y = 0; y < image.height; y++) {
    const pixel = image.getPixelColor(x, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    
    // Check if it's green (e.g. green component is significantly higher than red/blue, and not white/grey)
    const isGreen = g > 150 && r < 150 && b < 180;
    // Check if it's the diagram's black/coloured content
    const isDiagramContent = (r < 230 || g < 230 || b < 230) && !isGreen;
    
    if (isGreen) {
      if (greenTop === -1) greenTop = y;
      greenBottom = y;
    }
  }
  
  console.log(`Green border vertical bounds at X=${x}: top=${greenTop}, bottom=${greenBottom}`);
  
  // Let's scan X = 649 (middle) for diagram content
  const midX = Math.floor(image.width / 2);
  let contentTop = -1;
  let contentBottom = -1;
  
  for (let y = 0; y < image.height; y++) {
    const pixel = image.getPixelColor(midX, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    const isWhiteOrGrey = r > 240 && g > 240 && b > 240;
    
    if (!isWhiteOrGrey) {
      if (contentTop === -1) contentTop = y;
      contentBottom = y;
    }
  }
  console.log(`Middle content bounds: top=${contentTop}, bottom=${contentBottom}`);
  
  // Let's also check X = 200 (where the diagram has a left black border?)
  // Let's find the boundaries of the white diagram box itself.
  // The diagram is a white box inside a green border.
  // Let's check X = 200 and print where it goes from non-white to white.
}

scanBorders().catch(console.error);
