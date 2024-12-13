/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let res = [];

    for (let ch of s) {
        if (ch == '*') {
            if (res.length) res.pop();
        } else {
            res.push(ch);
        }
    }

    return res.join('');
};