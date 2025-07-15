/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = 0;
    let value = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let i = 0;

    while (i < s.length) {
        if (i + 1 < s.length && value[s[i]] < value[s[i + 1]]) {
            res += value[s[i + 1]] - value[s[i]];
            i += 2;
        } else {
            res += value[s[i]];
            i++;
        }
    }

    return res;
};