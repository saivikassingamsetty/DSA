/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let n = nums.length;
    let i = 0;
    let j = 0;
    let total = nums.reduce((a, i) => a + i, 0);

    if (total < x) return -1;
    if (total == x) return n;

    let currSum = 0;
    let maxLen = 0;

    //reverse, max sub array length of sum total - x
    while (j < n) {
        //expanding window
        currSum += nums[j];

        //contracting to the left
        while (i <= j && currSum > total - x) {
            currSum -= nums[i++];
        }

        //calculate for valid window
        if (currSum == total - x) maxLen = Math.max(maxLen, j - i + 1);

        //take step
        j++;
    }

    return maxLen ? n - maxLen : -1;
};