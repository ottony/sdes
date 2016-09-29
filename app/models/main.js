import StringParser from './string_parser.js';
import Bin from './bin.js';
import SDes from './sdes.js';
import _ from 'underscore';

class Main {
  static teste() {
    let key = new Bin('0010010111');
    /*
     *let buffer = StringParser.toBin('Ottony|Lizza');
     */

/*
 *    let message = new Buffer(_.map(buffer, (b) => {
 *      return parseInt(b.sdesCrypt(key).asString(), 2).toString(10);
 *    }));
 *
 */
    let first = new Bin('10100101');
    let firstEnc = first.sdesCrypt(key);
    let firstDec = firstEnc.sdesDecrypt(key);
    console.log(`initial   = ${first.asString()}`);
    console.log(`encrypted = ${firstEnc.asString()}`);
    console.log(`decrypted = ${firstDec.asString()}`);
  }
}

export default Main;
