/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let i = 0;
    let res = 0;

    while(i<s.length) {
        res += (s[i] == s[i+1] ? 0: 1);
        i+=2;
    }

    return res;
};