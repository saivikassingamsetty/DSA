/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let zeroes = 0;
    for (let j = 0; j<nums.length; j++) {
        if (nums[j] > 0 || nums[j] < 0) {
            nums[i] = nums[j];
            i++;
        } else zeroes++;
    }

    let j = nums.length-1;
    while(j >= 0 && zeroes) {
        nums[j] = 0;
        j--;
        zeroes--;
    }

    return nums;
};