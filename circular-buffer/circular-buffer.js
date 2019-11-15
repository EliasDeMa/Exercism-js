//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = [];
  }

  write(data) {
    if (this.buffer.length >= this.size) 
      throw new BufferFullError();

    if (data) 
      this.buffer.push(data);
  }

  read() {
    if (this.buffer.length === 0) 
      throw new BufferEmptyError();
    return this.buffer.shift();
  }

  forceWrite(data) {
    if (this.buffer.length >= this.size) 
      this.buffer.shift();
    if (data)
      this.buffer.push(data);
  }

  clear() {
    this.buffer = [];
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor(message) {
    super(message);
    this.name = "BufferFullError";
  }
}

export class BufferEmptyError extends Error {
  constructor(message) {
    super(message);
    this.name = "BufferEmptyError";
  }
}
