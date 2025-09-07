/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let dp = Array.from({length: s.length}, () => new Array(t.length).fill(-1));

    const solve = (i, j) => {
        if (i == s.length || j == t.length || s.length - i < t.length - j) {
            return (j == t.length ? 1: 0);
        }

        if (dp[i][j] != -1) return dp[i][j];

        // skip
        let ans = solve(i + 1, j);
        // include
        if (s[i] == t[j]) ans += solve(i + 1, j + 1);

        return dp[i][j] = ans;
    }

    return solve(0, 0);
};