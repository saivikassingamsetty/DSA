/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let track = {};
    for (const char of s) track[char] = 1 + (track[char] || 0)
    for (const char of t) {
        if (!(char in track)) return char;
        track[char]--;
        if (track[char] == -1) return char;
    }
};