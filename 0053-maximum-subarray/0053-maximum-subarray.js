/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currSum = 0;

    for (let num of nums) {
        if (currSum < 0) currSum = 0;

        currSum += num;
        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
};