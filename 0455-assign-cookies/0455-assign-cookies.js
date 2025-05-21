/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let res = 0;
    g.sort((x, y) => x - y);
    s.sort((x, y) => x - y);
    let i = 0;
    let j = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            res += 1;
            i++;
        }
        j++;
    }
    return res;
};