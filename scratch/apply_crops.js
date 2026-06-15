import fs from 'fs';
import path from 'path';

const srcDir = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch';
const destDir = 'c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components';

const mappings = [
  { from: 'test_crop1.png', to: '2.png' },
  { from: 'test_crop2.png', to: '5.png' },
  { from: 'test_crop3.png', to: '4.png' }
];

mappings.forEach(m => {
  const fromPath = path.join(srcDir, m.from);
  const toPath = path.join(destDir, m.to);
  
  if (fs.existsSync(fromPath)) {
    fs.copyFileSync(fromPath, toPath);
    console.log(`Successfully copied ${m.from} to replace ${m.to}`);
  } else {
    console.error(`Source file ${fromPath} does not exist!`);
  }
});
