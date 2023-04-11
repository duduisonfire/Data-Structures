class Queue {
    constructor(){
        this.count = 0;
        this.lowCount = 0;
        this.items = {};
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    dequeue(){
        if (this.isEmpty()){
            return undefined;
        }

        const result = this.items[this.lowCount];
        delete this.items[this.lowCount];
        this.lowCount++;
        return result;
    }

    peek(){
        if (this.isEmpty()){
            return undefined;
        }

        return this.items[this.lowCount];
    }

    isEmpty(){
        return (this.count - this.lowCount) === 0;
    }

    size(){
        return (this.count - this.lowCount);
    }

    clear(){
        this.items = {};
        this.count = 0;
        this.lowCount = 0;
    }

    toString(){
        if (this.isEmpty()){
            return '';
        }

        let objString = `${this.items[this.lowCount]}`;
        for ( let i = this.lowCount; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }

        return objString;
    }
}