'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bin = require('./bin.js');

var _bin2 = _interopRequireDefault(_bin);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SDes = function () {
  function SDes() {
    _classCallCheck(this, SDes);
  }

  _createClass(SDes, null, [{
    key: 'p10',
    value: function p10(bin) {
      return bin.copy().permute([2, 4, 1, 6, 3, 9, 0, 8, 7, 5]);
    }
  }, {
    key: 'p8',
    value: function p8(bin) {
      return bin.copy().permute([5, 2, 6, 3, 7, 4, 9, 8]);
    }
  }, {
    key: 'p4',
    value: function p4(bin) {
      return bin.copy().permute([1, 3, 2, 0]);
    }
  }, {
    key: 'ip',
    value: function ip(bin) {
      return bin.copy().permute([1, 5, 2, 0, 3, 7, 4, 6]);
    }
  }, {
    key: 'inverse_ip',
    value: function inverse_ip(bin) {
      return bin.copy().permute([3, 0, 2, 4, 6, 1, 7, 5]);
    }
  }, {
    key: 's0',
    value: function s0(bin) {
      var b = [[1, 0, 3, 2], [3, 2, 1, 0], [0, 2, 1, 3], [3, 1, 3, 2]];

      return bin.sbox(b, [0, 3], [1, 2]);
    }
  }, {
    key: 's1',
    value: function s1(bin) {
      var b = [[1, 1, 2, 3], [2, 0, 1, 3], [3, 0, 1, 0], [2, 1, 0, 3]];

      return bin.sbox(b, [0, 3], [1, 2]);
    }
  }, {
    key: 'expand',
    value: function expand(bin) {
      return bin.copy().permute([3, 0, 1, 2, 1, 2, 3, 0]);
    }
  }, {
    key: 'keys',
    value: function keys(key) {
      var p10 = this.p10(key);
      var shift_a = this.splitAndShift(p10, 1);
      var shift_b = this.splitAndShift(shift_a, 2);

      return [this.p8(shift_a), this.p8(shift_b)];
    }
  }, {
    key: 'splitAndShift',
    value: function splitAndShift(bin, offset) {
      var sa = void 0,
          sb = void 0;

      var _bin$split = bin.split();

      var _bin$split2 = _slicedToArray(_bin$split, 2);

      sa = _bin$split2[0];
      sb = _bin$split2[1];


      var shift = [].concat(_toConsumableArray(this.shift(sa, offset)), _toConsumableArray(this.shift(sb, offset)));

      return new _bin2.default(shift);
    }
  }, {
    key: 'shift',
    value: function shift(list, offset) {
      var size = _underscore2.default.size(list);

      return _underscore2.default.map(list, function (_, i) {
        var j = (i + offset) % size;
        return list[j];
      });
    }
  }, {
    key: 'sbox',
    value: function sbox(bin) {
      var _bin$split3 = bin.split();

      var _bin$split4 = _slicedToArray(_bin$split3, 2);

      var s0 = _bin$split4[0];
      var s1 = _bin$split4[1];


      var result = [].concat(_toConsumableArray(this.s0(new _bin2.default(s0))), _toConsumableArray(this.s1(new _bin2.default(s1))));

      return new _bin2.default(result);
    }
  }, {
    key: 'switch',
    value: function _switch(bin) {
      var _bin$split5 = bin.split();

      var _bin$split6 = _slicedToArray(_bin$split5, 2);

      var left = _bin$split6[0];
      var right = _bin$split6[1];


      return new _bin2.default([].concat(_toConsumableArray(right), _toConsumableArray(left)));
    }
  }, {
    key: 'fk',
    value: function fk(bin, k) {
      var expanded = void 0,
          sbox = void 0,
          p4 = void 0;

      var _bin$split7 = bin.split();

      var _bin$split8 = _slicedToArray(_bin$split7, 2);

      var left = _bin$split8[0];
      var right = _bin$split8[1];


      expanded = this.expand(new _bin2.default(right));
      expanded.xor(k.normalized);
      sbox = this.sbox(expanded);
      p4 = this.p4(sbox);
      p4.xor(left);

      return new _bin2.default([].concat(_toConsumableArray(p4.normalized), _toConsumableArray(right)));
    }
  }, {
    key: 'crypt',
    value: function crypt(bin, key) {
      var _keys = this.keys(key);

      var _keys2 = _slicedToArray(_keys, 2);

      var k1 = _keys2[0];
      var k2 = _keys2[1];


      var ip = this.ip(bin.copy());
      var fk1 = this.fk(ip, k1);
      var sw = this.switch(fk1);
      var fk2 = this.fk(sw, k2);

      return this.inverse_ip(fk2);
    }
  }, {
    key: 'decrypt',
    value: function decrypt(bin, key) {
      var _keys3 = this.keys(key);

      var _keys4 = _slicedToArray(_keys3, 2);

      var k1 = _keys4[0];
      var k2 = _keys4[1];


      var ip = this.ip(bin.copy());
      var fk2 = this.fk(ip, k2);
      var sw = this.switch(fk2);
      var fk1 = this.fk(sw, k1);

      return this.inverse_ip(fk1);
    }
  }]);

  return SDes;
}();

exports.default = SDes;