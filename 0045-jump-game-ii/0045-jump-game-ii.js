/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let n = nums.length;
    let dp = new Array(n).fill(Infinity);

    //base case
    dp[n - 1] = 0;

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j <= i + nums[i] && j < n; j++) {
            dp[i] = Math.min(dp[i], 1 + dp[j]);
        }
    }

    return dp[0];
};