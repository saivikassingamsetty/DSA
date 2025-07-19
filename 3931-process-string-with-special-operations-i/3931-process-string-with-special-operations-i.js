/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let res = '';

    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') res += ch;
        else if (ch == '*') res = res.slice(0, -1);
        else if (ch == '%') res = res.split('').reverse().join('');
        else res += res;
    }

    return res;
};