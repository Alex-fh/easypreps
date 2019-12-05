/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()
const Student = require('../models/studentschema')

router.get('/', function (req, res) {
  res.render('manager', {
    isManager: true,
    isProfile: true,
    title: 'Manager'
  })
})

router.get('/newstudent', function (req, res) {
  res.render('manager', {
    isManager: true,
    isNewstudent: true,
    title: 'Manager'
  })
})

router.get('/newtutor', function (req, res) {
  res.render('manager', {
    isManager: true,
    isNewtutor: true,
    title: 'Manager'
  })
})

router.get('/newjob', function (req, res) {
  res.render('manager', {
    isManager: true,
    isNewjob: true,
    title: 'Manager'
  })
})

router.get('/match', function (req, res) {
  res.render('manager', {
    isManager: true,
    isMatch: true,
    title: 'Manager'
  })
})

router.get('/check', function (req, res) {
  res.render('manager', {
    isCheck: true,
    isManager: true,
    title: 'Manager'
  })
})

router.get('/students', function (req, res) {
  res.render('manager', {
    isManager: true,
    isStudents: true,
    title: 'Manager'
  })
})

router.get('/tutors', function (req, res) {
  res.render('manager', {
    isManager: true,
    isTutors: true,
    title: 'Manager'
  })
})

router.get('/calendars', function (req, res) {
  res.render('manager', {
    isCalendars: true,
    isManager: true,
    title: 'Manager'
  })
})

router.get('/reports', function (req, res) {
  res.render('manager', {
    isManager: true,
    isReports: true,
    title: 'Manager'
  })
})

router.post('/addstudent', async function (req, res) {
  console.log(req.body)

  const student = new Student({
    firstname: req.body.studentfirstname,
    lastname: req.body.studentlastname,
    // eslint-disable-next-line sort-keys
    email: req.body.studentemail,
    phone: req.body.studentphone
  })

  await student.save()

  res.redirect('/manager/newstudent')
})

module.exports = router
