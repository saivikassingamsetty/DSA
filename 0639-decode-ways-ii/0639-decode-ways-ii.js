/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let memo = new Map();
    let MOD = 10 ** 9 + 7;

    const findWays = (i) => {
        if (i < 0) return 1;

        if (memo.has(i)) return memo.get(i);

        let ways = 0;

        if (s[i] == '*') {
            ways = (9 * findWays(i - 1)) % MOD;
            //1*
            if (i > 0 && s[i - 1] == 1) ways = (ways + 9 * findWays(i - 2)) % MOD;
            //2*
            if (i > 0 && s[i - 1] == 2) ways = (ways + 6 * findWays(i - 2)) % MOD;
            //**
            if (i > 0 && s[i - 1] == '*') ways = (ways + 15 * findWays(i - 2)) % MOD;
        } else {
            ways = s[i] == 0 ? 0 : findWays(i - 1);
            //1#
            if (i > 0 && s[i - 1] == 1) ways = (ways + findWays(i - 2)) % MOD
            //2#
            if (i > 0 && s[i - 1] == 2 && s[i] <= 6) ways = (ways + findWays(i - 2)) % MOD
            //*# - 1
            if (i > 0 && s[i - 1] == '*') ways = (ways + findWays(i - 2)) % MOD;
            //*# - 2
            if (i > 0 && s[i - 1] == '*' && s[i] <= 6) ways = (ways + findWays(i - 2)) % MOD;
        }

        memo.set(i, ways);
        return ways;
    }

    return findWays(s.length - 1);
}