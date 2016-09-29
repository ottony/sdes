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

var BufferCrypt = function () {
  function BufferCrypt() {
    _classCallCheck(this, BufferCrypt);
  }

  _createClass(BufferCrypt, null, [{
    key: 'sdesEncrypt',
    value: function sdesEncrypt(keyRaw, buffer) {
      var key = new _bin2.default(keyRaw.toString(2), 10);
      var bins = this.toBin(buffer);

      var crypted = _underscore2.default.map(bins, function (b) {
        return b.sdesCrypt(key).toDecimal();
      });

      return new Buffer(crypted);
    }
  }, {
    key: 'sdesDecrypt',
    value: function sdesDecrypt(keyRaw, buffer) {
      var key = new _bin2.default(keyRaw.toString(2), 10);
      var bins = this.toBin(buffer);

      var decrypted = _underscore2.default.map(bins, function (b) {
        return b.sdesDecrypt(key).toDecimal();
      });

      return new Buffer(decrypted);
    }
  }, {
    key: 'toBin',
    value: function toBin(buffer) {
      return _underscore2.default.map(buffer, function (char) {
        return new _bin2.default(char.toString(2), 8);
      });
    }
  }]);

  return BufferCrypt;
}();

exports.default = BufferCrypt;