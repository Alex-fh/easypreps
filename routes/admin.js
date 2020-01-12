/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()
const Manager = require('../models/managerschema')

router.get('/', function (req, res) {
  res.render('admin', {
    isAdmin: true,
    isProfile: true,
    title: 'Profile'
  })
})

router.get('/newmanager', function (req, res) {
  res.render('admin', {
    isAdmin: true,
    isNewmanager: true,
    title: 'New Manager'
  })
})

router.get('/managers', function (req, res) {
  res.render('admin', {
    isAdmin: true,
    isManagers: true,
    title: 'Managers'
  })
})

router.get('/datacheck', function (req, res) {
  res.render('admin', {
    isAdmin: true,
    isDatacheck: true,
    title: 'Data Check'
  })
})

router.post('/addmanager', async function (req, res) {
  console.log(req.body)

  const manager = new Manager({
    firstname: req.body.managerfirstname,
    lastname: req.body.managerlastname,
    phone: req.body.managerphone,
    // eslint-disable-next-line sort-keys
    email: req.body.manageremail,
    zipcode: req.body.managerzip,
    // eslint-disable-next-line sort-keys
    jobtitle: req.body.managerjob
  })

  await manager.save()

  res.redirect('/admin/newmanager')
})

module.exports = router
