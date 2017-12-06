const express = require('express');
const router = express.Router();
const knex = require('../db/index.js');

router.get('/', (request, response) => {
  knex
    .select()
    .from('notes')
    .then(notes => response.render('notes/index.ejs', {notes: notes}));
});

router.get('/new', (request, response) => {
  response.render('notes/new.ejs');
});

router.post('/', (request, response) => {
  const title = request.body.title;
  const body = request.body.body;
  knex
    .insert({title,body})
    .into('notes')
    .returning('id')
    .then(id => response.redirect('/notes'))
    .catch(error => response.send(error));

});

module.exports = router;
