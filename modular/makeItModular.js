const ls = require('./filteredLSModule')
const dir = process.argv[2];
const ext = process.argv[3];

ls(dir, ext, (err, data) => {
    data.forEach((file) => {
        console.log(file);
    })
})