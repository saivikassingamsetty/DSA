/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let maxRes = nums[0];
    let sum = nums[0];

    let i = 0;
    let j;

    for (j = 1; j < nums.length; j++) {
        if (nums[j] <= nums[j - 1]) {
            maxRes = Math.max(sum, maxRes);
            i = j;
            sum = 0;
        }

        sum += nums[j];
    }

    maxRes = Math.max(sum, maxRes);
    return maxRes;
};