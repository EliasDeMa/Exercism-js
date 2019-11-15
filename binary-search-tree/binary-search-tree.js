//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor(data) {
    this.root = new Node(data);
  }

  get data() {
    return this.root.data;
  }

  get right() {
    return this.root.right;
  }

  get left() {
    return this.root.left;
  }

  insert(data) {
    this.root = BinarySearchTree.insertRec(data, this.root)
  }

  static insertRec(data, node) {
    if (node === null) {
      node = new Node(data);
      return node;
    }

    if (data > node.data) {
      node.right = BinarySearchTree.insertRec(data, node.right);
    } else {
      node.left = BinarySearchTree.insertRec(data, node.left);
    }

    return node;
  }

  each(callback) {
    return BinarySearchTree.traverse(this.root).map(callback);
  }

  static traverse(node) {
    let result = [];
    
    if (node.left) {
      result.push(...BinarySearchTree.traverse(node.left))
    }

    result.push(node.data);

    if (node.right) {
      result.push(...BinarySearchTree.traverse(node.right))
    }
    
    return result;
  }
}
