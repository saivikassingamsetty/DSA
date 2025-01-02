/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (s.length < p.length) return [];

    let freqArray = new Array(26).fill(0);
    for (let ch of p) freqArray[ch.charCodeAt(0) - 97]++;

    let tempFreq = new Array(26).fill(0);
    let res = [];
    let j = 0;

    for (j = 0; j < s.length; j++) {
        if (j < p.length) {
            tempFreq[s[j].charCodeAt(0) - 97]++;
        } else {
            if (freqArray.join('') == tempFreq.join('')) res.push(j - p.length)
            tempFreq[s[j].charCodeAt(0) - 97]++;
            tempFreq[s[j - p.length].charCodeAt(0) - 97]--;
        }
    }

    if (freqArray.join('') == tempFreq.join('')) res.push(j - p.length)

    return res;
};