/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let MOD = 10 ** 9 + 7;
    let n = s.length
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = (s[0] == '*' ? 9 : (s[0] == 0 ? 0 : 1));

    for (let i = 2; i <= n; i++) {
        let ways = 0;

        if (s[i - 1] == '*') {
            ways = (9 * dp[i - 1]) % MOD;
            //1*
            if (i > 0 && s[i - 2] == 1) ways = (ways + 9 * dp[i - 2]) % MOD;
            //2*
            if (i > 0 && s[i - 2] == 2) ways = (ways + 6 * dp[i - 2]) % MOD;
            //**
            if (i > 0 && s[i - 2] == '*') ways = (ways + 15 * dp[i - 2]) % MOD;
        } else {
            ways = s[i - 1] == 0 ? 0 : dp[i - 1];
            //1#
            if (i > 0 && s[i - 2] == 1) ways = (ways + dp[i - 2]) % MOD
            //2#
            if (i > 0 && s[i - 2] == 2 && s[i - 1] <= 6) ways = (ways + dp[i - 2]) % MOD
            //*# - 1
            if (i > 0 && s[i - 2] == '*') ways = (ways + dp[i - 2]) % MOD;
            //*# - 2
            if (i > 0 && s[i - 2] == '*' && s[i - 1] <= 6) ways = (ways + dp[i - 2]) % MOD;
        }

        dp[i] = ways;
    }

    return dp[n];
}