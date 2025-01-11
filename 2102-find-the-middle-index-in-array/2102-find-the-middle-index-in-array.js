/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let totalSum = nums.reduce((a, i) => a + i, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum == totalSum - leftSum - nums[i]) return i;
        leftSum += nums[i];
    }

    return -1;
};