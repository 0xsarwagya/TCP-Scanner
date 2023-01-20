const net = require('net');
const options = {
  host: 'example.com',
  port: 80
};

const socket = new net.Socket();

socket.on('connect', () => {
  console.log(options.host + ' tcp/' + options.port + ' open');
  socket.destroy();
});

socket.on('error', (err) => {
  console.log(options.host + ' tcp/' + options.port + ' closed');
});

socket.connect(options);
