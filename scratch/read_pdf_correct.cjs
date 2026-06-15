const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function main() {
  const pdfPath = 'c:/Users/DELL/Desktop/ktnl/Tài liệu/Giới thiệu giải pháp giám sát, quản lý hiệu quả năng lượng Full .pdf';

  if (!fs.existsSync(pdfPath)) {
    console.error('File does not exist:', pdfPath);
    process.exit(1);
  }

  const dataBuffer = fs.readFileSync(pdfPath);
  const parser = new PDFParse();
  await parser.load(dataBuffer);
  
  console.log('Total Pages:', parser.getInfo().pages);
  
  // Let's get page 2 text (0-indexed or 1-indexed? Let's check by getting all text first or getting pages).
  // Wait, let's see if getPageText is available. Yes, getPageText(pageNum) is in the prototype!
  // Let's print pages 1 and 2 to see.
  try {
    const page1Text = await parser.getPageText(1);
    console.log('--- PAGE 1 TEXT ---');
    console.log(page1Text);
  } catch (e) {
    console.error('Error getting page 1:', e);
  }

  try {
    const page2Text = await parser.getPageText(2);
    console.log('--- PAGE 2 TEXT ---');
    console.log(page2Text);
  } catch (e) {
    console.error('Error getting page 2:', e);
  }
}

main().catch(err => {
  console.error('Main error:', err);
});
