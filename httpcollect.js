const http = require('http');

http.get(process.argv[ ], (response) => {
    let dataBuffer = [],
        result = "";
    response.setEncoding('utf8');
    response.on('data', (data) => {
        dataBuffer.push(data);
    })
    response.on('end', (data) => {
        dataBuffer.push(data);
        result = dataBuffer.join('');
        console.log(result.length);
        console.log(result)
    })
})