const express = require('express');
const router = express.Router();
const knex = require('../db/index.js');
const multer = require('multer');
const path = require('path');
const UPLOADS_DIR = 'uploads';

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')});

router.get('/', (request, response) => {
  knex
    .select()
    .from('cohorts')
    .then(cohorts => {
      response.render('show.ejs', {cohorts: cohorts});
    });
});

router.get('/new', (request, response) => {
  response.render('new.ejs');
});

router.post('/', upload.single('cohort_logo'), (request, response) => {
  const id = request.body.id;
  const name = request.body.name;
  const members = request.body.members;
  const filename = request.file.filename;
  const logo_url = path.join(UPLOADS_DIR, filename);

  knex
    .insert({name: name, members: members, logo_url: logo_url})
    .into('cohorts')
    .returning('id')
    .then(id => response.redirect(`/cohorts/${id}`))
    .catch(error => response.send(error));
});

router.get('/:id', (request, response) => {
  const id = request.params.id;
  knex
    .select()
    .from('cohorts')
    .where({id})
    .then(cohort => {
      response.render('cohort.ejs',{cohort: cohort[0]})
    });
});


module.exports = router;
