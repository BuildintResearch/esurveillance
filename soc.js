const net = require('net');
const insert = require('./data')
const server = net.createServer((socket) => {
  console.log('Client connected');
  socket.on('data',(data) => {
    console.log(`${socket.remoteAddress}:${socket.remotePort}`)
    console.log(`Received data from client ${data}`);
    var str = data.toString();
    var cstr = str.split(',');
    //socket.write(`$1lB,16,1,cstr[23],\n`);
    socket.write(`$1lv,4,\n`)
    console.log(`Received data from client ${data}`);
    if(cstr[0] == '#1v'){
      insert.test(str)
    }
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(5501, () => {
  console.log('Server started on port 5501');
});