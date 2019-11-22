/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable quote-props */
const {Router} = require('express')
const router = Router()

router.get('/', function (req, res) {
  res.render('crm', {
    isCrm: true,
    title: 'CRM'
  })
})

module.exports = router
