//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {

  constructor() {
    this._stack = [];
    this._words = {};
  }

  evaluate(input) {
    if (input.startsWith(':') && input.endsWith(';')) {
      let commands = input.slice(2, input.length - 2).split(' ');
      let head = commands[0].toLowerCase();
      if (!isNaN(head)) {
        throw new Error("Invalid definition");
      }
      this._words[head] = commands.slice(1);
      return;
    }

    let commands = input.split(' ');
    while (commands.length > 0) {
      let command = commands.shift();
    
      if (!isNaN(command)) {
        this._stack.push(Number(command));
      } else if (command.toLowerCase() in this._words) {
        commands.push(...this._words[command.toLowerCase()]);
      } else if (command === '+') {
        let a = this._stack.pop();
        let b = this._stack.pop();
        if (a === undefined || b === undefined) {
          throw new Error("Stack empty");
        }

        this._stack.push(b + a);
      } else if (command === '-') {
        let a = this._stack.pop();
        let b = this._stack.pop();
        if (a === undefined || b === undefined) {
          throw new Error("Stack empty");
        }

        this._stack.push(b - a);
      } else if (command === '*') {
        let a = this._stack.pop();
        let b = this._stack.pop();
        if (a === undefined || b === undefined) {
          throw new Error("Stack empty");
        }

        this._stack.push(b * a);
      } else if (command === '/') {
        let a = this._stack.pop();
        let b = this._stack.pop();
        if (a === undefined || b === undefined) {
          throw new Error("Stack empty");
        } else if (a === 0) {
          throw new Error("Division by zero");
        }

        this._stack.push(~~(b / a));
      } else if (command.toLowerCase() === "dup") {
        let a = this._stack.pop();
        if (a === undefined) {
          throw new Error("Stack empty");
        }
        this._stack.push(a);
        this._stack.push(a);
      } else if (command.toLowerCase() === "drop") {
        let a = this._stack.pop();
        if (a === undefined) {
          throw new Error("Stack empty");
        } 
      } else if (command.toLowerCase() === "swap") {
        let a = this._stack.pop();
        let b = this._stack.pop();
        if (a === undefined || b === undefined) {
          throw new Error("Stack empty");
        }
        this._stack.push(a);
        this._stack.push(b);
      } else if (command.toLowerCase() === "over") {
        let a = this._stack.pop();
        let b = this._stack.pop();
        if (a === undefined || b === undefined) {
          throw new Error("Stack empty");
        }
        this._stack.push(b);
        this._stack.push(a);
        this._stack.push(b);
      } else {
        throw new Error("Unknown command");
      }
    }
  }

  get stack() {
    return this._stack;
  }

}
