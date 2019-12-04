/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.render('admin', {
    isAdmin: true,
    isProfile: true,
    title: 'Admin'
  })
})

router.get('/newmanager', function (req, res) {
  res.render('admin', {
    isAdmin: true,
    isNewmanager: true,
    title: 'Admin'
  })
})

router.get('/managers', function (req, res) {
  res.render('admin', {
    isAdmin: true,
    isManagers: true,
    title: 'Admin'
  })
})

router.get('/datacheck', function (req, res) {
  res.render('admin', {
    isAdmin: true,
    isDatacheck: true,
    title: 'Admin'
  })
})

module.exports = router
