/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let n = matrix.length;
    let dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let currentRow = new Array(n).fill(0);

        for (let j = 0; j < n; j++) {
            currentRow[j] = matrix[i][j] + Math.min(dp[j - 1] ?? Infinity, dp[j], dp[j + 1] ?? Infinity);
        }

        dp = currentRow;
    }

    return Math.min(...dp);
};