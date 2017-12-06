const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter)

const DOMAIN = 'localhost';
const PORT = 3002;
app.listen(PORT, DOMAIN, () => {
  console.log(`server is listening on ${DOMAIN}:${PORT}`);
  // localhost:3002
});
