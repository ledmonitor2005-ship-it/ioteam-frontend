const path = require('path');
const fs = require('fs');

const targetDir = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\11524e33-1766-4dcb-87f7-4f4a3570999e';
const targetFile = 'problems_section_1781252545711.png';

console.log('process.cwd() =', process.cwd());
console.log('targetDir =', targetDir);

const testPaths = [
  '/c:/Users/DELL/.gemini/antigravity-ide/brain/11524e33-1766-4dcb-87f7-4f4a3570999e/' + targetFile,
  '/C:/Users/DELL/.gemini/antigravity-ide/brain/11524e33-1766-4dcb-87f7-4f4a3570999e/' + targetFile,
  '/Users/DELL/.gemini/antigravity-ide/brain/11524e33-1766-4dcb-87f7-4f4a3570999e/' + targetFile,
  '/' + targetFile,
  './' + targetFile,
  targetFile
];

testPaths.forEach(p => {
  const resolved = path.resolve(p);
  const isSub = resolved.toLowerCase().startsWith(targetDir.toLowerCase());
  const exists = fs.existsSync(resolved);
  console.log(`Path: "${p}"\n  -> Resolved: "${resolved}"\n  -> isSubDir: ${isSub}\n  -> Exists: ${exists}`);
});
