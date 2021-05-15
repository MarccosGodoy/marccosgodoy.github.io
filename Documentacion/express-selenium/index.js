
const test = require('./test')
const selenium = require('./selenium')
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
  test.testing()
})

app.get('/selenium', (req, res) => {
    res.send('Selenium')
    selenium.open()
  })
  



app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})

