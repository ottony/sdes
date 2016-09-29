import StringParser from './string_parser.js';
import Bin from './bin.js';
import SDes from './sdes.js';
import _ from 'underscore';

class Main {
  static teste() {
    let raw = new Buffer('|><+-àèìÒù');
    let key = parseInt((Math.random() * 1000));
    let enc = StringParser.sdesEncrypt(key, raw);
    let msg = enc.toString();
    let dec = StringParser.sdesDecrypt(key, enc);

    console.log(`using key ${key}`);

    console.log(`original  = ${raw.toString()}`);
    console.log(`encrypted = ${enc.toString()}`);
    console.log(`decrypted = ${dec.toString()}`);
  }
}

export default Main;
