import StringParser from './string_parser.js';
import Bin from './bin.js';
import SDes from './sdes.js';
import _ from 'underscore';

class Main {
  static teste() {
    let binList = StringParser.toBin("Ottony");

    console.log( _.map(binList, (b) => { return b.toChar(); }).join('') );

    let k1, k2;
    [k1, k2] = SDes.keys(new Bin('1010000010'));

    console.log('k1:');
    console.log(k1.asString());
    console.log('k2:');
    console.log(k2.asString());
    console.log('sbox:');
    console.log(SDes.sbox(
        new Bin('00101011')
      ).asString()
    );
  }
}

export default Main;
