/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    let pairs = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].length >= words[i].length) {
                if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) pairs++;
            }
        }
    }

    return pairs;
};