const fs = require('fs');

const path = "C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\bbf14734-eafe-4caa-8398-008364ae7aa9\\.system_generated\\logs\\transcript.jsonl";
const lines = fs.readFileSync(path, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  try {
    const line = lines[i];
    if (!line) continue;
    const obj = JSON.parse(line);
    if (obj.type === 'VIEW_FILE' && obj.content && obj.content.includes('Hero.tsx') && obj.content.includes('Showing lines 1 to')) {
      console.log('Found VIEW_FILE of Hero.tsx at step:', obj.step_index);
      // We found a view of Hero.tsx, let's print the first one we find because the earliest one is the original
      fs.writeFileSync('c:/Users/DELL/Desktop/ktnl/22526 - Copy/scratch/original_hero.txt', obj.content);
      break;
    }
  } catch(e) {}
}
