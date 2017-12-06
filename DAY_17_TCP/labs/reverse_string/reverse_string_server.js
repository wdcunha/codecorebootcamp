// net module is bundled with Node.js, so no need to install it manually

const net = require('net');

const server = net.createServer((socket) => {
  // the server will be running and listening until we stop it. While it is listening, when data is received, it will execute the function below
  socket.on('data', (dataReceived) => {
    console.log(`Your reversed string is: ${dataReceived}`);
    // this will send a response back to the client
    socket.write(reverseString(dataReceived.toString()));
  });
});

function reverseString(string) {
  let arr = [];
  for(let x = 0; x < string.length; x++){
    arr.unshift(string[x]);
  }
  return arr.join("");
}



// this will start the server running on localhost with port 5000
server.listen(5000, '127.0.0.1');
// console.log('Server is running on localhost on port 5000');
