export default function unsortedArray(size) {
  const array = [];

  for (let index = 0; index < size; index++) {
    array.push(Math.floor(Math.random() * 100));
  }

  return array;
}
