/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let res = new Set();

    for (let i = 0; i < nums.length; i++) {
        nums[Math.abs(nums[i]) - 1] = -(nums[Math.abs(nums[i]) - 1]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] > 0) res.add(Math.abs(nums[i]));
    }

    return [...res];

};