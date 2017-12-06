const express = require('express');
const router = express.Router();
const knex = require('../db/index.js');


// since this is router file, '/' is no longer home.ejs, but notes router
router.get('/', (req, res) => {


  knex
    .select()
    .from('notes')
    .then(notes => res.render('notes/index.ejs', {notes : notes})); // if key and value are same, you can just use key for object
});

router.get('/new', (req, res) => {
  res.render('notes/new.ejs');
});

router.post('/', (req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  knex
    .insert({title,body})
    .into('notes')
    .returning('id')
    .then(id => res.redirect('/notes'))
    .catch(error => res.send(error));
});

module.exports = router;
