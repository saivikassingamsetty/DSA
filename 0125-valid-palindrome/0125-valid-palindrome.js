/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i].match(/^[0-9a-z]$/i) && s[j].match(/^[0-9a-z]$/i)) {
            if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i++;
            j--;
        } else if (!s[i].match(/^[0-9a-z]$/i)) {
            i++;
        } else {
            j--;
        }
    }

    return true;
};