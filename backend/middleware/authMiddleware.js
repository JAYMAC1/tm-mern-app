const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = asyncHandler(async (req, res, next) => {
  // verify

  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required!!' })
  }

  const token = authorization.split(' ')[1]
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(id).select('-password')
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Request is not authorised!!' })
  }
})

module.exports = { requireAuth }
