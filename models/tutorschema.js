/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
/* eslint-disable sort-keys */

const mongoose = require('mongoose')

const {Schema, model} = mongoose

const TutorSchema = new Schema({
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
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true
  },
  zipcode: {
   type: String,
   required: true,
   trim: true
  },
  bio: {
    type: String,
    required: true,
    trim: true
   },
   inputdate: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Tutor', TutorSchema)
