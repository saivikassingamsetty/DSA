/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let res = '';
    let [m, n] = [word1.length, word2.length]
    for (let i = 0; i < Math.min(m, n); i++) res += word1[i] + word2[i]

    return res + (m <= n ? word2.slice(m) : word1.slice(n));
};