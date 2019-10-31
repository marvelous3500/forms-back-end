"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = addUser;
exports.userExit = userExit;
exports.getUserByUserName = getUserByUserName;
exports.getAllUsers = getAllUsers;
exports.deleteUser = deleteUser;
exports.getUerById = getUerById;
exports.updateUser = updateUser;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = require('../models/user');
/**
     * this method should be use to save/register user.
     * @return  created User.
     * @param User object.
*/


function addUser(_x) {
  return _addUser.apply(this, arguments);
}
/**
    * this method should be use to check if a user exit in the  database.
    * @return  true if user exists in the database
    * @param username
    * 
*/


function _addUser() {
  _addUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(user) {
    var _user, username, email, password, createdUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _user = user, username = _user.username, email = _user.email, password = _user.password;
            user = new User({
              username: username,
              email: email,
              password: password
            });
            _context.next = 4;
            return user.save();

          case 4:
            createdUser = _context.sent;
            return _context.abrupt("return", createdUser);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addUser.apply(this, arguments);
}

function userExit(_x2) {
  return _userExit.apply(this, arguments);
}
/**
     * this method should be use to get a user by username.
     * @return   user
     * @param username
     * 
   */


function _userExit() {
  _userExit = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(username) {
    var userExit;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return User.exists({
              username: username
            });

          case 2:
            userExit = _context2.sent;
            return _context2.abrupt("return", userExit);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _userExit.apply(this, arguments);
}

function getUserByUserName(_x3) {
  return _getUserByUserName.apply(this, arguments);
}
/**
     * this method should be use to get all users.
     * 
   */


function _getUserByUserName() {
  _getUserByUserName = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(username) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return User.findOne({
              username: username
            }).select('-password');

          case 2:
            user = _context3.sent;
            return _context3.abrupt("return", user);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getUserByUserName.apply(this, arguments);
}

function getAllUsers() {
  return _getAllUsers.apply(this, arguments);
}
/**
     * this method should be use to delete a user by username.
     * @return user
     * @param id
     * 
*/


function _getAllUsers() {
  _getAllUsers = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var users;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            users = User.find().select('-password');
            return _context4.abrupt("return", users);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getAllUsers.apply(this, arguments);
}

function deleteUser(_x4) {
  return _deleteUser.apply(this, arguments);
}
/**
     * this method should be use to get a user by id.
     * @return user
     * @param id
     * 
*/


function _deleteUser() {
  _deleteUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_id) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return User.deleteOne({
              _id: _id
            });

          case 3:
            _context5.next = 8;
            break;

          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 5]]);
  }));
  return _deleteUser.apply(this, arguments);
}

function getUerById(_x5) {
  return _getUerById.apply(this, arguments);
}
/**
     * this method should be use to update a user.
     * @return  updatedUser
     * @param  id, user
     * 
   */


function _getUerById() {
  _getUerById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(_id) {
    var user;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return User.findById({
              _id: _id
            }).select('-password');

          case 3:
            user = _context6.sent;
            return _context6.abrupt("return", user);

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            throw _context6.t0;

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return _getUerById.apply(this, arguments);
}

function updateUser(_x6, _x7) {
  return _updateUser.apply(this, arguments);
} // export async function search(param) {
//   // todo refator this method to use pagenation
//   param.toLowerCase()
//  let users =  await User.find({param:param})
//  return users
// }


function _updateUser() {
  _updateUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(_id, user) {
    var payload, updatedUser;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            payload = {
              username: user.username,
              password: user.password,
              email: user.email,
              status: user.status,
              datecreated: user.datecreated
            };
            _context7.next = 4;
            return User.update({
              _id: _id
            }, {
              payload: payload
            }, {
              upsert: true
            });

          case 4:
            updatedUser = getUerById(_id);
            return _context7.abrupt("return", updatedUser);

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            throw _context7.t0;

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _updateUser.apply(this, arguments);
}