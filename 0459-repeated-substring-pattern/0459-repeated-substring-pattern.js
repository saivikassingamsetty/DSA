/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let temp = '';
    let repeat = 0;

    for (let i = 1; i < s.length; i++) {
        if (s.length % i === 0) {
            temp = s.slice(0, i);
            repeat = Math.floor(s.length / i);
            if (temp.repeat(repeat) === s) {
                return true;
            }
        }
    }

    return false;
};