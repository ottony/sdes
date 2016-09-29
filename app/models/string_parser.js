import Bin from './bin.js';
import _ from 'underscore';

class StringParser {
  static sdesEncrypt(keyRaw, raw, encoding = '') {
    let key  = new Bin(keyRaw, 10);
    let bins = this.toBin(raw);

    let crypted = _.map(bins, (b) => {
      return b.sdesCrypt(key).toDecimal();
    });

    return new Buffer(crypted);
  }

  static sdesDecrypt(keyRaw, raw, encoding = '') {
    let key  = new Bin(keyRaw, 10);
    let bins = this.toBin(raw, encoding);

    let decrypted = _.map(bins, (b) => {
      return b.sdesDecrypt(key).toDecimal();
    });

    return new Buffer(decrypted, encoding);
  }

  static toBin(raw, encoding = '') {
    let buffer = new Buffer(raw, encoding);

    return _.map(buffer, (char) => {
      return(new Bin(char.toString(2), 8));
    });
  }
}

export default StringParser;
