const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers
} = require('../controllers/userController');

router.get('/users/list', getUsers);
router.post('/users/add', createUser);

module.exports = router;