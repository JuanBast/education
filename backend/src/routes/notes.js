const { Router } = require('express');
const router = Router();

const logger = require('../config/logger');

const { createNote, updateNote, deleteNote, getNotes, getOneSingleNote } = require('../controllers/notes.controller');


// REST:
// C - Create  - POST
// R - Read    - GET
// U - Update  - PUT
// D - Delete  - DELETE

router.route('/')
      .post(createNote)          // C - Create  - POST
      .get(getNotes);            // R - Read    - GET
      

router.route('/:id')
      .put(updateNote)           // U - Update  - PUT
      .delete(deleteNote)        // D - Delete  - DELETE
      .get(getOneSingleNote);    // R - Read    - GET



module.exports = router;