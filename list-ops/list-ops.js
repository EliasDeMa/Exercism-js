//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values];

    return new List(this.values);
  }

  concat(list) {
    for (let index = 0; index < list.values.length; index++) {
      this.append(list.values[index])
    }

    return new List(this.values);
  }

  filter(predicate) {
    let result = [];

    for (let i = 0; i < this.values.length; i++) {
      if (predicate(this.values[i]))
        result = [...result, this.values[i]];
    }

    return new List(result);
  }

  map(transform) {
    let result = [];

    for (let i = 0; i < this.values.length; i++) {
      result[i] = transform(this.values[i]);
    }

    return new List(result);
  }

  length() {
    return this.values.length;
  }

  foldl(reducer, acc) {
    for (let i = 0; i < this.values.length; i++) {
      acc = reducer(acc, this.values[i]);
    }

    return acc;
  }

  foldr(reducer, acc) {
    const len = this.length();

    for (let i = 0; i < len; i++) {
      acc = reducer(acc, this.values[len - i - 1]);
    }

    return acc;
  }

  reverse() {
    let temp = [];
    const len = this.length();

    for (let i = 0; i < len; i++) {
      temp[i] = this.values[len - i - 1];
      
    }

    return new List(temp);
  }
}
