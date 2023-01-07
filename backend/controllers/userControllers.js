const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.register(name, email, password)
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Login existing user
// @route   /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login user controller' })
})

module.exports = {
  registerUser,
  loginUser,
}
