"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = _joi["default"].object().keys({
  username: _joi["default"].string().alphanum().min(2).max(30).required(),
  password: _joi["default"].string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email: _joi["default"].string().email({
    minDomainAtoms: 2
  })
});

exports.userSchema = userSchema;