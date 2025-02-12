/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    nums.sort((a, b) => a - b);
    let sum = nums.map(i => String(i).split('').map(Number).reduce((a, it) => a + it, 0));

    //need rightmost index of same sum (maximum)
    let dict = {};

    let res = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
        let j = dict[sum[i]];
        if (!j) dict[sum[i]] = i;
        else res = Math.max(res, nums[i] + nums[j]);
    }

    return res;
};