const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
  if(!response.locals.flash) {
    response.locals.flash = [];
  }
  next();
});

app.get('/', (request, response) => {
  response.locals.flash.push(`Thank you`);
  response.render('index.ejs',{tasks:[]});
});

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);
// app.use('/show', tasksRouter);


const DOMAIN = 'localhost';
const PORT = 3017;
app.listen(PORT, DOMAIN, () => {
  console.log(`server is listening on ${DOMAIN}:${PORT}`);
});
