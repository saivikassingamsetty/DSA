/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function (nums) {
    let res = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) res &= nums[i];
    }

    return res < 0 ? 0 : res;
};