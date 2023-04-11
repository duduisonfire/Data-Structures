import MinHeap from './classes/MinHeap.js';

const heap = new MinHeap();

// eslint-disable-next-line no-plusplus
for (let i = 1; i < 10; i++) {
  heap.insert(i);
}
console.log('Extract minimum: ', heap.extract()); // 1
