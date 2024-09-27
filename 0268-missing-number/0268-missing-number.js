/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    return Math.floor(len*(len+1)/2) - nums.reduce((s,i) => s+i, 0);
};