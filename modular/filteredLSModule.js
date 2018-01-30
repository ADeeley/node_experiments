const fs = require('fs');
const path = require('path');

function lsFiles(dir, fileExt, callback) {
    const ext = '.' + fileExt;

    fs.readdir(dir, (err, files) => {
            if (err) return callback(err);
            let filteredFiles = [];
            files.forEach((file) => {
                if (path.extname(file) === ext)
                    filteredFiles.push(file)
            })
            callback(null, filteredFiles)
    })
}

module.exports = lsFiles; 