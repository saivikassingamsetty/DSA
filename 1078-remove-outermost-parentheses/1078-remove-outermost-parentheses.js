/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let toBeRemoved = 0;
    let balance = 0;
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            if (balance == 0) toBeRemoved = i;
            balance++
        }
        else {
            balance--;
            if (balance == 0) {
                res.push(s.slice(toBeRemoved + 1, i));
            }
        }
    }

    return res.join('');
};