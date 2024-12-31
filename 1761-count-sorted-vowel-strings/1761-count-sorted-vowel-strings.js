/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let res = 0;

    const dfs = (s) => {
        if (s.length == n) {
            res++;
            return;
        }

        for (let ch of ['a', 'e', 'i', 'o', 'u']) {
            if (!s.length || ch >= s[s.length-1]) {
                dfs(s + ch);
            }
        }
    }

    dfs('');

    return res;
};