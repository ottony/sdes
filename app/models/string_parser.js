import Bin from './bin.js';
import _ from 'underscore';

class StringParser {
  static toBin(raw, max = 10) {
    let buffer = new Buffer(raw)

    return _.map(buffer, (char) => {
      return(new Bin(char.toString(2)));
    });
  }
}

export default StringParser;
