import { Compare, defaultCompare, swap } from '../utils/utils.js';

export default function bubbleSort(array, compareFunction = defaultCompare) {
  let arr = array;
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFunction(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
        arr = swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}
