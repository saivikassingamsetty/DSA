/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let size = strs.length;

    //state: i,j => max number of strs needed for at most m 0's, n 1's
    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let str of strs) {
        //find zeroes and ones count
        let ones = 0;
        let zeroes = 0;
        for (let ch of str) {
            if (ch == '1') ones++
            else zeroes++
        }

        //update the dp table if we include the current item
        for (let z = m; z >= 0; z--) {
            for (let o = n; o >= 0; o--) {
                if (o - ones >= 0 && z - zeroes >= 0) {
                    dp[z][o] = Math.max(dp[z][o], 1 + dp[z - zeroes][o - ones]);
                }
            }
        }
    }

    return dp[m][n]
};