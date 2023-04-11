/* eslint-disable no-console */
import BSTree from './classes/bstree';
import readline from 'readline';

const tree = new BSTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log(tree.findMin());
console.log(tree.findMax());

tree.inOrderTraverse(console.log);
console.log('------');
tree.remove(3);
tree.inOrderTraverse(console.log);

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

line.question('Qual número você quer procurar?', (number) => {
  const numberToFind = Number(number);
  console.log(`Você encontrou o número ${tree.findValue(numberToFind)}`);
  line.close();
});
