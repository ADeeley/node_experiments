const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const ext = '.' + process.argv[3];

function printOnNewLines(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

fs.readdir(dir, (err, files) => {
    try {
        if (err) throw err;
        let filteredFiles = [];
        files.forEach((file) => {
            if (path.extname(file) === ext)
                filteredFiles.push(file)
        })
        printOnNewLines(filteredFiles);
    } catch (err) {
        console.error(err);
    }
})