/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let start = 0;
    let count = 0;
    let res = 0;

    for (let end = 0; end < nums.length; end++) {
        count += nums[end];
        while ((end - start + 1) - count > k) count -= nums[start++];
        res = Math.max(res, end - start + 1);
    }

    return res;

};