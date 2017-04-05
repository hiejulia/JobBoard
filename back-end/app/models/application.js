'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//create application schema 
let ApplicationSchema = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: 'User'//ref to User schema model 
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'accepted', 'processed']
  },
  job: {
    type: ObjectId,
    required: true,
    ref: 'Job'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
//exports 
module.exports = mongoose.model('Application', ApplicationSchema);