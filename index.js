/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// const path = require('path')
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const hbs = exphbs.create({
  'defaultLayout': 'main',
  'extname': 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// eslint-disable-next-line no-process-env
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/manager', function (req, res) {
  res.render('manager')
})

app.get('/newstudent', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'forms', 'newstudent.hbs'))
})

app.listen(PORT, () => {
	console.log(`Server is on ${PORT} port`)
})

