/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let i = 0;
    let j = nums.length - 1;
    let res = 0;

    while (i < j) res = Math.max(res, nums[i++] + nums[j--]);

    return res;
};