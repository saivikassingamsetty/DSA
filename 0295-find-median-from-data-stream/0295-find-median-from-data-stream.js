
var MedianFinder = function () {
    this.lowerHeap = new MaxHeap();
    this.upperHeap = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    //current middle and push accordingly
    if (this.lowerHeap.size() === 0 || this.lowerHeap.peek() >= num) {
        this.lowerHeap.push(num);
    } else {
        this.upperHeap.push(num);
    }

    // Rebalance
    if (this.lowerHeap.size() - this.upperHeap.size() > 1) {
        this.upperHeap.push(this.lowerHeap.pop());
    } else if (this.upperHeap.size() - this.lowerHeap.size() > 1) {
        this.lowerHeap.push(this.upperHeap.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if ((this.lowerHeap.size() + this.upperHeap.size()) % 2) {
        return this.lowerHeap.size() > this.upperHeap.size() ? this.lowerHeap.peek() : this.upperHeap.peek();
    } else {
        return (this.lowerHeap.peek() + this.upperHeap.peek()) / 2;
    }

};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


// MaxHeap class (for low heap)
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parent]) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.heap.length) {
            let largest = index;
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            if (this.heap[left] > this.heap[largest]) largest = left;
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

// MinHeap class (for high heap)
class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parent]) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.heap.length) {
            let smallest = index;
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            if (this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}