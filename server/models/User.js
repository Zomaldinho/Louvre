const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim:true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim:true,
  },
  role: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Users", userSchema)