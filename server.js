const express = require('express') //Makes the express package available.
var path = require('path')
const app = express() 

//Thank each request to try out middleware
app.use(function (req, res, next) {
  console.log("Thanks for your request")
  next()
})

//Respond to request with plain text
app.get('/plaintext', function(req,res) {
  res.send('This is just some plain ole text.')
})

//Checking out Express potential as an API with JSON response
app.get('/json', function(req, res) {
  res.json({ name: 'Aaron Smith' })
})

//Testing the use of parameters
app.get('/firstname/:firstName/lastname/:lastName', function (req, res) {
  res.send(req.params) //shows how the parameters are stored as text
})

//Host webpage from the public folder using express.static
app.use(express.static(path.join(__dirname, 'public')))

//Listens for requests at port 8000
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})