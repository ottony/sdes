import SDes from './sdes.js';
import _ from 'underscore';

class Bin {
  constructor(bin, maxSize = 10) {
    this.bin = bin;
    this.maxSize = maxSize;
  }

  get size() {
    return this.maxSize;
  }

  get normalized() {
    let bin = _.clone(this.bin);
    if(_.isArray(bin)) {
      if(_.size(bin) == this.size) return bin;

      bin = bin.join('');
    }

    return `${'0'.repeat(this.size)}${ bin }`.slice(-this.size).split('');
  }

  split() {
    let normalized =        this.normalized;
    let halfSize = this.size / 2;
    let left  = _.clone(normalized);
    let right = left.splice(halfSize);

    return([left,         right]);
  }

  asString() {
    return this.normalized.join('');
  }

  toChar() {
    let ascii = parseInt(this.bin,2).toString(10);

    return String.fromCharCode(ascii);
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

    this.bin = _.map(list, (b, i) => {
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

    return box[line][column];
  }

  sdesCrypt(k1, k2) {
    return SDes.crypt(this, k1, k2);
  }
}

export default Bin;
