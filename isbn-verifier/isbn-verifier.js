//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ISBN {
  constructor(isbn) {
    let digits = [...isbn].filter(c => c !== '-');
    if (digits[digits.length - 1] === 'X') {
      digits[digits.length-1] = 10;
    }
    this.digits = digits.map(c => Number(c));
    
  }

  isValid() {
    if (this.digits[this.digits.length - 1] === NaN || this.digits.length !== 10) {
      return false;
    } else {
      return this.digits.map((x, i) => (10 - i) * x).reduce((a, b) => a + b, 0) % 11 == 0;
    }
  }
}
