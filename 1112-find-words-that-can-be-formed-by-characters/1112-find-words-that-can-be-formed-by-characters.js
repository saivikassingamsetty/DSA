/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let freqArray = {};
    for (let ch of chars) freqArray[ch] = (freqArray[ch] || 0) + 1;
    let res = 0;

    for (let word of words) {
        let temp = Object.assign({}, freqArray);
        let isGood = true;
        for (ch of word) {
            if (!temp[ch]) {
                isGood = false;
            };
            temp[ch]--;
        }
        if (isGood) res += word.length;
    }

    return res;
};