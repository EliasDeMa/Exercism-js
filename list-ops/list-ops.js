//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values.push(...list.values);
    return this;
  }

  concat(list) {
    list.values.forEach(element => {
      this.append(element);
    });

    return this;
  }

  filter(callBack) {
    let result = [];

    this.values.forEach(el => {
      if (callBack(el)) result.push(el);
    })

    return new List(result);
  }

  map(callBack) {
    let result = [];

    this.values.forEach(el => result.push(callBack(el)))

    return new List(result);
  }

  length() {
    return this.values.length;
  }

  foldl(callBack, acc) {
    this.values.forEach(x => {
      acc = callBack(acc, x);
    })

    return acc;
  }

  foldr(callBack, acc) {
    this.values.reverse().forEach(x => {
      acc = callBack(acc, x);
    })

    return acc;
  }

  reverse() {
    return new List(this.values.reverse());
  }
}
