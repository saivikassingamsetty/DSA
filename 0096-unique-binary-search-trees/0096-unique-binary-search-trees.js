/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let node = 1; node <= n; node++) {
        let res = 0;
        for (let root = 1; root <= node; root++) {
            res += dp[root - 1] * dp[node - root];
        }
        dp[node] = res;
    }

    return dp[n];
};