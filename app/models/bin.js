import SDes from './sdes.js';
import _ from 'underscore';

export default class Bin {
  constructor(bin, maxSize = _.size(bin)) {
    this.bin = bin;
    this.maxSize = maxSize;
  }

  get size() {
    return this.maxSize;
  }

  get normalized() {
    let bin  = _.clone(this.bin);
    let size = _.size(bin);

    if(_.isArray(bin))
      bin = bin.join('');

    let zeros = '0'.repeat(Math.abs(this.size - size));

    return `${zeros}${bin}`.slice(-this.size).split('');
  }

  split() {
    let normalized = this.normalized;
    let halfSize   = this.size / 2;
    let left  = _.clone(normalized);
    let right = left.splice(halfSize);

    return([left, right]);
  }

  asString() {
    return this.normalized.join('');
  }

  toDecimal() {
    return parseInt(
      parseInt(this.bin,2).toString(10)
    );
  }

  copy() {
    return( new Bin(this.bin, this.maxSize) );
  }

  permute(permutation) {
    let normalized = this.normalized;

    this.bin = _.map(permutation, (i) => {
      return normalized[i];
    }).join('');
    this.maxSize = _.size(permutation);

    return( this );
  }

  xor(list) {
    if(_.size(list) != this.size)
      return this;
    let normalized = this.normalized;

    this.bin = _.map(list, (_b, i) => {
      let b = parseInt(_b);
      let xorResult = (normalized[i] == 1) ? !b : b;

      return (!!xorResult) ? 1 : 0;
    }).join('');

    return this;
  }

  cordinatesToDecimal(cordinates) {
    let normalized = this.normalized;

    let cordinate = _.reduce(cordinates, (c, i) => {
      return `${c}${normalized[i]}`;
    }, '');

    return parseInt(
      parseInt(cordinate, 2).toString(10)
    );
  }

  sbox(box, lineC, columnC) {
    let line   = this.cordinatesToDecimal(lineC);
    let column = this.cordinatesToDecimal(columnC);
    let value  = box[line][column];

    return(
      new Bin(value.toString(2), this.size / 2).normalized
    );
  }

  sdesCrypt(key) {
    return SDes.crypt(this, key);
  }

  sdesDecrypt(key) {
    return SDes.decrypt(this, key);
  }
}
