/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let [m, n] = [obstacleGrid.length, obstacleGrid[0].length];

    // const dfs = (i, j) => {
    //     if (i == 0 && j == 0) return 1;
    //     if (i < 0 || j < 0) return 0;
    //     if (obstacleGrid[i][j] == 1) return 0;

    //     return dfs(i - 1, j) + dfs(i, j - 1);
    // }

    // return dfs(m - 1, n - 1);

    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (obstacleGrid[i-1][j-1] == 1) {
                dp[i][j] = 0;
            } else {
                if (i == 1 && j == 1) dp[i][j] = 1
                else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[m][n];
};