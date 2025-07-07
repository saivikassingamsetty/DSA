/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const [m, n] = [grid.length, grid[0].length];
    const dp = Array.from({ length: m }, () => new Array(n).fill(Infinity));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) dp[i][j] = grid[0][0]
            else if (i == 0) dp[i][j] = grid[i][j] + dp[i][j - 1]
            else if (j == 0) dp[i][j] = grid[i][j] + dp[i - 1][j]
            else dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
        }
    }

    return dp[m - 1][n - 1];
};