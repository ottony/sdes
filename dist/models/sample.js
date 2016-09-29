'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _string_parser = require('./string_parser.js');

var _string_parser2 = _interopRequireDefault(_string_parser);

var _bin = require('./bin.js');

var _bin2 = _interopRequireDefault(_bin);

var _sdes = require('./sdes.js');

var _sdes2 = _interopRequireDefault(_sdes);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sample = function () {
  function Sample() {
    _classCallCheck(this, Sample);
  }

  _createClass(Sample, null, [{
    key: 'show',
    value: function show() {
      var raw = new Buffer('|><+-àèìÒù');
      var key = parseInt(Math.random() * 1000);
      var enc = _string_parser2.default.sdesEncrypt(key, raw);
      var msg = enc.toString();
      var dec = _string_parser2.default.sdesDecrypt(key, enc);

      console.log('using key ' + key);

      console.log('original  = ' + raw.toString());
      console.log('encrypted = ' + enc.toString());
      console.log('decrypted = ' + dec.toString());
    }
  }]);

  return Sample;
}();

exports.default = Sample;