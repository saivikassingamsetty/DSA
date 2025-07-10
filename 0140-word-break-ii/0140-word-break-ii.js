/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);

    const dfs = (start) => {
        if (start == s.length) return [""]

        let res = new Set();

        for (let i = start + 1; i <= s.length; i++) {
            let word = s.slice(start, i);
            if (wordSet.has(word)) {
                const possibilities = dfs(i);
                for (let poss of possibilities) {
                    res.add(poss ? word + ' ' + poss : word);
                }
            }
        }

        return [...res];
    }

    return dfs(0);
};