/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const [m, n] = [grid.length, grid[0].length];
    const dp = new Array(n).fill(Infinity);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) dp[j] = grid[0][0];
            else if (i == 0) dp[j] = grid[i][j] + dp[j - 1];
            else if (j == 0) dp[j] += grid[i][j];
            else dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1])
        }
    }

    return dp[n - 1];
};