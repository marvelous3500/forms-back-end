"use strict";

var mongoose = require('mongoose');

var RoleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  datecreated: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('role', UserSchema);