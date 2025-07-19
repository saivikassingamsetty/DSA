/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let res = [];

    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') res.push(ch);
        else if (ch == '*') res.pop();
        else if (ch == '%') res = res.reverse();
        else res.push(...res);
    }

    return res.join('');
};