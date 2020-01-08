/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
/* eslint-disable sort-keys */

const mongoose = require('mongoose')

const {Schema, model} = mongoose

const ManagerSchema = new Schema({
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
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  zipcode: {
   type: String,
   required: true,
   trim: true
  },
  jobtitle: {
    type: String,
    trim: true
   },
   inputdate: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Manager', ManagerSchema)
