/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()
const Student = require('../models/studentschema')
const Tutor = require('../models/tutorschema')

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

router.get('/students', async function (req, res) {

  try {
      const students = await Student.find()

      console.log(students)

      res.render('manager', {
        isManager: true,
        isStudents: true,
        title: 'Manager',
        // eslint-disable-next-line sort-keys
        students
      })

   } catch (error) {
    console.log(error)
   }
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
    phone: req.body.studentphone,
    // eslint-disable-next-line sort-keys
    email: req.body.studentemail,
    zipcode: req.body.studentzip,
    // eslint-disable-next-line sort-keys
    address: req.body.studentaddress,
    isteen: req.body.studentisteen,
    pfirstname: req.body.primaryfirstname,
    plastname: req.body.primarylastname,
    pphone: req.body.primaryphone,
    // eslint-disable-next-line sort-keys
    pemail: req.body.primaryemail
  })

  await student.save()

  res.redirect('/manager/newstudent')
})

router.post('/addtutor', async function (req, res) {
  console.log(req.body)

  const tutor = new Tutor({
    firstname: req.body.tutorfirstname,
    lastname: req.body.tutorlastname,
    // eslint-disable-next-line sort-keys
    email: req.body.tutoremail,
    phone: req.body.tutorphone,
    zipcode: req.body.tutorzip,
    // eslint-disable-next-line sort-keys
    bio: req.body.tutorbio
  })

  await tutor.save()

  res.redirect('/manager/newtutor')
})

module.exports = router
