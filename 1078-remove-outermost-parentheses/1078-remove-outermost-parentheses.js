/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let balance = 0;
    let res = '';

    for (let ch of s) {
        if (ch == '(') {
            if (balance) res += ch;
            balance++
        }
        else {
            balance--
            if (balance) res += ch;
        }
    }

    return res;
};