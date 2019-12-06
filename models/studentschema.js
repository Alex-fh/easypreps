/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
/* eslint-disable sort-keys */

const mongoose = require('mongoose')

const {Schema, model} = mongoose

const StudentSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  zipcode: {
   type: Number,
   required: true
  },
  bio: {
    type: String,
    required: true
   }

 /*
  * isTeen: {
  *   type: Boolean,
  *   default: false
  * },
  * pfirstname: {
  *   type: String
  * },
  * plastname: {
  *   type: String
  * },
  * pemail: {
  *   type: String
  * },
  * pphone: {
  *   type: [Number]
  * }
  */

})

module.exports = model('Student', StudentSchema)
