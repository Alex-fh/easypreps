/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.render('crm', {
    isAbout: true,
    isCrm: true,
    title: 'CRM'
  })
})

router.get('/login', function (req, res) {
  res.render('crm', {
    isCrm: true,
    isLogin: true,
    title: 'CRM'
  })
})

router.get('/register', function (req, res) {
  res.render('crm', {
    isCrm: true,
    isRegister: true,
    title: 'CRM'
  })
})

router.get('/message', function (req, res) {
  res.render('crm', {
    isCrm: true,
    isMessage: true,
    title: 'CRM'
  })
})

module.exports = router
