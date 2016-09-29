import Bin from './bin.js';
import _ from 'underscore';

class SDes {
  static p10(bin) {
    return bin.copy().permute(
      [2, 4, 1, 6, 3, 9, 0, 8, 7, 5]
    );
  }

  static p8(bin) {
    return bin.copy().permute(
      [5, 2, 6, 3, 7, 4, 9, 8]
    );
  }

  static p4(bin) {
    return bin.copy().permute(
      [1, 3, 2, 0]
    );
  }

  static s0(bin) {
    let b = [
      [1, 0, 3, 2],
      [3, 2, 1, 0],
      [0, 2, 1, 3],
      [3, 1, 3, 2]
    ];

    return bin.sbox(b, [0, 3], [1, 2]);
  }

  static s1(bin) {
    let b = [
      [1, 1, 2, 3],
      [2, 0, 1, 3],
      [3, 0, 1, 0],
      [2, 1, 0, 3]
    ];

    return bin.sbox(b, [0, 3], [1, 2]);
  }

  static expand(bin) {
    return bin.copy().permute(
      [3, 0, 1, 2, 1, 2, 3, 0]
    );
  }

  static keys(key) {
    let p10     = this.p10(key);
    let shift_a = this.splitAndShift(p10, 1);
    let shift_b = this.splitAndShift(shift_a, 2);

    return [
      this.p8(shift_a),
      this.p8(shift_b)
    ];
  }

  static splitAndShift(bin, offset) {
    let sa, sb;
    [sa, sb] = bin.split();

    let shift = [
      ...this.shift(sa, offset),
      ...this.shift(sb, offset)
    ];

    return( new Bin(shift) );
  }

  static shift(list, offset) {
    let size = _.size(list);

    return _.map(list, (_, i) => {
      let j  = (i + offset) % size;
      return list[j];
    });
  }

  static sbox(bin) {
    let s0, s1;
    [s0, s1] = bin.split();

    let result = [
      ...this.s0(new Bin(s0)),
      ...this.s1(new Bin(s1))
    ];

    return( new Bin(result) );
  }

  static switchToBin(left, right) {
    return new Bin([
      ...right,
      ...left
    ]);
  }

  static crypt(bin, key) {
    let left, right, expanded, sbox, p4;
    let keys = this.keys(key);
    let encrypt = bin.copy();

    _.each(keys, (k) => {
      [left, right] = encrypt.split();

      expanded = this.expand(new Bin(right));
      expanded.xor(k.normalized);
      sbox = this.sbox(expanded);
      p4   = this.p4(sbox);
      p4.xor(left);

      encrypt = this.switchToBin(p4.normalized, right);
    });

    return encrypt;
  }
}

export default SDes;
