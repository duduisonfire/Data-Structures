import { Compare, defaultCompare } from '../utils/util';
import BSTNode from './bst-node';

export default class BSTree {
  root: BSTNode | null;
  protected compareFn: Function;

  constructor(compareFN: Function = defaultCompare) {
    this.root = null;
    this.compareFn = compareFN;
  }

  insert(value: number) {
    if (this.root === null) {
      this.root = new BSTNode(value);
    } else {
      this.insertNode(value);
    }
  }

  protected insertNode(value: number) {
    let current = this.root;

    while (current !== null) {
      if (this.compareFn(value, current.value) === Compare.LESS_THAN) {
        if (current.left === null) {
          current.left = new BSTNode(value);
          return current;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new BSTNode(value);
          return current;
        }

        current = current.right;
      }
    }
  }

  protected inOrderTraverseNode(node: BSTNode | null, callback: Function) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.value);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback);
  }

  protected preOrderTraverseNode(node: BSTNode | null, callback: Function) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback);
  }

  protected postOrderTraverseNode(node: BSTNode | null, callback: Function) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.value);
    }
  }

  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback);
  }

  findMin() {
    return this.findMinNode().value;
  }

  findMax() {
    return this.findMaxNode().value;
  }

  protected findMinNode(node: BSTNode | null = this.root) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }

    return current;
  }

  protected findMaxNode(node: BSTNode | null = this.root) {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }

    return current;
  }

  findValue(value: number) {
    const node = this.findNode(value);

    if (node === null) {
      return null;
    }

    return node.value;
  }

  protected findNode(value: number) {
    let current = this.root;

    while (current !== null && this.compareFn(value, current.value) !== Compare.EQUALS) {
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) {
      return null;
    }

    return current;
  }

  remove(value: number) {
    const removedNode = this.findNode(value);
    this.root = this.removeNode(this.root, value);
    return removedNode.value;
  }

  protected removeNode(node: BSTNode, value: number) {
    if (node == null) {
      return null;
    }

    if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (this.compareFn(value, node.value) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }

      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      const aux = this.findMinNode(node.right);
      node.value = aux.value;
      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }
}
