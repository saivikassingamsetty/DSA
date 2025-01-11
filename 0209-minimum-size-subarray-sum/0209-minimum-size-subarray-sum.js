/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let i = 0;
    let currSum = 0;
    let minLen = 1e9;

    for (let j = 0; j < nums.length; j++) {
        //expand
        currSum += nums[j];

        //contract & calculate
        while (i <= j && currSum >= target) {
            minLen = Math.min(minLen, j - i + 1);
            currSum -= nums[i];
            i++;
        }
    }

    return minLen == 1e9 ? 0 : minLen;
};