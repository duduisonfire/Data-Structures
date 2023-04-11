import { Compare, defaultCompare, swap } from '../utils/utils.js';

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }

    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quick(array, left, right, compareFn) {
  let arr = array;
  let index;

  if (arr.length > 1) {
    index = partition(arr, left, right, compareFn);

    if (left < index - 1) {
      arr = quick(arr, left, index - 1, compareFn);
    }

    if (index < right) {
      arr = quick(arr, index, right, compareFn);
    }
  }

  return arr;
}

export default function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}
