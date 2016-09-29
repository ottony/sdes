import BufferCrypt from './string_parser.js';
import Bin from './bin.js';
import SDes from './sdes.js';
import _ from 'underscore';

class Sample {
  static show() {
    let raw = new Buffer('|><+-àèìÒù');
    let key = parseInt((Math.random() * 1000));
    let enc = BufferCrypt.sdesEncrypt(key, raw);
    let msg = enc.toString();
    let dec = BufferCrypt.sdesDecrypt(key, enc);

    console.log(`using key ${key}`);

    console.log(`original  = ${raw.toString()}`);
    console.log(`encrypted = ${enc.toString()}`);
    console.log(`decrypted = ${dec.toString()}`);
  }
}

export default Sample;
