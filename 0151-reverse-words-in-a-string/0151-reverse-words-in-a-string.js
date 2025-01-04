/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(' ').filter(i => i.length > 0).reverse().join(' ');
};