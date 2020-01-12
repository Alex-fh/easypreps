/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.render('student', {
    isProfile: true,
    isStudent: true,
    title: 'Profile'
  })
})

router.get('/sendrequest', function (req, res) {
  res.render('student', {
    isSendrequest: true,
    isStudent: true,
    title: 'Send Request'
  })
})

router.get('/calendar', function (req, res) {
  res.render('student', {
    isCalendar: true,
    isStudent: true,
    title: 'Calendar'
  })
})

router.get('/summary', function (req, res) {
  res.render('student', {
    isStudent: true,
    isSummary: true,
    title: 'Summary'
  })
})

module.exports = router
