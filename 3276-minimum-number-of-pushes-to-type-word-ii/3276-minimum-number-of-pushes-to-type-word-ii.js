/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let dict = new Array(26).fill(0);

    for (let ch of word) {
        dict[ch.charCodeAt(0) - 97]++;
    }

    dict.sort((a, b) => b - a);

    let charCount = 0;
    let clicks = 0;
    let extraClicks = 0;
    for (let i = 0; i < 26; i++) {
        if (dict[i]) {
            let extraClicks = Math.floor(i / 8);
            clicks += (1 + extraClicks) * dict[i];
            charCount++;
        }
    }

    return clicks;
};