var express = require('express');
var router = express.Router();
var User = require('../controllers/user')

router.get('/users', User.getUsers)
router.get('/user/:id', User.getUser)
router.post('/user', User.createNewUser)
router.put('/user/:id', User.updateUser)
router.delete('/user/:id', User.removeUser)

module.exports = router;
