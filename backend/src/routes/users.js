const { Router } = require('express');
const router = Router();

const logger = require('../config/logger');

const { createUser, updateUser, deleteUser, getUsers, getOneSingleUser } = require('../controllers/users.controller');
// const User = require('../models/user');

// REST:
// C - Create  - POST
// R - Read    - GET
// U - Update  - PUT
// D - Delete  - DELETE

router.route('/')
      .post(createUser)          // C - Create  - POST
      .get(getUsers);            // R - Read    - GET
      

router.route('/:id')
      .put(updateUser)           // U - Update  - PUT
      .delete(deleteUser)        // D - Delete  - DELETE
      .get(getOneSingleUser);    // R - Read    - GET

module.exports = router;