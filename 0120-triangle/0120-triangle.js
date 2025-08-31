/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let n = triangle.length;
    let dp = new Array(n).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        let copy = new Array(n).fill(Infinity);
        for (let j = 0; j <= i; j++) {
            copy[j] = triangle[i][j] + Math.min(dp[j], dp[j - 1] ?? Infinity);
        }

        dp = copy;
    }

    return Math.min(...dp);
};