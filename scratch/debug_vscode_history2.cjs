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
        if (data.resource && data.resource.toLowerCase().includes('22526%20-%20copy')) {
          console.log(data.resource, data.entries.map(e => new Date(e.timestamp).toISOString()));
          count++;
          if (count > 20) break;
        }
      } catch (e) {
      }
    }
  }
}

findResources();
