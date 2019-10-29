//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class LinkedListNode{
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
} 

export class LinkedList {
  constructor() {
    this._count = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let node = new LinkedListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this._count++;
  }

  pop() {
    this._count--;
    let node = this.tail;
    if (this._count >= 1) {     
      this.tail = node.prev;
    } else {
      this.tail = null;
      this.head = null;
    }
    

    return node.value;
  }

  shift() {
    this._count--;
    let node = this.head;
    if (this._count >= 1) {     
      this.head = node.next;
    } else {
      this.tail = null;
      this.head = null;
    }

    return node.value;
  }

  unshift(value) {
    let node = new LinkedListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this._count++;
  }

  delete(value) {
    let node = this.head;
    while (node.value !== value) {
      if (node.next === null) {
        return;
      }
      node = node.next;
    }

    // found node is the head of the list
    if (node.prev === null) {
      this.head = this.head.next;
      if (this._count === 1) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    // found node is the tail of the list
    } else if (node.next === null) {
      this.tail = node.prev;
      this.tail.next = null;
    // found node is node somewhere in between head and tail
    } else {
      let prev = node.prev;
      prev.next = node.next;
      node.next.prev = prev;
    }

    this._count--;
  }

  count() {
    return this._count;
  }
}
