/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const heap = new MinPriorityQueue({ priority: el => el });
    for (let num of nums) {
        heap.enqueue(num);
        if (heap.size() > k) {
            heap.dequeue();
        }
    }

    return heap.dequeue().element;
};