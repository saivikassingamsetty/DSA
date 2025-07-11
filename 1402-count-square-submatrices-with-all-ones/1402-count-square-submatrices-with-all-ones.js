/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    const dp = Array.from({ length: m }, () => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = +matrix[i][j];
            } else {
                if (matrix[i][j] == '1') {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
                }
            }
        }
    }

    let totlCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            totlCount += dp[i][j];
        }
    }

    return totlCount;
};