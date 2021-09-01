const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Arts", userSchema)