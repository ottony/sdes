import StringParser from './string_parser.js';
import Bin from './bin.js';
import SDes from './sdes.js';
import _ from 'underscore';

class Main {
  static teste() {
    let key = new Bin('1010000010');
    let buffer = StringParser.toBin('Ottony|Lizza');

    let message = new Buffer(_.map(buffer, (b) => {
      return parseInt(SDes.crypt(b, key).asString(), 2).toString(10);
    }));
    console.log(message.toString('binary'));
  }
}

export default Main;
