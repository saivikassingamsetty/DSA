/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let memo = new Map();
    const findWays = (i) => {
        if (s[i] == '0') return 0;
        if (i >= s.length - 1) return 1;

        if (memo.has(i)) return memo.get(i);

        let ways = findWays(i + 1);
        if (Number(s.slice(i, i + 2)) > 0 && Number(s.slice(i, i + 2)) <= 26) ways += findWays(i + 2);

        memo.set(i, ways);

        return ways;
    }

    return findWays(0);
};