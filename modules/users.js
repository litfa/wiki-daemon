const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  _id: Number,
  userName: {
    type: String,
    required: true,
    maxlength: 20,
  },
  passWord: {
    type: String,
    required: true,
    // maxlength: 20,
  },
  avatar: {
    type: String,
  },
  avatarFileName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
  },
  status: {
    type: Number,
    default: 1,
  },
  permission: {
    type: String,
    default: 'member',
  },
})
const user = mongoose.model('User', userSchema)

module.exports = user
