const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  // the line below will take the parameters after `/` in the url, for instance, if the url is: http://localhost:5501/?name=Tam it will look at the part of the url which is `name=Tam` and then it will parse it into a Javascript object. In the case above, the 'params' variable will be equal to: {name: 'Tam'}
  const params = url.parse(request.url, true).query;
  function grade(score){
    if(score >= 90) {
      return "A";
    } else if(score >= 80) {
      return "B";
    } else if(score >= 70) {
      return "C";
    } else {
      return "D";
    }
  }

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<!DOCTYPE html>
                  <html>
                    <head>
                      <title>Grade Calculator</title>
                    </head>
                    <body>
                      <h1>Hi, your grade is ${grade(params.score)}</h1>
                    </body>
                  </html>
                  `)
  response.end(); // this will send response back to the client
});

server.listen(5001);
console.log('http server running on localhost on port 5001');
