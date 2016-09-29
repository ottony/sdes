'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdes = require('./sdes.js');

var _sdes2 = _interopRequireDefault(_sdes);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bin = function () {
  function Bin(bin) {
    var maxSize = arguments.length <= 1 || arguments[1] === undefined ? _underscore2.default.size(bin) : arguments[1];

    _classCallCheck(this, Bin);

    this.bin = bin;
    this.maxSize = maxSize;
  }

  _createClass(Bin, [{
    key: 'split',
    value: function split() {
      var normalized = this.normalized;
      var halfSize = this.size / 2;
      var left = _underscore2.default.clone(normalized);
      var right = left.splice(halfSize);

      return [left, right];
    }
  }, {
    key: 'asString',
    value: function asString() {
      return this.normalized.join('');
    }
  }, {
    key: 'toDecimal',
    value: function toDecimal() {
      return parseInt(parseInt(this.bin, 2).toString(10));
    }
  }, {
    key: 'copy',
    value: function copy() {
      return new Bin(this.bin, this.maxSize);
    }
  }, {
    key: 'permute',
    value: function permute(permutation) {
      var normalized = this.normalized;

      this.bin = _underscore2.default.map(permutation, function (i) {
        return normalized[i];
      }).join('');
      this.maxSize = _underscore2.default.size(permutation);

      return this;
    }
  }, {
    key: 'xor',
    value: function xor(list) {
      if (_underscore2.default.size(list) != this.size) return this;
      var normalized = this.normalized;

      this.bin = _underscore2.default.map(list, function (_b, i) {
        var b = parseInt(_b);
        var xorResult = normalized[i] == 1 ? !b : b;

        return !!xorResult ? 1 : 0;
      }).join('');

      return this;
    }
  }, {
    key: 'cordinatesToDecimal',
    value: function cordinatesToDecimal(cordinates) {
      var normalized = this.normalized;

      var cordinate = _underscore2.default.reduce(cordinates, function (c, i) {
        return '' + c + normalized[i];
      }, '');

      return parseInt(parseInt(cordinate, 2).toString(10));
    }
  }, {
    key: 'sbox',
    value: function sbox(box, lineC, columnC) {
      var line = this.cordinatesToDecimal(lineC);
      var column = this.cordinatesToDecimal(columnC);
      var value = box[line][column];

      return new Bin(value.toString(2), this.size / 2).normalized;
    }
  }, {
    key: 'sdesCrypt',
    value: function sdesCrypt(key) {
      return _sdes2.default.crypt(this, key);
    }
  }, {
    key: 'sdesDecrypt',
    value: function sdesDecrypt(key) {
      return _sdes2.default.decrypt(this, key);
    }
  }, {
    key: 'size',
    get: function get() {
      return this.maxSize;
    }
  }, {
    key: 'normalized',
    get: function get() {
      var bin = _underscore2.default.clone(this.bin);
      var size = _underscore2.default.size(bin);

      if (_underscore2.default.isArray(bin)) bin = bin.join('');

      var zeros = '0'.repeat(Math.abs(this.size - size));

      return ('' + zeros + bin).slice(-this.size).split('');
    }
  }]);

  return Bin;
}();

exports.default = Bin;