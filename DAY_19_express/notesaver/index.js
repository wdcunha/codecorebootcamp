const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
  response.render('home.ejs');
});

const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

const DOMAIN = 'localhost';
const PORT = 3015;
app.listen(PORT, DOMAIN, () => {
  console.log(`server is listening on ${DOMAIN}:${PORT}`);
});
