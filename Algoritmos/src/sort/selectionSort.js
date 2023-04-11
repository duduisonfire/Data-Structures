import { Compare, defaultCompare, swap } from '../utils/utils.js';

export default function selectionSort(array, compareFn = defaultCompare) {
  let arr = array;
  const { length } = arr;
  let indexMin;

  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      arr = swap(arr, i, indexMin);
    }
  }

  return arr;
}
