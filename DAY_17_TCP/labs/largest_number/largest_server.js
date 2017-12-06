// net module is bundled with Node.js, so no need to install it manually

const net = require('net');

const server = net.createServer((socket) => {
  // the server will be running and listening until we stop it. While it is listening, when data is received, it will execute the function below
  socket.on('data', (dataReceived) => {
    console.log(`The largest number is: ${dataReceived}`);
    // this will send a response back to the client
    // const arr = dataReceived.toString().split(',').map(function(i){
    //   return parseInt(i);
    // });
    // let max = arr[0];
    // for(let i of arr){
    //   if(i>max){max=i}
    // }
    // socket.write(max.toString());
    socket.write(Math.max(...(dataReceived.toString().split(","))).toString());
  });
});

// function largestNumber(string){
//   let max = string.split(",").reduce(function(a,b){
//     return parseInt(Math.max(parseInt(a),parseInt(b)));
//   });
//   return max;
// }





// this will start the server running on localhost with port 5000
server.listen(5000, '127.0.0.1');
console.log('Server is running on localhost on port 5000');
