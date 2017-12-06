const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
  response.render('index.ejs');
});

const cohortRouter = require('./routes/cohorts');
app.use('/cohorts', cohortRouter);



const DOMAIN = 'localhost';
const PORT = 3018;
app.listen(PORT, DOMAIN, () => {
  console.log(`server is listening on ${DOMAIN}:${PORT}`);
});
