/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    let posSum = 0;
    let negSum = 0;
    let maxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (negSum > 0) negSum = 0;
        if (posSum < 0) posSum = 0;

        negSum += nums[i];
        posSum += nums[i];
        maxSum = Math.max(Math.abs(negSum), Math.abs(posSum), maxSum);
    }

    return maxSum;
};