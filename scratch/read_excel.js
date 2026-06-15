import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

const dirPath = 'C:/Users/DELL/Desktop/ktnl/Tài liệu';

try {
  const files = fs.readdirSync(dirPath);
  
  const excelFile = files.find(f => f.toLowerCase().includes('lợi ích') && f.endsWith('.xlsx')) || files.find(f => f.endsWith('.xlsx') && f.includes('ích'));
  
  if (!excelFile) {
    console.error('Could not find Excel file');
    process.exit(1);
  }
  
  const fullPath = path.join(dirPath, excelFile);
  console.log('Reading file:', fullPath);
  
  const workbook = XLSX.readFile(fullPath);
  const results = {};
  
  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    results[sheetName] = data;
  });
  
  fs.writeFileSync('scratch/excel_results.json', JSON.stringify(results, null, 2));
  console.log('Done writing results to scratch/excel_results.json');
} catch (error) {
  console.error('Error:', error);
}
