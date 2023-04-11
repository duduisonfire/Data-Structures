import { defaultCompare, Compare } from '../utils/util';
import BSTree from './bstree';
import BSTNode from './bst-node';

enum BalanceFactor {
  UNBALANCED_RIGHT = 1,
  SLIGHTLY_UNBALANCED_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCED_LEFT = 4,
  UNBALANCED_LEFT = 5,
}

export default class AVLTree extends BSTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  protected getNodeHeight(node: BSTNode): number {
    if (node == null) {
      return -1;
    }

    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  protected getBalanceFactor(node: BSTNode) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  protected rotateLL(node: BSTNode) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;

    return tmp;
  }

  protected rotateRR(node: BSTNode) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;

    return tmp;
  }

  protected rotateLR(node: BSTNode) {
    node.left = this.rotateRR(node.left);
    return this.rotateLL(node);
  }

  protected rotateRL(node: BSTNode) {
    node.right = this.rotateLL(node.right);
    return this.rotateRR(node);
  }

  insert(value: number) {
    this.root = this.insertNodeAVL(this.root, value);
  }

  protected insertNodeAVL(node: BSTNode, value: number) {
    if (node == null) {
      return new BSTNode(value);
    } else if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
      node.left = this.insertNodeAVL(node.left, value);
    } else if (this.compareFn(value, node.value) === Compare.BIGGER_THAN) {
      node.right = this.insertNodeAVL(node.right, value);
    } else {
      return node;
    }

    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(value, node.left.value) === Compare.LESS_THAN) {
        node = this.rotateLL(node);
      } else {
        return this.rotateLR(node);
      }
    }

    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(value, node.right.value) === Compare.BIGGER_THAN) {
        node = this.rotateRR(node);
      } else {
        return this.rotateRL(node);
      }
    }

    return node;
  }

  protected removeNode(node: BSTNode, key: number) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node;
    }

    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotateLL(node);
      }

      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotateLR(node.left);
      }
    }

    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);

      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotateRR(node);
      }

      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotateRL(node.right);
      }
    }

    return node;
  }
}
