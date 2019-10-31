"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    "default": "change-it"
  },
  status: {
    type: String,
    required: true,
    "default": "INACTIVE"
  },
  datecreated: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('user', UserSchema);