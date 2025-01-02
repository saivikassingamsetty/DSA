/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let freqArray = new Array(26).fill(0);

    for (let ch of s) freqArray[ch.charCodeAt(0)-97]++;

    for (let ch of t) {
        if (!freqArray[ch.charCodeAt(0)-97]) return false;
        freqArray[ch.charCodeAt(0)-97]--;
    }

    return freqArray.every(i => i == 0);
};