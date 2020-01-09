/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()
const Student = require('../models/studentschema')
const Tutor = require('../models/tutorschema')

// eslint-disable-next-line prefer-const
  let numrows = 5
  let sortby = {}
  let findby = {}
  // eslint-disable-next-line no-unused-vars
  let fb = false

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

// eslint-disable-next-line max-statements
router.post('/findstudent', async function (req, res) {
  const {point} = req.body
  const {value} = req.body
  let wrong = true
  let idd = 0

  try {
  const sample = await Student.find({[point]: value})

  // eslint-disable-next-line no-undefined
  if (value === '' || value === undefined || sample.length !== 1) {
    wrong = true
  } else {
    wrong = false
    idd = sample[0].id
  }

  res.render('manager', {
    isManager: true,
    isNewwork: true,
    title: 'Manager',
    wrong,
    // eslint-disable-next-line sort-keys
    idd
  })
} catch (error) {
  console.log(error)
}
})

router.get('/newwork', function (req, res) {
  res.render('manager', {
    isManager: true,
    isNewwork: true,
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

router.post('/rowsnumber', function (req, res) {
  numrows = Number(req.body.rowsnumber)
  res.redirect('/manager/students/1')
})

router.post('/findby', function (req, res) {
  const {point} = req.body
  const {value} = req.body

  // eslint-disable-next-line no-undefined
   if (point === undefined || point === '') {
     findby = {}
     fb = false
   } else {
       findby = {[point]: value}
       fb = true
   }
  res.redirect('/manager/students/1')
})

router.post('/sortby', function (req, res) {
  const zzz = req.body.znach
  const {acdec} = req.body

    // eslint-disable-next-line no-ternary
    const ad = acdec === 'ac'
    ? 1
    : -1

  // eslint-disable-next-line no-undefined
  if (zzz === undefined || zzz === '') {
    sortby = {}
  } else {
      sortby = {[zzz]: ad}
  }
  res.redirect('/manager/students/1')
})

router.get('/students/:np', async function (req, res) {
  try {
    const {np} = req.params

    const numstudents = await Student.find(findby).countDocuments()
    // eslint-disable-next-line newline-per-chained-call
  const students = await
  // eslint-disable-next-line newline-per-chained-call
  Student.find(findby).sort(sortby).skip((np - 1) * numrows).limit(numrows)

    // eslint-disable-next-line no-ternary
   const pagitems = numstudents % numrows
   // eslint-disable-next-line multiline-ternary
   ? Math.ceil(numstudents / numrows) : numstudents / numrows

      res.render('manager', {
        isManager: true,
        isStudents: true,
        title: 'Manager',
        // eslint-disable-next-line sort-keys
        students,
        // eslint-disable-next-line sort-keys
        numstudents,
        // eslint-disable-next-line sort-keys
        numrows,
        pagitems,
        // eslint-disable-next-line sort-keys
        np
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
