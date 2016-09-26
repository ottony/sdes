'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, null, [{
    key: 'teste',
    value: function teste() {
      var binList = _string_parser2.default.toBin("Ottony");

      console.log(_underscore2.default.map(binList, function (b) {
        return b.toChar();
      }).join(''));

      var k1 = void 0,
          k2 = void 0;

      var _SDes$keys = _sdes2.default.keys(new _bin2.default('1010000010'));

      var _SDes$keys2 = _slicedToArray(_SDes$keys, 2);

      k1 = _SDes$keys2[0];
      k2 = _SDes$keys2[1];


      console.log(k1.asString());
      console.log(k2.asString());
      console.log(_sdes2.default.sbox(new _bin2.default('00101011', 8)).asString());
    }
  }]);

  return Main;
}();

exports.default = Main;