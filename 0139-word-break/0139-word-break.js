/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const n = s.length;
    const wordSet = new Set(wordDict);

    const memo = new Map();

    const canBreak = (start) => {
        if (start == n) return true;

        if (memo.has(start)) return memo.get(start);

        for (let i = start + 1; i <= n; i++) {
            if (wordSet.has(s.slice(start, i)) && canBreak(i)) {
                memo.set(start, true);
                return true;
            }
        }

        memo.set(start, false);
        return false;
    }

    return canBreak(0);
};