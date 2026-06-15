import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

const pdfPath = 'c:/Users/DELL/Desktop/ktnl/Tài liệu/Giới thiệu giải pháp giám sát, quản lý hiệu quả năng lượng Full .pdf';

if (!fs.existsSync(pdfPath)) {
  console.error('File does not exist:', pdfPath);
  process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  console.log('Total Pages:', data.numpages);
  console.log('--- TEXT PREVIEW ---');
  console.log(data.text.substring(0, 4000));
}).catch(err => {
  console.error('Error parsing PDF:', err);
});
