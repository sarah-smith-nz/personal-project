const path = require('path')
const express = require('express')
const cors = require('cors')

const mtnparkRoutes = require('./routes/Parks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/mtnpark', mtnparkRoutes)

server.get('/greeting', (req, res) => {
  const greetings = ['Mountain', 'Downhill', 'Cross Country', 'Skills']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

module.exports = server
