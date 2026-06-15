const fs = require('fs');
const readline = require('readline');
const transcriptPath = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\bbf14734-eafe-4caa-8398-008364ae7aa9\\.system_generated\\logs\\transcript.jsonl';

async function run() {
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let count = 0;
  for await (const line of rl) {
    if (line.includes('replace_file_content') || line.includes('TargetFile')) {
      console.log(line.substring(0, 500));
      count++;
      if (count > 5) break;
    }
  }
}

run();
