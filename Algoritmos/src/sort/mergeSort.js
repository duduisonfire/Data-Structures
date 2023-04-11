import { Compare, defaultCompare } from '../utils/utils.js';

function merge(left, right, compareFn) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
  }

  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

export default function mergeSort(array, compareFn = defaultCompare) {
  let arr = array;

  if (arr.length > 1) {
    const { length } = arr;
    const middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle), compareFn);
    const right = mergeSort(arr.slice(middle, length), compareFn);
    arr = merge(left, right, compareFn);
  }

  return arr;
}
