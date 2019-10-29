//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this._rows = matrix.split('\n').map(row => row.split(' ').map(Number));
    this._cols = Matrix.transpose(this._rows);
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._cols;
  }

  static transpose(matrix) {
    return matrix[0].map((col, index) => matrix.map(row => row[index]));
  }
}
