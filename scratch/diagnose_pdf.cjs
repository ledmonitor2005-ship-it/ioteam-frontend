const pdf = require('pdf-parse');
console.log('typeof pdf:', typeof pdf);
console.log('keys of pdf:', Object.keys(pdf));
if (typeof pdf === 'function') {
  console.log('pdf is a function');
} else if (pdf.default) {
  console.log('pdf.default is a function:', typeof pdf.default === 'function');
}
