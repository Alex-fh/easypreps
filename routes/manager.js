/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.render('manager', {
    isManager: true,
    title: 'Manager'
  })
})

router.get('/newtutor', function (req, res) {
  res.render('manager', {
    isNewtutor: true,
    title: 'Manager'
  })
})

module.exports = router
