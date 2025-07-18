/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    let [m, n] = [dungeon.length, dungeon[0].length];

    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(Infinity));

    // base case
    // dp[i][j] = min health needed to sustain the cell when comes from bottom right
    dp[m][n - 1] = 1;
    dp[m - 1][n] = 1;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let minHealthNeeded = Math.min(dp[i + 1][j], dp[i][j + 1]);
            // either we need some health support or no need
            dp[i][j] = Math.max(1, minHealthNeeded - dungeon[i][j]);
        }
    }

    return dp[0][0];
};