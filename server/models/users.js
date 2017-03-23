'use strict'

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const connection = require('../config/config.js')

let userSchema = new Schema ({
  fullname: String,
  username: String,
  email: String,
  password: String
}, {
  timestamps: true
})

let User = mongoose.model('User', userSchema)

module.exports = User
