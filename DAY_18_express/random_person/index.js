const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));


app.get('/person_select', (request,response) => {
 response.render('personSelect', {message: null});

});

app.post('/person_select', (request,response) => {
  const body = request.body;
  const message = body.message;
  const selectedPerson = pickWinner(message);

  response.render('personSelect', {message: `${selectedPerson} is the winner`});
});

function pickWinner(string) {
  let x = string.split(",");
  let y = Math.floor(Math.random() * ((x.length -1) - 0 + 1)) + 0;
  return x[y];
}



const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, () => {
  // optionally, `app.listen` can take a third argument that is a callback that will be called once and only when the server is ready to handle requests
  console.log(`Server listening on http://${DOMAIN}:${PORT}`);
});
