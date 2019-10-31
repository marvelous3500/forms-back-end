"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserByUserName = getUserByUserName;
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.delectUser = delectUser;
exports.userExit = userExit;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.searchUser = searchUser;

var userService = _interopRequireWildcard(require("../service/userService"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getUserByUserName(_x) {
  return _getUserByUserName.apply(this, arguments);
}

function _getUserByUserName() {
  _getUserByUserName = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(username) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", userService.getUserByUserName(username));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUserByUserName.apply(this, arguments);
}

function getAllUsers() {
  return _getAllUsers.apply(this, arguments);
}

function _getAllUsers() {
  _getAllUsers = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", userService.getAllUsers());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getAllUsers.apply(this, arguments);
}

function addUser(_x2) {
  return _addUser.apply(this, arguments);
}

function _addUser() {
  _addUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(user) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", userService.addUser(user));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _addUser.apply(this, arguments);
}

function delectUser(_x3) {
  return _delectUser.apply(this, arguments);
}

function _delectUser() {
  _delectUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_id) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", userService.deleteUser(_id));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _delectUser.apply(this, arguments);
}

function userExit(_x4) {
  return _userExit.apply(this, arguments);
}

function _userExit() {
  _userExit = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(username) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", userService.userExit(username));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _userExit.apply(this, arguments);
}

function getUserById(_x5) {
  return _getUserById.apply(this, arguments);
}

function _getUserById() {
  _getUserById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(_id) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", userService.getUerById(_id));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getUserById.apply(this, arguments);
}

function updateUser(_x6, _x7) {
  return _updateUser.apply(this, arguments);
} //todo  refactor add pagenation


function _updateUser() {
  _updateUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(_id, user) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", userService.updateUser(_id, user));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _updateUser.apply(this, arguments);
}

function searchUser(_x8) {
  return _searchUser.apply(this, arguments);
}

function _searchUser() {
  _searchUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(param) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", userService.searchUser(param));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _searchUser.apply(this, arguments);
}