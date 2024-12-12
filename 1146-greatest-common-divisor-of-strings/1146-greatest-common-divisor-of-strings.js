/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let n = str1.length;
    let m = str2.length;
    res = '';

    for (let i=1; i<=Math.min(m,n); i++) {
        if (m%i == 0 && n%i == 0) {
            if (str1.slice(0,i).repeat(n/i) == str1 && str2.slice(0,i).repeat(m/i) == str2 && str1.slice(0,i) == str2.slice(0,i)) {
                res = str1.slice(0,i);
            }
        }
    }

    return res;
};