'use strict'

let Model = require('../models/users')
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
  Model.create(req.body).then((data) => {
    res.send(data)
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
