const fs = require('fs');
const readline = require('readline');

async function extractFiles() {
  const logPath = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\bbf14734-eafe-4caa-8398-008364ae7aa9\\.system_generated\\logs\\transcript.jsonl';
  const fileStream = fs.createReadStream(logPath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const files = {};
  let currentFile = null;

  for await (const line of rl) {
    try {
      const entry = JSON.parse(line);
      
      // Look for view_file tool calls to track what file is being viewed
      if (entry.tool_calls) {
        for (const call of entry.tool_calls) {
          if (call.name === 'view_file' || call.name === 'default_api:view_file') {
             // In antigravity, arguments are usually in call.args
             const args = call.args || {};
             const path = args.AbsolutePath || args.absolute_path;
             if (path) {
                currentFile = path;
             }
          }
        }
      }

      // Look for TOOL_RESPONSE from view_file
      if (entry.type === 'TOOL_RESPONSE' && currentFile) {
         // The content might be in entry.content
         if (!files[currentFile]) {
             files[currentFile] = entry.content;
         }
         currentFile = null;
      }

    } catch (e) {
      // ignore parse errors
    }
  }

  // Print out the files we found initial state for
  for (const [path, content] of Object.entries(files)) {
      if (path.includes('ktnl') && path.endsWith('.tsx') || path.endsWith('.ts') || path.endsWith('.css')) {
          console.log(`Found initial state for: ${path}`);
          console.log(`Length: ${content.length}`);
          // Let's save them to scratch
          const fileName = path.split(/[\\/]/).pop();
          fs.writeFileSync(`scratch/initial_${fileName}`, content);
      }
  }
}

extractFiles().catch(console.error);
