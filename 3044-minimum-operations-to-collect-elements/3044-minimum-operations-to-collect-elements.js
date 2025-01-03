/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let count = 0;
    let collection = new Set();

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] <= k) {
            collection.add(nums[i]);
            if (collection.size == k) return nums.length - i;
        }
    }

    return nums.length;
};