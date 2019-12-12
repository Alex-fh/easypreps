/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable quote-props */
/* eslint-disable dot-location */

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const crmRoutes = require('./routes/crm')
const adminRoutes = require('./routes/admin')
const managerRoutes = require('./routes/manager')
const tutorRoutes = require('./routes/tutor')
const studentRoutes = require('./routes/student')
const mongoose = require('mongoose')
const helpers = require('handlebars-helpers')

const app = express()
const hbs = exphbs.create({
  'defaultLayout': 'main',
  'extname': 'hbs',
  helpers: {

    /*
     * foo: function (a) { return a+4},
     * bar: function (b) { return b+10}
     */
  }
})
// eslint-disable-next-line no-unused-vars
const array = helpers.array()
// eslint-disable-next-line no-unused-vars
const math = helpers.math()

// exphbs.registerHelper('paginate', pagination)

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


// eslint-disable-next-line no-process-env
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', crmRoutes)
app.use('/admin', adminRoutes)
app.use('/manager', managerRoutes)
app.use('/tutor', tutorRoutes)
app.use('/student', studentRoutes)

mongoose.connect('mongodb://localhost/easypreps', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB has connected...'))
.catch((err) => console.log(err))

app.listen(PORT, () => {
	console.log(`Server is on ${PORT} port`)
})
