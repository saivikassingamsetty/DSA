/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let res = [];

    for (let ch of s) {
        if (ch == 'i') {
            res.reverse();
        } else {
            res.push(ch);
        }
    }

    return res.join('');
};