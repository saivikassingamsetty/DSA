/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let t = s.trim().split(' ');
    return t.length ? t[t.length - 1].length : 0;
};