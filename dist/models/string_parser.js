'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bin = require('./bin.js');

var _bin2 = _interopRequireDefault(_bin);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringParser = function () {
  function StringParser() {
    _classCallCheck(this, StringParser);
  }

  _createClass(StringParser, null, [{
    key: 'toBin',
    value: function toBin(raw) {
      var max = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

      var buffer = new Buffer(raw);

      return _underscore2.default.map(buffer, function (char) {
        return new _bin2.default(char.toString(2), max);
      });
    }
  }]);

  return StringParser;
}();

exports.default = StringParser;