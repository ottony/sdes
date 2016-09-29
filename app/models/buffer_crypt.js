import Bin from './bin.js';
import _ from 'underscore';

export default class BufferCrypt {
  static sdesEncrypt(keyRaw, buffer) {
    let key  = new Bin(keyRaw.toString(2), 10);
    let bins = this.toBin(buffer);

    let crypted = _.map(bins, (b) => {
      return b.sdesCrypt(key).toDecimal();
    });

    return new Buffer(crypted);
  }

  static sdesDecrypt(keyRaw, buffer) {
    let key  = new Bin(keyRaw.toString(2), 10);
    let bins = this.toBin(buffer);

    let decrypted = _.map(bins, (b) => {
      return b.sdesDecrypt(key).toDecimal();
    });

    return new Buffer(decrypted);
  }

  static toBin(buffer) {
    return _.map(buffer, (char) => {
      return(new Bin(char.toString(2), 8));
    });
  }
}
