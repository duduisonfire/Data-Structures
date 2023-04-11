import bubbleSort from './sort/bubbleSort.js';
import countingSort from './sort/countingSort.js';
import mergeSort from './sort/mergeSort.js';
import quickSort from './sort/quickSort.js';
import unsortedArray from './utils/unsortedArray.js';
const array = unsortedArray(100000);
console.log(array);

console.log('-----Merge sort-----');
console.time();
let inOrderArray = mergeSort(array);
console.log(inOrderArray);
console.timeEnd();

console.log('-----Quick sort-----');
console.time();
let inOrderArray3 = quickSort(array);
console.log(inOrderArray3);
console.timeEnd();

console.log('-----Counting sort-----');
console.time();
let inOrderArray4 = countingSort(array);
console.log(inOrderArray4);
console.timeEnd();

console.log('-----Bubble sort-----');
console.time();
let inOrderArray2 = bubbleSort(array);
console.log(inOrderArray2);
console.timeEnd();
