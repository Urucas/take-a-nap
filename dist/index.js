"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nap = exports.sleep = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var nap = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var time = arguments.length <= 0 || arguments[0] === undefined ? 1000 : arguments[0];
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sleep(time);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function nap(_x) {
    return ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sleep = function sleep(time) {
  return new _promise2.default(function (res, rej) {
    setTimeout(function (_) {
      res();
    }, time);
  });
};

exports.sleep = sleep;
exports.nap = nap;