const express = require('express')

const router = express.Router()

// register user route
router.post('/', (req, res) => {
  res.json({ message: 'Register Route' })
})

// register user route
router.post('/login', (req, res) => {
  res.json({ message: 'Login Route' })
})

module.exports = router
