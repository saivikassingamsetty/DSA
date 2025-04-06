/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    let dp = new Array(nums.length).fill(1);
    let count = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    count[i] = count[j]
                } else if (dp[j] + 1 == dp[i]) {
                    count[i] += count[j];
                }
            }
        }
    }

    let maxLen = Math.max(...dp);
    let res = 0;

    for (let i = 0; i < dp.length; i++) {
        if (dp[i] == maxLen) {
            res += count[i];
        }
    }

    return res;
};