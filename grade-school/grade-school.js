//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

  constructor() {
    this.db = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.db));
  }

  add(name, grade) {
    if (this.db[grade] === undefined) {
      this.db[grade] = [];
    }
    this.db[grade].push(name);
    this.db[grade] = this.db[grade].sort();
  }

  grade(grade) {
    return this.db[grade] !== undefined ? JSON.parse(JSON.stringify(this.db[grade])) : [];
  }
}
