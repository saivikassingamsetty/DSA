/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    if (s.length < target.length) return 0;
    
    let freqArray = {};
    for (let ch of s) freqArray[ch] = (freqArray[ch] || 0) + 1;
    let count = 1e9;

    let targetFreq = {}

    for (let ch of target) targetFreq[ch] = (targetFreq[ch] || 0) + 1;

    for (let ch in targetFreq) {
        count = Math.min(count, Math.floor((freqArray[ch] || 0) / targetFreq[ch]));
    }

    return count;
};