//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ALLERGIES = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128,
}

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    let list = [];

    for (const [key, value] of Object.entries(ALLERGIES)) {
      if (this.score & value) {
        list.push(key);
      }
    }

    return list;
  }

  allergicTo(allergy) {
    return Boolean(ALLERGIES[allergy] & this.score);
  }
}
