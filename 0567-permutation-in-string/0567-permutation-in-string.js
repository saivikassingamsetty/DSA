/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let freqArray = new Array(26).fill(0);
    for (let ch of s1) freqArray[ch.charCodeAt(0) - 97]++;

    let tempFreq = new Array(26).fill(0);

    for (let j = 0; j < s2.length; j++) {
        if (j < s1.length) {
            tempFreq[s2[j].charCodeAt(0) - 97]++;
        } else {
            if (freqArray.join('') == tempFreq.join('')) return true;
            tempFreq[s2[j].charCodeAt(0) - 97]++;
            tempFreq[s2[j - s1.length].charCodeAt(0) - 97]--;
        }
    }

    return freqArray.join('') == tempFreq.join('');
};