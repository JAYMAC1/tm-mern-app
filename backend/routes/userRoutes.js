const express = require('express')
const router = express.Router()

const { loginUser, registerUser } = require('../controllers/userControllers')

// register user route
router.post('/', registerUser)

// register user route
router.post('/login', loginUser)

module.exports = router
