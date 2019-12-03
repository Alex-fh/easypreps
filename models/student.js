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
  // eslint-disable-next-line comma-dangle
  },

/*
 * phone: {
 *   type: [Number],
 *   required: true
 * },
 * isTeen: {
 *   type: Boolean,
 *   default: false
 * },
 * zipcode: {
 *   type: Number,
 *   required: true
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
