/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let pos = [];
    let neg = [];
    nums.sort((a, b) => a - b)

    let i = 0;
    while (i < nums.length && neg.length < 2) {
        neg.push(nums[i++]);
    }

    let j = nums.length - 1;
    while (j >= 0 && pos.length < 3) {
        pos.push(nums[j--]);
    }

    return Math.max(pos[0] * pos[1] * pos[2], neg[0] * neg[1] * pos[0]);
};