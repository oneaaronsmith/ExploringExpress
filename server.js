const express = require('express') //Makes the express package available.
var path = require('path')
const app = express() 

//Respond to request with plain text
app.get('/plaintext', function(req,res) {
  res.send('This is just some plain ole text.')
})

//Checking out Express potential as an API
app.get('/json', function(req, res) {
  res.send("{ name: 'Aaron Smith' }")
})

//Testing the use of parameters
app.get('/firstname/:firstName/lastname/:lastName', function (req, res) {
  res.send(req.params)
})

//Host webpage from the public folder using express.static
app.use(express.static(path.join(__dirname, 'public')))

//Log time for each request
app.use(function (req, res, next) {
  console.log("Thanks for your request")
  console.log('Time:', Date.now())
  next()
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})