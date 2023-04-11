import { Compare, defaultCompare } from '../utils/utils.js';

export default function insertionSort(array, compareFn = defaultCompare) {
  const arr = array;
  const { length } = arr;
  let temp;

  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[i];

    while (j > 0 && compareFn(arr[j - 1], temp) === Compare.BIGGER_THAN) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = temp;
  }

  return arr;
}
