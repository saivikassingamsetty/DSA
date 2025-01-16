/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let res = [0, 1, 1, 2, 1];
    let resHelper = [2];

    while (res.length <= n) {
        a = [...resHelper, 2, ...resHelper.map(i => i + 1)]
        res.push(...a, 1);
        resHelper = a;
    }

    return res.slice(0, n + 1);
};