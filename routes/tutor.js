/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.render('tutor', {
    isProfile: true,
    isTutor: true,
    title: 'Profile'
  })
})

router.get('/getwork', function (req, res) {
  res.render('tutor', {
    isGetwork: true,
    isTutor: true,
    title: 'Get Work'
  })
})

router.get('/planmeeting', function (req, res) {
  res.render('tutor', {
    isPlanmeeting: true,
    isTutor: true,
    title: 'Plan Meeting'
  })
})

router.get('/writereport', function (req, res) {
  res.render('tutor', {
    isTutor: true,
    isWritereport: true,
    title: 'Write Report'
  })
})

router.get('/summary', function (req, res) {
  res.render('tutor', {
    isSummary: true,
    isTutor: true,
    title: 'Summary'
  })
})

module.exports = router
