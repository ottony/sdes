import StringParser from './string_parser.js';
import Bin from './bin.js';
import SDes from './sdes.js';
import _ from 'underscore';

class Main {
  static teste() {
    let raw = new Buffer('|><+-àèìÒù');
    let key = '0010010111';
    let enc = StringParser.sdesEncrypt(key, raw);
    let msg = enc.toString();
    let dec = StringParser.sdesDecrypt(key, enc);

    console.log(raw.toString());
    console.log(enc.toString());
    console.log(dec.toString());
  }
}

export default Main;
