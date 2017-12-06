const express = require('express');
const router = express.Router();
const knex = require('../db/index.js');
const multer = require('multer');
const path = require('path');
const UPLOADS_DIR = 'uploads';

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')});


router.post('/', upload.single('taskPicture'), (request, response) => {
  const id = request.body.id;
  const title = request.body.title;
  if(title && request.file){
    const filename = request.file.filename;
    const picture_path = path.join(UPLOADS_DIR, filename);
  knex
    .insert({title: title, picture_path: picture_path})
    .into('tasks')
    .returning('id')
    .then(id => response.redirect('/'))
    .catch(error => response.send(error));
  } else {
    response.locals.flash = ['Title and picture are required'];
    response.redirect('/tasks');
  }
});

router.get('/', (request, response) => {
  knex
    .select()
    .from('tasks')
    .orderBy('created_at', 'DESC')
    .then(tasks => {
      response.render('show.ejs', {tasks: tasks});
    });
});

router.get('/:id', (request, response) => {
  const id = request.params.id;
  knex
    .select()
    .from('tasks')
    .where({id})
    .then(task => {
      response.render('showselect.ejs',{task: task[0]})
    });
});


module.exports = router;
