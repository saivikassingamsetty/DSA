/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new MinHeap();
    this.k = k;

    for (let num of nums) {
        this.heap.insert(num);
        if (this.heap.size() > this.k) this.heap.extractRoot();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.insert(val);
    if (this.heap.size() > this.k) this.heap.extractRoot();
    return this.heap.root();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */