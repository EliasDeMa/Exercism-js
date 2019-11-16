//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(elements = []) {
    this.elements = elements;
    
  }

  empty() {
    return this.elements.length === 0;
  }

  contains(element) {
    return this.elements.indexOf(element) > -1;
  }

  add(element) {
    if (this.elements.indexOf(element) === -1) 
      this.elements.push(element);
    return this;
  }

  subset(other) {
    return this.elements
      .every(element => other.elements.indexOf(element) !== -1);

  }

  disjoint(other) {
    return this.elements
      .every(element => other.elements.indexOf(element) === -1);
  }

  eql(other) {
    return this.subset(other) && this.elements.length === other.elements.length;
  }

  union(other) {
    other.elements.forEach(element => {
      this.add(element);
    });

    return new CustomSet(this.elements);
  }

  intersection(other) {
    return new CustomSet(
      this.elements
        .filter(element => other.elements.indexOf(element) !== -1)
    );
  }

  difference(other) {
    return new CustomSet(
      this.elements
        .filter(element => other.elements.indexOf(element) === -1)
    );
  }
}
