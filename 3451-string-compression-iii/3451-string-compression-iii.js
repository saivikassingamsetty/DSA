/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let res = '';
    let i = 0;
    let j = 0;

    for (j=1; j<word.length; j++) {
        if (word[j] != word[j-1] || j-i == 9) {
            res += (j-i) + word[j-1];
            i = j;
        }
    }

    if (j > 0) res += (j-i) + word[j-1];

    return res;
};