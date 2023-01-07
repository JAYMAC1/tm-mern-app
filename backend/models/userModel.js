const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

// static signup method
userSchema.statics.register = async function (name, email, password) {
  // Check for existing user
  const exists = await this.findOne({ email })
  if (exists) {
    throw Error('Email already in use')
  }

  // Validation
  if (!name || !email || !password) {
    throw Error('All fields must be filled.')
  }
  if (!validator.isEmail(email)) {
    throw Error('Not a vaild email address.')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('This password id too weak.')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({
    name,
    email,
    password: hash,
  })

  return user
}

module.exports = mongoose.model('User', userSchema)
