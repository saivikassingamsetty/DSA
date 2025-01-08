/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    let sumL = 0; sumR = 0;
    let res = new Array(nums.length).fill(0);

    //finding the absolute difference for the elements in the left using prefix sum
    //sum populates the prefix sum, count populates the frequency

    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i] * i - sumL;
        sumL += nums[i];
    }

    //finding the absolute difference for the elements in the right using prefix sum
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] += sumR - nums[i] * (nums.length - i - 1);
        sumR += nums[i];
    }

    return res;
};