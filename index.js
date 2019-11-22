/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// const path = require('path')
/* eslint-disable quote-props */
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const crmRoutes = require('./routes/crm')
const adminRoutes = require('./routes/admin')
const managerRoutes = require('./routes/manager')
const tutorRoutes = require('./routes/tutor')
const studentRoutes = require('./routes/student')

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
app.use('/', crmRoutes)
app.use('/admin', adminRoutes)
app.use('/manager', managerRoutes)
app.use('/tutor', tutorRoutes)
app.use('/student', studentRoutes)

app.get('/newstudent', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'forms', 'newstudent.hbs'))
})

app.listen(PORT, () => {
	console.log(`Server is on ${PORT} port`)
})

