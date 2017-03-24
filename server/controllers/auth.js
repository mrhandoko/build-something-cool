'use strict'

const Model = require('../models/users')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const garem = require('garem')
const Auth = {}

Auth.register = (req, res, next) => {
  let secret = garem(10)
  let hashed = crypto.createHmac('sha256', secret).update(req.body.password).digest('hex')
  let garem = garem(10)

  let dataUser = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: hashed,
    salt: garem
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

Auth.login = (req, res, next) => {
  Model.findOne({username: req.body.username}).then((data) => {
      if (data.password == crypto.createHmac('sha256', data.salt).update(req.body.password).digest('hex')) {
        let token = jwt.sign({
          username: data.username
        }, secret, {})
        res.send({token: token})
      } else {
        res.send({passworderror: true})
      }
  }).catch((err) => {
    res.send({err: err})
  })
}

Auth.verify = (req, res, next) => {
  let token = req.params.token

  jwt.verify(token, secret, (err, decoded) => {
    if (decoded) {
      Model.find({username : decoded.username}).then((data) => {
        res.send({user: true, userdata: data})
      })
    }
    if (!decoded) {
      res.send({user: false})
    }
    if (err) {
      console.log(err)
    }
  })
}

module.exports = Auth
