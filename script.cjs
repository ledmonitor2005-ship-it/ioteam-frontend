const fs = require('fs');
const lines = fs.readFileSync('C:/Users/DELL/.gemini/antigravity-ide/brain/97befac1-5bc4-43e0-9417-e80cfef71a1a/.system_generated/logs/transcript.jsonl', 'utf8').split('\n').filter(Boolean);
const userLines = lines.map(l => {
  try {
    const j = JSON.parse(l);
    if (j.type === 'USER_INPUT' && j.source === 'USER_EXPLICIT') {
      return j.content;
    }
  } catch(e){}
  return null;
}).filter(Boolean);
if(userLines.length > 0) {
  fs.writeFileSync('temp_user_input.txt', userLines[userLines.length - 1]);
}
