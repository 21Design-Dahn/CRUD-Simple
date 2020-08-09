const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  password: String,
  status: Boolean,
  dateRegistered: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Users', userSchema)