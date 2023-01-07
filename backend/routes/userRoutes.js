const express = require('express')
const router = express.Router()

const {
  loginUser,
  registerUser,
  getMe,
} = require('../controllers/userControllers')

const { requireAuth } = require('../middleware/authMiddleware')

// register user route
router.post('/', registerUser)

// register user route
router.post('/login', loginUser)

// register user route
router.get('/me', requireAuth, getMe)

module.exports = router
