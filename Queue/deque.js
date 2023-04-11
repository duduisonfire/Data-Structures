class Deque {
    constructor() {
        this.count = 0;
        this.lowCount = 0;
        this.items = {};
    }

    addFront(element) {
        if (this.isEmpty()) {
          this.addBack(element);
        } else if (this.lowCount > 0) {
          this.lowCount--;
          this.items[this.lowCount] = element;
        } else {
          for (let i = this.count; i > 0; i--) {
            this.items[i] = this.items[i - 1];
          }
          this.count++;
          this.items[0] = element;
        }
      }

      addBack(element) {
        this.items[this.count] = element;
        this.count++;
      }

      removeFront() {
        if (this.isEmpty()) {
          return undefined;
        }
        const result = this.items[this.lowCount];
        delete this.items[this.lowCount];
        this.lowCount++;
        return result;
      }

      removeBack() {
        if (this.isEmpty()) {
          return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
      }

      peekFront() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.lowCount];
      }
    
      peekBack() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.count - 1];
      }
    
      isEmpty() {
        return this.size() === 0;
      }
    
      clear() {
        this.items = {};
        this.count = 0;
        this.lowCount = 0;
      }
    
      size() {
        return this.count - this.lowCount;
      }
    
      toString() {
        if (this.isEmpty()) {
          return '';
        }
        let objString = `${this.items[this.lowCount]}`;
        for (let i = this.lowCount + 1; i < this.count; i++) {
          objString = `${objString},${this.items[i]}`;
        }
        return objString;
      }
}