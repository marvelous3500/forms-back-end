"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = getToken;
exports.verifyHeader = verifyHeader;
exports.generateToken = generateToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var users = _interopRequireWildcard(require("../service/userService"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getToken(_x, _x2, _x3) {
  return _getToken.apply(this, arguments);
}

function _getToken() {
  _getToken = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var username, user, payload;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = req.body.username;
            _context.prev = 1;
            _context.next = 4;
            return users.getUserByUserName(username);

          case 4:
            user = _context.sent;

            // todo add validated 
            if (typeof user.username !== 'undefined') {
              payload = {
                user: {
                  id: user.id
                }
              };

              _jsonwebtoken["default"].sign(payload, 'secret', {
                expiresIn: 360000
              }, function (err, token) {
                if (err) throw err.message;
                res.json({
                  token: token
                });
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.json({
              message: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _getToken.apply(this, arguments);
}

function verifyHeader(req, res, next) {
  var token = req.headers['access-token'];

  if (token) {
    _jsonwebtoken["default"].verify(token, 'Secretkey', function (err, decoded) {
      if (err) {
        res.json({
          message: 'Invalid token Signature'
        });
      } else {
        next();
      }
    });
  } else {
    res.send({
      message: 'No token provided.'
    });
    next();
  }
}

function generateToken(user) {
  try {
    var payload = {
      user: {
        id: user.id
      }
    };

    var generatedToken = _jsonwebtoken["default"].sign(payload, 'secret', {
      expiresIn: '1h'
    });

    return generatedToken;
  } catch (error) {
    throw error.message;
  }
}