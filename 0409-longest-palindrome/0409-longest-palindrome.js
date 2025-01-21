/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let freqArray = {};

    for (let ch of s) {
        freqArray[ch] = (freqArray[ch] || 0) + 1;
    }

    oneLock = false;

    let res = 0;
    for (let val of Object.values(freqArray)) {
        if (val % 2 == 1 && !oneLock) {
            oneLock = true;
            res += val;
        } else {
            res += Math.floor(val / 2) * 2;
        }
    }

    return res;
};