const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.get('/users/list', getUsers);
router.post('/users/add', createUser);
router.put('/users/update/:id', updateUser);
router.delete('/users/delete', deleteUser)


module.exports = router;