const connection = require('./connection')

module.exports = {
  getParks
}

function getParks (db = connection) {
  return db('mtnparks').select()
}
