const net = require('net');

function zeroFill(num) {
    return (num < 10 ? '0' : '') + num;
}

function getTimeStamp() {
    let date = new Date();
    let now = date.getFullYear() + '-' +
        zeroFill(date.getMonth() + 1) + '-' +
        zeroFill(date.getDate()) + ' ' +
        zeroFill(date.getHours()) + ':' +
        zeroFill(date.getMinutes()) + '\n';
    return now;
}

function startServer(port){
    let server = net.createServer((socket) => {
        socket.end(getTimeStamp());
    })
    server.listen(port);
}

startServer(process.argv[2]);