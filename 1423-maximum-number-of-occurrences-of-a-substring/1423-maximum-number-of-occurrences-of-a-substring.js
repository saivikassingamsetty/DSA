/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
    let count = 0;
    let strings = {};

    for (let i = 0; i <= s.length - minSize; i++) {
        let sub = s.substring(i, i + minSize);
        let set = new Set(sub);

        if (set.size <= maxLetters) {
            strings[sub] = (strings[sub] || 0) + 1;
            if (strings[sub] > count) count = strings[sub];
        }
    }

    return count;
};