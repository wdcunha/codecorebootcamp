const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));




const DOMAIN = 'localhost';
const PORT = 3018;
app.listen(PORT, DOMAIN, () => {
  console.log(`server is listening on ${DOMAIN}:${PORT}`);
});
