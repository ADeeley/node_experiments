/*const http = require('http');
const opt = {
    0: null,
    1: null, 
    2: null
};
const urls = process.argv;

function printOutput() {
    for (const key in opt) {
        if (opt.hasOwnProperty(key)) {
            console.log(opt[key]);   
        }
    }
}

for (let i = 2; i < urls.length; i++) {
    http.get(urls[i], (response) => {
        let dataBuffer = [],
            result = "";
        response.setEncoding('utf8');
        response.on('data', (data) => {
            dataBuffer.push(data);
        })
        response.on('end', (data) => {
            dataBuffer.push(data);
            result = dataBuffer.join('');
            opt[i - 2] = result;
            if (opt[0] && opt[1] && opt[2]) {
                printOutput();
            }
        })
    })
}
*/
const http = require('http');
const opt = [];
const urls = process.argv;
let count = 0;

function printOutput() {
    for (const key in opt) {
        if (opt.hasOwnProperty(key)) {
            console.log(opt[key]);   
        }
    }
}

function httpGet(i) {
    http.get(urls[i], (response) => {
        let dataBuffer = [],
            result = "";
        response.on('data', (data) => {
            dataBuffer.push(data);
        })
        response.on('end', (data) => {
            dataBuffer.push(data);
            result = dataBuffer.join('');
            opt[i] = result.toString();
            count++;
            if (count === 3) {
                printOutput();
            }
        })
    })
}

for (let i = 2; i < urls.length; i++) {
    httpGet(i);
}