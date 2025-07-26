/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function (nums) {
    let n = Math.floor(nums.length / 3);

    let sumLeft = new Array(3 * n).fill(0);
    let sumRight = new Array(3 * n).fill(0);
    let minHeap = new PriorityQueue((a, b) => a - b);
    let maxHeap = new PriorityQueue((a, b) => b - a);

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        maxHeap.enqueue(nums[i]);
    }
    sumLeft[n - 1] = sum;
    for (let i = n; i < 2 * n; i++) {
        sum += nums[i];
        maxHeap.enqueue(nums[i]);
        sum -= maxHeap.dequeue();
        sumLeft[i] = sum;
    }

    sum = 0;
    for (let i = 2 * n; i < 3 * n; i++) {
        sum += nums[i];
        minHeap.enqueue(nums[i]);
    }
    sumRight[2 * n] = sum;
    for (let i = 2 * n - 1; i >= n; i--) {
        sum += nums[i];
        minHeap.enqueue(nums[i]);
        sum -= minHeap.dequeue();
        sumRight[i] = sum;
    }

    let diff = Infinity;
    for (let i = n - 1; i < 2 * n; i++) {
        diff = Math.min(diff, sumLeft[i] - sumRight[i + 1]);
    }

    return diff;
};