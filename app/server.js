const express = require('express')
const app = express()
const data = require('../quiz.json')

app.use(express.static('public'))

app.get('/quiz', function (req, res) {
  res.send(data)
})

var server = app.listen(3001, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})
