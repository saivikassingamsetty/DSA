/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let lcp = strs[0];
    for (let str of strs) {
        if (str.length < lcp.length) lcp = str;
    }

    let temp;

    for (let i = 0; i < strs.length; i++) {
        temp = '';
        for (let j = 0; j < Math.min(lcp.length, strs[i].length); j++) {
            if (strs[i][j] != lcp[j]) break
            temp += lcp[j];
        }
        lcp = temp;
        if (!lcp) return '';
    }

    return lcp;
};