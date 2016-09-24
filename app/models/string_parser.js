import Bin from './bin.js';
import _ from 'underscore';

class StringParser {
  static toBin(raw, max = 10) {
    let chars = raw.toString().split('');

    return _.map(chars, (char) => {
      let bin           = char.charCodeAt().toString(2);
      return( new Bin(bin, max) );
    });
  }
}

export default StringParser;
