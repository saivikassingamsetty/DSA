/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let dp = new Array(n + 1).fill(0);

    let great = 2;
    for (let i = 1; i <= n; i++) {
        //base
        if (i == great) {
            dp[i] = 1;
            great *= 2;
            continue;
        }

        //reccurrance
        dp[i] = 1 + dp[i - Math.floor(great / 2)];
    }

    return dp;
};