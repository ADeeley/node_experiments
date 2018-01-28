const fs = require('fs');
const file = process.argv[2];
let fileContents = fs.readFileSync(file, 'utf8');
let numLines = fileContents.split('\n').length - 1;

console.log(numLines);