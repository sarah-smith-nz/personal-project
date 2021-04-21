const router = require('express').Router()
// const { getImage } = require('../apiClient')

router.get('/gallery', (req, res) => {
  res.json('bikes')
  return null
  .catch(err => {
  res.status(500).send(err.message)
})

module.exports = router

// server.get('/greeting', (req, res) => {
//   const greetings = ['Mountain', 'Downhill', 'Cross Country', 'Skills']
//   const index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })
