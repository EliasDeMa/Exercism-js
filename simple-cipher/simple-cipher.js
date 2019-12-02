//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// needed to calculate correct modulo for negative numbers
const mod = (x, y) => ((x % y) + y) % y;

export class Cipher {
  constructor(key = "abcdefghijklmno") {
    this._key = key;
  }

  encode(message) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
      let letterCode = message.charCodeAt(i) - 97
        + Cipher.offset(this.key[i % this._key.length]);
      letterCode = mod(letterCode, 26);
      result += String.fromCharCode(letterCode + 97);
    }

    return result;
  }

  static offset(letter) {
    return letter.charCodeAt(0) - "a".charCodeAt(0);
  }

  decode(message) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
      let letterCode = message.charCodeAt(i) - 97
        - Cipher.offset(this.key[i % this._key.length]);
      letterCode = mod(letterCode, 26);
      result += String.fromCharCode(letterCode + 97);
    }

    return result;
  }

  get key() {
    return this._key;
  }
}
