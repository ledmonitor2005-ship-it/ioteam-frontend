const fs = require('fs');
const readline = require('readline');
const path = require('path');

const transcriptPath = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\bbf14734-eafe-4caa-8398-008364ae7aa9\\.system_generated\\logs\\transcript.jsonl';

async function run() {
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const filesTouched = new Set();
  const allCalls = [];

  for await (const line of rl) {
    if (!line.trim()) continue;
    const step = JSON.parse(line);
    if (step.tool_calls) {
      for (const call of step.tool_calls) {
        if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content' || call.name === 'write_to_file') {
          if (call.args && call.args.TargetFile) {
            allCalls.push(call.args.TargetFile);
            if (!call.args.TargetFile.includes('scratch')) {
              filesTouched.add(call.args.TargetFile);
            }
          }
        }
      }
    }
  }

  console.log("All target files:", allCalls);
  console.log("Files touched:", [...filesTouched]);
}

run();
