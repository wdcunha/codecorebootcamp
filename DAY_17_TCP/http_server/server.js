const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  // the line below will take the parameters after `/` in the url, for instance, if the url is: http://localhost:5501/?name=Tam it will look at the part of the url which is `name=Tam` and then it will parse it into a Javascript object. In the case above, the 'params' variable will be equal to: {name: 'Tam'}
  const params = url.parse(request.url, true).query;

  const luckyNumber = Math.ceil(Math.random() * 100);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<!DOCTYPE html>
                  <html>
                    <head>
                      <title>My First HTTP Server</title>
                    </head>
                    <body>
                      <h1>Hi, ${params.name}. Your Lucky Number is ${luckyNumber}</h1>
                    </body>
                  </html>
                  `)
  response.end(); // this will send response back to the client
});

server.listen(5001);
console.log('http server running on localhost on port 5001');
