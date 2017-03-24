'use strict'

const Model = require('../models/users')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const garem = require('garem')
const Auth = {}

Auth.register = (req, res, next) => {
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
      res.json({
        err: err
      })
    }
  })
}

Auth.login = (req, res, next) => {
  Model.findOne({username: req.body.username}).then((data) => {
    if (data.password === crypto.createHmac('sha256', data.salt).update(req.body.password).digest('hex')) {
      let token = jwt.sign({username: data.username}, 'adedemit', {})
      res.json({token: token})
    } else {
      res.json({passworderror: true})
    }
  }).catch((err) => {
    res.json({err: err})
  })
}

Auth.verify = (req, res, next) => {
  let token = req.params.token

  jwt.verify(token, 'adedemit', (err, decoded) => {
    if (decoded) {
      Model.find({username : decoded.username}).then((data) => {
        res.json({user: true, userdata: data})
      })
    }
    if (!decoded) {
      res.json({user: false})
    }
    if (err) {
      console.log(err);
    }
  })
}

module.exports = Auth
