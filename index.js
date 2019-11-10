/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendfile('index.html')
})

app.listen(3000, function () {
	console.log('Server is on 3000 port')
})

console.log('Hello tutor!')
console.log('Hello students too!')
