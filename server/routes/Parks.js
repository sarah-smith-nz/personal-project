const express = require('express')
const db = require('../db/mtnparks')
const router = express.Router()

router.get('/', (req, res) => {
  db.getParks()
    .then((parks) => {
      return res.json({ parks })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve parks'
        }
      })
    })
})

module.exports = router
