//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import BigInt from './lib/big-integer';

export class Grains {
  square(square) {
    return BigInt(2).pow(square - 1).toString();
  }

  total() {
    let total = BigInt(0);
    const grains = new Grains();
    
    for (let i = 1; i <= 64; i++) {
      const temp = BigInt(grains.square(i));
      total = total.add(temp);  
    }

    return total.toString();
  }
}
