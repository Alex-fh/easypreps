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
  phone: {
    type: Number
  },
  email: {
    type: String
  },
  zipcode: {
   type: Number,
   required: true
  },
  address: {
    type: String,
    required: true
  },
  isteen: {
    type: String,
    default: 'off'
  },
  pfirstname: {
    type: String
  },
  plastname: {
    type: String
  },
  pphone: {
    type: Number
  },
  pemail: {
    type: String
  }

  /*
   * bio: {
   *   type: String,
   *   required: true
   *  }
   */

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
