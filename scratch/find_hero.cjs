const fs = require('fs');
const path = require('path');

const historyDir = 'C:\\Users\\DELL\\AppData\\Roaming\\Code\\User\\History';

const folders = fs.readdirSync(historyDir);
for (const folder of folders) {
  const entriesPath = path.join(historyDir, folder, 'entries.json');
  if (fs.existsSync(entriesPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
      if (data.resource && typeof data.resource === 'string' && data.resource.endsWith('Hero.tsx') && data.resource.includes('ktnl') && data.resource.includes('22526')) {
        console.log('Found folder:', folder);
        console.log('Resource:', data.resource);
        console.log('Entries count:', data.entries.length);
        
        // Save the first 3 entries
        for (let i = 0; i < Math.min(3, data.entries.length); i++) {
          const entry = data.entries[i];
          const contentFile = path.join(historyDir, folder, entry.id);
          fs.copyFileSync(contentFile, `C:\\Users\\DELL\\Desktop\\ktnl\\22526 - Copy\\scratch\\old_hero_${i}.tsx`);
          console.log(`Copied entry ${i} to scratch/old_hero_${i}.tsx`);
        }
      }
    } catch(e) {}
  }
}
