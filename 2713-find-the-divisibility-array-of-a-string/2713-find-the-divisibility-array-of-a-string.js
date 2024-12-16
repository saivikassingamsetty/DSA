/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
    let num = 0;
    let i = 0;
    res = [];

    while (i < word.length) {
        num = (num*10 + +word[i]) % m;
        res.push(num % m == 0 ? 1: 0);
        i++;
    }

    return res;
};