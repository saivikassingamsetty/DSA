/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let freqArray = {};
    for (let ch of magazine) freqArray[ch] = (freqArray[ch] || 0) + 1;

    for (let ch of ransomNote) {
        if (!freqArray[ch]) return false;
        freqArray[ch]--;
    }

    return true;
};