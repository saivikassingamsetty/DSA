/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    let dp = new Array(n).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i <= n; i++) {
        dp[i] = (i == n ? 0 : cost[i]) + Math.min(dp[i - 1], dp[i - 2]);
    }

    return dp[n];
};