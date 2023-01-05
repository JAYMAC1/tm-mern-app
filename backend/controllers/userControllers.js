const asyncHandler = require('express-async-handler')

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  // Validation
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields!!')
  }
  res.status(200).json({ message: 'Register user controller' })
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
