const fs = require('fs')
const fileLocation = process.argv[2];
fs.readFile(fileLocation, 'utf8', (err, data) => {
    try {
        if (err) throw err;
        let lineCount = data.split('\n').length -1;
        console.log(lineCount);
    } catch (err) {
        console.log('Could not find file ' + fileLocation)
    }
});
