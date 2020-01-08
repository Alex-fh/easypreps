/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
/* eslint-disable sort-keys */

const mongoose = require('mongoose')

const {Schema, model} = mongoose

const WorkSchema = new Schema({
  student: {
    _id: mongoose.Schema.Types.ObjectId
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  subsubject: {
    type: String,
    required: true,
    trim: true
  },
  enrollhours: {
    type: Number,
    required: true
  },
  remainhours: {
    type: Number,
    required: true
  },
  inputdate: {
    type: Date,
    default: Date.now
  },
  tutor: [{_id: mongoose.Schema.Types.ObjectId}]
})

module.exports = model('Work', WorkSchema)
