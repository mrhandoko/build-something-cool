var express = require('express');
var router = express.Router();
var User = require('../controllers/user')
var Auth = require('../controllers/auth')
var Spotify = require('../controllers/spotify')

router.get('/users', User.getUsers)
router.get('/user/:id', User.getUser)
router.post('/user', User.createNewUser)
router.put('/user/:id', User.updateUser)
router.delete('/user/:id', User.removeUser)

router.post('/register', Auth.register)
router.post('/login', Auth.login)
router.get('/verify/:token', Auth.verify)

router.post('/search', Spotify.search)

module.exports = router;
