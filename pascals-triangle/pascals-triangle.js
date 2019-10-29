//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(rowAmount) {
    this._rows = null;
    this.size = rowAmount;
  }

  get lastRow() {
    if (this._rows === null) {
      this.loadTriangle();
    }
    return this._rows[this.size - 1];
  }

  get rows() {
    if (this._rows === null) {
      this.loadTriangle();
    }
    return this._rows;
  }

  loadTriangle() {
    let prev = [1];
    let rows = [];
    for (let i = 0; i < this.size; i++) {
      rows.push(prev);
      prev = Triangle.next(prev);
    }

    this._rows = rows;
  }

  static next(row) {
    let new_row = [1];

    for (let i = 0; i < row.length - 1; i++) {
      new_row.push(row[i] + row[i+1]);
    }

    new_row.push(1);

    return new_row;
  }
}
