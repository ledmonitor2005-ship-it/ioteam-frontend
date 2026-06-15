const fs = require('fs');
const readline = require('readline');

async function extract() {
  const fileStream = fs.createReadStream('C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\bbf14734-eafe-4caa-8398-008364ae7aa9\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('replace_file_content') && line.includes('Hero.tsx') && line.includes('TargetContent')) {
      const data = JSON.parse(line);
      if (data.tool_calls) {
        for (const call of data.tool_calls) {
          if (call.name === 'replace_file_content' && call.args.TargetFile.includes('Hero.tsx')) {
            console.log(call.args.TargetContent);
            fs.writeFileSync('C:\\Users\\DELL\\Desktop\\ktnl\\22526 - Copy\\scratch\\old_hero.tsx', call.args.TargetContent);
          }
        }
      }
    }
  }
}
extract();
