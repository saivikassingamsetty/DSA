/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;

    let vis = new Map();
    let res = 1;
    let maxI = 0;

    let i = 0;
    let j = 0;
    for (j = 0; j < s.length; j++) {
        if (vis.has(s[j]) && vis.get(s[j]) >= i) {
            res = Math.max(res, j - i);
            i = Math.max(maxI, vis.get(s[j])) + 1;
            maxI = Math.max(i, maxI);
        }
        vis.set(s[j], j);
    }

    res = Math.max(res, j - i);

    return res;
};