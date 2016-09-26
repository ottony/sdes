'use strict';

var _http = require('http');

var _main = require('./models/main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _http.createServer)(function (request, response) {

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello NSA! \n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
_main2.default.teste();