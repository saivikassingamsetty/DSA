/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 1) {
            res += String.fromCharCode((s[i - 1].charCodeAt(0) + +s[i] - 97) % 26 + 97);
        } else {
            res += s[i];
        }
    }

    return res;
};