class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    pop() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown();
        }
        return top;
    }

    _bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    _sinkDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild < element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function (nums1, nums2, k) {
    let n = nums1.length;
    let indices = Array.from({ length: n }, (_, i) => i).sort(
        (a, b) => nums1[a] - nums1[b]
    );

    const heap = new MinHeap();
    let res = new Array(n).fill(0);
    let currSum = 0;
    let j = 0;

    for (let i = 0; i < n; i++) {
        let currIndex = indices[i];

        while (j < n && nums1[indices[j]] < nums1[currIndex]) {
            heap.push(nums2[indices[j]]);
            currSum += nums2[indices[j]];
            if (heap.size() > k) {
                currSum -= heap.pop();
            }
            j++;
        }

        res[currIndex] = currSum;
    }

    return res;
};
