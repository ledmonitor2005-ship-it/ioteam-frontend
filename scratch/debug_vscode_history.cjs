const fs = require('fs');
const path = require('path');

const historyDir = 'C:\\Users\\DELL\\AppData\\Roaming\\Code\\User\\History';

function findResources() {
  if (!fs.existsSync(historyDir)) {
    console.log("No VS Code history found.");
    return;
  }

  const dirs = fs.readdirSync(historyDir);
  let count = 0;
  for (const dir of dirs) {
    const dirPath = path.join(historyDir, dir);
    const entriesFile = path.join(dirPath, 'entries.json');
    if (fs.existsSync(entriesFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(entriesFile, 'utf8'));
        if (data.resource && data.resource.toLowerCase().includes('ktnl')) {
          console.log(data.resource);
          count++;
          if (count > 10) break;
        }
      } catch (e) {
      }
    }
  }
}

findResources();
