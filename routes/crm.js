/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.render('crm', {
    isAbout: true,
    isCrm: true,
    title: 'About'
  })
})

router.get('/login', function (req, res) {
  res.render('crm', {
    isCrm: true,
    isLogin: true,
    title: 'Login'
  })
})

router.get('/register', function (req, res) {
  res.render('crm', {
    isCrm: true,
    isRegister: true,
    title: 'Register'
  })
})

router.get('/message', function (req, res) {
  res.render('crm', {
    isCrm: true,
    isMessage: true,
    title: 'Message'
  })
})

module.exports = router
