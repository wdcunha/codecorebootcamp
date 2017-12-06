
const net = require('net');

const client = new net.Socket();

// this will be called when we receive data back from server
const readline = require('readline');

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rlInterface.question('Enter a string',(string) => {
  client.connect(5000, '127.0.0.1', () => {
    client.write(string);
  });
});

client.on('data', (data) => {
  console.log(`data received from server ${data}`);
  process.exit();
});
//
// client.connect(5000, '127.0.0.1', () => {
//   client.write("hello");
// });


// client.on('data', (data) => {
//   console.log(`data received from server ${data}`);
//   process.exit();
// });
