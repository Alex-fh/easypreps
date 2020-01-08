/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
/* eslint-disable sort-keys */

const mongoose = require('mongoose')

const {Schema, model} = mongoose

const StudentSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number
  },
  email: {
    type: String,
    trim: true
  },
  zipcode: {
   type: String,
   required: true,
   trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  inputdate: {
    type: Date,
    default: Date.now
  },
  isteen: {
    type: String,
    default: 'off'
  },
  pfirstname: {
    type: String,
    trim: true
  },
  plastname: {
    type: String,
    trim: true
  },
  pphone: {
    type: Number
  },
  pemail: {
    type: String,
    trim: true
  }

  /*
   * bio: {
   *   type: String,
   *   required: true
   *  }
   */

})

module.exports = model('Student', StudentSchema)
