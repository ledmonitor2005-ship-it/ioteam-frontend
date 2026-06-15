const fs = require('fs');
const path = require('path');

const historyDir = 'C:\\Users\\DELL\\AppData\\Roaming\\Code\\User\\History';
const targetTime = 1781442000000; // 2026-06-14T13:00:00Z
const workspaceBase = 'c:\\Users\\DELL\\Desktop\\ktnl\\22526 - Copy';

function findRestorations() {
  if (!fs.existsSync(historyDir)) {
    console.log("No VS Code history found.");
    return;
  }

  const dirs = fs.readdirSync(historyDir);
  for (const dir of dirs) {
    const dirPath = path.join(historyDir, dir);
    const entriesFile = path.join(dirPath, 'entries.json');
    if (fs.existsSync(entriesFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(entriesFile, 'utf8'));
        // check if this file is in our workspace
        if (data.resource && data.resource.toLowerCase().startsWith('file:///' + workspaceBase.replace(/\\/g, '/').toLowerCase())) {
          let originalPath = decodeURIComponent(data.resource.substring(8)); // remove file:///
          if (originalPath.charAt(2) === ':') {
             // windows path format: file:///c:/...
          }
          // entries is an array like { id: '...', timestamp: 123456789 }
          if (data.entries && data.entries.length > 0) {
            // Sort entries by timestamp ascending
            data.entries.sort((a, b) => a.timestamp - b.timestamp);
            
            // Find the most recent entry BEFORE targetTime
            let bestEntry = null;
            for (const entry of data.entries) {
              if (entry.timestamp < targetTime) {
                bestEntry = entry;
              }
            }

            // If we found a valid state before targetTime
            if (bestEntry) {
               // Check if the current file has been modified AFTER targetTime
               const currentFilePath = originalPath;
               if (fs.existsSync(currentFilePath)) {
                 const stat = fs.statSync(currentFilePath);
                 if (stat.mtimeMs > targetTime) {
                   console.log(`Restoring ${originalPath} from history ID ${bestEntry.id} (Timestamp: ${new Date(bestEntry.timestamp).toLocaleString()})`);
                   const backupFilePath = path.join(dirPath, bestEntry.id);
                   if (fs.existsSync(backupFilePath)) {
                     fs.copyFileSync(backupFilePath, currentFilePath);
                   }
                 }
               }
            }
          }
        }
      } catch (e) {
        // ignore JSON parse errors
      }
    }
  }
}

findRestorations();
