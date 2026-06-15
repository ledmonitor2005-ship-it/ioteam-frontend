import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components';

function getPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  // PNG IHDR chunk starts at byte 12. Width is at 16-19, Height is at 20-23
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

['2.png', '4.png', '5.png'].forEach(file => {
  const p = path.join(dir, file);
  if (fs.existsSync(p)) {
    const { width, height } = getPngDimensions(p);
    console.log(`${file}: ${width}x${height}`);
  } else {
    console.log(`${file} does not exist`);
  }
});
