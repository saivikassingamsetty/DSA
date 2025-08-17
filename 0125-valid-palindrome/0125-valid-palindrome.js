/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        while (i < j && !s[i].match(/^[0-9a-z]$/i)) i++;
        while (j > i && !s[j].match(/^[0-9a-z]$/i)) j--;

        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++;
        j--;
    }

    return true;
};