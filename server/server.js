const express = require('express') //Makes the express package available.
const app = express() 


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(express.static('../client'))

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})