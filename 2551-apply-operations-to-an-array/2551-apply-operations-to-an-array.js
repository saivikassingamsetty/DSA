/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let res = new Array(nums.length).fill(0);
    let p = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
                nums[i] *= 2;
                nums[i + 1] = 0;
            }
            res[p++] = nums[i];
        }
    }

    return res;
};