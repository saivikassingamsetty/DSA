/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let dict = {};
    let freqArray = new Array(26).fill(0);
    let key = '';

    for (let str of strs) {
        freqArray = new Array(26).fill(0);
        for (ch of str) freqArray[ch.charCodeAt(0) - 97]++;
        key = freqArray.join(' ');
        if (!dict[key]) dict[key] = [];
        dict[key].push(str);
    }

    return Object.values(dict);
};