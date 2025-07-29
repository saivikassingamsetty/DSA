/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
    // find the largest sub array with unique chars
    // largest -> largest in sum

    let i = 0;
    let freqMap = new Map();
    let sum = 0;
    let maxSum = 0;

    for (let j = 0; j < nums.length; j++) {
        freqMap.set(nums[j], (freqMap.get(nums[j]) || 0) + 1);
        sum += nums[j];

        while (freqMap.size < j - i + 1) {
            freqMap.set(nums[i], freqMap.get(nums[i]) - 1);
            if (freqMap.get(nums[i]) == 0) freqMap.delete(nums[i]);
            sum -= nums[i];
            i++;
        }

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};