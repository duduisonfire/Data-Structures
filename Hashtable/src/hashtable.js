export default class HashTable {
  constructor() {
    this.table = {};
  }

  toStrFn(key) {
    return `${key}`;
  }

  loseLoseHashCode(key) {
    if (typeof key === 'number') { // {1}
      return key;
    }
    const tableKey = this.toStrFn(key); // {2}
    let hash = 0; // {3}
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i); // {4}
    }
    return hash % 37; // {5}
  }

  hashCode(key) {
    return this.loseLoseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) { // {1}
      const position = this.hashCode(key); // {2}
      this.table[position] = new ValuePair(key, value); // {3}
      return true;
    }
    return false;
  }
}
