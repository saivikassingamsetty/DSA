/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    if (Math.min(...nums) < k) return -1;

    let distinct = [...new Set(nums)].sort((a, b) => a - b);
    if (Math.min(...nums) > k) return distinct.length;

    for (let i = 0; i < distinct.length; i++) {
        if (distinct[i] >= k) return distinct.length - 1 - i;
    }
};