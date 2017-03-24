'use strict'

let Model = require('../models/users')
let garem = require('garem')
let User = {}

User.getUsers = (req, res, next) => {
  Model.find({}).then((data) => {
    res.send(data)
  })
}

User.getUser = (req, res, next) => {
  Model.findOne({_id:req.params.id}).then((data) => {
    res.send(data)
  })
}

User.createNewUser = (req, res, next) => {
  let secret = garem(10)
  let hashed = crypto.createHmac('sha256', secret).update(req.body.password).digest('hex')

  let dataUser = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: hashed,
    salt: secret
  }

  Model.create(dataUser).then((user) => {
    res.send({message: 'Register Success', data: user})
  }).catch((err) => {
    if (err) {
      res.send({
        err: err
      })
    }
  })
}

User.updateUser = (req, res, next) => {
  Model.update({ _id: req.params.id }, req.body).then((data) => {
    res.send(data)
  })
}

User.removeUser = (req, res, next) => {
  Model.remove({_id: req.params.id }).then((data) => {
    res.send(data)
  })
}

module.exports = User
