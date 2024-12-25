/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let freqArray = new Array(26).fill(0);
    for (let ch of s) freqArray[ch.charCodeAt(0) - 97]++;
    for (let ch of t) freqArray[ch.charCodeAt(0) - 97]--;

    return freqArray.reduce((a, i) => a + Math.abs(i), 0);
};