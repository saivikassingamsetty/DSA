/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) return false;

    let freqArray1 = new Array(26).fill(0);
    let freqArray2 = new Array(26).fill(0);
    for (let ch of word1) freqArray1[ch.charCodeAt(0) - 97]++;
    for (let ch of word2) freqArray2[ch.charCodeAt(0) - 97]++;

    for (let i = 0; i < 26; i++) {
        if ((freqArray1[i] && !freqArray2[i]) || (freqArray2[i] && !freqArray1[i])) {
            return false;
        }
    }

    freqArray1.sort((a, b) => a - b);
    freqArray2.sort((a, b) => a - b);
    for (let i = 0; i < 26; i++) {
        if (freqArray1[i] != freqArray2[i]) {
            return false;
        }
    }

    return true;
};