/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.render('tutor', {
    isProfile: true,
    isTutor: true,
    title: 'Tutor'
  })
})

router.get('/getjob', function (req, res) {
  res.render('tutor', {
    isGetjob: true,
    isTutor: true,
    title: 'Tutor'
  })
})

router.get('/planmeeting', function (req, res) {
  res.render('tutor', {
    isPlanmeeting: true,
    isTutor: true,
    title: 'Tutor'
  })
})

router.get('/writereport', function (req, res) {
  res.render('tutor', {
    isTutor: true,
    isWritereport: true,
    title: 'Tutor'
  })
})

router.get('/summary', function (req, res) {
  res.render('tutor', {
    isSummary: true,
    isTutor: true,
    title: 'Tutor'
  })
})

module.exports = router
