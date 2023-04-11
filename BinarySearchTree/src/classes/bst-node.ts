export default class BSTNode {
  value: number | null = null;
  left: BSTNode | null = null;
  right: BSTNode | null = null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
