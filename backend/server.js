const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()
const userRoutes = require('./routes/userRoutes')

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

// route handlers
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
