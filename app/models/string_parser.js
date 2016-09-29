import Bin from './bin.js';
import _ from 'underscore';

class StringParser {
  static toBin(raw) {
    let buffer = new Buffer(raw)

    return _.map(buffer, (char) => {
      return(new Bin(char.toString(2), 8));
    });
  }
}

export default StringParser;
