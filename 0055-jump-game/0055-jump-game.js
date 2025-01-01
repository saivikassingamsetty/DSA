/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let n = nums.length;
    let dp = new Array(n).fill(false);

    dp[n - 1] = true;

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j <= i + nums[i]; j++) {
            if (dp[j]) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[0];
};