/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let freq = new Array(26).fill(0);
    for (let ch of s) freq[ch.charCodeAt(0) - 97]++;
    for (let i = 0; i < s.length; i++) if (freq[s[i].charCodeAt(0) - 97] == 1) return i;
    return -1;
};