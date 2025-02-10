/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let n = nums.length;
    let sum = nums.reduce((a, i) => a + i, 0);

    if (Math.abs(target) > sum) return 0;

    let dp = new Array(2 * sum + 1).fill(0);

    //base case
    let offset = sum;
    dp[nums[0] + offset] = 1;
    dp[-nums[0] + offset] += 1;

    for (let i = 1; i < n; i++) {
        let next = new Array(2 * sum + 1).fill(0);
        for (let t = -sum; t <= sum; t++) {
            if (dp[t + offset] > 0) {
                next[t + nums[i] + offset] += dp[t + offset];
                next[t - nums[i] + offset] += dp[t + offset];
            }
        }
        dp = next;
    }

    return dp[target + offset];
};