const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));



app.use(bodyParser.urlencoded({extended: false}));


app.get('/home', (request, response) => {
  response.render('home')
});

app.get('/car_age', (request,response) => {
 response.render('carAge');
});

app.post('/car_age', (request,response) => {
  const body = request.body;
  const carYear = parseInt(body.carYear);
  // response.send(body);
  const judgedCar = myCarAge(carYear);

  response.render('resultPage', {judgedCar: judgedCar});
});

// function myCarAge(year) {
//   if(year >= 2010) {
//     return "new";
//   } else if(year >= 2000) {
//     return "old";
//   } else if(year >= 2017) {
//     return "from the future";
//   } else {
//     return "really old";
//   }
// }

function myCarAge(year) {
  if(year === 2) {
    return "new";
  } else if(year === 3) {
    return "old";
  } else if(year === 1) {
    return "from the future";
  } else if(year === 4) {
    return "really old";
  }
}

const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, () => {
  // optionally, `app.listen` can take a third argument that is a callback that will be called once and only when the server is ready to handle requests
  console.log(`Server listening on http://${DOMAIN}:${PORT}`);
});
