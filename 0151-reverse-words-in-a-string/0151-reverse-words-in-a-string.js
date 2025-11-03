/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // return s.trim().split(' ').filter(i => i.length > 0).reverse().join(' ');

    let start = 0;
    let end = 1;
    let res = '';

    for (end = 1; end < s.length; end++) {
        if (s[end] == ' ') {
            if (s[end - 1] == ' ') continue;
            res = ' ' + s.slice(start, end) + res;
            start = end;
        } else {
            if (s[end - 1] == ' ') {
                start = end;
            }
        }
    }

    res = s.slice(start, end) + res;
    return res.trim();
};