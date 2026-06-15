const fs = require('fs');
const path = require('path');

const historyDir = 'C:\\Users\\DELL\\AppData\\Roaming\\Code\\User\\History';

function searchToday() {
  if (!fs.existsSync(historyDir)) {
    console.log('History directory does not exist');
    return;
  }

  const subdirs = fs.readdirSync(historyDir);
  const results = [];
  const now = new Date();
  
  // Today start (June 14, 2026)
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  for (const subdir of subdirs) {
    const fullSubdir = path.join(historyDir, subdir);
    if (!fs.statSync(fullSubdir).isDirectory()) continue;

    const entriesPath = path.join(fullSubdir, 'entries.json');
    if (!fs.existsSync(entriesPath)) continue;

    try {
      const entriesContent = fs.readFileSync(entriesPath, 'utf8');
      const entriesData = JSON.parse(entriesContent);

      const resource = entriesData.resource;
      if (resource) {
        const entries = entriesData.entries || [];
        for (const entry of entries) {
          const entryTime = new Date(entry.timestamp);
          if (entryTime >= todayStart) {
            const entryFilePath = path.join(fullSubdir, entry.id);
            if (fs.existsSync(entryFilePath)) {
              results.push({
                resource: decodeURIComponent(resource),
                historyPath: entryFilePath,
                timestamp: entry.timestamp,
                time: entryTime
              });
            }
          }
        }
      }
    } catch (e) {}
  }

  results.sort((a, b) => b.timestamp - a.timestamp);
  console.log(`Found ${results.length} files modified today:`);
  results.forEach((r, i) => {
    console.log(`[${i}] ${r.time.toISOString()} - ${r.resource} -> ${r.historyPath}`);
  });
}

searchToday();
