// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = (req, res) => {
  res.status(200).json({ message: 'Register user controller' })
}

// @desc    Login existing user
// @route   /api/users
// @access  Public
const loginUser = (req, res) => {
  res.status(200).json({ message: 'Login user controller' })
}

module.exports = {
  registerUser,
  loginUser,
}
