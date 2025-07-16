const express = require('express');
const router = express.Router();
const {
  createUser
} = require('../controllers/userController');

router.post('/users/add', createUser);

module.exports = router;